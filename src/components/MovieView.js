import {React,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Showcard.css'
import Review from './Review';
import Showtime from './Showtime';

function MovieView() {
    var [shows,setshows]=useState([])

    const fetchshow=async()=>{
      const result=await fetch('/bookmyshow.json')
      result.json().then(data=>{
        setshows(data.bookmyshow)
      })
    }

    const params=useParams()
   // console.log(params.id);
   //z console.log(shows);

    const show=shows.find(item=>item.id==params.id)
    console.log(show);

    useEffect(()=>{
        fetchshow()
    },[])
  return (
    <>
    { show?(
    <Row>
        <Col id='cal' lg={6} md={6} className='p-5 ms-5 text-center'>
            <img className='rounded border' style={{height:'600px'}} src={show.photograph}/>

        </Col>

        <Col id='cal' className='p-5 ms-5 text-center'>
        <ListGroup variant='flush'>
      <ListGroup.Item><h1 className='text-warning'>{show.name}</h1></ListGroup.Item>
      <ListGroup.Item><h5><strong>Language:</strong> {show.language}</h5></ListGroup.Item>
      <ListGroup.Item>
      <Showtime timedata={show.show_time}/>
     <div className='mt-3'><Review reviewdata={show.reviews}/></div>
     </ListGroup.Item>
    </ListGroup>

        </Col>
        
    </Row>):""
  }
  </>
  )
}

export default MovieView