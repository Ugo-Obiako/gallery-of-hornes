
function App() {

return (<>
       <Header title="Gallery of Horns Project" />

       <Footer/>

       <Gallery/>
    
       </>
    )
}

function Header(props) {
    
    return (<header>
          <h1>{props.title}</h1>
            </header>
    )
}

function Footer(props) {
    
    return <h2>Footer here</h2>
}

function Gallery(props) {
    
    return <h2>Gallery here</h2>
}

export default App;
