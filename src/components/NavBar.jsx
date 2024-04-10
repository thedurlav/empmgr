import logo from '../target.png'
const NavBar = () => {
    return ( <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark
">
  <div className="container-fluid">
    <img src={logo} alt=""  height="30" className="d-inline-block align-text-top m-2" />

    <a className="navbar-brand text-light" href="#">  Employee Management System</a>
 

    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link  text-light" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-light" href="#">About Us</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu ">
            <li><a className="dropdown-item" href="/loginadmin">Admin</a></li>
            <li><a className="dropdown-item" href="#">Employee</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
               
           
    
    </> );
}
 
export default NavBar;