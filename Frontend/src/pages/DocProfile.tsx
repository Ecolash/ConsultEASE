import { Doc_Update } from "../components/Doc_Update";
import { Sidebar,SidebarItem } from "../components/Sidebar";
import { useState,useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { CalendarClock,PhoneIncoming, Clock4,  HomeIcon,  Info, LayoutDashboard,    UserCircle } from 'lucide-react';
import { doctorFullInfotype } from "../InputTypes/info";

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
        online_fee:0,
        clinic_days: [],
        rating:0,
        password:""
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
            online_fee:res.data.online_fee,
            clinic_days: res.data.clinic_days,
            password: res.data.password
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
            <hr className='my-3' />
            <SidebarItem icon = {<LayoutDashboard size={20} />} text ='View Feedback' path="/doc/feedbacks"/> 
            <SidebarItem icon = {<PhoneIncoming size={20} />} text ='Online Appointments'  path="/doc/online/appointments" />
            <SidebarItem icon = {<Clock4 size={20} />} text ='Offline Appointments'  path="/doc/offline/appointments" /> 
            <hr className='my-3'/>
            <SidebarItem icon = {<CalendarClock size={20} />} text ='Pending Offline' path="/doc/pending/offline"/>
            <SidebarItem icon = {<Info size={20} />} text ='Pending Online' path="/doc/pending/online"/>
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
                    online_fee={docDetails.online_fee}
                    clinic_days={docDetails.clinic_days}
                    rating={docDetails.rating}
                    password={docDetails.password}
                    />
    </div>
}