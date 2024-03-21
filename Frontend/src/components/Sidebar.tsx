import { MoreVertical, ChevronLast, ChevronFirst, CircleUser } from "lucide-react";
import {ReactNode, useContext, createContext, useState } from "react";

interface SidebarContextType {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}
const SidebarContext = createContext<SidebarContextType|null>(null);

export const Sidebar=({ children,name,email }:{children:ReactNode,name:string,email:string})=>{
  const [expanded, setExpanded] = useState(true);

  return (
    <SidebarContext.Provider value={{ expanded, setExpanded }}>
      <aside className="h-screen">
        <nav className="h-full inline-flex flex-col bg-violet border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="/Logo_Banner.png"
              className={`overflow-hidden transition-all ${
                expanded ? "w-[200px]" : "w-0"
              } h-14`}
              alt=""
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <ul className="flex-1 px-3">{children}</ul>

          <div className="border-t flex p-3">
            <CircleUser size={35} color='navy'/>
            <div
              className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
              `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">{name}</h4>
                <span className="text-xs text-gray-600">{email}</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </SidebarContext.Provider>
  );
}

export function SidebarItem({ icon, text, active, alert }:{icon: ReactNode; text: string; active?: boolean; alert?: boolean }) {
  const { expanded } = useContext(SidebarContext) as SidebarContextType;
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-violet-200 to-violet-100 text-violet-800"
            : "hover:bg-violet-50 text-gray-600"
        }
      `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-violet-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-violet-100 text-violet-800 text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
