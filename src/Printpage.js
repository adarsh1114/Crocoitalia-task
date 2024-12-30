import React from 'react'
import './Printpage.css'
const Printpage = () => {
  return (
    <div className="gucci-shopping-container">
    <header className="gucci-header">
      <div className='logo-print'>
      <div className="gucci-logo">GUCCI</div>
      <h3 className="gucci-print-btn">🖨 Print</h3>
      </div>
      <div className="gucci-contact">
        <span className="gucci-phone">📞 +1.877.482.2430</span>
        <span className="gucci-separator"> | </span>

        <span className="gucci-email">✉️ assistance@us-onlineshopping.gucci.com</span>  
      </div>
    </header>
    <h1 className="gucci-title">MY SHOPPING BAG</h1>
    <h2 className="gucci-bag-number">BAG #USCART406062958</h2>
    <hr className='horizontalline'></hr>
    <main className="gucci-main">
      <div className="gucci-product-container">
        <div className="gucci-product-image">
          <img src="/placeholder.svg" alt="Men's sneaker" />
        </div>
        <div className='product-quantity'>
        <div className="gucci-product-details">
          <h4 className="gucci-product-name">Men's sneaker with Interlocking G</h4>
          <p className="gucci-style-number">Style # 791742 AAEGA 2242</p>
          <p className="gucci-style-desc">Style: dark brown suede</p>
          <p className="gucci-size">size: 5 = 5.5 US</p>
          
        </div>
          <div className='price-quantity'>
          <div className="gucci-price">$ 920</div>
        <div className="gucci-quantity">
          <span>Qty: 1</span>
        </div>
        </div>
        </div>
        
      </div>
      <div className="gucci-availability">
      <p >AVAILABLE</p>
          <p className="gucci-delivery">
            Enjoy complimentary delivery or Collect In Store. Estimated delivery
            within 2 - 3 business days. Delivery between 9 am - 8 pm, Monday to
            Friday. A signature will be required upon delivery.
          </p>
      </div>
      </main>
      <hr className='horizontalline'></hr>
      <div className="gucci-order-summary">
      <div className="gucci-summary-row">
        <span className="gucci-summary-label">Subtotal</span>
        <span className="gucci-summary-value">$ 920</span>
      </div>
      
      <div className="gucci-summary-row">
        <span className="gucci-summary-label">Shipping</span>
        <span className="gucci-shipping-value">Free (Premium Express)</span>
      </div>
      
      <div className="gucci-summary-row">
        <span className="gucci-summary-label">Estimated Tax</span>
        <span className="gucci-summary-value">$0.00</span>
      </div>
      
      <div className="divider"></div>
      
      <div className="gucci-summary-row">
        <span className="gucci-summary-label">Estimated<br />Total</span>
        <span className="gucci-total-value">$ 920</span>
      </div>
    </div>
  </div>
  )
}

export default Printpage
