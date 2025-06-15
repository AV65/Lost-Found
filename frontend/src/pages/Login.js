
import './Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div>
            <Navbar />
             <section className="page-header">
            <div className="container">
                <h1>Login to Your Account</h1>
                <p>Access your dashboard and manage your lost and found reports</p>
            </div>
        </section>

        <section className="form-section">
            <div className="form-container">
                <div className="form-header">
                    <h2>Sign In</h2>
                    <p>Enter your credentials to access your account</p>
                </div>
                
                <form id="login-form">
                    <div className="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                    </div>
                    
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="remember-me" />
                        <label className="form-check-label" for="remember-me">Remember me</label>
                    </div>
                    
                    <div id="login-error" className="error-message"></div>
                    
                    <div className="form-actions">
                        <a href="#" className="forgot-password">Forgot Password?</a>
                        <button type="submit" className="btn btn-primary">Sign In</button>
                    </div>
                </form>
                
                <div className="form-footer">
                   <p>Don't have an account? <Link to="/register">Register Now</Link></p>

                </div>
            </div>
        </section>
        <Footer />
        </div>
    );
};

export default Login;