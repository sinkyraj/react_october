
import { useState } from 'react'
import axios from 'axios'
import AddGifForm from './components/AddGifForm'

import StoredGifCard from './components/StoredGifCard'

import SearchGifForm from './components/SearchGifForm'
const App= ()=> {
  const [gifState, setGifState ]=useState({
    query:'',
    title: '',
    still: '',
    animated: '',
    storedGifs:[]
  })

  const handleInputChange =({target})=>{
   setGifState({...gifState, [target.name]:target.value})
  }
  
  const handleAddGif=event=>{
    event.preventDefault()
    const storedGifs=JSON.parse(JSON.stringify(gifState.storedGifs))
    storedGifs.push({
      title: gifState.title,
      still: gifState.still,
      animated: gifState.animated,
      active: gifState.still
    })
    setGifState({...gifState, storedGifs, title: '', still: '', animated: ''})
  }

  const handleSetActive =(prevUrl, newUrl)=>{
    const storedGifs = JSON.parse(JSON.stringify(gifState.storedGifs))
     storedGifs.forEach(gif =>{
       if (gif.active === prevUrl){
         gif.active = newUrl
       }
     })
     setGifState({...gifState, storedGifs})
  }

  const handlesearchGif=event=>{
    event.preventDefault()
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=j6yOF05YP8AGwMifwqeDBZ1RYjr4n0Tj&q=${gifState.query}`)
    .then(({data : { data: gifs}})=>{
      const gif= gifs[Math.floor(Math.random() * gifs.length)]
      //console.log(gif)
      setGifState({
        ...gifState,
        title: gif.title,
        still: gif.images.original_still.url,
        animated: gif.images.original.url
        // query: ''
      })
    })
    .catch(err=> console.log(err))
  }

  const handleDeleteGif=still=>{
    let storedGifs = JSON.parse(JSON.stringify(gifState.storedGifs))
    storedGifs=storedGifs.filter(gif=>gif.still !== still)
    setGifState({...gifState, storedGifs})
  }

return(
  <>
  <div className="container">
      <div class="row bg-light p-5 rounded-lg mb-3">
        <h1 class="display-4">Gif Collector</h1>
        <p class="lead">This is a simple app to collect gifs you want to save and view at a later date. It also allows you to pause/play the gifs at your own discretion.</p>
        <hr class="my-4" />
       <SearchGifForm 
       query={gifState.query}
       handlesearchGif={handlesearchGif}
       handleInputChange={handleInputChange}
       />
      </div>
    <div className="row">
      <div className="col-sm-6">

          <h3>Store a Gif</h3>
          <hr />
          <AddGifForm 
          title={gifState.title}
          still={gifState.still}
          animated={gifState.animated}
          handleInputChange={handleInputChange}
          handleAddGif={handleAddGif}
          />
      </div>
        <div className="col-sm-6">
          <h3>View Stored Gifs</h3>
          <hr />
       
          {
            gifState.storedGifs.map(({
              title, 
              still, 
              animated, 
              active 
            }) => (
            <StoredGifCard 
                 title={title}
                 still={still}
                 animated={animated}
                 active={active}
                 handleSetActive={handleSetActive}
                handleDeleteGif={handleDeleteGif}
              />
                ))
          }
          
          
        </div>
    </div>
  </div>

  </>
)
}
export default App