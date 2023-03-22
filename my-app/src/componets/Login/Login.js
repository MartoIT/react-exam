import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export const Login = () => {
    const {onLoginSubmit} = useContext(AuthContext)

    return (
        <section>
        
        <div className="container-fluid bg-registration py-5 "  style={{margin: "90px 0", paddingLeft: "550px"}}>
        <div className="container py-5 ">
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-primary text-center p-4" >
                            <h1 className="text-white m-0">Login</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-white p-5" >
                            <form>
                                
                                <div className="form-group">
                                    <input type="email" className="form-control p-4" placeholder="Your email" name="email" required="required" />
                                </div>
                                <div className="form-group">
                                <input type="password" className="form-control p-4" placeholder="Password" name="password" required="required" />
                                </div>
                                <div>
                                    <button className="btn btn-primary btn-block py-3" type="submit">Login</button>
                                </div>
                                <p style={{margin: "10px"}}>Not a member yet? <Link to={"/registration"}> Sign up now</Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        </section>
    
    );
};