import iconArrowRight from "@/assets/icon-arrow-right.svg";

export default function HeaderSection() {
  return (
    <div className="md:grid md:grid-cols-[24rem_6.4rem_13rem] md:grid-rows-[9rem_17rem_24rem]">
      <div className="bg-[url('@/assets/mobile/image-hero@2x.jpg')] w-full min-h-72 bg-no-repeat bg-cover bg-center md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-3 md:bg-[url('@/assets/desktop/image-hero@2x.webp')]"></div>

      <div className="mx-4 space-y-5 mt-8 md:col-start-2 md:col-span-2 md:row-start-2  md:mt-0 md:mx-0 md:space-y-8">
        <div className="font-big-shoulder text-6xl/13 font-bold mr-21 md:text-7xl md:mr-0 xl:hidden">
          MODERN ART GALLERY
        </div>
        <div className="text-xl font-extralight ">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </div>
        <button className="flex items-center mt-9 transition-colors ease-in-out duration-700 animate-bounce group hover:bg-Sandy-Brown bg-Eerie-Black  text-white">
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
    </div>
  );
}
