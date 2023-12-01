import beasts from "../data.json"
import "../App"
import HornedBeast from "./HornedBeast";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';






function Gallery(props) {
    return (<>
        {beasts.map((beast) => <HornedBeast  title={beast.title} imageUrl={beast.image_url} description={beast.description} />)}

    </>
    )
}


export default Gallery