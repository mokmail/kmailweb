
import { useCookies } from "react-cookie"

const Mbutton =({text ,href,  onClick ,colors={}})=>{
    const [cookies, setCookie, removeCookie] = useCookies();


    return(
        <>
<a className={`duration-700  flex h-48  bg-slate-150 items-center justify-center p-5 w-1/5  
  hover:border-b-8    text-slate-500 font-bold  `}  onClick={onClick} href={href}>
   <a >
    {text}
    </a> 
    </a>
        </>
    )
}
export default Mbutton