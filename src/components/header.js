import Menu from "./menu";
import { Stack } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useCookies } from "react-cookie";
import { useEffect , useState } from "react";



const Header = ()=>{
const [cookies, setCookie, removeCookie] = useCookies();







    return(
        
        <Stack direction={"row"} className={`flex flex-col  bg-gradient-to-t from-slate-100/[.1] to-slate-900/[.1] shadow  `} >
           <div className="w-9/12">
              
 <Menu />
           </div>
           
            <div className="m-auto w-2/12  items-center text-center border-l border-l-slate-500 ">
             
            </div>
            
        </Stack>
        
    )
}

export default Header