import { Sidebar } from "../components/Sidebar"
import { SidebarItem } from "../components/Sidebar"
import { Doc_Appointment } from "../components/Doc_Appointments";
import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Clock4,  HomeIcon,  Info, LayoutDashboard,  Settings,  UserCircle } from 'lucide-react';
import { Doc_All_Appointment } from "../components/Doc_All_Appointments";


type basicInfo={
    email:string,
    name:string,
}
export const DocAppointments=()=>{
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
            <SidebarItem icon = {<LayoutDashboard size={20} />} text ='View Feedback' path="/doc/feedbacks"/> 
            <SidebarItem icon = {<Clock4 size={20} />} text ='Appointments' active path="/doc/appointments" /> 
            <hr className='my-3'/>
            <SidebarItem icon = {<Settings size={20} />} text ='Settings' path="#"/>
            <SidebarItem icon = {<Info size={20} />} text ='About' path="#"/>
        </Sidebar>    
        <Doc_All_Appointment />
    </div>
}