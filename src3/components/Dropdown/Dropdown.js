
const Dropdown = ({ name, pages})=>{
  return(
    <>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {name}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
         
          {
            pages.map(page => (<li><a className="dropdown-item" href="#">{page}</a></li>))
          }
          {/* 
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Something else here</a></li> */}
        </ul>
      </li>
    </>
  )
}

export default Dropdown