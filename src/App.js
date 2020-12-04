import React, {useState, useEffect} from 'react'
import './App.css';
import Input from './Input'

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
  // console.log(showsData)
}


  return (
    <>
    <div className="App-header">
      <h1>Show Finder</h1>
    </div>
    <div className='container'>
    <Input showsData={showsData}/>
    </div>
    </>
  );
}

export default App;
