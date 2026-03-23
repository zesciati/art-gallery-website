import imageGrid1 from "@/assets/mobile/image-grid-1@2x.jpg";
import imageGrid1Desktop from "@/assets/desktop/image-grid-1.jpg";
import imageGrid1Tablet from "@/assets/tablet/image-grid-1@2x.webp";
import imageGrid3 from "@/assets/desktop/image-grid-3.jpg";
import imageGrid2 from "@/assets/desktop/image-grid-2.jpg";
// import imageGrid1 from '@/assets/desktop/image-grid-1.jpg'

export default function YourDaySection() {
  return (
    <section className="mx-4 max-sm:space-y-3 lg:mx-48 2xl:mx-96">
      <div className="flex flex-col-reverse gap-3  sm:flex-row sm:mb-4 lg:justify-between">
        <div className="space-y-9 sm:w-108 md:w-98">
          <h3 className="uppercase font-big-shoulder font-bold text-6xl/12.5 mr-6">
            Your Day At The Gallery
          </h3>
          <p className="font-extralight text-xl">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>

        <picture>
          <source media="(min-width: 800px)" srcSet={imageGrid1Desktop} />
          <source media="(min-width: 410px)" srcSet={imageGrid1Tablet} />
          <img src={imageGrid1} alt="art display" />
        </picture>
      </div>
      <div className="grid max-sm:gap-3 sm:gap-3 sm:grid-cols-4 sm:grid-rows-4 ">
        <div className="sm:row-start-1 sm:row-end-5 sm:col-start-1 sm:col-end-3 bg-amber-600  ">
          <img src={imageGrid2} alt="table with picture" className="sm:min-h-full" />
        </div>
        <div className="bg-Sandy-Brown place-self-stretch  sm:row-start-1 sm:row-end-3 sm:col-start-3 sm:col-end-5 ">
          <img
            src={imageGrid3}
            alt="people looking at the art"
            className="sm:min-h-full w-full object-cover"
          />
        </div>
        <div className="bg-Eerie-Black py-12 px-6 space-y-6 sm:col-start-3 sm:col-end-5 sm:row-start-3  sm:row-end-5">
          <h3 className="text-white text-6xl/12.5 uppercase font-big-shoulder font-bold ">
            Come & Be Inspired
          </h3>
          <p className="text-white text-xl font-extralight">
            We're excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </div>
      </div>
    </section>
  );
}
