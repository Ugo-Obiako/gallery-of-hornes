import "./App.css";
import Header from './components/Header';
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Header title="Gallery of Horns" />
      <h1>Gallery of Horns</h1>
      <Gallery />
      <Footer year="2023" />
    </>
  )
}

//export default App;