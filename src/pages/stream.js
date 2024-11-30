import { Button , TextField , Card , Accordion, AccordionDetails} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import ControlledAccordions from '../components/accord';
function StreamConsumer() {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStream = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8002/stream'); // Replace with your stream URL
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');

        let done = false;
        let receivedData = '';

        while (!done) {
          const { value, done: doneReading } = await reader.read();
          done = doneReading;
          receivedData += decoder.decode(value, { stream: !done });

          // Set received data to state
          setData((prevData) => prevData + decoder.decode(value, { stream: !done }));
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchStream();
  }, []);

  return (
    <>
    <div className='w-full m-auto text-justify'>
      <h1>Streaming Data</h1>
      {error && <p>Error: {error}</p>}
      
      <Markdown>{data}</Markdown>
      
    
        
        
     
    </div>

  
    
    </>
  );
}

export default StreamConsumer;