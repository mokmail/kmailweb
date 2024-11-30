import { Button , Card , Paper , TextField , Stack, Divider } from "@mui/material"
import { useCookies } from "react-cookie";
import { useEffect , useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

import {IconButton} from "@mui/material";
import IntroText from "./introtext";



const Login =()=>{
const [message , setMessage] = useState("")

const [formData, setFormData] = useState({
    username: '',
    password: ''
    });

const [cookies, setCookie, removeCookie] = useCookies();

const [logging , setLogging] =useState(false)

    
 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const  handle_Submit=(e)=>{
       e.preventDefault()
      //cookie_maker()
  setFormData({
    ...formData,
  })
  fetch("http://127.0.0.1:8002/login2" , {
    method:"POST",
    headers:{
      "Content-Type": "application/json",

    },body: JSON.stringify(formData)
  }).then((result)=>{
   

  result.json().then((res)=>{
    //console.log(res)
    setMessage(res.setMessage)
    setCookie("message"  , res.message)
    setCookie('login', res.status)
    
  })

  })
  }
  



useEffect(()=>{

}, [message , cookies['login']] )


    return(
        <>


        {logging ?  <IntroText func = {()=>{
    setLogging(!logging)
 }}  /> :
           <Paper className=" w-96 shadow-lg m-auto px-8  " variant="plain" >
            <div className="text-right ">
            <IconButton onClick={()=>{
              setLogging(!logging)
            }} className="m-auto text-rose-500" >

 <CloseIcon/>
    </IconButton>
            </div>
      <div className="py-4">
        Login form
      </div>
            <form onSubmit={handle_Submit}>
                 

            <Stack spacing={2}>
              
<TextField size="small" name="username" placeholder="Username" variant="outlined" label="Username" color="error" value={formData.username}  onChange={handleChange} />
<TextField size="small" name="password" placeholder="Password" type="password" variant="outlined" label="Password" color="error" value={formData.password}  onChange={handleChange} />
            <Button className="color-black"  variant="contained" size="large" color="error" type="sumbit">login</Button>

   
        <p className="text-red-500 text-sm tracking-tighter">{cookies['message']}</p> 
      
            </Stack>
                </form>
                <Divider/>
                <div className="py-9 text-xs font-thin" onClick={
                  ()=>{
                    window.location.href = "/register"
                  }
                }  >Register</div>
            </Paper> 
       

           }    
        </>
    )
}
export default Login