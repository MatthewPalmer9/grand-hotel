export default function About() {
  return (
    <section id="#about" className="about-us">
      <div className="about-us-content">
        <h1 className="about-us-heading">About Us</h1>
        <div className="underline">
          <div className="small-underline"></div>
          <div className="big-underline"></div>
        </div>
        <h3 className="sub-heading">Grand Hotel</h3>
        <p className="about-us-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi perferendis odit atque incidunt velit adipisci beatae placeat porro, labore, commodi iste voluptates cupiditate dolores amet laudantium unde veritatis vel!
        </p>
        <button className="about-us-button">
          Read More
          <i className="fas fa-angle-double-right btn-arrow"></i>
        </button>
      </div>

      <div className="about-us-images">
        <img src="/img/about-us-img-1.jpeg" alt="hotel room" className="image image-1"/>
        <img src="/img/about-us-img-2.jpeg" alt="hotel room" className="image image-2"/>
        <img src="/img/about-us-img-3.jpeg" alt="hotel pool" className="image image-3"/>
        <img src="/img/about-us-img-4.jpeg" alt="hotel room" className="image image-4"/>
      </div>
    </section>
  )
}
