import  { useEffect, useState } from 'react';

export const  Booking=({InitialVisibility}:{InitialVisibility:String})=>{
    const [Visibility, setVisibility] = useState(InitialVisibility);
    const toggleState = ()=>{ setVisibility(Visibility === 'show' ? 'hide' : 'show') }


    return (
    <div className={`w-screen h-screen z-10 align-middle items-center ${Visibility == 'show'? null : 'hidden'}`}>
      <div className="fixed w-[833px] h-[584px] top-[120px] left-[390px]">
        <div className="relative h-[584px] bg-[#eeeeee] rounded-[15px] overflow-hidden">
          <div className="absolute w-[306px] h-[510px] top-[62px] left-[14px] bg-[#5a21b6] rounded-[10px] overflow-hidden">
            <img
              className="absolute w-[238px] h-[240px] top-[180px] left-[34px] object-cover rounded-full"
              alt="Profile"
              src="/profile.png"
            />
            <div className="absolute top-[22px] left-[86px] font-sans font-bold text-[#eeeeee] text-[20px] text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
              Doctor Profile
            </div>
            <div className="absolute top-[106px] left-[65px] font-sans font-bold text-white text-[15px] text-center tracking-[0] leading-[21.0px] whitespace-nowrap">
              Specialization of Doctor
            </div>
            <p className="absolute top-[132px] left-[65px] font-sans font-bold text-white text-[15px] text-center tracking-[0] leading-[21.0px] whitespace-nowrap">
              Overall Rating : 4.5 / 5.0
            </p>
            <p className="absolute top-[466px] left-[31px] font-sans font-bold text-white text-[18px] text-center tracking-[0] leading-[25.2px] whitespace-nowrap">
              <span className="font-sans font-bold text-white text-[18px] tracking-[0] leading-[25.2px]">
                Consultation Fee : 500.00 ₹
              </span>
              <span className="text-[15px] leading-[21.0px]">&nbsp;</span>
            </p>
            <div className="absolute top-[441px] left-[99px] font-sans font-bold text-white text-[15px] text-center tracking-[0] leading-[21.0px] whitespace-nowrap">
              At Clinic Name
            </div>
            <div className="absolute top-[76px] w-full font-sans font-bold text-white text-[18px] text-center tracking-[0] leading-[25.2px] whitespace-nowrap">
              Dr. ____________ _____________
            </div>
          </div>
          <div className="absolute w-[491px] h-[510px] top-[62px] left-[328px] bg-[#c9d5fc] rounded-[10px] overflow-hidden">
            <button className="flex w-[214px] h-[32px] items-center gap-[16px] px-[16px] py-[8px] absolute top-[461px] left-[138px] bg-indigo-400 rounded-[10px] border border-solid  hover:scale-105 border-[#e0e0e0]">
              <div className="w-[198px] mt-[-4.00px] mb-[-2.00px] mr-[-16.00px] font-sans font-bold text-white text-center leading-[22.4px] overflow-hidden relative text-[16px]">
                Request Appointment
              </div>
            </button>
            <div className="absolute top-[17px] left-[159px] font-sans font-bold text-indigo-800 text-[20px] text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
              Enter your details
            </div>
            <div className="absolute w-[459px] h-[167px] top-[278px] left-[16px] bg-[#5a21b6] rounded-[10px]">
                <textarea className="flex-1 w-[440px] h-[130px] top-[28px] left-[9px] font-sans font-medium rounded-[10px] text-[#5a21b6] leading-[24px] relative text-[16px] border-none text-wrap px-2 py-2" placeholder="Enter your symptoms here...">
                </textarea>
              <div className="absolute w-[530px] top-[2px] left-[5px] font-sans font-bold text-[#eeeeee] text-[14px] tracking-[0] leading-[24px]">
                &nbsp;&nbsp; Describe your Symptoms
              </div>
            </div>
            <div className="h-[140px] top-[120px] left-[16px] absolute w-[459px] bg-[#5a21b6] rounded-[10px]">
              <div className="h-[100px] top-[32px] left-[7px] w-[446px] absolute bg-white rounded-[8px] border border-solid border-[#e0e0e0] shadow-[0px_1px_2px_#0000000d] flex m-auto p-auto" >

            <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex flex-nowrap ">
            <div className="inline-block px-0.4 mx-[5px]">
            <DateComp date="18-03" day="Tuesday"/>
            </div>               
            <div className="inline-block px-0.4 mx-[5px]">
            <DateComp date="19-03" day="Wednesday"/>
            </div>               
            <div className="inline-block px-0.4 mx-[5px]">
            <DateComp date="20-03" day="Thursday"/>
            </div>               
            <div className="inline-block px-0.4 mx-[5px]">
            <DateComp date="21-03" day="Friday"/>
            </div>               
            <div className="inline-block px-0.4 mx-[5px]">
            <DateComp date="22-03" day="Saturday"/>
            </div>               
            <div className="inline-block px-0.4 mx-[5px]">
            <DateComp date="23-03" day="Sunday"/>
            </div> 
            <div className="inline-block px-0.4 mx-[5px]">
            <DateComp date="24-03" day="Monday"/>
            </div> 
              </div></div>            
           </div>
              <div className="absolute w-[530px] top-[5px] left-[5px] font-sans font-bold text-[#eeeeee] text-[16px] tracking-[0] leading-[24px]">
                &nbsp;&nbsp; Select Date
              </div>
            </div>
            {/* <div className="h-[82px] top-[182px] left-[17px] absolute w-[459px] bg-[#5a21b6] rounded-[10px]">
              <div className="h-[40px] top-[34px] left-[6px] w-[446px] absolute rounded-[8px] border border-solid border-[#e0e0e0] shadow-[0px_1px_2px_#0000000d] flex flex-col bg-white m-auto p-auto">
              Time slots here  
            </div>
              <div className="absolute w-[530px] top-[5px] left-[5px] font-sans font-bold text-[#eeeeee] text-[16px] tracking-[0] leading-[24px]">
                &nbsp;&nbsp;Choose Time Slot
              </div>
    </div> */}
          </div> 
          <div className="absolute top-[4px] left-[303px] font-bold text-violet-950 text-[35px] text-center tracking-[0] leading-[49.0px] whitespace-nowrap">
            Book Appointment
          </div>
          <div className="flex w-[40px] h-[40px] items-center justify-center gap-[8px] px-[16px] py-0 absolute top-[14px] left-[779px] bg-[#eeeeee] rounded-[8px]">
            <button className="relative w-fit ml-[-4.00px] mr-[-4.00px] [font-family:'Bubblegum_Sans-Regular',Helvetica] font-normal text-violet-950 text-[25px] tracking-[0] leading-[37.5px] whitespace-nowrap hover:scale-105 hover:text-red-800 hover:font-bold" onClick= {()=>{toggleState}}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export function DateComp({date,day}:{date:string,day:string}) {
  return (
    <button className={`w-[80px] h-[90px] my-1 max-w-xs overflow-hidden rounded-lg shadow-md hover:shadow-xl bg-indigo-100 hover:bg-indigo-300 focus:bg-green-500 transition-shadow duration-300 ease-in-out`}>
    <div className="w-[80px] h-[90px] relative">
        <div className="top-0 absolute w-[80px] h-[20px] left-0 bg-[#401b85] overflow-hidden">
          <div className="absolute w-[90px] top-0 left-[-5px] font-sans font-bold text-[#eeeeee] text-[14px] text-center tracking-[0] leading-[normal]">
            {date}
          </div>
        </div>
        <div className="top-[70px] absolute w-[80px] h-[20px] left-0 bg-[#401b85] overflow-hidden">
          <div className="absolute w-[90px] top-[1px] left-[-5px] font-sans font-bold text-[#eeeeee] text-[12px] text-center tracking-[0] leading-[normal]">
            {day}
          </div>
        </div>
        <img className="absolute w-[50px] h-[50px] top-[20px] left-[15px] object-cover" alt="Date" src="/date.png" />
      </div>
    </button>
  );
}

