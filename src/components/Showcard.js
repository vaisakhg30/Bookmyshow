import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Showcard.css'

function Showcard({showdata}) {
  return (
    <>
    <Link to={`/view-bookmyshow/${showdata.id}`} style={{textDecoration:'none',color:'black'}}>
         <Card id='cal' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={showdata.photograph}/>
      <Card.Body>
        <Card.Title className='text-black'>{showdata.name}</Card.Title>
        <Card.Text>
         <p><strong>Language : </strong>{showdata.language}</p>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </>
  )
}

export default Showcard