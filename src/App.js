import './App.css';
import PerfumeList from "./componenets/PerfumeList";
function App() {
  return (
  <div>
    <div className="App">
      <h1 className="App-header"> The Art that makes memory speaks </h1>
       <h3> The best compliment for a good look is a great "SCENT" </h3>
       <img
       id="shop-image"
       src="https://media.istockphoto.com/photos/spraying-perfume-on-dark-background-closeup-image-picture-id1155893537?k=6&m=1155893537&s=170667a&w=0&h=6rID0_7RWQbsEwWvQlMkQinwL0ev0afQfdK1AfNqun0=" />
       
    </div>
    
    <PerfumeList />
  </div> 
  );
}

export default App;
