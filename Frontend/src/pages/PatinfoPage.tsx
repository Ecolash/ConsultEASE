import {Pat_Info} from "../components/Pat_Info";
import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

type basicInfo={
    email:string,
    name:string,
}
export const Patinfo=()=>{
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
        <Pat_Info email={patIntro.email} name={patIntro.name} />
    )
}