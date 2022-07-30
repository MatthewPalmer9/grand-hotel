import CommonHeader from '../Common/CommonHeader'
import CustomerCard from './CustomerCard'

export default function Customers() {
  return (
    <section id="customers" className="customers">
      <CommonHeader title="Our Customers"/>

      <p className="customers-paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt eius adipisci velit blanditiis voluptates deleniti, vel expedita sequi! Unde veritatis cumque dolorem molestias nulla, temporibus quia ea animi repellendus eligendi?
      </p>

      <div className="customers-card-wrapper">
        <CustomerCard 
          imgSrc={"/img/customer-1.jpeg"}
          name={"Ashley Sinclair"}
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur beatae inventore laborum corrupti fuga impedit, natus earum. Illo esse laborum quis tempora non tenetur dolor at quia deleniti repellat."}
        />
        <CustomerCard 
          imgSrc={"/img/customer-2.jpeg"}
          name={"Megan Schummer"}
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni pariatur beatae inventore laborum corrupti fuga impedit, natus earum. Illo esse laborum quis tempora non tenetur dolor at quia deleniti repellat."}
        />
      </div>
    </section>
  )
}
