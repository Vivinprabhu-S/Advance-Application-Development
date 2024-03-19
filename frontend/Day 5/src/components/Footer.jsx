import '../assets/css/Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <h1>Get in touch !</h1>
        <div className='footer margin'>
            <div>
                <h3>Privacy</h3>
                <ul>
                    <li>Terms and Conditon</li>
                    <li>Faq</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
            <   h3>AirJio</h3>
                <ul>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>About us</li>
                </ul>
            </div>
            <div>
                <h3>Partners</h3>
                <ul>
                    <li>Airtel</li>
                    <li>Jio</li>
                    <li>BSNL</li>
                </ul>
            </div>
            <div>
                <h3>Recharge</h3>
                <ul>
                    <li>Airtel</li>
                    <li>Jio</li>
                    <li>BSNL</li>
                </ul>
            </div>
            <div>
                <h3>Social</h3>
                <ul>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
        <div className='copyright'>
            Copyright <i className='material-icons'>copyright</i>  2024. No rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
