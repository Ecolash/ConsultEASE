import { Sidebar } from "../components/Sidebar";
import { SidebarItem } from "../components/Sidebar";
import { Pat_Appointment } from "../components/Pat_Appointments";
import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Clock4,  HomeIcon,    PhoneIncoming,    UserCircle } from 'lucide-react';

type basicInfo={
    email:string,
    name:string,
}
export const PatAppointments=()=>{
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
    return (
        <div className="flex justify-center align-middle">
            <Sidebar name={patIntro.name} email={patIntro.email}>
                <hr className='my-2'/>
                <SidebarItem icon = {<HomeIcon size={20} />} text ='Home'  path="/pat/dashboard"/>
                <SidebarItem icon = {<UserCircle size={20} />} text ='Profile' path="/pat/profile"/>
                <SidebarItem icon = {<PhoneIncoming size={20} />} text ='Online Appointments' path="/pat/online_appointments"/> 
                <SidebarItem icon = {<Clock4 size={20} />} text ='Offline Appointments' active path="/pat/appointments"/> 
                
            </Sidebar>    
            <Pat_Appointment />
        </div>
    )
}