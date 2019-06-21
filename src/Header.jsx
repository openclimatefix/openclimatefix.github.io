import React from "react";

export default function Header() {
  return (
    <div>
      <div class="menu">
        <div class="menu__inner">
          <div class="menu__logo">
            <div class="logo">
              <a>Open Climate Fix</a>
            </div>
          </div>
          <div class="menu__items">
            <div class="menu__item link">
              <a href="https://airtable.com/shrl59GJ96csVF4WB">GET INVOLVED</a>
            </div>
            <div class="menu__item link">
              <a href="https://openclimatefix.us20.list-manage.com/subscribe?u=ceb017fe32f0a4620227fda8a&id=d56fc32a31">
                NEWSLETTER
              </a>
            </div>
            <div class="menu__item link">
              <a href="http://openclimatefix.discourse.group/">FORUM</a>
            </div>
            <div class="menu__item link">
              <a href="http://jack-kelly.com/">BLOG</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
