import {React,useState,useEffect} from 'react'
import Showcard from './Showcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Bookmyshow() {   
  //state to hold data from api
  var [showlist,setshow]=useState([])   

  //function to call API
  const fetchdata=async()=>{
 const result=await fetch('/bookmyshow.json')
   //convert to js => result.json()
  result.json().then(
    data=>{
      setshow(data.bookmyshow)
    }
  )
  }
  console.log(showlist);

  //useEffect(component open ayi varumbo athinakathe functione call chaeyyan)
  useEffect(()=>{
      fetchdata()
      // ,[] =>to avoid continous working
  },[])
                 
  return (
  <Row>
     {
      showlist.map(item=>(
      <Col className='p-5' lg={4} md={6}>
        <Showcard showdata={item}></Showcard>
        </Col>
      ))
     }

  </Row>
  )
}

export default Bookmyshow