import CommonHeader from "../Common/CommonHeader";
import RoomCard from "./RoomCard";

export default function Rooms() {
  return (
    <section className="rooms">
      <CommonHeader title="Rooms In Grand Hotel" />

      <div className="rooms-cards-wrapper">
        <RoomCard
          imgSrc={"/img/single-room.jpeg"} 
          title={"Single Room"}
          detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex autem assumenda quaerat eveniet perspiciatis. Tempora, pariatur autem ad aliquid ea consectetur cumque aperiam dolores, provident ab minima? Error, maiores voluptas."}
          price={"$99"} 
        />
        <RoomCard
          imgSrc={"/img/double-room.jpeg"} 
          title={"Double Room"}
          detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex autem assumenda quaerat eveniet perspiciatis. Tempora, pariatur autem ad aliquid ea consectetur cumque aperiam dolores, provident ab minima? Error, maiores voluptas."}
          price={"$199"} 
        />
        <RoomCard
          imgSrc={"/img/lux.jpeg"} 
          title={"Lux"}
          detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex autem assumenda quaerat eveniet perspiciatis. Tempora, pariatur autem ad aliquid ea consectetur cumque aperiam dolores, provident ab minima? Error, maiores voluptas."}
          price={"$299"} 
        />
        <RoomCard
          imgSrc={"/img/vip.jpeg"} 
          title={"VIP"}
          detail={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex autem assumenda quaerat eveniet perspiciatis. Tempora, pariatur autem ad aliquid ea consectetur cumque aperiam dolores, provident ab minima? Error, maiores voluptas."}
          price={"$399"} 
        />

        <div className="rooms-btn-wrapper">
          <button className="rooms-btn">Check All Rooms</button>
        </div>
      </div>
    </section>
  )
}
