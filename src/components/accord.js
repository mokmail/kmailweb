import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Markdown from 'react-markdown';

export default function ControlledAccordions({result}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={"x"}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
      
          <Typography sx={{ color: 'text.secondary' }}>Answe</Typography>
        </AccordionSummary>
        <AccordionDetails>
<Markdown   children={result} />

        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}