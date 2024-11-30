import { useState, useEffect } from "react";
const useFetch = ({endpoint,question}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState(null);   

    useEffect(() => {

        fetch(endpoint , {
            method:"POST",
            headers:{
                "Content-Type": "application/json",

            },
            body: JSON.stringify({question})

            
            
        })
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setLoading(false);
            console.log(data)
        }).catch((error) => {
            console.error('Error:', error);
            setError(error);
        }
        );
    }, [question]);
     return ([data , loading ,error ]);
    

    


}

    
    

export default useFetch