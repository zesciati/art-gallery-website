import iconArrowRight from '@/assets/icon-arrow-right.svg'

export default function HeaderSection() {
  return (
    <div>
      <div className="bg-[url('@/assets/mobile/image-hero@2x.jpg')] w-full min-h-72 bg-no-repeat bg-cover bg-center"></div>

      <div className="mx-4 space-y-5 mt-8">
        <div className="font-big-shoulder text-6xl/13 font-bold mr-21  ">MODERN ART GALLERY</div>
        <div className="text-xl font-extralight">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </div>
        <button className="flex items-center mt-9 transition-colors ease-in-out duration-700 animate-bounce group">
          <span className="uppercase text-xl font-big-shoulder bg-Eerie-Black hover:bg-Sandy-Brown text-white px-7 py-3.5 tracking-wider font-semibold">Our Location</span>
          <img src={iconArrowRight} alt="Right arrow svg"  className="bg-Sandy-Brown px-6 py-4 group-hover:bg-Eerie-Black"/>
        </button>
      </div>
    </div>
  );
}
