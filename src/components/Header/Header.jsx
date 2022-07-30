export default function Header() {
  return (
    <header id="top" className="header">
      <div className="brand">
        <div>
          <img className="header-image" src="/img/crown.png" alt="Crown" />
        </div>
        <h3 className="hotel-heading">Grand Hotel</h3>
      </div>

      <div className="banner">
        <h1 className="banner-heading">Welcome to Grand Hotel</h1>
        <p className="banner-paragraph">Make your life luxurious</p>
        <button className="banner-button">Check Out</button>
      </div>
    </header>
  )
}
