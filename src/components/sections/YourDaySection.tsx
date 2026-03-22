import imageGrid1 from "@/assets/desktop/image-grid-1.jpg";
import imageGrid3 from "@/assets/desktop/image-grid-3.jpg";
import imageGrid2 from "@/assets/desktop/image-grid-2.jpg";
// import imageGrid1 from '@/assets/desktop/image-grid-1.jpg'

export default function YourDaySection() {
  return (
    <div className="grid gap-4 mx-4 my-22 sm:grid-cols-3 sm:grid-rows-3 sm:gap-0">
      <div className="sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-2">
        <img src={imageGrid1} alt="" />
      </div>
      <div className="space-y-6 sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2">
        <h3 className="font-big-shoulder text-6xl/12.5 font-extrabold uppercase">Your Day At The Gallery</h3>
        <p className="font-extralight text-xl">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process
        </p>
      </div>
      <div className="sm:row-start-2 sm:row-end-4 sm:col-start-1 sm:col-end-2 ">
        <img src={imageGrid2} alt="" />
      </div>
      <div className="place-self-center sm:place-self-auto sm:row-start-2 sm:row-end-3 sm:col-start-2 sm:col-end-4">
        <img src={imageGrid3} alt="" />
      </div>
      <div className="bg-Eerie-Black py-12 px-6 space-y-6 sm:col-start-2 sm:col-end-4 sm:row-start-3  sm:row-end-4">
        <h3 className="text-white text-6xl/12.5 uppercase font-big-shoulder font-bold ">Come & Be Inspired</h3>
        <p className="text-white text-xl font-extralight">
          We're excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </div>
  );
}
