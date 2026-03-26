import FooterItem from "./FooterItem";

export default function OurLocation() {
  return (
    <section>
      <div>galo</div>

      <div className="bg-Eerie-Black">
        <div className="mx-8 py-18 space-y-8 ">
          <h3 className="uppercase text-6xl font-bold text-white font-big-shoulder  w-49">
            Our Location
          </h3>
          <h4 className="uppercase text-3xl font-bold text-Sandy-Brown font-big-shoulder">
            99 King Street
          </h4>
          <div className=" text-xl text-white font-light ">
            <div>Newport</div>
            <div>RI 02840</div>
            <div>United States of America</div>
          </div>
          <div className="text-xl font-light text-white  w-70 ">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm
          </div>
        </div>
          <FooterItem className="bg-Sandy-Brown text-black"/>
      </div>
    </section>
  );
}
