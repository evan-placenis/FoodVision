import './App.css';
import React, {useState, useEffect} from 'react'
function App() {
  const [data, setData] = useState([{}]);

  useEffect(()=>{
    fetch("/members")
    .then( res => res.json())
    .then( data => {
        setData(data);
        console.log(data);
    })
    .catch(error =>{
      console.error(error);
    });
  }, [])


  return (
    <div className="App">
      <p>THIS IS AN AI PROJECT</p>
    </div>
  );
}

export default App;
