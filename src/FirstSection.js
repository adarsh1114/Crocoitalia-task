import React from 'react'
import './FirstSection.css';
import ProductSelection from './ProductSelection';
import { useState } from 'react';
import {Link} from "react-router-dom";

const FirstSection = () => {
  const products = [
    {
      id: 1,
      name: "MEN'S GUCCI JORDAAN CROCODILE LOAFER",
      price: 4100,
      image: "/path-to-green-loafer.jpg"
    },
    {
      id: 2,
      name: "MEN'S GUCCI JORDAAN LOAFER",
      price: 1050,
      image: "/path-to-tan-loafer.jpg"
    },
    {
      id: 3,
      name: "MEN'S HORSEBIT 1953 LOAFER",
      price: 1190,
      image: "/path-to-brown-loafer.jpg"
    },
    {
      id: 4,
      name: "MEN'S GUCCI JORDAAN LOAFER",
      price: 1050,
      image: "/path-to-dark-brown-loafer.jpg"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(current => 
      current === products.length - 4 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(current => 
      current === 0 ? products.length - 4 : current - 1
    );
  };
  const [sections, setSections] = useState({
    help: true,
    payment: false,
    shipping: false
  });

  const toggleSection = (section) => {
    setSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  const handlePrintButton = ()=>{
    window.open('/print',"_blank");
  }
  return (
    <div>
    <div className="bag-page">
      
    <div className="bag-header">
      <h1>Shopping Bag</h1>
    </div>
    
      <div className="bag">
        <div className="bag-products">
          <div className="heading">
            <h2>YOUR SELECTIONS</h2>
            <h3 onClick={handlePrintButton}>🖨 Print</h3>
          </div>
         <ProductSelection/>
        </div>

        <div className="bag-right">
          <div className="order-sum">
            <h2 className="heading-sum">ORDER SUMMARY</h2>
            <ul>
              <li>
                <span>Subtotal</span> <span>total</span>
              </li>
              <li>
                <span>Shipping</span> <span>Free (Next Day) v</span>
              </li>
              <li>
                <span>Estimated Tax</span> <span>Calculate</span>
              </li>
              <li>
                <span>Estimated Total</span>{" "}
                <span id="total-cart">total</span>
              </li>
            </ul>
            <div>
              <h2>VIEW DETAILS</h2>
              <p>
                You will be charged only at the time of shipment except for
                DIY orders where the full amount is charged at the time of
                purchase.
              </p>
            </div>
            <div className="bag-btns">
            <Link to="/checkout"
                 className="checkout-btn">CHECKOUT</Link>                
              <div>OR</div>
              <button className="pay-pal-btn">PAY WITH ©PayPal</button>
            </div>
          </div>
          {/* <CheckoutAccordion /> */}
          
      <div className="express-shipping-banner">
        <span className="shipping-icon">🚚</span>
        <span className="shipping-icon">COMPLIMENTARY EXPRESS SHIPPING</span>
      </div>

      <div className="help-container">
        <div className="section">
          <div className="sections-header" onClick={() => toggleSection('help')}>
            <h3>MAY WE HELP?</h3>
            <span className="toggle-icon">{sections.help ? '−' : '+'}</span>
          </div>
          {sections.help && (
            <div className="section-content">
              <a href="tel:+1.877.482.2430" className="contact-link">
                📞 +1.877.482.2430
              </a>
              <a href="mailto:assistance@us-onlineshopping.gucci.com" className="contact-link">
                ✉️ assistance@us-onlineshopping.gucci.com
              </a>
            </div>
          )}
        </div>

        <div className="section">
          <div className="sections-header" onClick={() => toggleSection('payment')}>
            <h3>PAYMENT OPTIONS</h3>
            <span className="toggle-icon">{sections.payment ? '−' : '+'}</span>
          </div>
        </div>

        <div className="section">
          <div className="sections-header" onClick={() => toggleSection('shipping')}>
            <h3>SHIPPING OPTIONS</h3>
            <span className="toggle-icon">{sections.shipping ? '−' : '+'}</span>
          </div>
          {sections.shipping && (
          <div className='shipping-toggle'>
            <div className='details-shipping'>
              <span style={{width:"101px"}}>Collect In-Store Next Business Day</span>
              <span>Free</span>
            </div>
            <div className='details-shipping'>
              <span style={{width:"90px"}}>Premium Express</span>
              <span>Free</span>
            </div>
            <div className='details-shipping'>
              <span style={{width:"90px"}}> Next Business Day</span>
              <span>$ 25</span>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
        </div>
    </div>
    <div className="recommendations-container">
      <h2 className="recommendations-title">YOU MAY ALSO LIKE</h2>
      
      <div className="products-slider">
        <button 
          className="slider-arrow left-arrow" 
          onClick={prevSlide}
        >
          ‹
        </button>

        <div className="products-wrapper">
          {products.map((product, index) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container1">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image1"
                />
                <button className="favorite-button">♡</button>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">$ {product.price}</p>
                <button className="shop-button">SHOP THIS</button>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="slider-arrow right-arrow" 
          onClick={nextSlide}
        >
          ›
        </button>
      </div>
    </div>
    <div className="container">
      <header className="header">
        <h1>GUCCI SHOPPING EXPERIENCE</h1>
      </header>
      
      <nav className="nav-links">
        <a href="#">Authentic Gucci Guarantee</a>
        <a href="#">The Finishing Touch</a>
        <a href="#">Returns & Exchanges</a>
      </nav>

      <div className="privacy-notice">
        <p>
          Gucci recognizes the importance of protecting the privacy of personal and financial information to ensure a safe and secure shopping experience.
        </p>
        <a href="#">Read our privacy policy</a>
      </div>

      <div className="recently-viewed">
        <div className="recently-viewed-sidebar">
          <h2>RECENTLY VIEWED</h2>
          <p>Items you have recently viewed.</p>
        </div>
        
        <div className="main-content">
          <div className="ad-campaign">
            <span>AD CAMPAIGN</span>
          </div>
          
          <div className="product-image-container">
            <img 
              src="/path-to-your-image.jpg"
              alt="Black leather loafer"
              className="product-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FirstSection
