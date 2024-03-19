import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../assets/css/Login.css'
import '../../assets/css/colors.css'

import upi from '../../assets/images/login/upi.svg'
import qr from '../../assets/images/login/qr.png'
import mobile from '../../assets/images/login/mobile-outline.png'
import qrscanner from '../../assets/images/login/qr-scan-outline.png'
import qrline from '../../assets/images/login/qr-line.png'


const Login = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState('');

  const handleLogin = () => {
    if (phoneNumber === '' || password === '') {
      setError("Please fill all fields");
    }
    else if (phoneNumber === '000' && password === 'admin') {
      navigate('/admin-dashboard');
    } else {
      navigate('/user-plan');
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="left-side">
          <div className="left-side-images">
            <div className="qr-img-container">
              <img src={qr} alt="qr" />
            </div>
            <div className="mobile-img-container">
              <div className="upi-container">
                <img src={upi} alt="upi" />
              </div>
              <img src={mobile} alt="mobile" />
              <div className="h5-tags">
                <h5><i className="material-icons">verified </i> To anyone, anytime</h5>
                <h5><i className="material-icons">verified</i> 24/7 recharges</h5>
                <h5><i className="material-icons">verified </i> Lightspeed payments</h5>
                <h5><i className="material-icons">verified </i> Safe & Secure</h5>
              </div>
              <div className="qr-scanner-container">
                <img src={qrscanner} alt="qrscanner" />
                <div className="qr-line-container">
                  <img src={qrline} alt="qrline" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <form>
            <h1>AIR-JIO! Welcomes you back</h1>
            <div>
              <input type="text" placeholder='+0 xxxxxxxxxx' maxLength={14} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div>
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div style={{ color: 'red' , marginBottom: '10px' }}>
              {error}
            </div>

            <div className='forgot-password'>
              <p>Forgot your password?</p>
            </div>

            <button type='button' onClick={handleLogin}>Login</button>
            <div>
              <h4>New member to AirJio? <span onClick={() => navigate('/register')}>Create account <i className="material-icons">chevron_right</i></span></h4>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login