import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <h3>Quick Links</h3>

        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/cart">
          <li>My Cart</li>
        </Link>
        <Link to="/wishlist">
          <li>Wishlist</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </div>
      <div className="footer-links">
        <h3>Connect with me</h3>
        <div className="footer-contact-links">
          <a
            href="https://www.linkedin.com/in/jay-masrani-71a569192/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <LinkedInIcon />
            </li>
          </a>
          <a
            href="https://github.com/masraniJay"
            target="_blank"
            rel="noreferrer"
          >
            
            <li>
              <GitHubIcon />
            </li>
          </a>
          <a
            href="https://twitter.com/masranijay18"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <TwitterIcon />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/jay-masrani-71a569192/"
            target="_blank"
            rel="noreferrer"
          >
            
            <li>
              <InstagramIcon />
            </li>
          </a>
        </div>
      </div>
    </footer>
  );
}
