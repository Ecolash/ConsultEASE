import React from 'react'
import { doctorFullInfotype } from '../InputTypes/info';
import { convert } from './Pat_Appointments';
import { useState,useEffect } from 'react';
import axios from 'axios';
type daysAvailable ={
  monday:boolean,
  tuesday:boolean,
  wednesday:boolean,
  thursday:boolean,
  friday:boolean,
  saturday:boolean,
  sunday:boolean
}

export const Doc_Update:React.FC<doctorFullInfotype>=(props)=>{
  const [days,setDays]=useState<daysAvailable>({
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    saturday:false,
    sunday:false
  });
  const [address,setAddress] =useState("");
  function handleMonday(){
    setDays(c=>({
      ...c,
      monday:!c.monday
    }));
  }
  function handleTuesday(){
    setDays(c=>({
      ...c,
      tuesday:!c.tuesday
    }));
  }
  function handleWedesday(){
    setDays(c=>({
      ...c,
      wednesday:!c.wednesday
    }));
  }
  function handleThursday(){
    setDays(c=>({
      ...c,
      thursday:!c.thursday
    }));
  }
  function handleFriday(){
    setDays(c=>({
      ...c,
      friday:!c.friday
    }));
  }
  function handleSaturday(){
    setDays(c=>({
      ...c,
      saturday:!c.saturday
    }));
  }
  function handleSunday(){
    setDays(c=>({
      ...c,
      sunday:!c.sunday
    }));
  }
  useEffect(()=>{
    async function fetchAddress(){
      try{
        const response=await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${props.latitude}%2C${props.longitude}&key=8efc2e425d0c40358eb66c6e347d4789`);
        const {city,state,postcode,country}=response.data.results[0].components;
        setAddress(`${city} ${state} ${postcode} ${country}`);

      }catch(e){
        console.error("Error fetching address",e);
      }
    }
    if(props.clinic_days.includes("mon")){
      handleMonday();
    }
    if(props.clinic_days.includes("tue")){
      handleTuesday();
    }
    if(props.clinic_days.includes("wed")){
      handleWedesday();
    }
    if(props.clinic_days.includes("thu")){
      handleThursday();
    }
    if(props.clinic_days.includes("fri")){
      handleFriday();
    }
    if(props.clinic_days.includes("sat")){
      handleSaturday();
    }
    if(props.clinic_days.includes("sun")){
      handleSunday();
    }
    fetchAddress();
  },[]);
  return (
    <div className="w-full h-screen ">
      <div className="w-full h-screen">
        <div className="relative h-screen overflow-hidden bg-indigo-100">
          <div className="absolute w-[380px] h-full top-0 left-0 bg-indigo-800 items-center">
            <img
              className="absolute w-[275px] h-[275px] top-[200px] left-[50px] object-cover rounded-full align-middle"
              alt="Profile"
              src="/profile.png"
            />
            <button className="w-[129px] h-[32px] px-[16px] py-[8px] absolute top-[500px] left-[117px] bg-indigo-500 flex items-center gap-[16px] rounded-[10px] border-none hover:scale-105 hover:bg-indigo-500]">
              <div className="relative w-[380px] mt-[-3.00px] mb-[-1.00px] text-white text-[14px] text-center whitespace-nowrap font-sans font-bold">
                Change Photo
              </div>
            </button>
            <button className="w-[129px] h-[32px] px-[16px] py-[8px] absolute top-[550px] left-[117px] bg-red-500 flex items-center gap-[16px] rounded-[10px] border-none hover:scale-105 hover:bg-indigo-500]">
              <div className="relative w-[380px] mt-[-3.00px] mb-[-1.00px] text-white text-[14px] text-center whitespace-nowrap font-sans font-bold">
                Remove Photo
              </div>
            </button>
            <div className="absolute top-[22px] w-full [font-family:'Inter-Bold',Helvetica] font-bold text-[#eeeeee] text-[20px] text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
              Edit your Profile
            </div>
            <div className="absolute top-[165px] w-full [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[15px] text-center tracking-[0] leading-[21.0px] whitespace-nowrap">
              {props.email}
            </div>
            <div className="absolute top-[135px] w-full [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[15px] text-center tracking-[0] leading-[21.0px] whitespace-nowrap">
              {props.name}
            </div>
          </div>
          <div className="absolute w-[2200px] h-screen left-[363px] mx-44 bg-indigo-100">
            <input className="w-[293px] h-[30px] px-[16px] py-[8px] absolute top-[116px] left-[25px] bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] font-sans font-semibold text-violet-500"  placeholder={props.mobile} />
            <button className="w-[172px] h-[32px] px-[16px] py-[8px] absolute top-[550px] left-[218px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] hover:scale-105">
              <div className="relative w-[141px]  mt-[1.00px] mr-[1px] text-white text-[16px] text-center leading-[22.4px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                Confirm &amp; Save
              </div>
            </button>
            <input className="w-[288px] h-[30px] px-[16px] py-[8px] absolute top-[204px] left-[25px] bg-white flex items-center gap-[16px] font-sans font-semibold text-violet-500 rounded-[10px] border border-solid border-[#e0e0e0]" placeholder={props.clinic}/> 
            <div className="w-[532px] h-[35px] top-[354px] left-[25px] absolute rounded-[10px]">
              <div  className="w-[532px] h-[35px] px-[16px] py-[3px] absolute top-0 left-0 bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[122px] text-[#8f99f8] text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  Consulation Fee
                </div>
                <input className="flex w-[132px] items-center gap-[16px] px-[16px] py-[2px] relative self-stretch text-center bg-white font-sans font-semibold text-violet-500 rounded-[10px] border border-solid border-[#e0e0e0]" placeholder={props.fee.toString()}/>                
                <input className="flex w-[132px] items-center gap-[16px] px-[16px] py-[2px] relative self-stretch text-center bg-white font-sans font-semibold text-violet-500 rounded-[10px] border border-solid border-[#e0e0e0]" placeholder="Online"/>  
                </div>            
              <div className="absolute w-[77px] top-[5px] left-[445px] text-[#8f99f8] text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                Rupees(₹)
              </div>
            </div>
            <div className="w-[532px] h-[39px] px-[16px] py-[8px] absolute top-[248px] left-[25px] bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
              <div className="relative w-[83px] h-[21px] text-[#8f99f8] text-[14px] leading-[19.6px] whitespace-nowrap [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                Availability
              </div>
              <button className={`w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] ${days.sunday? 'bg-green-400':'bg-indigo-400'} flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]`} onClick={handleSunday}>
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  SUN
                </div>
              </button>
              <button className={`w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] ${days.monday? 'bg-green-400':'bg-indigo-400'} flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]`} onClick={handleMonday} >
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  MON
                </div>
              </button>
              <button className={`w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] ${days.tuesday? 'bg-green-400':'bg-indigo-400'} flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]`} onClick={handleTuesday}>
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  TUE
                </div>
              </button>
              <button className={`w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] ${days.wednesday? 'bg-green-400':'bg-indigo-400'} flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]`} onClick={handleWedesday}>
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  WED
                </div>
              </button>
              <button className={`w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] ${days.thursday? 'bg-green-400':'bg-indigo-400'} flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]`} onClick={handleThursday}>
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  THU
                </div>
              </button>
              <button className={`w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] ${days.friday? 'bg-green-400':'bg-indigo-400'} flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]`} onClick={handleFriday}>
                <div className="relative w-[40px] mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  FRI
                </div>
              </button>
              <button className={`w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] mr-[-10.00px] ${days.saturday? 'bg-green-400':'bg-indigo-400'} flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]`} onClick={handleSaturday}>
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  SAT
                </div>
              </button>
            </div>
            <div className="w-[533px] h-[39px] top-[301px] left-[24px] absolute rounded-[10px]">
              <div className="w-[533px] h-[39px] px-[16px] py-[8px] absolute top-0 left-0 bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[450px] h-[21px] text-[#8f99f8] text-[14px] leading-[19.6px] whitespace-nowrap [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  Address: {address}
                </div>
              </div>
              <img
                className="absolute w-[32px] h-[34px] top-[3px] left-[488px] object-cover hover:scale-110"
                alt="Location"
                src="/location.png"
              />
            </div>
            <input className="w-[224px] h-[30px] px-[16px] py-[8px] absolute top-[204px] left-[333px] bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] font-sans font-semibold text-violet-500" placeholder={props.experience}/>
            <input className="w-[224px] h-[30px] px-[16px] py-[8px] absolute top-[116px] left-[333px] bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] font-sans font-semibold text-violet-500" placeholder={props.age.toString()} pattern="[0-9]{1-3}"/>
            <div className="flex w-[293px] h-[30px] items-center gap-[16px] px-[4px] py-[8px] absolute top-[160px] left-[25px] bg-white rounded-[10px] border border-solid border-[#e0e0e0]">
              <form className="relative text-[#8f99f8] text-[14px] leading-[2px] font-sans font-semibold">
                <select id="specialization" className=" flex h-full w-[290px] items-center gap-[16px] px-[12px] py-[2px] border-none text-violet-700 text-sm font-sans font-semibold rounded-lg p-1">
                <option selected>{convert(props.specialization)}</option>
                <option value="NL">Neurologist</option>
                <option value="PL">Pulmonologist</option>
                <option value="CL">Cardiologist</option>
                <option value="DL">Dermatologist</option>
                <option value="SG">Surgeon</option>
                <option value="OL">Oncologist</option>
                <option value="GP">General Physician</option>
                <option value="ENT">ENT Specialist</option>
                <option value="GY">Gynecologist</option>
                <option value="NPL">Nephrologist</option>
                <option value="DE">Dentist</option>
                <option value="OP">Ophthalmologist</option>
                <option value="OR">Orthopedist</option>
                <option value="PSY">Psychiatrist</option>
                <option value="GEL">Gastroenterologist</option>
                <option value="DC">Diabetes Consultant</option>
            </select>
            </form>
            </div>
            <div className="flex w-[224px] h-[30px] items-center gap-[16px] px-[4px] py-[8px] absolute top-[160px] left-[333px] bg-white rounded-[10px] border border-solid border-[#e0e0e0]">
              <div className="relative flex-1 mt-[-6.00px] mb-[-4.00px] text-[#8f99f8] text-[14px] leading-[24px] font-bold tracking-[0]">
              <form className="relative text-[#8f99f8] text-[14px] font-sans font-semibold">
                <select id="specialization" className=" flex h-full w-[220px] items-center gap-[16px] px-[12px] py-[2px] border-none text-violet-700 text-sm font-sans font-semibold rounded-lg p-1" >
                <option selected>{props.gender=="M"?"Male":"Female"}</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
            </form>              
            </div>
            </div>
            <div className="absolute top-[29px] left-[156px] [font-family:'Inter-Bold',Helvetica] font-bold text-indigo-800 text-[20px] text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
              Update your Personal Details here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};