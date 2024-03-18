import express, {Express, Request, Response} from 'express'
import bodyParser from 'body-parser'
import {docRouter} from './routes/doctor'
import {patRouter} from './routes/patient'
import {authRouter} from './routes/auth'
import cors from "cors"


const app:Express=express();
const PORT=3000;
app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/doctor',docRouter);
app.use('/api/v1/patient',patRouter);
app.get('/',(req:Request,res:Response) => {
    res.send('Hello World');
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
