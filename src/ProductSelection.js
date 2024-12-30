import React, { useRef, useState, useEffect} from 'react';
import './Product.css'

const ProductSelection = () => {
  const [color, setColor] = useState("dark blue suede");
  const [size, setSize] = useState("7.5 = 8 US");
  const [IsEditopen, setIsEditOpen] = useState();
  const Editmodalref =  useRef(null);
  const [Isremove , setIsremove] = useState();

  useEffect(() => {
    if (IsEditopen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [IsEditopen]);
  useEffect(()=>{
    if(Isremove){
      document.body.style.overflow = "hidden";
    }
    else{
      document.body.style.overflow = "auto";
    }
  },[Isremove])

  const openEditpage = (event)=>{
    event.preventDefault();
    setIsEditOpen(true);
    console.log("true");
  }
  const closeEditpage = ()=>{
   setIsEditOpen(false);
  }
 const handleClickOutside = (event)=>{
  if(Editmodalref.current && !Editmodalref.current.contains(event.target)){
    closeEditpage();
    Closeremove();
  }
 }
 const handleremove = (event)=>{
    event.preventDefault();
    setIsremove(true);
 }
 const Closeremove = ()=>{
    setIsremove();
 }
  return (
    <div className="cart-item">
      <div className="item-image">
        <img
          src="https://via.placeholder.com/150"
          alt="Men's loafer with Horsebit"
        />
      </div>
      <div className="item-details">
        <h2>Men's loafer with Horsebit</h2>
        <p>Style# 798997 AAD7E 1000</p>
        <p>Variation: black leather</p>
        <p>Size: 6.5 = 7 US</p>
        <p className="availability">
          <strong>AVAILABLE</strong>
          <br />
          Estimated delivery within 2 - 3 business days. Delivery between 9 am -
          8 pm, Monday to Friday. A signature will be required upon delivery.
        </p>
        <div className="actions">
          <button className="action-button"onClick={openEditpage} >EDIT</button>
          {IsEditopen && (
              <div className="modal-overlay" onClick={handleClickOutside}>
              <div className="modal" ref={Editmodalref}>
                <div className="modal-header">
                  <p className="modal-order-title">YOUR GUCCI ORDER</p>
                  <h2 className="modal-title">Edit your selection</h2>
                  <button className="close-button" onClick={closeEditpage}>&times;</button>
                </div>
        
                <div className="modal-body">
                  <div className="modal-content">
                    <div className="product-image">
                      <img
                        src="https://via.placeholder.com/250x150" // Replace with actual product image
                        alt="Men's loafer with Horsebit"
                      />
                    </div>
        
                    <div className="product-info">
                      <label className="input-label">
                        COLOR
                        <select
                          value={color}
                          onChange={(e) => setColor(e.target.value)}
                          className="dropdown"
                        >
                          <option value="dark blue suede">dark blue suede</option>
                          <option value="black leather">black leather</option>
                          <option value="brown suede">brown suede</option>
                        </select>
                      </label>
        
                      <label className="input-label">
                        SIZE
                        <select
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                          className="dropdown"
                        >
                          <option value="7.5 = 8 US">7.5 = 8 US</option>
                          <option value="8.5 = 9 US">8.5 = 9 US</option>
                          <option value="9.5 = 10 US">9.5 = 10 US</option>
                        </select>
                      </label>
                    </div>
                  </div>
        
                  <div className="product-details">
                    <p className="product-name">Men's loafer with Horsebit</p>
                    <p className="product-price">$1,050</p>
                  </div>
                </div>
        
                <div className="modal-footer">
                  <button className="save-button">SAVE CHANGES</button>
                  <button className="cancel-button" onClick={closeEditpage}>CANCEL</button>
                </div>
              </div>
            </div>
          )
          }
          <span>|</span>
          <button className="action-button" onClick={handleremove}>REMOVE</button>
          {Isremove &&
          <div className="modal-overlay" onClick={handleClickOutside}>
          <div
            className="modal"
            ref={Editmodalref} // Prevent click inside modal from closing it
          >
            <div className="modal-header">
              <button
                className="close-button"
                onClick={Closeremove}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <h2 className="modal-title">
                Are you sure you want to remove this item?
              </h2>
              <p className="product-name">Men's loafer with Horsebit</p>
              <p className="product-details">Style# 798997 AADWC 4157</p>
              <p className="product-details">Size: 7.5 = 8 US</p>
            </div>

            <div className="modal-footer">
              <button
                className="cancel-button"
                onClick={Closeremove}
              >
                CANCEL
              </button>
              <button className="remove-button">REMOVE</button>
            </div>
          </div>
        </div>
          }
          <span>|</span>
          <span className="heart">♡</span>
          <button className="action-button">SAVED ITEMS</button>
        </div>
      </div>
      <div className="item-price">
        <select className="quantity">
          <option value="1">QTY: 1</option>
          <option value="2">QTY: 2</option>
          <option value="3">QTY: 3</option>
        </select>
        <p className="price">$1,050</p>
      </div>
    </div>
  );
};

export default ProductSelection;