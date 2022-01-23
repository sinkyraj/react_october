
// import { useState} from 'react'
const FetchApi=() =>{


  const handleApi=() =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>response.json())
    .then((json)=>console.log(json))
  }
  return(
   <div>

     <button onClick={handleApi}>click</button>
   </div>
  )
}

export default FetchApi