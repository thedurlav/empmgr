import { useRef, useState } from 'react';
import adlog from '../adlog.jpg'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const AdminLogin = () => {
    let username = useRef();
    let password = useRef();
    let otp = useRef();
    let [firstVerify,setFirstVerify] = useState(false)
    let navigate = useNavigate()
    let handleLogin = ()=>{
      
        if(!firstVerify){
            let data = {username:username.current.value,password:password.current.value}

        axios.post("http://localhost:8080/login",data).then((res)=>{
            console.log(res.data);
            localStorage.setItem("otp",res.data.otp)
        }).catch((err)=>{
            console.log(err);
        })
        setFirstVerify (true)
        }
        else{
            let storedOtp = localStorage.getItem("otp");
            if(otp.current.value == storedOtp )
                navigate("/createEmp")
            else
                alert("invalid otp try again")
        }
       
    }


    return (  <>

        <div className="container">
            <div className="login-img">
                <img src={adlog} alt="Login illustration" />
            </div>
            <div className="login-container">
                {
                    !firstVerify && <form className="login-form">
                    <input type="text" name="username" placeholder="Username" ref={username} />
                    <input type="password" name="password" placeholder="Password" ref={password} />
                    <button type="submit" onClick={(e)=>{e.preventDefault();handleLogin()}} >Login</button>
                </form>
                }
                 {
                    firstVerify && <form className="login-form">
                    <h2>OTP Verification </h2>
                    <input type="text" name="otp" placeholder="000000" ref={otp} />
                    <button type="submit" onClick={(e)=>{e.preventDefault();handleLogin()}} >Login</button>
                </form>
                }
            </div>
        </div>
    </>);
}
 
export default AdminLogin;