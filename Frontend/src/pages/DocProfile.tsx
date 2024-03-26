import { Doc_Update } from "../components/Doc_Update";
import { Sidebar,SidebarItem } from "../components/Sidebar";
import { useState,useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Clock4,  HomeIcon,  Info, LayoutDashboard,  Settings,  UserCircle } from 'lucide-react';
import { doctorFullInfo, doctorFullInfotype } from "../InputTypes/info";

export const Doc_Profile=()=>{
    const [loading,setLoading]=useState(true);
    const [docDetails,setDocDetails]=useState<doctorFullInfotype>({
        email:"",
        name:"",
        experience: "",
        specialization: "",
        mobile: "",
        age: 0,
        gender: "",
        latitude: 0,
        longitude: 0,
        clinic: "",
        fee: 0,
        clinic_days: [],
        rating:0
    });
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/doctor/details/get`,{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        }).then(res=>{
          setDocDetails(c=>({
            ...c,
            email:res.data.email,
            name:res.data.name,
            experience: res.data.experience,
            specialization: res.data.specialization,
            mobile: res.data.mobile,
            age: res.data.age,
            gender: res.data.gender,
            latitude: res.data.latitude,
            longitude: res.data.longitude,
            clinic: res.data.clinic,
            fee: res.data.fee,
            clinic_days: res.data.clinic_days,
          }));
          setLoading(false);
        })
      },[])
      if(loading){
        return <div>Loading...</div>
      }
    return <div className="flex justify-center align-middle">
        <Sidebar name={docDetails.name} email={docDetails.email}>
            <hr className='my-2'/>
            <SidebarItem icon = {<HomeIcon size={20} />} text ='Home'  path="/doc/dashboard"/>
            <SidebarItem icon = {<UserCircle size={20} />} text ='Profile' active path="/doc/profile"/>
            <SidebarItem icon = {<LayoutDashboard size={20} />} text ='Dashboard' path="/#"/> 
            <SidebarItem icon = {<Clock4 size={20} />} text ='Appointments' path="/#" /> 
            <hr className='my-3'/>
            <SidebarItem icon = {<Settings size={20} />} text ='Settings' path="#"/>
            <SidebarItem icon = {<Info size={20} />} text ='About' path="#"/>
        </Sidebar> 
        <Doc_Update email={docDetails.email}
                    name={docDetails.name}
                    experience={docDetails.experience}
                    specialization={docDetails.specialization}
                    mobile={docDetails.mobile}
                    age={docDetails.age}
                    gender={docDetails.gender}
                    latitude={docDetails.latitude}
                    longitude={docDetails.longitude}
                    clinic={docDetails.clinic}
                    fee={docDetails.fee}
                    clinic_days={docDetails.clinic_days}
                    rating={docDetails.rating}
                    />
    </div>
}