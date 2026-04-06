import iconArrowRight from "@/assets/icon-arrow-right.svg";
import { useNavigate } from "react-router-dom";



export default function HeaderSection() {

  const navigate = useNavigate();

  const ourlocation = () =>{
    navigate("/ourlocation")
  }


  return (
    <section className="md:grid md:grid-cols-[2fr_1fr_2fr] md:grid-rows-[1fr_3fr_1.4fr] lg:grid-cols-[2fr_2fr_1fr] lg:grid-rows-[10.7rem_17rem_17rem] xl:grid-rows-[2fr_3fr_3.8fr]">
      <div className="lg:col-start-1  lg:col-span-2 lg:row-start-1 lg:row-span-3 lg:bg-Eerie-Black max-lg:hidden">
        <div className="text-white mix-blend-difference lg:ml-25 lg:text-8xl/23 font-big-shoulder font-bold uppercase lg:mt-40 lg:w-103 xl:ml-53">Modern Art Gallery</div>
      </div>
      
      <div className="bg-[url('@/assets/mobile/image-hero@2x.jpg')] w-full min-h-72 bg-no-repeat bg-cover bg-center md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-3 md:bg-[url('@/assets/desktop/image-hero@2x.webp')] lg:col-start-2 lg:col-end-3 ">
      </div>

      <div className="mx-4 space-y-5 mt-8 md:col-start-2 md:col-span-2 md:row-start-2 md:ml-12  md:mt-0 md:mx-0 md:pr-18 md:space-y-8 lg:w-100 lg:ml-85">
        <div className="font-big-shoulder text-6xl/13 font-bold mr-21 md:text-7xl md:mr-0 lg:hidden md:w-78 max-sm:w-66">
          MODERN ART GALLERY
        </div>
        <div className="text-xl font-extralight lg:mb-20">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </div>
        <button className="flex items-center mt-9 transition-colors ease-in-out duration-700 animate-bounce group hover:bg-Sandy-Brown bg-Eerie-Black  text-white"
        onClick={ourlocation}>
          <span className="uppercase text-xl font-big-shoulder  px-7 py-3.5 tracking-wider font-semibold   md:tracking-widest md:px-8 md:py-5">
            Our Location
          </span>
          <img
            src={iconArrowRight}
            alt="Right arrow svg"
            className="bg-Sandy-Brown px-6 py-4 group-hover:bg-Eerie-Black  md:py-6"
          />
        </button>
      </div>
      {/* <div className="bg-white lg:col-start-3 lg:row-start-1 lg:row-span-3 z-0"></div> */}
    </section>
  );
}
