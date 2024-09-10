import Barlinks from "./Barlinks";
import Footer from "./Footer";

const Login = () => {
    return ( 
        <div>
            <Barlinks/>
            <div>
                <div>
                    <h1>LOGIN</h1>
                    <div>
                        <input type="text" placeholder="EMAIL ADDRESS" />
                    </div>
                    <div>
                        <input type="password" placeholder="PASSWORD" />
                    </div>

                    <div>
                        <h3>FORGOT PASSWORD</h3>

                        <button>LOGIN</button>
                    </div>

                    <h2>Login With:</h2>
                    
                    <div>
                        <div>
                            <button>Facebook</button>
                        </div>
                        <div>
                            <button>Sign in</button>
                        </div>
                    </div>

                </div>
                <div>
                    <div>
                        <input type="text" placeholder="FIRST NAME" />
                    </div>
                    <div>
                        <input type="text" placeholder="LAST NAME" />
                    </div>
                    <div>
                        <input type="text" placeholder="BIRTHDAY" />
                    </div>
                    <div>
                        <input type="number" placeholder="+256" />
                        <input type="text" placeholder="MOBILE NUMBER" />
                    </div>
                    <div>
                        <input type="email" placeholder="EMAIL ADDRESS"/>
                    </div>
                    <div>
                        <input type="password" placeholder="PASSWORD"/>
                    </div>
                    <div>
                        <input type="password" placeholder="CONFIRM PASSWORD"/>
                    </div>

                    <div>
                        <button>SIGN UP</button>
                    </div>

                </div>
            </div>
            <Footer/>

        </div>
     );
}
 
export default Login;