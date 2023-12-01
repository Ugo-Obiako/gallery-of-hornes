// import Image from 'react-bootstrap/Image'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Image from 'react-bootstrap/Image'
import "../App.css"


function HornedBeast(props) {
    const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

    return (<>
        

    <div style={{padding: '20px', margin: '30px', height: '25rem', position: 'relative', left: 'auto', right: 'auto'}} type="submit" onClick={handleClick}>
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

