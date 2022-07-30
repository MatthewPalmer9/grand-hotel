export default function Navbar() {
  const date = new Date().getFullYear();

  return (
    <div className="navbar">

      <input type="checkbox" className="checkbox" id="click" hidden />

      <div className="sidebar">
        <label htmlFor="click">
          <div className="menu-icon">
            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
          </div>
        </label>

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
          <p>{date}</p>
        </div>
      </div>

      <nav className="navigation">
        <div className="navigation-header">
          <h1 className="navigation-heading">Grand Hotel</h1>

          <form className="navigation-search">
            <input 
              type="text"
              className="navigation-search-input"
              placeholder="Search..."
            />
            <button className="navigation-search-btn">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>

        <ul className="navigation-list">
          <li className="navigation-item">
            <a href="#" className="navigation-link">Home</a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">About Us</a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">Rooms</a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">Events</a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">Customers</a>
          </li>
          <li className="navigation-item">
            <a href="#" className="navigation-link">Contact</a>
          </li>
        </ul>

        <div className="copyright">
          <p>&copy; {date}. Grand Hotel. All rights reserved.</p>
        </div>
      </nav>
    </div>
  )
}
