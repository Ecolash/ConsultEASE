

export const Pat_Info=()=>{
    return (
    <div className="w-[1013px] h-[586px] my-14">
      <div className="flex-wrap w-[1013px] h-[586px]">
        <div className="relative h-[586px] bg-white rounded-[15px] overflow-hidden">
          <div className="absolute w-[363px] h-[561px] top-[12px] left-[14px] bg-indigo-800 rounded-[10px] overflow-hidden items-center">
            <img
              className="absolute w-[275px] h-[275px] top-[162px] left-[50px] object-cover rounded-full align-middle"
              alt="Profile"
              src="/profile.png"
            />
            <button className="w-[129px] h-[32px] px-[16px] py-[8px] absolute top-[497px] left-[117px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border-none hover:scale-105 hover:bg-indigo-500]">
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
              ________________ _____________
            </div>
          </div>
          <div className="absolute w-[608px] h-[561px] top-[12px] left-[387px] bg-indigo-100 rounded-[10px] overflow-hidden">
            <button className="w-[172px] h-[40px] px-[10px] py-[8px] absolute top-[480px] left-[218px] bg-indigo-400 flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] hover:scale-105">
              <div className="relative w-[141px]  mt-[1.00px] mr-[1px] text-white text-[16px] text-center leading-[22.4px] [-webkit-line-clamp:1] font-sans font-bold">
                Confirm &amp; Save
              </div>
            </button>
            <div className="w-[533px] h-[39px] top-[270px] left-[40px] absolute rounded-[10px]">
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
            <input className="w-[370px] h-[35px] px-[16px] py-[8px] absolute top-[120px] left-[130px] bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] font-sans font-semibold text-violet-500"  placeholder="Mobile Number"/>
            <input className="w-[370px] h-[35px] px-[16px] py-[8px] absolute top-[170px] left-[130px] bg-white flex items-center gap-[16px] rounded-[10px] border border-solid border-[#e0e0e0] font-sans font-semibold text-violet-500" placeholder="Age" pattern="[0-9]{1-3}"/>
            <div className="flex w-[370px] h-[35px] items-center gap-[16px] px-[4px] py-[8px] absolute top-[220px] left-[130px] bg-white rounded-[10px] border border-solid border-[#e0e0e0]">
              <div className="relative flex-1 mt-[-6.00px] mb-[-4.00px] text-[#8f99f8] text-[14px] leading-[24px] font-bold tracking-[0]">
              <form className="relative text-[#8f99f8] text-[14px] font-sans font-semibold">
                <select id="specialization" className=" flex h-full w-[332px] items-center gap-[16px]  border-none text-violet-700 text-sm font-sans font-semibold rounded-lg " >
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
