import React from "react";

import twitter from "./assets/twitter.png";

export default function Footer() {
  return (
    <div class="footer">
      <span class="footer-item link">
        <a href="mailto:info@OpenClimateFix.org">CONTACT</a>
      </span>
      <a href="https://openclimatefix.us20.list-manage.com/subscribe?u=ceb017fe32f0a4620227fda8a&id=d56fc32a31">
        <img height="30" width="30" src={twitter} class="twitter footer-item" />
      </a>
      <span class="footer-item link">
        <a href="https://airtable.com/shrl59GJ96csVF4WB">GET INVOLVED</a>
      </span>
      <span class="footer-item link">
        <a href="https://openclimatefix.us20.list-manage.com/subscribe?u=ceb017fe32f0a4620227fda8a&id=d56fc32a31">
          NEWSLETTER
        </a>
      </span>
      <span class="footer-item link">
        <a href="http://openclimatefix.discourse.group/">FORUM</a>
      </span>
      <span class="footer-item link">
        <a href="http://jack-kelly.com/">BLOG</a>
      </span>
    </div>
  );
}
