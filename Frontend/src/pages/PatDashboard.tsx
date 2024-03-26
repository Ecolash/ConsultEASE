import { Sidebar } from "../components/Sidebar"
import { SidebarItem } from "../components/Sidebar"
import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { DocTypes } from "../components/DocTypes";
import { Clock4,  HomeIcon,  Info, LayoutDashboard,  Settings,  UserCircle } from 'lucide-react';

type basicInfo={
    email:string,
    name:string,
}
export const PatDash=()=>{
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
            <SidebarItem icon = {<HomeIcon size={20} />} text ='Home' active path="/pat/dashboard"/>
            <SidebarItem icon = {<UserCircle size={20} />} text ='Profile' path="/#"/>
            <SidebarItem icon = {<LayoutDashboard size={20} />} text ='Dashboard' path="/#"/> 
            <SidebarItem icon = {<Clock4 size={20} />} text ='Appointments' path="/pat/appointments"/> 
            <hr className='my-3'/>
            <SidebarItem icon = {<Settings size={20} />} text ='Settings' path="/#"/>
            <SidebarItem icon = {<Info size={20} />} text ='About' path="/#"/>
        </Sidebar>
        <DocTypes />  
    </div>
}