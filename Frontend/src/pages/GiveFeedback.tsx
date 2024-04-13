import { Sidebar } from "../components/Sidebar"
import { SidebarItem } from "../components/Sidebar"
import { Clock4,  HomeIcon,  Info, PhoneIncoming,  Settings,  UserCircle } from 'lucide-react';
import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useParams } from "react-router-dom";
import { FeedbackForm } from "../components/Feedback";


type basicInfo={
    email:string,
    name:string,
}

export const Give_Feedback=()=>{
    const {id}=useParams();
    const [loading,setLoading]=useState(true);
    const [patIntro,setPatIntro]=useState<basicInfo>({
        email:"",
        name:""
    });
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/patient/details/get`,{
            headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>{
            setPatIntro(c=>({
            ...c,
            email:res.data.email,
            name:res.data.name
            }));
            setLoading(false);
        })
    },[])
    if(loading){
        return <div>Loading...</div>
    }
    return <div className="flex flex-center align start">
        <Sidebar name={patIntro.name} email={patIntro.email}>
            <hr className='my-2'/>
            <SidebarItem icon = {<HomeIcon size={20} />} text ='Home'  path="/pat/dashboard"/>
            <SidebarItem icon = {<UserCircle size={20} />} text ='Profile' path="/#"/>
            <SidebarItem icon = {<PhoneIncoming size={20} />} text ='Online Appointments' path="/pat/online_appointments"/> 
            <SidebarItem icon = {<Clock4 size={20} />} text ='Offline Appointments' active path="/pat/appointments"/> 
            <hr className='my-3'/>
            <SidebarItem icon = {<Settings size={20} />} text ='Settings' path="/#"/>
            <SidebarItem icon = {<Info size={20} />} text ='About' path="/#"/>
        </Sidebar>
        <FeedbackForm appointmentid={id as string} />  
    </div>
}