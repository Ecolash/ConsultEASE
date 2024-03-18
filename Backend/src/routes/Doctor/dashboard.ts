import express, {Express, IRouter, Request, Response,NextFunction} from 'express'
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

export const dashRouter:IRouter = express.Router();
const prisma = new PrismaClient();

dashRouter.use('/*',async(req:Request,res:Response,next:NextFunction)=>{
    const webtoken=req.header('Authorization');
    if(!webtoken){
        res.status(401);
        return res.json({error:"Unauthorized"});
    }
    const token=webtoken.split(' ')[1];
    try{
        const jwtsecret=process.env.JWT_PASSWORD || 'secret';
        const payload=jwt.verify(token,jwtsecret);
        if(!payload || typeof payload==='string'){
            res.status(401);
            return res.json({error:"Unauthorized"});
        }
        //console.log(payload.id);
        res.set({'doctorId':payload.id});
        next();
    }catch(e){
        res.status(403);
        return res.json({
            message:"Not logged in"
        })
    }
});

dashRouter.get('/', async (req:Request, res:Response)=>{
    const doctorId=res.get('doctorId');
    try{
        const pending=await prisma.offline_Appointment.findMany({
            where:{
                doctorId:doctorId,
                completed:false
            }
        })
        return res.json(pending);
    }catch(e){
        console.log(e);
        res.status(403);
        return res.json({error:"Database Issue"});
    }
});

dashRouter.post('/:id/confirm',async (req:Request,res:Response)=>{
    const appointmentId=req.params.id;
    const time=req.body.time;
    try{
        await prisma.offline_Appointment.update({
            where:{ 
                id:appointmentId
            },
            data:{
                appointment_time:time,
                confirmed:true
            }
        });
        return res.json({message:"Appointment Confirmed"});
    }catch(e){
        console.log(e);
        res.status(403);
        return res.json({error:"Database Issue"});
    }
});


dashRouter.post('/:id/reject',async (req:Request,res:Response)=>{
    const appointmentId=req.params.id;
    try{
        await prisma.offline_Appointment.update({
            where:{
                id:appointmentId
            },
            data:{
                rejected:true
            }
        })
        return res.json({message:"Appointment Rejected"});
    }catch(e){
        console.log(e);
        res.status(403);
        return res.json({error:"Database Issue"});
    }
});

dashRouter.post('/:id/completed',async(req:Request,res:Response)=>{
    const appointmentId=req.params.id;
    const datetimenow=new Date();
    const datenow=datetimenow.toISOString().split('T')[0];
    try{
        const appointment = await prisma.offline_Appointment.findFirst({
            where:{
                id:appointmentId
            }
        });
        if(!appointment){
            res.status(404);
            return res.json({
                message:"Appointment not found"
            })
        }
        const appdate=appointment.appointment_date.toISOString().split('T')[0];
        if(!appdate){
            res.status(404);
            res.json({message:"Can't access appointment date"});
        }
        if(datenow>appdate){
            await prisma.offline_Appointment.update({
                where:{
                    id:appointmentId
                },
                data:{
                    completed:true
                }
            })
            return res.json({message:"Appointment Completed"});
        }else{
            return res.json({message:"Appointment not yet completed"});
        }
    }catch(e){
        console.log(e);
        res.status(403);
        return res.json({error:"Database Issue"});
    }
})

