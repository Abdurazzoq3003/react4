import React from "react";
import "./App.css";
import intersect from "./assets/Intersect.png";
import Fattaush from "./assets/Fattoush.png";
import vegetable from "./assets/Vegetable.png";
import egg from "./assets/Egg.png";
import mask from "./assets/Mask group.png";
import catering from "./assets/catering.png";
import fast from "./assets/fast.png";
import shop from "./assets/shop.png";
import gift from "./assets/gift.png";

export default function () {
  return (
    <div>
      <header class="header">
        <div class="container">
          <h1 class="logo">
            Food<span>Delight</span>
          </h1>
          <nav class="nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <a href="#" class="order-btn">
            Order Now
          </a>
        </div>
      </header>
      {/* hero */}

      <section class="hero">
        <div class="container">
          <div class="hero-text">
            <h1>Dive into Delights of Delectable Food</h1>
            <p>
              Where Each Bite Weaves a Story of Culinary Magic and Freshness.
            </p>
            <a href="#" class="hero-btn">
              Order Now
            </a>
            <a href="#" class="video-btn">
              Watch Video
            </a>
          </div>
          <div class="hero-image">
            <img src={intersect} alt="" />
          </div>
        </div>
      </section>
      {/* Categories */}
      <section class="categories">
        <div class="container">
          <h2>Popular Categories</h2>
          <div class="category-list">
            <div class="category-item">Main Dish</div>

            <div class="category-item">Greek Feast</div>
            <div class="category-item">Desserts</div>
            <div class="category-item">Browse All</div>
          </div>
        </div>
      </section>
      {/* Menu */}
      <section class="menu">
        <div class="container">
          <h2>Standout Dishes From Our Menu</h2>
          <div class="menu-items">
            <div class="menu-item">
              <img src={Fattaush} alt="" />
              <h3>Fettuccine Salad</h3>
              <p>$14.00</p>
            </div>
            <div class="menu-item">
              <img src={vegetable} alt="" />
              <h3>Vegetable Salad</h3>
              <p>$12.00</p>
            </div>
            <div class="menu-item">
              <img src={egg} alt="" />
              <h3>Egg Royal Salad</h3>
              <p>$13.00</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section class="testimonials">
        <div class="container">
          <img src={mask} alt="" />
          <h2>What Our Customers Say About Us</h2>
          <p>
            The true essence of dining: Food so right, you'll want to tell
            everyone you know about the experience.
          </p>
          <p>
            <strong>5.0</strong> (1,234 Reviews)
          </p>
        </div>
      </section>

      <section class="services">
        <div class="container">
          <h2>Our Culinary Journey And Services</h2>
          <p>
            Bringing you culinary delight through modern experiences and
            authentic tastes.
          </p>
          <div class="service-list">
            <div class="service-item">
              Catering
              <img src={catering} alt="" />
            </div>
            <div class="service-item">
              Fast Delivery
              <img src={fast} alt="" />
            </div>

            <div class="service-item">
              Online Ordering
              <img src={shop} alt="" />
            </div>
            <div class="service-item">
              Gift Cards
              <img src={gift} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer class="footer">
        <div class="container">
          <p>&copy; 2024 FoodDelight | All rights reserved</p>
          <ul class="social-links">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
