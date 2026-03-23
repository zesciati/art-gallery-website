// import imageGrid1 from "@/assets/desktop/image-grid-1.jpg";
import imageGrid3 from "@/assets/desktop/image-grid-3.jpg";
import imageGrid2 from "@/assets/desktop/image-grid-2.jpg";
// import imageGrid1 from '@/assets/desktop/image-grid-1.jpg'

export default function YourDaySection() {
  return (
    <div className="grid sm:gap-3 mx-4 my-22 sm:grid-cols-4 sm:grid-rows-4 sm:gap-0 ">
      <div className="sm:row-start-1 sm:row-end-5 sm:col-start-1 sm:col-end-3 bg-amber-600  ">
        <img src={imageGrid2} alt="" className="sm:min-h-full"/>
      </div>
      <div className="bg-Sandy-Brown place-self-stretch  sm:row-start-1 sm:row-end-3 sm:col-start-3 sm:col-end-5 ">
        <img src={imageGrid3} alt=""  className="sm:min-h-full w-full object-cover"/>
      </div>
      <div className="bg-Eerie-Black py-12 px-6 space-y-6 sm:col-start-3 sm:col-end-5 sm:row-start-3  sm:row-end-5">
        <h3 className="text-white text-6xl/12.5 uppercase font-big-shoulder font-bold ">Come & Be Inspired</h3>
        <p className="text-white text-xl font-extralight">
          We're excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </div>
  );
}
