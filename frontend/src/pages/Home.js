import './Home.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <Navbar />
            <section 
            className=
            "hero"
            >
            <div 
            className=
            "hero-content">
                <h2>Lost Something on Campus?</h2>
                <p>The Campus Lost & Found system helps you find your lost items or report items you've found.</p>

                <div className="hero-buttons">
                    <Link to="/login" className="btn btn-primary">
                        Report Lost Item
                    </Link>
                    <Link to="/login" className="btn btn-secondary">
                        Report Found Item
                    </Link>
                </div>

            </div>
            <div 
            className=
            "hero-image">
                <img 
                src="l&f.jpeg" 
                alt="Lost and Found illustration" 
                />
            </div>
        </section>

        <section 
        className=
        "how-it-works"
        >
            <h2>How It Works</h2>
            <div 
            className="steps"
            >
                <div 
                className="step"
                >
                    <div 
                    className="step-icon"
                    >
                        <i 
                        className=
                        "fas fa-user-plus"
                        ></i>
                    </div>
                    <h3>Create Account</h3>
                    <p>Register to access all features of the lost and found system.</p>
                </div>
                <div 
                className=
                "step"
                >
                    <div 
                    className=
                    "step-icon"
                    >
                        <i 
                        className=
                        "fas fa-clipboard-list"
                        ></i>
                    </div>
                    <h3>Submit Report</h3>
                    <p>Report a lost item or an item you've found on campus.</p>
                </div>
                <div 
                className="step"
                >
                    <div 
                    className=
                    "step-icon"
                    >
                        <i 
                        className=
                        "fas fa-search"
                        ></i>
                    </div>
                    <h3>Search Items</h3>
                    <p>Browse or search through reported items.</p>
                </div>
                <div 
                className="step"
                >
                    <div 
                    className=
                    "step-icon"
                    >
                        <i 
                        className=
                        "fas fa-bell"
                        ></i>
                    </div>
                    <h3>Get Notified</h3>
                    <p>Receive notifications when items matching your description are found.</p>
                </div>
            </div>
        </section>

        {/* <section 
        className=
        "recent-items"
        >
            <h2>Recently Reported Items</h2>
            <div 
            className=
            "items-grid" 
            id=
            "recent-items-container"
            >
                <div 
                className=
                "loading"
                >Loading recent items...</div>
            </div>
            <div 
            className=
            "center-button"
            >
                <a 
                href="pages/search.html"
                 className=
                 "btn"
                 >View All Items</a>
            </div>
        </section> */}

        {/* <section 
        className=
        "statistics"
        >
            <div 
            className=
            "stat-box"
            >
                <h3 id="total-items">0</h3>
                <p>Total Items</p>
            </div>
            <div 
            className=
            "stat-box"
            >
                <h3 
                id=
                "returned-items"
                >0</h3>
                <p>Items Returned</p>
            </div>
            <div 
            className=
            "stat-box"
            >
                <h3 
                id=
                "active-users"
                >0</h3>
                <p>Active Users</p>
            </div>
        </section> */}
        <Footer />
        </div>
         






    );
};


export default Home;