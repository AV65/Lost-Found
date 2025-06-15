import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
       <div 
      className=
      "footer-container"
      >
        <div 
        className=
        "footer-section"
        >
          <h3>Campus Lost &amp; Found</h3>
          <p>A service to help campus community members find their lost items.</p>
        </div>
        <div 
        className=
        "footer-section"
        >
          <h3>Quick Links</h3>
         <ul>
              <li><Link to="/search">Search Items</Link></li>
              <li><Link to="/report-lost">Report Lost Item</Link></li>
              <li><Link to="/report-found">Report Found Item</Link></li>
         </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: lostandfound@campus.edu</p>
          <p>Phone: (555) 123-4567</p>
          <p>Location: Student Center, Room 101</p>
        </div>
      </div>
      <div 
      className=
      "footer-bottom"
      >
        <p>&copy; 2025 Campus Lost &amp; Found System. All rights reserved.</p>
      </div>
    </div>
     
  );
}

export default Footer;
