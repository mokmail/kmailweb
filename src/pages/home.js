
import { useCookies } from "react-cookie";
import { useEffect , useState } from "react";
import Login from "../components/login";

import IntroText from "../components/introtext";

import { motion } from "framer-motion"





const Home =()=>{
const [logging , setLogging] =useState(true)
const [cookies, setCookie, removeCookie] = useCookies();




    return(
        <>
      




<motion.div animate={{  y:[500, 0] }} transition={{ ease:"easeOut",  duration:2 }}>


        <div  className="flex flex-col m-auto text-center text-9xl  align-middle text-slate-700 kmail tracking-tighter">
            
      
          <a className="">
 <div className="flex justify-between  h-48  items-center  ">
            <div className="flex p-2 px-36 m-auto text-8xl kmail">
           km<div className={`hover:rotate-[180deg] -translate-x-16 hover:-translate-x-2 hover:translate-y-4 hover:text-9xl  duration-700`} >Ai</div><div className="-translate-x-12 ">l</div>
            </div></div>
          </a>
       

 
 <div className="flex align-baseline  text-lg tracking-widest pt-0 m-auto font-bold">

                +43 664 154 02 70
            </div>
            <div className={`flex m-auto  text-3xl tracking-widest text-center font-semibold `} >

                Vienna

            </div>
            <div className="butt text-lg tracking-widest my-2" >
                

{
 (cookies["login"]  ||  logging ) ? 

 <IntroText func = {()=>{
    setLogging(!logging)
 }}  />
 
: <Login />
    }
           </div>
            </div>
</motion.div>
           
        </>
    )
}
export default Home