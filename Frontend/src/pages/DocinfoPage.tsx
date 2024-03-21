import { Doc_Info } from "../components/Doc_Info";
import { useState,useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

type basicInfo={
    email:string,
    name:string,
}
export const Docinfo=()=>{
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
    return (
        <Doc_Info email={docIntro.email} name={docIntro.name} />
    )
}