import express, {Express, IRouter, Request, Response,NextFunction} from 'express'
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

export const bookRouter:IRouter=express.Router();
const prisma=new PrismaClient();

bookRouter.use('/*',async(req:Request,res:Response,next:NextFunction)=>{
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
        res.set({'patientId':payload.id});
        next();
    }catch(e){
        res.status(403);
        return res.json({
            message:"Not logged in"
        })
    }
});

bookRouter.post('/offline/:id',async (req:Request, res:Response) => {
    const patientId=res.get('patientId');
    const doctorId=req.params.id;
    const body=req.body;
    const datetime=new Date();
    console.log(datetime);
    if(!patientId || !doctorId){
        res.status(404);
        return res.json({
            message:"Can't fetch doctor details"
        })
    }
    try{
        await prisma.offline_Appointment.create({
            data:{
                patientId:patientId,
                doctorId:doctorId,
                Symptoms:body.symptoms,
                appointment_date:body.appointment_date
            }
        });
        return res.json({message:"Appointment Booked. Waiting for confirmation..."});
    }
    catch(e){
        console.log(e);
        res.status(403);
        return res.json({error:"Database Issue"});
    }
});

bookRouter.get('/offline/appointments',async (req:Request, res:Response)=>{
    const patientId = res.get('patientId');
    try{
        const appointments=await prisma.offline_Appointment.findMany({
            where:{patientId:patientId},
        });
        if(!appointments){
            return res.json({
                message:"No appointments"
            });
        }
        return res.json(appointments);
    }catch(e){
        console.log(e);
        res.status(403);
        return res.json({error:"Database Issue"});
    }
});

bookRouter.post('/offline/appointments/:id',async(req:Request,res:Response)=>{
    const appointmentId=req.params.id;
    const rating=req.body.rating;
    try{
        const appointment=await prisma.offline_Appointment.update({
            where:{
                id:appointmentId,
                completed:true
            },
            data:{
                feedback:rating
            }
        });
        const doctor=await prisma.doctor.findFirst({
            where:{id:appointment.doctorId}
        });
        if(!doctor){
            res.status(404);
            return res.json({
                message:"Can't fetch doctor details"
            });
        }
        const numRatings=doctor.numRatings;
        const prev=doctor.rating;
        const now=(prev*numRatings+rating)/(numRatings+1);
        await prisma.doctor.update({
            where:{id:doctor.id},
            data:{
                rating:now,
                numRatings:numRatings+1
            }
        })
    }catch(e){
        console.log(e);
        res.status(403);
        return res.json({error:"Database Issue"});
    }

})
