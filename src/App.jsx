
function App() {

return (<>
       <Header title="Gallery of Horns Project" />

       <Footer year="2023"/>

       <Gallery title1="" imageUrl1="" description1=""
       title2="" imageUrl2="" description2=""
       title3="" imageUrl3="" description3=""/>
    
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
    
    return <h2> &copy;{props.year}.  Web Design by Ugo</h2>
}

function Gallery(props) {

    function Instance1(props){
        return  (<>
                <h3>HornedBeast1 Details</h3>
                    title={props.title1}  imageurl={props.imageUrl1} description1={props.description1}
        
               </>
        )
    }
    

}

export default App;
