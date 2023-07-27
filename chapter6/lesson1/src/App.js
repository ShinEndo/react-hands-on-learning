import logo from './logo.svg';
import './App.css';
import StarRating from './StarRating';

function App() {
  // return <StarRating totalStars={10}/>
  return <StarRating style={{backgroundColor: "lightblue"}} totalStars={10} onDoubleClick={e => alert("double click")}/>
}

export default App;
