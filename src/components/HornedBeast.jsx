// import Image from 'react-bootstrap/Image'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Image from 'react-bootstrap/Image'
import "../App.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



function HornedBeast(props) {
    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (<>
        

    <div style={{padding: '20px', margin: '30px', height: '25rem'}} type="submit" onClick={handleClick}>
    
    <Button variant="primary" onClick={handleShow}>
        Learn More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, these are horned beasts! {props.title}. {props.description}.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>

    <Card className='cardStyle' style={{ width: '18rem', height: '18rem', padding: '10px', position: 'relative', left: 'auto', right: 'auto'}}>
      <Card.Img style={{width:'100px', height: '100px', }}  variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
          <h2 style={{position: 'relative', left: 'auto', right: 'auto'}} className='cardH2'> <span role="img" aria-label="Black Heart">&#x1F5A4;</span> {count} </h2>
      </div>
           </>
    )
}
export default HornedBeast

