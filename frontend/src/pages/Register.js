import './Register.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div>
            <Navbar />
             <section 
             className=
             "form-container"
             >
            <div 
            className=
            "form-box"
            >
                <h2><i 
                class=
                "fas fa-user-plus"
                ></i> Create an Account</h2>
                <p 
                className=
                "form-intro"
                >Join our campus lost and found community to report lost items or items you've found.</p>
                
                <form 
                id=
                "register-form"
                >
                    <div 
                    className=
                    "form-group"
                    >
                        <label 
                        for=
                        "fullname"
                        >Full Name</label>
                        <input 
                        type="text" 
                        id="fullname" 
                        name="fullname" required 
                        />
                    </div>
                    
                    <div 
                    className=
                    "form-group"
                    >
                        <label 
                        for="email"
                        >Email Address</label>
                        <input 
                        type="email" 
                        id="email"
                         name="email" 
                         required 
                         />
                    </div>
                    
                    <div 
                    className=
                    "form-group"
                    >
                        <label 
                        for="phone"
                        >Phone Number</label>
                        <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="(Optional)" 
                        />
                    </div>
                    
                    <div 
                    className=
                    "form-group"
                    >
                        <label 
                        for="password"
                        >Password</label>
                        <input 
                        type="password" 
                        id="password" 
                        name="password" required 
                        />
                        <div 
                        className=
                        "password-strength"
                        >
                            <div 
                            className=
                            "strength-meter"
                            ></div>
                            <span 
                            className=
                            "strength-text"
                            >Password strength</span>
                        </div>
                    </div>
                    
                    <div 
                    className=
                    "form-group"
                    >
                        <label 
                        for="confirm-password"
                        >Confirm Password</label>
                        <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password" 
                        required 
                        />
                    </div>
                    
                    <div 
                    className=
                    "form-group checkbox-group"
                    >
                        <input 
                        type="checkbox" 
                        id="terms" 
                        name="terms" 
                        required 
                        />
                        <label 
                        for="terms"
                        >I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                    </div>
                    
                    <div 
                    className=
                    "form-actions"
                    >
                        <button 
                        type="submit" 
                        class="btn btn-primary"
                        >Create Account</button>
                    </div>
                    
                    <div 
                    className=
                    "form-footer"
                    >
                       <p>Already have an account? <Link to="/login">Login here</Link></p>

                    </div>
                </form>
            </div>
        </section>
        <Footer />
        </div>




    )
}

export default Register;