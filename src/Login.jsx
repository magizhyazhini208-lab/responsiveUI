import { useState } from "react"
import './login.css'
function Login() {
    const [login,setlogin]=useState(true);
    function check()
    {
        setlogin(!login);
    }

    if(login){
        return (
            <main className="container">
                <div className="main1">
                    <h1>Have not register yet!!!</h1>
                    <h5>Let's Register Now</h5>
                    <button onClick={check}>SignUp</button>
                </div>   
                <div className="main4">
                    <div className="header">
                        <h1>User Login</h1>
                    </div>
                    <div className="content">
                        <form name="login">
                            <div  className="contentGrid">
                                <label>User Name</label>
                                <input type="text" name="userName" placeholder="User Name"></input>
                            </div>
                            <div  className="contentGrid">
                                <label>Password</label>
                                <input type="password" name="passord" placeholder="*********"></input>
                            </div>
                            <div>
                                <button>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        )
    }
    else{
        return (
            <main className="container">   
                <div className="main2">
                    <div className="header">
                        <h1>Register</h1>
                    </div>
                    <div>
                        <form name="login">
                            <div   className="contentGrid">
                                <label>User Name</label>
                                <input type="text" name="userName" placeholder="User Name"></input>
                            </div>
                            <div   className="contentGrid">
                                <label>Password</label>
                                <input type="password" name="password" placeholder="*********"></input>
                            </div>
                            <div   className="contentGrid">
                                <label>ReEnter-Password</label>
                                <input type="password" name="password" placeholder="*********"></input>
                            </div>
                            <div   className="contentGrid">
                                <label>Email-ID</label>
                                <input type="email" name="email" placeholder="abc@gmail.com"></input>
                            </div>
                            <div   className="contentGrid">
                                <label>Mobile Number</label>
                                <input type="number" name="mobile" placeholder="Contact Number"></input>
                            </div>
                            <div>
                                <button>SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main3">
                    <h1>Already Have an Account!!!</h1>
                    <h5>Just Login</h5>
                    <button onClick={check}>LogIn</button>
                </div>
            </main>
        )
    }
}
export default Login