import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrap">
          <div className="footer-content">
            <div className="footer-1">
              <h3>ABOUT FARM HOUSE</h3>
              <p> Who We Are Blog Work </p>
              <p>Investor Relations</p>
              <p>Contact Us</p>
              <p>Report Fraud</p>
            </div>
            <div className="footer-1">
              <h3>Privacy</h3>
              <p> Security</p>
              <p>Terms</p>
              <p>Contact Us</p>
              <p>Sitemap</p>
            </div>

            <div className="footer-1">
              <h3>Privacy</h3>
              <p> Security</p>
              <p>Terms</p>
              <p>CZomato For Enterprise</p>
              <p>Sitemap</p>
            </div>
          </div>
          <div className="bottom">
            <p>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners. 2008-2023 © MacDaddy
              Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
