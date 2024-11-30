
import { useEffect , useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import VCard from "../components/card";

import {Card , Divider} from "@mui/material";


const Ai =() => {
   


    const [formData, setFormData] = useState({
        question: '',
        link: ''
    })

 const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
    
    
    

 
        //const [data, loading , error] = useFetch(endpoint ="http://127.0.0.1:8002/test" , question=question);

  const [cards, setCards] = useState([])
  const [ais , setAis] = useState([])
useEffect(()=>{
    fetch("cards.json" , {
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            "mode": "no-cors"
        }

    }).then((response) => response.json()).then((data) => {
        console.log(data)
        setCards(data["cards"])
        setAis(data["ai"])

    }
    )
},[])





 //const {textcolor , bordercolor , bgcolor} = colorer()






//const colors={"textcolor" :textcolor , "bordercolor": bordercolor , "bgcolor":bgcolor}

    return (
        <div className='mx-auto w-1/2  my-4 '>


<div className="grid grid-cols-12 gap-4 ">

{
    ais && ais.map((ai , key ) => {
        return(
            <div key={key} className={`flex flex-col   col-span-${ai.width} h-96   border } hover:border-blue-500} m-auto  w-full  text-4xl gap-4 p-4 text-slate-400 hover:text-slate-950 shadow-xl duration-300 `}>
                {ai.title}
                <Divider/>
                <div className="overflow-auto scrollbar_hidden ">
                     {
                    ai.content && ai.content.map((content , key) => {
                        return(
                            <ReactMarkdown className="text-sm text-justify first-letter:text-xl   font-thin  " key={key} remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                        )
                    }
                    )
                }
                </div>

               
               
            </div>
        )
    })
}


{
  

cards && cards.map((card , key ) => {
        return(
            <VCard key={key} content={card.content} imgurl={card.image} detail={card.detail} title={card.title} datum={card.date} sc={card.sc} link={card.link}/>
        )
    }
    )
}


</div>


            
            
        </div>
    )
}

export default Ai
