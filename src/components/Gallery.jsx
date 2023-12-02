import beasts from "../data.json"
import "../App"
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






function Gallery(props) {
    return (<>
    <Container>
        <Row xs={2} sm={3} md={4} lg={5}>
        {/* <Col> */}
        {beasts.map((beast) => <HornedBeast  title={beast.title} imageUrl={beast.image_url} description={beast.description} keyword = {beast.keyword} />)}
        {/* </Col> */}
        </Row>
    </Container>
    </>
    )
}


export default Gallery