import React from 'react'

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="main-part">
        <div className="footer-list-wrapper">
          <h3 className="footer-heading">Grand Hotel</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">hello@grandhotel.com</a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">New York, 123 Lemon Squeezy Street</a>
            </li>
            <li className="footer-list-item">
              <a href="/" className="footer-list-link">Tel: +1(800) 555-555</a>
            </li>
          </ul>
        </div>
        
        <div className="footer-list-wrapper">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-list">
            <li className="footer-list-item">
              <a href="#top" className="footer-list-link">Home</a>
            </li>
            <li className="footer-list-item">
              <a href="#about" className="footer-list-link">About Us</a>
            </li>
            <li className="footer-list-item">
              <a href="#rooms" className="footer-list-link">Rooms</a>
            </li>
            <li className="footer-list-item">
              <a href="#customers" className="footer-list-link">Customers</a>
            </li>
            <li className="footer-list-item">
              <a href="#contact" className="footer-list-link">Contact</a>
            </li>
          </ul>
        </div>

        <div className="contact">
          <h3 className="footer-heading">Contact</h3>
          <p>Sign Up for News</p>
          <form className="footer-form">
            <input type="text" className="footer-input" placeholder="Your email..." />
            <button className="footer-button">Sign Up</button>
          </form>
        </div>

        <div className="gallery">
          <h3 className="footer-heading">Gallery</h3>
          <div className="gallery-images">
            <div className="image-wrapper">
              <img src="img/gallery-img-1.jpeg" className="footer-image" alt="gallery img" />
            </div>
            <div className="image-wrapper">
              <img src="img/gallery-img-2.jpeg" className="footer-image" alt="gallery img" />
            </div>
            <div className="image-wrapper">
              <img src="img/gallery-img-3.jpeg" className="footer-image" alt="gallery img" />
            </div>
            <div className="image-wrapper">
              <img src="img/gallery-img-4.jpeg" className="footer-image" alt="gallery img" />
            </div>
            <div className="image-wrapper">
              <img src="img/gallery-img-5.jpeg" className="footer-image" alt="gallery img" />
            </div>
            <div className="image-wrapper">
              <img src="img/gallery-img-6.jpeg" className="footer-image" alt="gallery img" />
            </div>
          </div>
        </div>
      </div>

      <div className="creator-part">
        <div className="copyright-text">
          <p>Copyright &copy; {date} Grand Hotel</p>
        </div>

        <div className="text-right">
          <p>Made With <i className="fas fa-heart"></i> by <a target="_blank" rel="noreferrer" className="mattpdev-link" href="https://mattpdev-portfolio.vercel.app/">
            <span className="mattpdev">Matt<span className="letter">P</span>Dev</span>
          </a>
          </p>
          
        </div>
      </div>
    </footer>
  )
}
