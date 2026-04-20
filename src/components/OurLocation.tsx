import FooterItem from "./FooterItem";
import iconArrowLeft from "@/assets/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import locationIcon from "@/assets/icon-location.svg";


declare const L: any;

export default function OurLocation() {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const map = L.map("map").setView([41.48131, -71.31041], 16);

    const marker = L.icon({
      iconUrl: locationIcon,
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
    });

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{
      attribution: '&copy; OpenStreetMap contributors', 
    }).addTo(map);

    L.marker([41.48131, -71.31041], { icon: marker}).addTo(map).openPopup();
    
    // cleanup — hapus map saat komponen unmount
    return () => map.remove();
  }, []); // [] = hanya jalan sekali saat mount 

  return (
    <section className="">
      <div  className=" w-full min-h-140 grid grid-cols-2 grid-rows-3  md:grid-cols-[1fr_2fr_2fr] md:min-h-160 lg:min-h-140 xl:min-h-170 ">
        <div id="map" className="col-start-1 col-span-3 row-start-1 row-span-3 z-0"></div>
        <button
          className="transition-colors ease-in-out duration-700 animate-bounce group hover:bg-Sandy-Brown bg-Eerie-Black text-white max-h-14 w-46  md:max-h-16 md:w-50 flex items-center absolute top-12 right-6 z-10  md:left-42" 
          onClick={goBackHome}
        >
          <img
            src={iconArrowLeft}
            alt="Right arrow svg"
            className="bg-Sandy-Brown px-6 py-4 group-hover:bg-Eerie-Black  md:py-5 "
          />
          <span className="uppercase text-xl font-big-shoulder  px-7 py-3.5 tracking-wider font-semibold md:tracking-widest md:px-8 md:py-5">
            To Home
          </span>
        </button>
      </div>

      <div className="bg-Eerie-Black">
        <div className="mx-8 py-18 space-y-8 sm:grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_2fr] lg:grid-cols-2 lg:mx-40 xl:mx-60">
          <h3 className="uppercase text-6xl font-bold text-white font-big-shoulder w-49 md:col-start-1">
            Our Location
          </h3>
          <div className="md:col-start-2 md:space-y-4">
            <h4 className="uppercase text-3xl font-bold text-Sandy-Brown font-big-shoulder md:text-4xl">
              99 King Street
            </h4>
            <div className=" text-xl text-white font-light md:text-[1.4rem]">
              <div>Newport</div>
              <div>RI 02840</div>
              <div>United States of America</div>
            </div>
            <div className="text-xl font-light text-white  w-70 md:w-110 md:text-[1.4rem]">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm
            </div>
          </div>
        </div>
      </div>
      <FooterItem className="bg-Sandy-Brown text-black" />
    </section>
  );
}
