import axios from "axios" 
import React from "react"
import { useState,useEffect } from "react"
import { BACKEND_URL } from "../config"
import { useParams } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"
import { SidebarItem } from "../components/Sidebar"
import { DocCard } from "../components/DocCard"
import { Booking } from "../components/Booking"
import { Clock4,  HomeIcon,  Info,  PhoneIncoming,  Settings,  UserCircle } from 'lucide-react';

type docsplType={
    id:string,
    name:string,
    latitude:number,
    longitude:number,
    specialization:string,
    experience:string,
    clinic:string,
    rating:number,
    fee:number,
    online_fee:number,
    clinic_days:string[],
}
type basicInfo={
    email:string,
    name:string,
}

interface SpecializationMapping {
    [abbreviation: string]: string;
  }
  
  const specializationMapping: SpecializationMapping = {
    NL: "Neurologist",
    PL: "Pulmonologist",
    CL: "Cardiologist",
    DL: "Dermatologist",
    SG: "Surgeon",
    OL: "Oncologist",
    GP: "General Physician",
    ENT: "ENT Specialist",
    GY: "Gynecologist",
    NPL: "Nephrologist",
    DE: "Dentist",
    OP: "Ophthalmologist",
    OR: "Orthopedist",
    PSY: "Psychiatrist",
    GEL: "Gastroenterologist",
    DC: "Diabetes Consultant"
  };
  
function convert(doctor: docsplType): void {
    const fullSpecialization = specializationMapping[doctor.specialization];
    if (fullSpecialization) {
      doctor.specialization = fullSpecialization;
    }
}
export const DocSpl=()=>{
    const {type}=useParams();
    console.log("Hii");
    console.log(type);
    const [loading,setLoading]=useState(true);
    const [doctors,setDoctors]=useState<docsplType[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/patient/doctors/${type}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }).then(res=>{
            setDoctors(res.data);
            setLoading(false);
        })
    },[]);
    const [patIntro,setPatIntro]=useState<basicInfo>({
        email:"",
        name:""
    });
    doctors.forEach(doctor=>{
        convert(doctor)
    })
    async function fetchCity(doctor:docsplType):Promise<string>{
        try {
            const response = await axios.get(`https://api-bdc.net/data/reverse-geocode?latitude=${doctor.latitude}&longitude=${doctor.longitude}&localityLanguage=en&key=bdc_2ea2200a8bec4bf69c4d4534c535f042`);
            const city = response.data.city;
            return city;
        } catch (error) {
            // Handle errors here if needed
            console.error("Error fetching city:", error);
            return ""; // Or any default value indicating failure
        }
    }
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
    return <div className="flex">
        <Sidebar name={patIntro.name} email={patIntro.email}>
            <hr className='my-2'/>
            <SidebarItem icon = {<HomeIcon size={20} />} text ='Home' active path="/pat/dashboard"/>
            <SidebarItem icon = {<UserCircle size={20} />} text ='Profile' path="/pat/profile"/>
            <SidebarItem icon = {<PhoneIncoming size={20} />} text ='Online Appointments' path="/pat/online_appointments" /> 
            <SidebarItem icon = {<Clock4 size={20} />} text ='Offline Appointments' path="/pat/appointments" /> 
            <hr className='my-3'/>
            <SidebarItem icon = {<Settings size={20} />} text ='Settings' path="/#" />
            <SidebarItem icon = {<Info size={20} />} text ='About' path="/#" />
        </Sidebar>
        <div className='bg-indigo-50 h-screen items-center flex flex-col flex-grow'>
            <div className='overflow-y-scroll h-screen w-[500px] rounded-2xl flex flex-col no-scrollbar items-center my-6 border-black bg-indigo-100'>
                        <div >
                            {doctors.map(doctor=>
                                
                                <DocCard key={doctor.id}
                                    name={doctor.name}
                                    id={doctor.id}
                                    specialization={doctor.specialization}
                                    yoe={doctor.experience}
                                    clinic={doctor.clinic}
                                    fee={doctor.fee}
                                    online_fee={doctor.online_fee}
                                    clinic_days={doctor.clinic_days}
                                    rating={doctor.rating}
                                    city={fetchCity(doctor)}
                                     />
                                    
                            )}
                        </div>
            </div>
        </div>
        
    </div>
 }