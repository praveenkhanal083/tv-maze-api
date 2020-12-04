import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

const[ showsData, setShowsData ] = useState([])

useEffect(() => {
  loadData()
}, [])

const loadData = async () => {
  await fetch('https://api.tvmaze.com/search/shows?q=walking')
  .then (res => res.json())
  .then(recievedData => setShowsData(recievedData))
  .catch(err => {
    console.log(err)
  })
  console.log(showsData)
}


  return (
    <div className="App">
      <>
      hello
      </>
    </div>
  );
}

export default App;
