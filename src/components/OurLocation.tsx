import FooterItem from "./FooterItem";
import iconArrowLeft from "@/assets/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";

export default function OurLocation() {
  const navigate = useNavigate();

  const homePage = () => {
    navigate("/");
  };
  return (
    <section className="">
      <div className="bg-[url('@/assets/mobile/image-map.png')] w-full min-h-135 grid grid-cols-2 grid-rows-3 bg-no-repeat bg-cover bg-center md:grid-cols-[1fr_2fr_2fr] md:min-h-160 lg:min-h-140 xl:min-h-170">
        <button
          className="flex items-center transition-colors ease-in-out duration-700 animate-bounce group hover:bg-Sandy-Brown bg-Eerie-Black  text-white col-start-2 mt-12 max-h-14 mr-2 w-46 md:col-start-2 md:max-h-16 md:w-50 "
          onClick={homePage}
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
        <div className="mx-8 py-18 space-y-8 md:grid md:grid-cols-[1fr_2fr] lg:grid-cols-2 lg:mx-40 xl:mx-60">
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
