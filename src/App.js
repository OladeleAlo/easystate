import Nav from "./components/Nav"
import Tweets from "./components/Tweets"
import Video from "./components/Video"
import './App.css';
import {useState,useEffect} from "react"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
 
  const [counter, setCounter] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [loading, setLoading] = useState(false)

   useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  const toggler = ()=>{
    setToggle((prev)=> !prev)

  }
  
  const handleIncrease = ()=>{
    setCounter((prev)=> prev +1)
  }
  const handleDecrease = ()=>{
    if(counter === 0){
      return counter;
    }
    setCounter((prev)=> prev - 1)
  }
  return (
    <div className="App">
      {
        loading ? 
          <ClimbingBoxLoader 
          loading= {loading}
          size={35}
          color= {"#f37a24"}
          />
          
        : 
        <div className="home">
        <Nav toggle={toggle}/>
        <Video numb = {counter}/>
        <div>
        <button onClick={handleDecrease}>Decreament</button>
        <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increament</button>
        </div>
        <button className={toggle ? "active" : " "} onClick={toggler}>Toggle</button>
        
        <Tweets />
        </div>
      }
      {/* <div className="home">
      <Nav toggle={toggle}/>
      <Video numb = {counter}/>
      <div>
      <button onClick={handleDecrease}>Decreament</button>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increament</button>
      </div>
      <button className={toggle ? "active" : " "} onClick={toggler}>Toggle</button>
      
      <Tweets />
      </div> */}
     
    </div>
  );
}

export default App;
