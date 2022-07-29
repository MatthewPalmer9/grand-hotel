export default function Navbar() {
  return (
    <div className="navbar">
      <div className="sidebar">
        <div className="menu-icon">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>

        <ul className="social-icons-list">
          <li>
            <a href="#" className="social-link">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>

        <div className="year">
          <p>&copy; 2018</p>
        </div>
      </div>
    </div>
  )
}
