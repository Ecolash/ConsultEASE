import { Sidebar } from "../components/Sidebar"
import { SidebarItem } from "../components/Sidebar"
import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Clock4,  HomeIcon,  Info, LayoutDashboard,  Settings,  UserCircle } from 'lucide-react';
import { FeedbackList } from "../components/FeedbackList";
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
            <SidebarItem icon = {<UserCircle size={20} />} text ='Profile'  path="/doc/profile"/>
            <SidebarItem icon = {<LayoutDashboard size={20} />} text ='View Feedback' active path="/doc/feedbacks"/> 
            <SidebarItem icon = {<Clock4 size={20} />} text ='Appointments' path="/doc/appointments" /> 
            <hr className='my-3'/>
            <SidebarItem icon = {<Settings size={20} />} text ='Settings' path="#"/>
            <SidebarItem icon = {<Info size={20} />} text ='About' path="#"/>
        </Sidebar>
        <FeedbackPreview appointmentid={id as string} />
    </div>
}