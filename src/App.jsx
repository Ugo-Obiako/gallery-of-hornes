import beasts from "./data.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery"
import BeastImage from "./components/BeastImage"


function App() {

    return (<>
        <Header title="Gallery of Horns Project" />

        <Gallery message="HornedBeast Details" beasts = {beasts} />

        <BeastImage />


        <Footer year="2023" />


    </>
    )
}



export default App;


