// import Image from 'react-bootstrap/Image'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

function HornedBeast(props) {
    return (<>
        <h3>HornedBeast Details</h3>
        <h2>{props.title}</h2> <img src={props.imageUrl} alt={props.title} />
        <p>{props.description}</p>
           </>
    )
}
export default HornedBeast

