import {  Button, Divider, Stack, TextField } from "@mui/material";

import {   useState } from "react";

import CircularProgress from '@mui/material/CircularProgress';
import Markdown from "react-markdown";
import AirIcon from '@mui/icons-material/Air';
import remarkGfm from 'remark-gfm'

const Youtube =() => {

    const [value, setValue] = useState('')
    const [linkValue, setLinkValue] = useState('')
    const [formData, setFormData] = useState({
        question: '',
        link: ''
    })
    const [loading , setLoading] = useState(false)
    const [data, setData] = useState(null)
 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    
    const handle_Submit=(e)=>{
        setLoading(true)    
        e.preventDefault()
     
        setFormData({
            ...formData,
            question: value,
            link: linkValue
        
        })
        fetch("http://127.0.0.1:8002/test" , {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
        
            },body: JSON.stringify(formData)
            }).then((result)=>{
            result.json().then((res)=>{
                console.log(res)
                setLoading(false)
                setData(res)    
             
            
               
        
            })
        }
        )
    }
    

 
        //const [data, loading , error] = useFetch(endpoint ="http://127.0.0.1:8002/test" , question=question);

  



    return (

        <div className=' w-10/12  my-5 mx-auto p-3 '>



<Stack spacing={4} direction="row" className="w-full" >


            <form onSubmit={handle_Submit} className="w-5/12 bg-slate-50 p-12 shadow rounded" >
            
            <div className="flex flex-col my-5 mx-auto   space-y-5 ">
                <div className="text-8xl">
                    <a  className="flex flex-col text-7xl font-bold text-rose-500">Chat with<div className="text-slate-400 font-thin">Youtube</div> video</a>
             
                </div>
                <TextField variant="outlined" label="Youtube link" placeholder="Paste the youtube link here" name = "link" onChange = {handleChange}  value = {formData.link} />
                <TextField  variant="outlined" label="Question" name = "question" multiline minRows={4} onChange = {handleChange} value = {formData.question} />
                
<div>
    {linkValue}
</div>
            <Button type="submit" variant="outlined">Ask !</Button>

{ loading ? <CircularProgress className="m-auto"/> : <AirIcon className="m-auto " />}


            </div>
            
            
</form>
<Divider  className="p-1  w-2/12" orientation="vertical" flexItem />
<p className="flex p-8 w-5/12  font-thin right-2">
{(data && data) ? <Markdown rehypePlugins={remarkGfm} className="text-justify" children={data.toString()} />  :<Markdown rehypePlugins={remarkGfm} > * [ ] Retrieval-augmented generation** (RAG) \n  is a type of natural language processing (NLP) model that combines the strengths of both retrieval and generation models. It retrieves relevant information from a large corpus of text and then uses that information to generate human-like responses. To create a tool that can chat with a YouTube video using RAG  we'd need"</Markdown>}
   
           
        
</p>

</Stack>
        </div>
       
    )
}

export default Youtube
