import React from 'react';
import "./CheckoutPage.css"
import { useState } from 'react';


const GucciHeaderNav = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState('home');

  const [selectedOption, setSelectedOption] = useState('signature');
  const [removePriceChecked, setRemovePriceChecked] = useState(false);
  const [giftMessageChecked, setGiftMessageChecked] = useState(false);


  const [step, setStep] = useState({
    address: false,
    packing: false,
    payment: false,
    afterPacking:true
  })
  // const toggleMethod = (method) => {
  //   setStep(prev => ({
  //     ...prev,
  //     [method]: !prev[method]
  //   }))
  // }
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNumber: "",
    city: "",
    state: "",
    zipcode: ""
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.state) {
      newErrors.state = "State is required.";
    }

    const zipRegex = /^[0-9]{5,6}$/;
    if (!formData.zipcode.trim()) {
      newErrors.zipcode = "Zip code is required.";
    } else if (!zipRegex.test(formData.zipcode)) {
      newErrors.zipcode = "Zip code must be 5-6 digits.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;


  };
  const handlesubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
      console.log("Submitted Data:", formData);
      setStep((prev) => ({
        ...prev,
        address: true, 
      }));
      setStep((prev) => ({
        ...prev,
        packing: true, 
      }));
      // setFormData({
      //   firstName: "",
      //   lastName: "",
      //   address: "",
      //   phoneNumber: "",
      //   city: "",
      //   state: "",
      //   zipcode: "",
      // });
    }
  
    if(step.afterPacking===false){
      console.log("afterpacking" )
      setStep((prev) => ({
        ...prev,
        payment: true, 
      }));
    }
   
     
  };
  const handlechange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };
  const saveChange  = () =>{
    console.log("save");
    console.log(typeof(step.address) , typeof(step.packing));
    if(step.address === true && step.packing === true){
      console.log("ads")
    setStep((prev) => ({
      ...prev,
      payment: true, 
    }));
    setStep((prev) => ({
      ...prev,
      afterPacking: false, 
    }));
  }
  }
  return (
    <>
      <nav className="gucci-nav">
        <div className="nav-left">
          <a href="/" className="back-link">Back to Shopping Bag</a>
        </div>

        <div className="nav-center">
          <h1 className="logo">GUCCI</h1>
        </div>

        <div className="nav-right">
          <a href="tel:+18774822430" className="phone-link">
            +1.877.482.2430
          </a>
        </div>
      </nav>
      <div className="checkout-container">
        <div className="checkout-form">
          <div className="email-section">
            <h2>YOU ARE CHECKING OUT AS:</h2>
            <p></p>
          </div>
          {step.address ? (
            <div style={{
              padding: '20px',
              fontFamily: 'Arial, sans-serif',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div style={{
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      color: 'white',
                      fontSize: '14px'
                    }}>✓</span>
                  </div>
                  <h2 style={{margin: 0,fontSize: '20px',fontWeight: 'bold',textTransform: 'uppercase', letterSpacing: '0.5px' }}>SHIPPING ADDRESS</h2>
                </div>
                <button style={{border: 'none',background: 'none',fontSize: '14px',textDecoration: 'underline',  cursor: 'pointer',  textTransform: 'uppercase'}} 
                onClick={()=>setStep((prev)=>({
                  ...prev,
                  address:false,
                  payment:false
                }))}>
                  EDIT
                </button>
              </div>

              <div style={{  display: 'flex',justifyContent: 'space-between' }}>
                <div style={{
                  flex: 1
                }}>
                {console.log(formData.firstName, 'firstname')}
                  <div style={{   fontSize: '16px',fontWeight: 'bold',marginBottom: '8px'}}>{formData.firstName}{""}{formData.lastName}</div>
                  <div style={{  fontSize: '14px', marginBottom: '4px'}}>{formData.address}</div>
                  <div style={{fontSize: '14px', marginBottom: '4px'}}>{formData.city},{" "}
                    {formData.state} - {formData.zipcode}</div>
                  <div style={{
                    fontSize: '14px'
                  }}>{formData.phoneNumber}</div>
                </div>

                <div style={{
                  flex: 1,
                  paddingLeft: '20px'
                }}>
                  <div style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginBottom: '8px'
                  }}>Premium Express</div>
                  <div style={{
                    fontSize: '16px',
                    marginBottom: '8px'
                  }}>$ 0</div>
                  <div style={{
                    fontSize: '14px',
                    lineHeight: '1.4'
                  }}>
                    Estimated delivery within 2 - 3 business days. Delivery between 9 am - 8 pm, Monday to Friday. A signature will be required upon delivery.
                  </div>
                </div>
              </div>
            </div>) : (
            <div className="shipping-section">
              <div className="section-header">
                <span className="number">1</span>
                <div className='shipping'>
                  <h2>SHIPPING ADDRESS</h2>
                  <p className="delivery-question">Where should we deliver to?</p>
                </div>
              </div>


              <div className="delivery-options">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="delivery"
                    value="home"
                    checked={deliveryMethod === 'home'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  />
                  <div className="radio-content">
                    <span className="option-title">Home Delivery</span>
                    <span className="option-desc">1-3 business days if placed by 4PM EST</span>
                  </div>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    name="delivery"
                    value="store"
                    checked={deliveryMethod === 'store'}
                    onChange={(e) => setDeliveryMethod(e.target.value)}
                  />
                  <div className="radio-content">
                    <span className="option-title">Collect In-Store</span>
                    <span className="option-desc">Next business day if placed by 4 PM EST (continental U.S.)</span>
                  </div>
                </label>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>FIRST NAME*</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handlechange} />
                  {errors.firstName && <p className="error">{errors.firstName}</p>}
                </div>
                <div className="form-group">
                  <label>LAST NAME*</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handlechange} />
                  {errors.lastName && <p className="error">{errors.lastName}</p>}
                </div>
              </div>

              <div className="form-group">
                <label>ADDRESS LINE 1*</label>
                <input type="text" name="address" value={formData.address} onChange={handlechange} />
                {errors.address && <p className="error">{errors.address}</p>}
                <p className="address-note">Shipping unavailable for P.O. boxes, APO/FPO addresses, hotels, freight forwarders, or addresses outside the United States.</p>
              </div>

              <button className="address-line-2">Enter address line 2</button>

              <div className="form-row">
                <div className="form-group">
                  <label>CITY*</label>
                  <input type="text" name="city" value={formData.city} onChange={handlechange} />
                  {errors.city && <p className="error">{errors.city}</p>}
                </div>
                <div className="form-group">
                  <label>STATE*</label>
                  <select name="state" value={formData.state}
                    onChange={handlechange}>
                    <option value="">Select State</option>
                    <option value="UP">UP</option>
                    <option value="NY">NY</option>
                    <option value="CA">CA</option>
                  </select>
                  {errors.state && <p className="error">{errors.state}</p>}

                  {/* {errors.state && <p className="error">{errors.state}</p>} */}
                </div>
                <div className="form-group">
                  <label>ZIP CODE*</label>
                  <input type="text" name='zipcode' value={formData.zipcode} onChange={handlechange} />
                  {errors.zipcode && <p className="error">{errors.zipcode}</p>}
                </div>
              </div>

              <label className="checkbox-option">
                <input type="checkbox" />
                <span>This is a business address</span>
              </label>

              <div className="form-group">
                <label>CONTACT NUMBER*</label>
                <p className="contact-note">We'll only contact you regarding delivery.</p>
                <div className="phone-input">
                  <select className="country-code">
                    <option value="+1">+1 United States</option>
                  </select>
                  <input type="tel" className="phone-number" name='phoneNumber' value={formData.phoneNumber} onChange={handlechange} />
                  {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                </div>
              </div>

              <label className="checkbox-option">
                <input type="checkbox" />
                <span>Add additional contact number</span>
              </label>
              <label className="checkbox-option">
                <input type="checkbox" />
                <span>Save Shipping address information to address book ?</span>
              </label>
              <div className="delivery-container">
                <h2 className="delivery-title">DELIVERY METHOD</h2>

                <div className="delivery-option">
                  <div className="delivery-left">
                    <div className="delivery-type">Next Business Day</div>
                    <div className="delivery-cost">
                      <span className="separator">-</span>
                      <span className="price">Free</span>
                    </div>
                  </div>

                  <div className="delivery-description">
                    Order by 4 pm EST on a business day. Delivery between 9 am – 8 pm, Monday to Friday. A signature will be required upon delivery. Some restrictions apply and delivery times may vary.
                  </div>
                </div>
              </div>
              <button className="continue-button" onClick={handlesubmit} >
                CONTINUE TO PACKAGING
              </button>
            </div>
          )}

{step.afterPacking ? (
          step.packing ? ( <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '30px'
      }}>
        <div style={{ width: '24px', height: '24px',   border: '2px solid black', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',   fontSize: '14px' }}>
          2
        </div>
        <h2 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: 'normal',
          textTransform: 'uppercase'
        }}>PACKAGING OPTIONS & GIFTING</h2>
      </div>

      <div style={{border: '1px solid #e0e0e0',   marginBottom: '20px',padding: '20px' }}>
        <label style={{
          display: 'flex',
          alignItems: 'flex-start',
          marginBottom: '20px'
        }}>
          <div style={{   display: 'flex',   alignItems: 'center',   gap: '10px',flex: '1'}}>
            <input
              type="radio"
              checked={selectedOption === 'signature'}
              onChange={() => setSelectedOption('signature')}
              style={{ margin: 0 }}
            />
            <div>
              <div style={{fontWeight: 'bold',marginBottom: '5px'  }}>Signature box</div>
              <div style={{ fontSize: '14px' }}>
                The signature box in Rosso Ancora red comes wrapped in a white and silver ribbon.
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <img src="/api/placeholder/150/150" alt="Signature box stack" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <img src="/api/placeholder/150/150" alt="Signature box" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
          </div>
        </label>
      </div>

      <div style={{ border: '1px solid #e0e0e0', marginBottom: '20px', padding: '20px'}}>
        <label style={{  display: 'flex',alignItems: 'flex-start'}}>
          <div style={{display: 'flex',    alignItems: 'center',gap: '10px',   flex: '1'}}>
            <input
              type="radio"
              checked={selectedOption === 'boutique'}
              onChange={() => setSelectedOption('boutique')}
              style={{ margin: 0 }}
            />
            <div>
              <div style={{    fontWeight: 'bold',marginBottom: '5px'  }}>Boutique shopping bag</div>
              <div style={{ fontSize: '14px' }}>
                The boutique shopping bag comes together with the box, in a new metallic silver shade.
              </div>
            </div>
          </div>
          <div style={{  display: 'flex',    gap: '10px' }}>
            <img src="/api/placeholder/150/150" alt="Shopping bag with boxes" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
            <img src="/api/placeholder/150/150" alt="Shopping bag" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
          </div>
        </label>
      </div>

      <div style={{  fontSize: '14px', color: '#666', marginBottom: '20px'}}>
        We will try to meet your preferences, but some options may not be suitable for all items. Product packaging may vary from the image(s) and include special protection or limited edition collection options.
      </div>

      <div style={{display: 'flex', flexDirection: 'column',   gap: '10px'  }}>
        <label style={{display: 'flex',alignItems: 'center', gap: '10px'   }}>
          <input
            type="checkbox"
            checked={removePriceChecked}
            onChange={(e) => setRemovePriceChecked(e.target.checked)}
          />
          <span>Remove price from invoice</span>
        </label>

        <label style={{  display: 'flex',alignItems: 'center',  gap: '10px'}}>
          <input
            type="checkbox"
            checked={giftMessageChecked}
            onChange={(e) => setGiftMessageChecked(e.target.checked)}
          />
          <span>Add a Gift Message</span>
        </label>
        <button className="continue-button" onClick={saveChange} style={{width:"180px"}} >
                SAVE CHANGES
              </button>
      </div>
    </div>) : (
          <div className="checkout">
            <div className="steps-container">
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-content">
                  <div className="step-title">PACKAGING OPTIONS & GIFTING</div>
                  <div className="step-description">
                    Signature box, Boutique shopping bag
                  </div>
                </div>
              </div>
              </div>
              </div>
          ) ):(<div style={{
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Header Section */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  backgroundColor: 'black',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>✓</div>
                <h2 style={{
                  margin: 0,
                  fontSize: '20px',
                  fontWeight: 'normal'
                }}>PACKAGING OPTIONS & GIFTING</h2>
              </div>
              <button style={{border: 'none',background: 'none',fontSize: '14px',textDecoration: 'underline',  cursor: 'pointer',  textTransform: 'uppercase'}} onClick={() => setStep((prev) => ({
    ...prev, 
    afterPacking: true, 
    packing: true
  }))}>EDIT</button>
            </div>
      
            {/* Selected Options Summary */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '40px',
              fontSize: '14px'
            }}>
              <div>Boutique shopping bag</div>
              <div>
                <div>Gift Message: No Gift Message.</div>
                <div>Remove price from invoice</div>
              </div>
            </div>
            </div>)}
          {step.payment ? ( 
      <div style={{
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Payment Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
      }}>
        <div style={{
          width: '24px',
          height: '24px',
          border: '2px solid black',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>3</div>
        <h2 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: 'normal'
        }}>PAYMENT</h2>
      </div>

      <div style={{ marginBottom: '20px', fontSize: '14px' }}>
        How would you like to pay?
      </div>

      {/* Payment Method Tabs */}
      <div style={{
        display: 'flex',
        marginBottom: '30px'
      }}>
        <div style={{
          padding: '10px 20px',
          border: '1px solid #ccc',
          background: '#f0f0f0',
          flex: 1,
          textAlign: 'center'
        }}>Credit Card</div>
        <div style={{
          padding: '10px 20px',
          border: '1px solid #ccc',
          background: 'white',
          flex: 1,
          textAlign: 'center'
        }}>PayPal</div>
        <div style={{
          padding: '10px 20px',
          border: '1px solid #ccc',
          background: 'white',
          flex: 1,
          textAlign: 'center'
        }}>Affirm Monthly Payments</div>
      </div>

      {/* Credit Card Form */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr',
        gap: '20px',
        marginBottom: '20px'
      }}>
        <div>
          <div style={{
            fontSize: '14px',
            marginBottom: '8px'
          }}>CREDIT CARD NUMBER ℹ</div>
          <input
            placeholder="Enter your card number"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div>
          <div style={{
            fontSize: '14px',
            marginBottom: '8px'
          }}>SECURITY CODE ℹ</div>
          <input
            placeholder="3-4 Digits"
            style={{
              width: '100%',
              padding: '8px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div>
          <div style={{
            fontSize: '14px',
            marginBottom: '8px'
          }}>EXPIRATION DATE</div>
          <div style={{
            display: 'flex',
            gap: '10px'
          }}>
            <select style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ccc'
            }}>
              <option>MM</option>
            </select>
            <select style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ccc'
            }}>
              <option>YYYY</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{
          fontSize: '14px',
          marginBottom: '8px'
        }}>NAME ON CARD</div>
        <input
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ccc'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{
          fontSize: '14px',
          marginBottom: '10px'
        }}>Accepted credit cards</div>
        <div style={{
          display: 'flex',
          gap: '10px'
        }}>
          <img src="/api/placeholder/40/25" alt="Visa" />
          <img src="/api/placeholder/40/25" alt="Mastercard" />
          <img src="/api/placeholder/40/25" alt="American Express" />
          <img src="/api/placeholder/40/25" alt="Union Pay" />
          <img src="/api/placeholder/40/25" alt="Discover" />
          <img src="/api/placeholder/40/25" alt="JCB" />
        </div>
      </div>

      <div>
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '10px',
          alignItems: 'center'
        }}>
          <input type="checkbox" checked readOnly />
          <div style={{ fontSize: '14px' }}>
            Save credit card information to wallet ℹ
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'flex-start'
        }}>
          <input type="checkbox" checked readOnly />
          <div style={{ fontSize: '14px' }}>
            Billing Address and Phone are the same as Shipping Information
            <br />
            If the Billing Address and/or Billing Phone associated with
            your payment method are different, please uncheck this box.
          </div>
        </div>
      </div>
      <button className="continue-button" onClick={saveChange} style={{width:"180px"}} >
                CONFIRM DETAILS
              </button>
    </div>):(
              <div className="checkout">
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-content">
                  <div className="step-title">PAYMENT</div>
                  <div className="step-description">
                    Credit Card, PayPal, Affirm Monthly Payments
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>


        
        <div>
          <div className="order-summary">
            <div className="summary-header">
              <h2>ORDER SUMMARY</h2>
              <span className="item-count">1 ITEM</span>
            </div>
            <div className="unique-product-container">
              <div className="unique-product-image">
                <img src="/path-to-your-image.jpg" alt="Men's loafer with Horsebit" />
              </div>
              <div className="unique-product-details">
                <h5>MEN'S LOAFER WITH HORSEBIT</h5>
                <p className="unique-style">Style #798997 AAD7E 1000</p>
                <p>Variation: black leather</p>
                <p>size: 6.5 = 7 US</p>
                <p className="unique-delivery-info">
                  Enjoy complimentary delivery<br />or Collect In Store.
                </p>
              </div>
              <div className="unique-product-quantity-price">
                <span>QTY: 1</span>
                <p className="unique-product-price">$1,050</p>
              </div>
            </div>

            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>$ 1,050</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free (Next Business Day)</span>
              </div>
              <div className="summary-row">
                <span>Estimated Tax</span>
                <span>$ 0</span>
              </div>
              <div className="summary-row total">
                <span>ESTIMATED TOTAL</span>
                <span>$ 1,050</span>
              </div>


            </div>

            <hr></hr>
            <div>
              <h4>VIEW DETAILS</h4>
              <p>
                You will be charged only at the time of shipment except for
                DIY orders where the full amount is charged at the time of
                purchase.
              </p>
            </div>

          </div>
          <div className="help_container">
            <div className="help-section">
              <div className="help-header">
                <h2>MAY WE HELP?</h2>
                <span className="minus-icon">−</span>
              </div>

              <div className="contact-info">
                <div className="phone-number">
                  <a href="tel:+1.877.482.2430">+1.877.482.2430</a>
                </div>
                <div className="email">
                  <a href="mailto:assistance@us-onlineshopping.gucci.com">
                    assistance@us-onlineshopping.gucci.com
                  </a>
                </div>
              </div>

              <div className="accordion-section">
                <div
                  className="accordion-header"
                  onClick={() => setIsPaymentOpen(!isPaymentOpen)}
                >
                  <h2>PAYMENT OPTIONS</h2>
                  <span className={`plus-icon ${isPaymentOpen ? 'open' : ''}`}>+</span>
                </div>
              </div>

              <div className="accordion-section">
                <div
                  className="accordion-header"
                  onClick={() => setIsShippingOpen(!isShippingOpen)}
                >
                  <h2>SHIPPING OPTIONS</h2>
                  <span className={`plus-icon ${isShippingOpen ? 'open' : ''}`}>+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        </div>
    </>
  );
};

export default GucciHeaderNav;