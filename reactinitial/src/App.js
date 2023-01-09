import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Characters from "./components/Characters";
import Subscription from "./components/Subscription";

const App = () => {

  const[characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://demoapi.com/api/series/howimetyourmother`)
    .then((res) => res.json())
    .then((data)=> {
      setTimeout(()=>{
      setCharacters(data)
      }, 5000);
    });
  },[]);
  
  console.log(characters);
  return (
    <>
    <div>
      Series Api
    </div>

    {characters.length > 0 ? <Characters characters={characters} /> : <LoadingMask />}
    
    <Subscription />
    </>
  )
}

export default App
