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
        <div className='shows' key={key}>
          <p>
          {shows.show.name}
          </p>
          <p>
          {shows.show.url}
          </p>
          <img src={shows.show.image} alt='SearchImages' />
        </div>
      )
    })}
    </>
  )
}
export default Input