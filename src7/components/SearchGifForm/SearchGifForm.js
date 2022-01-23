const SearchGifForm=({
  query,
  handlesearchGif,
  handleInputChange
}) =>{
return(
  <>
    <form>
      <div className="mb-3">
        <label htmlFor="query" className="form-label">Query</label>
        <input type="text"
          className="form-control"
          name='query'
          value={query}
          onChange={handleInputChange}
        />

      </div>
      

      <button
        type="submit"
        className="btn btn-primary"
        onClick={handlesearchGif}
      >Search for a Gif</button>
    </form>
  
  </>
)

}

export default SearchGifForm