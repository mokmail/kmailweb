
import { useCookies } from "react-cookie";
import Mbutton from "./menubutton"




const Menu = ()=>{


    const [cookies, setCookie, removeCookie] = useCookies();

    const colors={}
    return(
        <>

        <div className={`flex justify-between  h-48   items-center  `}>
            <div className="flex p-2 px-36 m-auto text-5xl kmail">
           km<div className={`hover:rotate-[180deg]  -translate-x-12 hover:-translate-x-2  hover:text-7xl  duration-700`} >Ai</div><div className="-translate-x-12">l</div>
            </div>
         
         
<Mbutton text={"Home"} href={"/"} colors ={colors} /> 
<Mbutton text={"AI Services"} href={" /ai"} colors ={colors}/>
<Mbutton text={"BIM"} colors ={colors} />
<Mbutton  text={"Architecture"} href={"architecture"} colors ={colors} />
<Mbutton text={"Containers"} href={"/container"} colors ={colors}/>
<Mbutton text={"Blog"} colors ={colors} href={'/blog'}/>

<Mbutton text={"Logout"} onClick={()=>{
    console.log("start")
    removeCookie("login")
    removeCookie("message")
}} colors ={colors} />
        </div>
         
        </>
    )


}
export default Menu