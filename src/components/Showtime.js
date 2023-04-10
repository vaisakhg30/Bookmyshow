import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
function Showtime({timedata}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
        Show Time
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Show Time</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>  
        <ListGroup>
      <ListGroup.Item>Monday    | {timedata.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday   | {timedata.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday | {timedata.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursday  | {timedata.Thursday}</ListGroup.Item>
      <ListGroup.Item>Friday    | {timedata.Friday}</ListGroup.Item>
      <ListGroup.Item>Saturday  | {timedata.Saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday    | {timedata.Sunday}</ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
       
         
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Showtime