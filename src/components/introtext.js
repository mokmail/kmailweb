import React, { useEffect } from 'react';
import { IconButton, Paper } from '@mui/material';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { useCookies } from 'react-cookie';


const IntroText = ({func} )=>{
    const [cookies, setCookie, removeCookie] = useCookies();
 
useEffect(()=>{
    console.log("introtext")
}
, [cookies["login"]])



    return(

        <div  className=" p-2 w-auto m-auto my-4 ">
    <div className="duration-700 hover:shadow p-5  w-96 text-xs text-justify m-auto  " >

I'm Mohammed Kmail, a multidisciplinary expert in AI, development, and architecture. I combine technical and creative expertise to drive innovation and solve complex problems.

With a strong foundation in artificial intelligence, software development, and architectural design, I bring a unique perspective to my work. My expertise includes:

Developing innovative solutions that leverage AI and machine learning
Crafting scalable and efficient software applications
Designing and developing architectural solutions that blend form and function
I'm passionate about pushing the boundaries of what's possible and collaborating on projects that make a impact. Let's work together to bring your vision to life</div>

 {
    cookies['login'] ? "" :
 

 
 <IconButton onClick={func} className="m-auto text-rose-500" >

 <VpnKeyIcon />
    </IconButton>

}
 </div>

    )
}
export default IntroText
