//import logo from './logo.svg';
//import './App.css';


function Food({fav}) {
  return <h1>I like {fav}</h1>
  
}
function App() {
  return (
    <div className="App">
    <h1>hello!!</h1>
    <Food fav="kimchi"/>
    <Food fav="ramen"/>
    <Food fav="samgeopsal"/>
    <Food fav="chukumi"/>
    
    </div>
    
  );
}

export default App;
