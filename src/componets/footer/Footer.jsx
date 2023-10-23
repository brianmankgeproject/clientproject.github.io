import React from "react"
import "./Footer.scss"

const Footer = () => {
    return(
    <div className="footer">
        <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Food Deliveries</span>
            <span>Courier Services</span>
            <span>Retail Deliveries</span>
            <span>E-commerce Package Deliveries</span>
            <span>Pharmacy & Meds Delivery</span>
            <span>Flower & Gift Deliveries</span>
            <span>More..</span>
            
            
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on *websitename</span>
            <span>Buying on *websitename</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Social Media</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From *websitename</h2>
            <span>*websitename Business</span>
            <span>Get Inspired</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>
                        <hr />
            <div className="bottom">
                <div className="left">
                    <h2>*website name</h2>
                    <span>Designed by <a href="www.webtechnikal.com">webtechnikal</a></span>
                </div>
                <div className="right">
                    <div className="social">
                        <img src="img/twitter.png" alt="" />
                        <img src="img/facebook.png" alt="" />
                        <img src="img/linkedin.png" alt="" />
                        <img src="img/pinterest.png" alt="" />
                        <img src="img/instagram.png" alt="" />
                    </div>
                    <div className="link">
                        <img src="./img/language.png" alt="" />
                        <span>English</span>
                    </div>
                    <div className="link">
                        <img src="./img/coin.png" alt="" />
                        <span>BWP</span>
                    </div>
                    <img src="./img/accessibility.png" alt="" />

                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Footer