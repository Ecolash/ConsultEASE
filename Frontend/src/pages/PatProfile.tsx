import { Doc_Update } from "../components/Doc_Update";
import { Sidebar,SidebarItem } from "../components/Sidebar";
import { useState,useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Clock4,  HomeIcon,  Info, PhoneIncoming,  Settings,  UserCircle } from 'lucide-react';
import { patientFullInfotype } from "../InputTypes/info";
import { Pat_Update } from "../components/Pat_Update";

export const Pat_Profile=()=>{
    const [loading,setLoading]=useState(true);
    const [patDetails,setPatDetails]=useState<patientFullInfotype>({
        email:"",
        name:"",
        mobile: "",
        age: 0,
        gender: "",
        latitude: 0,
        longitude: 0,
        password:""
    });
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/patient/details/get`,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        }).then(res=>{
          setPatDetails(c=>({
            ...c,
            email:res.data.email,
            name:res.data.name,
            mobile: res.data.mobile,
            age: res.data.age,
            gender: res.data.gender,
            latitude: res.data.latitude,
            longitude: res.data.longitude,
            password: res.data.password
          }));
          setLoading(false);
        })
    },[]);
    if(loading){
        return <div>Loading...</div>
    }
    return <div className="flex justify-center align-middle">
        <Sidebar name={patDetails.name} email={patDetails.email}>
            <hr className='my-2'/>
            <SidebarItem icon = {<HomeIcon size={20} />} text ='Home' path="/pat/dashboard"/>
            <SidebarItem icon = {<UserCircle size={20} />} text ='Profile' active path="/pat/profile"/>
            <SidebarItem icon = {<PhoneIncoming size={20} />} text ='Online Appointments' path="/pat/online_appointments"/> 
            <SidebarItem icon = {<Clock4 size={20} />} text ='Offline Appointments' path="/pat/appointments"/> 
            <hr className='my-3'/>
            <SidebarItem icon = {<Settings size={20} />} text ='Settings' path="/#"/>
            <SidebarItem icon = {<Info size={20} />} text ='About' path="/#"/>
        </Sidebar>
        <Pat_Update name={patDetails.name}
                    email={patDetails.email}
                    mobile={patDetails.mobile}
                    age={patDetails.age}
                    gender={patDetails.gender}
                    latitude={patDetails.latitude}
                    longitude={patDetails.longitude}
                    password={patDetails.password}/>
    </div>
}