
const NavTab = ({ name }) => {
  return(
    <>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">{name}</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li> */}
    </>
  )
}

export default NavTab