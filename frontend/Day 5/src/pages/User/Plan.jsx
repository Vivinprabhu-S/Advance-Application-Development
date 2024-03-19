import { useState  } from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/css/Plan.css";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import talk from '../../assets/images/unlimited-talk.webp'

const Plan = () => {

  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to track popup open/close
  const [selectedCard, setSelectedCard] = useState(null);

  const handleInfoClick = (item) => {
    setSelectedCard(item);
    setShowPopup(true);
  };
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  const popularRechargePacksData = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹299',validity:'28' },
    { data: '3 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹359', validity:'28' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹369', validity:'30' },
    { data: '2.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹399',validity:'28' },
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹719',validity:'84' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹839',validity:'84'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3099',validity:'365'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3199',validity:'365'},
  ];
  const herounlimited = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹299',validity:'28' },
    { data: '3 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹359', validity:'28' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹369', validity:'30' },
    { data: '2.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹399',validity:'28' },
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹719',validity:'84' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹839',validity:'84'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3099',validity:'365'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3199',validity:'365'},
  ];
  const unlimited = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹299',validity:'28' },
    { data: '3 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹359', validity:'28' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹369', validity:'30' },
    { data: '2.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹399',validity:'28' },
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹719',validity:'84' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹839',validity:'84'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3099',validity:'365'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3199',validity:'365'},
  ];
  const combo = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹299',validity:'28' },
    { data: '3 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹359', validity:'28' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹369', validity:'30' },
    { data: '2.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹399',validity:'28' },
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹719',validity:'84' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹839',validity:'84'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3099',validity:'365'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3199',validity:'365'},
  ];
  const data = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹299',validity:'28' },
    { data: '3 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹359', validity:'28' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹369', validity:'30' },
    { data: '2.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹399',validity:'28' },
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹719',validity:'84' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹839',validity:'84'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3099',validity:'365'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3199',validity:'365'},
  ];
  const others = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹299',validity:'28' },
    { data: '3 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹359', validity:'28' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹369', validity:'30' },
    { data: '2.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹399',validity:'28' },
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹719',validity:'84' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹839',validity:'84'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3099',validity:'365'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3199',validity:'365'},
  ];
  const topup = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹299',validity:'28' },
    { data: '3 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹359', validity:'28' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹369', validity:'30' },
    { data: '2.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹399',validity:'28' },
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹719',validity:'84' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹839',validity:'84'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3099',validity:'365'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3199',validity:'365'},
  ];
  const planvoucher = [
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹299',validity:'28' },
    { data: '3 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹359', validity:'28' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹369', validity:'30' },
    { data: '2.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹399',validity:'28' },
    { data: '1.5 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹719',validity:'84' },
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹839',validity:'84'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3099',validity:'365'},
    { data: '2 GB/Day', description: 'Unlimited Voice/SMS 100 per days',rate:'₹3199',validity:'365'},
  ];

  
  return (
    <>
    <Navbar />
      <div className="first">
        <h1>Browser<br/>mobile recharge<br/>Plans</h1>
        <div className="container-plan">
            <h3>Air-Jio Unlimited Plans</h3>
            <h5>TALK UNLIMITED</h5>
            <h6>Our best plans,our best prices,<br/>on the best network</h6>
            <img src={talk} alt="talk" />
        </div>
      </div>
      <div className="split-page">
        <div className="left-section">
          <div className="side-navbar">
            <ul className="nav--menu">
              <li
                onClick={() => { handleItemClick(0)}}
                className={selectedItem === 0 ? "active" : ""}
              >
                <hr />
                <a href="#prp">popular recharge packs</a>
              </li>
              <li
                onClick={() => { handleItemClick(1)}}
                className={selectedItem === 1 ? "active" : ""}
              >
                <hr />
                <a href="#hu">hero unlimited</a>
              </li>
              <li
                onClick={() => { handleItemClick(2)}}
                className={selectedItem === 2 ? "active" : ""}
              >
                <hr />
                <a href="#unlimited">unlimited</a>
              </li>
              <li
                onClick={() => handleItemClick(3)}
                className={selectedItem === 3 ? "active" : ""}
              >
                <hr />
                <a href="#disney">disney + hotstar</a>
              </li>
              <li
                onClick={() => handleItemClick(4)}
                className={selectedItem === 4 ? "active" : ""}
              >
                <hr />
                <a href="#combo">combo / validity</a>
              </li>
              <li
                onClick={() => handleItemClick(5)}
                className={selectedItem === 5 ? "active" : ""}
              >
                <hr />
                <a href="#data">data</a>
              </li>
              <li
                onClick={() => handleItemClick(6)}
                className={selectedItem === 6 ? "active" : ""}
              >
                <hr />
                <a href="#others">others</a>
              </li>
              <li
                onClick={() => handleItemClick(7)}
                className={selectedItem === 7 ? "active" : ""}
              >
                <hr />
                <a href="#topup">top up</a>
              </li>
              <li
                onClick={() => handleItemClick(8)}
                className={selectedItem === 8 ? "active" : ""}
              >
                <hr />
                <a href="#planvoucher">plan voucher</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-section">
          <div id="prp">
            <h1>popular recharge packs</h1>
            <div>
      {popularRechargePacksData.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.rate}</h3>
          <h5>Data<br/>{item.data}</h5>
          <h6>Validity<br/>{item.validity} Days</h6>
          <div className="split-line"></div>
          <p>{item.description}</p>
          <i className="material-icons" onClick={handlePopupOpen}>info</i>
          <button className="buy-btn" onClick={()=>navigate('/payment')}>Recharge</button>
        </div>
      ))}

      {/* Popup component */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handlePopupClose}>&times;</span>
          </div>
        </div>
      )}
    </div>
          </div>
          <div id="hu">
            <h1>hero unlimited</h1>
            {herounlimited.map((item, index) => (
                <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br/>{item.data}</h5>
                <h6>Validity<br/>{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
              ))}
          </div>
          <div id="unlimited">
            <h1>unlimited</h1>
            {herounlimited.map((item, index) => (
                <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br/>{item.data}</h5>
                <h6>Validity<br/>{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
              ))}
          </div>
          <div id="disney">
            <h1>disney + hotstar</h1>
            {herounlimited.map((item, index) => (
                <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br/>{item.data}</h5>
                <h6>Validity<br/>{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
              ))}
          </div>
          <div id="combo">
            <h1>combo / validity</h1>
            {herounlimited.map((item, index) => (
                <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br/>{item.data}</h5>
                <h6>Validity<br/>{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
              ))}
          </div>
          <div id="data">
            <h1>data</h1>
            {herounlimited.map((item, index) => (
                <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br/>{item.data}</h5>
                <h6>Validity<br/>{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
              ))}
          </div>
          <div id="others">
            <h1>others</h1>
            {herounlimited.map((item, index) => (
                <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br/>{item.data}</h5>
                <h6>Validity<br/>{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
              ))}
          </div>
          <div id="topup">
            <h1>top up</h1>
            {herounlimited.map((item, index) => (
                <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br/>{item.data}</h5>
                <h6>Validity<br/>{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
              ))}
          </div>
          <div id="planvoucher">
            <h1>plan voucher</h1>
            {herounlimited.map((item, index) => (
                <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br/>{item.data}</h5>
                <h6>Validity<br/>{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
              ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Plan;