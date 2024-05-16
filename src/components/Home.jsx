import home1 from '../home1.jpg'
import home2 from '../home2.png'
import logo from '../target.png'
import { useEffect, useState } from "react";
const Home = () => {

   
    let [page,setPage] = useState(0)
    let pageChange = (n)=>{
        if(page!=n){
            setPage(n)
            console.log("Page Change")
        }
    }

    return (
        <div className="outer-container bg-info" >
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container-fluid">
                    <img src={logo} alt=""  height="30" className="d-inline-block align-text-top m-2" />

                    <a className="navbar-brand text-light" href="#">  Employee Management System</a>
                

                    <div className="collapse navbar-collapse " id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link  text-light" onClick={()=>{pageChange(0)}}>Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link  text-light" onClick={()=>{pageChange(1)}}>About Us</a>
                        </li>
                    
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            Login
                        </a>
                        <ul className="dropdown-menu ">
                            <li><a className="dropdown-item" target='_blank' href="/loginadmin">Admin</a></li>
                            <li><a className="dropdown-item" target='_blank' href="/loginemp">Employee</a></li>
                        </ul>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
                                <div className="inner-container mx-auto my-3 bg-light d-flex flex-row">
                                   {
                                    (()=>{
                                        if(page==0)
                                            return ( <>
                                            <img src={home1} alt="" height="100%" style={{width:"40vw"}}/>
                                            <img src={home2} alt="" height="100%"/>
                                            </>)
                                        else{
                                            return (<>
                                                <img src={home2} alt="" height="100%"/>
                                                <div style={{height:"100%",width:"40vw"}}><h1>Hello</h1></div>
                                            </>)
                                        }
                                    })()
                                   }
                                </div>
            
        </div>
     );
}
 
export default Home;