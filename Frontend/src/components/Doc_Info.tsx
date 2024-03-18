

export const Doc_Info=()=>{
    return (
    <div className="w-[1013px] h-screen ">
      <div className="w-[1013px] h-screen">
        <div className="relative h-screen overflow-hidden">
          <div className="absolute w-[363px] h-full top-0 left-0 bg-indigo-800 overflow-hidden items-center">
            <img
              className="absolute w-[275px] h-[275px] top-[300px] left-[50px] object-cover rounded-full align-middle"
              alt="Profile"
              src="/profile.png"
            />
            <button className="w-[129px] h-[32px] px-[16px] py-[8px] absolute top-[437px] left-[117px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border-none hover:scale-105 hover:bg-indigo-500]">
              <div className="relative w-fit mt-[-3.00px] mb-[-1.00px] text-white text-[14px] text-center whitespace-nowrap font-sans font-bold">
                Upload Photo
              </div>
            </button>
            <div className="absolute top-[22px] left-[90px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#eeeeee] text-[20px] text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
              Welcome to OMCS
            </div>
            <div className="absolute top-[116px] left-[107px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[15px] text-center tracking-[0] leading-[21.0px] whitespace-nowrap">
              email01@gmail.com
            </div>
            <div className="absolute top-[95px] left-[64px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[15px] text-center tracking-[0] leading-[21.0px] whitespace-nowrap">
              Dr. ________________ _____________
            </div>
          </div>
          <div className="absolute w-[608px] h-screen left-[363px] bg-indigo-100 overflow-hidden">
            <input className="w-[293px] h-[30px] px-[16px] py-[8px] absolute top-[116px] left-[25px] bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] font-sans font-semibold text-violet-500"  placeholder="Mobile Number"/>
            <button className="w-[351px] h-[32px] px-[16px] py-[8px] absolute top-[410px] left-[25px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] hover:scale-105">
              <img
                className="relative w-[20px] h-[20px] mt-[-2.50px] mb-[-2.50px] object-cover"
                alt="Attach"
                src="/attach.png"
              />
              <p className="relative w-fit mt-[-3.00px] mb-[-1.00px] mr-[-5.00px] text-white text-[14px] leading-[19.6px] whitespace-nowrap [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                Upload your Medical Certificate to Verify
              </p>
            </button>
            <button className="w-[172px] h-[32px] px-[16px] py-[8px] absolute top-[512px] left-[218px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] hover:scale-105">
              <div className="relative w-[141px]  mt-[1.00px] mr-[1px] text-white text-[16px] text-center leading-[22.4px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                Confirm &amp; Save
              </div>
            </button>
            <input className="w-[288px] h-[30px] px-[16px] py-[8px] absolute top-[204px] left-[25px] bg-white flex items-center gap-[16px] font-sans font-semibold text-violet-500 rounded-[10px] border border-solid border-[#e0e0e0]" placeholder="Clinic Name"/> 
            <div className="w-[532px] h-[35px] top-[354px] left-[25px] absolute rounded-[10px]">
              <div  className="w-[532px] h-[35px] px-[16px] py-[3px] absolute top-0 left-0 bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[122px] text-[#8f99f8] text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  Consulation Fee
                </div>
                <input className="flex w-[132px] items-center gap-[16px] px-[16px] py-[2px] relative self-stretch text-center bg-white font-sans font-semibold text-violet-500 rounded-[10px] border border-solid border-[#e0e0e0]" placeholder="Offline"/>                
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
              <button className="w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  SUN
                </div>
              </button>
              <button className="w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  MON
                </div>
              </button>
              <button className="w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  TUE
                </div>
              </button>
              <button className="w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  WED
                </div>
              </button>
              <button className="w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  THU
                </div>
              </button>
              <button className="w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[40px] mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  FRI
                </div>
              </button>
              <button className="w-[45px] h-[30px] px-[5px] py-[8px] relative hover:scale-110 mt-[-3.50px] mb-[-3.50px] mr-[-10.00px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[40px]  mt-[1.00px] mr-[1px] text-white text-[14px] leading-[19.6px] [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  SAT
                </div>
              </button>
            </div>
            <div className="w-[533px] h-[39px] top-[301px] left-[24px] absolute rounded-[10px]">
              <div className="w-[533px] h-[39px] px-[16px] py-[8px] absolute top-0 left-0 bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0]">
                <div className="relative w-[450px] h-[21px] text-[#8f99f8] text-[14px] leading-[19.6px] whitespace-nowrap [-webkit-line-clamp:1] [font-family:'Inter-Bold',Helvetica] font-bold tracking-[0] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-box-orient:vertical]">
                  Address
                </div>
              </div>
              <img
                className="absolute w-[32px] h-[34px] top-[3px] left-[488px] object-cover hover:scale-110"
                alt="Location"
                src="/location.png"
              />
            </div>
            <input className="w-[224px] h-[30px] px-[16px] py-[8px] absolute top-[204px] left-[333px] bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] font-sans font-semibold text-violet-500" placeholder="Years of Experience"/>
            <input className="w-[224px] h-[30px] px-[16px] py-[8px] absolute top-[116px] left-[333px] bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] font-sans font-semibold text-violet-500" placeholder="Age" pattern="[0-9]{1-3}"/>
            <div className="flex w-[293px] h-[30px] items-center gap-[16px] px-[4px] py-[8px] absolute top-[160px] left-[25px] bg-white rounded-[10px] border border-solid border-[#e0e0e0]">
              <form className="relative text-[#8f99f8] text-[14px] leading-[2px] font-sans font-semibold">
                <select id="specialization" className=" flex h-full w-[290px] items-center gap-[16px] px-[12px] py-[2px] border-none text-violet-700 text-sm font-sans font-semibold rounded-lg p-1">
                <option selected>Specialization</option>
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
                <option selected>Gender</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
            </form>              
            </div>
            </div>
            <div className="absolute top-[29px] left-[172px] [font-family:'Inter-Bold',Helvetica] font-bold text-indigo-800 text-[20px] text-center tracking-[0] leading-[28.0px] whitespace-nowrap">
              Enter your Personal Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
