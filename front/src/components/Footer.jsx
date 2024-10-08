import React from "react";
import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We offer the finest collection of watches from the world's most
            renowned brands. Quality and customer satisfaction are our top
            priorities. Our curated selection ensures you'll find the perfect
            timepiece to match your style. Discover elegance and precision with
            our exclusive watch collections.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/shop">Shop</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>
            <i className="fas fa-phone"></i> 01796516294 or 01308194899
          </p>
          <p>
            <i className="fas fa-envelope"></i> fahmidulkarimrafi@gmail.com
          </p>
          <p>
            <i className="fas fa-envelope"></i> sayekalsami@gmail.com
          </p>
          <a href="https://www.google.com/maps/place/Bicharpoti+Mannan+Tower/@23.7602206,90.4125456,19.77z/data=!4m6!3m5!1s0x3755b963f2a63d31:0xfcef95d5587429a3!8m2!3d23.7605285!4d90.4124016!16s%2Fg%2F11v5tjbphl?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D">
            <i className="fas fa-map-marker-alt"></i> Modhubag, Hatirjheel,
            Dhaka-1208.
          </a>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Time-Gallery | Designed by Rafi&Piyal
      </div>
    </footer>
  );
};

export default Footer;
