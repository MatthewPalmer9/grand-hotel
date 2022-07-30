export default function RoomCard({imgSrc, title, detail, price}) {
  return (
    <div className="room-card">
      <img 
        src={imgSrc} 
        alt="hotel room" 
        className="room-image" 
      />
      <div className="room-card-content">
        <h4 className="room-card-heading">{title}</h4>
        <p className="room-card-paragraph">
          {detail}
        </p>
        <div className="room-card-flex">
          <button className="room-card-btn">
            Book Now
            <i className="fas fa-angle-double-right btn-arrow" />
          </button>
          <p className="room-price">{price}</p>
        </div>
      </div>
    </div>
  )
}
