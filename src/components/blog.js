import React, {useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import DOMPurify from 'dompurify';
import { Divider, Typography } from '@mui/material';
import { LiaExpandSolid } from "react-icons/lia";

const ArticleViewer = ({ title, content, author, date , span=3  }) => {
    const [imageUrl, setImageUrl] = useState('../../images/image (33).JPEG');
    
  const [visible,  setVisible] = useState(true);  
    const [elems, setElem] = useState([]);
 
   const elements = [];
  const renderContent = () => {
    
    
    const sanitizedContent = DOMPurify.sanitize(content);
    const lines = sanitizedContent.split('\n');
    
    let index = 0;

    while (index < lines.length) {
      const line = lines[index];

      if (line.startsWith('```')) {
        const language = line.replace('```', '').trim();
        const codeLines = [];
        index++;
        while (index < lines.length && !lines[index].startsWith('```')) {
          codeLines.push(lines[index]);
          index++;
        }
        elements.push(
          <SyntaxHighlighter key={index} style={oneDark} language={language} PreTag="div">
            {codeLines.join('\n')}
          </SyntaxHighlighter>
        );
      } else if (line.startsWith('![Im')) {
        const altText = line.substring(2, line.indexOf(']'));
        setImageUrl(line.substring(line.indexOf('(') + 1, line.indexOf(')')));
        elements.push(
          <img key={index} src={imageUrl} alt={altText} className="article-image"  />
        );
      }else if (line.startsWith('!link')) {
        const altText = line.substring(6, line.indexOf(']'));
        const url = line.substring(line.indexOf('(') + 1, line.indexOf(')'));
        elements.push(
          <a href ={url}>{altText}</a>)
      }
                 
      
      else if (line.startsWith('# ')) {
        elements.push(<Typography   variant='h1' key={index}>{line.replace('# ', '').trim()}</Typography>);
      } else if (line.startsWith('## ')) {
        elements.push(<Typography variant='h2' key={index}>{line.replace('## ', '').trim()}</Typography>);
      } else if (line.startsWith('### ')) {
        elements.push(<Typography variant='h3' key={index}>{line.replace('### ', '').trim()}</Typography>);
      }else if (line.startsWith('#### ')) {
        elements.push(<Typography variant='h4' key={index}>{line.replace('#### ', '').trim()}</Typography>);
      }
      else if (line.startsWith('##### ')) {
        elements.push(<Typography variant='h5' key={index}>{line.replace('##### ', '').trim()}</Typography>);
      }
      else if (line.startsWith('###### ')) {
        elements.push(<Typography className='h6'  variant='h6' key={index}>{line.replace('###### ', '').trim()}</Typography>);
      }
      else if (line.startsWith('!#subtitle1 ')) {
        elements.push(<Typography variant='subtitle1' key={index}>{line.replace('!#subtitle1 ', '').trim()}</Typography>);
      }
       else if (line.startsWith('!#subtitle2 ')) {
        elements.push(<Typography variant='subtitle2' key={index}>{line.replace('!#subtitle2 ', '').trim()}</Typography>);
      }
      else if (line.startsWith('!#caption ')) {
        elements.push(<Divider/>);
        elements.push(
        <div className='caption' ><Typography variant='caption' key={index}>{line.replace('!#caption ', '').trim()}</Typography> </div>);
        
      }
       else if (line.trim() !== '') {
        elements.push(<p key={index}>{line}</p>);
      }
      index++;
    }

    setElem( elements);
  };

  


  useEffect(() => {
 renderContent();
  }, [ imageUrl , visible  ]);

return (
    <div className={`col-span-${span} px-5 duration-700 shadow`}>
        {/* <div className="flex flex-row justify-end p-5">
            <LiaExpandSolid onClick={() => setVisible(!visible)} />
        </div> */}
        <h1 className="article-title">{title}</h1>
        <img src={`${imageUrl}`} alt="Random" className="article-image" />
        <div className={visible ? 'block duration-500' : 'hidden  duration-500'}>
            
            <div className="article-meta">
                <p>By <strong>{author}</strong> on {new Date(date).toLocaleDateString()}</p>
            </div>
            <div className="article-content">
                {elems}
            </div>
        </div>
    </div>
);
};

export default ArticleViewer;