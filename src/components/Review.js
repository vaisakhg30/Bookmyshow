import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewdata}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
       <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant='warning'
      >
       About the movie
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
                reviewdata.map(item=>(
                    <Card body style={{ width: '400px' }}>
             
                   <h6>Director :{item.director}</h6>
                   <p>Rating :{item.rating}</p>
                   

                    </Card>
                ))
           
            }
          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Review