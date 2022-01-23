const AddGifForm =({
  title,
  still,
  animated,
  handleInputChange,
  handleAddGif
})=>{
 return(
   <>
     <form>
       <div className="mb-3">
         <label htmlFor="title" className="form-label">Title</label>
         <input type="text"
          className="form-control" 
          name='title'
          value={title}
          onChange={handleInputChange}
          />
        
       </div>
       <div className="mb-3">
         <label htmlFor="still" className="form-label">Still</label>
         <input 
         type="text" 
         className="form-control"
         name= 'still'
         value={still}
         onChange={handleInputChange}
         />
       </div>

       <div className="mb-3">
         <label htmlFor="animated" className="form-label">Animated</label>
         <input 
         type="text" 
         className="form-control" 
         name='animated'
         value={animated}
         onChange={handleInputChange}
         />
       </div>
      
       <button 
       type="submit" 
       className="btn btn-primary"
       onClick={handleAddGif}
       >Add Gif</button>
     </form>
   
   </>
 )

}

export default AddGifForm 
