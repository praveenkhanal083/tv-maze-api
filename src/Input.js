import React, {useState} from 'react'

function Input({showsData}) {
  // console.log(showsData)

  const [ searchTerm, setSearchTerm ] = useState('')
  const [ searchShows, setSearchShows ] = useState([])

  const handleSubmit =() => {
    setSearchShows([...searchShows, {item:searchShows, key:Date.now()}])
    // console.log(searchShows)
    setSearchTerm('')
  }
  return(
    <>
    <div className='input-box'>
    <input 
    type='text' 
    placeholder='search show titles' 
    onChange ={(event) => {setSearchTerm(event.target.value)}}
    />
    <button 
    onClick={handleSubmit}
    > Search
    </button>
    </div>
    {showsData.filter((shows) => {
      if (searchTerm == "") {
        return shows
      }else if(shows.show.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return shows
      }
    }).map((shows, key) => {
      return (

        <section className='card' key={key}>
        <img className='card-image' src={shows.show.image} alt='SearchImages' />
        <h4 className='card-title'>{shows.show.name}</h4>
        <p>{shows.show.summary}</p> 
        </section>
      )
    })}
    </>
  )
}
export default Input