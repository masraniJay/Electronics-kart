import React from "react";
import './footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {

    return(
        <footer>
            <div className="footer-links">
                <h3>Quick Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>My Cart</li>
                    <li>Wishlist</li>
                </ul>
            </div>
            <div className="footer-links">
                <h3>Connect with me</h3>
                <ul className="footer-contact-links">
                    <li><LinkedInIcon /></li>
                    <li><GitHubIcon /></li>
                    <li><TwitterIcon /></li>
                    <li><InstagramIcon /></li>
                </ul>
            </div>
            
        </footer>
    )
}