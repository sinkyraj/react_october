const StoredGifCard = ({
  title,
  still,animated,
  active,
  handleSetActive,
  handleDeleteGif,
})=>{
return(
  <>
    <div className="card" >
      <img src={active}
      className="card-img-top" 
      alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          
         {/* <button 
         className="btn btn-success"
         >
           Play
           </button> */}
           {
             active=== still ? (
               <button 
               className="btn btn-success"
               onClick={()=> handleSetActive(active, animated)}>
                 Play</button>
             ) : (
             <button 
             className="btn btn-secondary"
             onClick={() => handleSetActive(active, still )}>
               Pause</button>)
           }
           <button onClick={() =>handleDeleteGif(still)} className="btn btn-danger">Delete</button>
        </div>
    </div>
  </>
)

}

export default StoredGifCard