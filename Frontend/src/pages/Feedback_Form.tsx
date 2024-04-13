import { Sidebar } from "../components/Sidebar"
import { SidebarItem } from "../components/Sidebar"
import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { CalendarClock,PhoneIncoming, Clock4,  HomeIcon,  Info, LayoutDashboard,    UserCircle } from 'lucide-react';
import { useParams } from "react-router-dom";
import { FeedbackPreview } from "../components/Feedback-preview";
type basicInfo={
    email:string,
    name:string,
}
export const Doc_FeedbackForm=()=>{
    const {id}=useParams();
    const [loading,setLoading]=useState(true);
    const [docIntro,setDocIntro]=useState<basicInfo>({
        email:"",
        name:""
    });
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/doctor/details/get`,{
            headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>{
            setDocIntro(c=>({
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
    return <div className="flex justify-center align-middle">
        <Sidebar name={docIntro.name} email={docIntro.email}>
            <hr className='my-2'/>
            <SidebarItem icon = {<HomeIcon size={20} />} text ='Home'  path="/doc/dashboard"/>
            <SidebarItem icon = {<UserCircle size={20} />} text ='Profile' path="/doc/profile"/>
            <hr className='my-3' />
            <SidebarItem icon = {<LayoutDashboard size={20} />} text ='View Feedback' active path="/doc/feedbacks"/> 
            <SidebarItem icon = {<PhoneIncoming size={20} />} text ='Online Appointments'  path="/doc/online/appointments" />
            <SidebarItem icon = {<Clock4 size={20} />} text ='Offline Appointments'  path="/doc/offline/appointments" /> 
            <hr className='my-3'/>
            <SidebarItem icon = {<CalendarClock size={20} />} text ='Pending Offline' path="/doc/pending/offline"/>
            <SidebarItem icon = {<Info size={20} />} text ='Pending Online' path="/doc/pending/online"/>
        </Sidebar>
        <FeedbackPreview appointmentid={id as string} />
    </div>
}