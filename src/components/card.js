import * as React from 'react';
import { styled } from '@mui/material/styles';

import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';

import Typography from '@mui/material/Typography';


import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { useCookies } from 'react-cookie';

const ExpandMore = styled((props) => {


   
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));


export default function VCard({sc, content , imgurl , detail , title='card', datum='datum' , link='/'}) {
const [expanded, setExpanded] = React.useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <div className={ ` text-slate-400 col-span-6 hover:animate-shake animate-100 border hover:bg-slate-50  p-0 rounded hover:shadow-2xl   duration-300 shadow`}  href={link}>
    

    
    <div  className='' >
      <Typography variant='h6' className={` font-thin  text-xl p-8 text-slate-700 `}  >
    {title}
    
      </Typography>

      <CardMedia  className='h-48'
        component="img"
        
        image={imgurl}
        alt="Paella dish"
      />
      <div >
        <Typography variant="body2" className={` font-thin text-sm text-slate-950 p-3`} >
         {content}
        </Typography>
      </div>
     
   
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <div className='p-5'>
            <Typography variant='caption' className={` font-thin  text-sm text-slate-400`} >
             {detail}
            </Typography>

         
          
        </div>
      </Collapse>
         <CardActions disableSpacing>
        <IconButton >
          
          <ArrowRightOutlinedIcon onClick={
            ()=>{
              window.location.href=link
          } }
           />
          
        </IconButton>
        
        <ExpandMore 
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
    </div>
     </div>
  
  );
}
