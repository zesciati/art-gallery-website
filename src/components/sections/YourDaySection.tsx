export default function YourDaySection() {
  return (
    // <!-- Responsive Grid Container -->
    <div className="grid grid-cols-1 grid-rows-5 gap-4 md:grid-cols-3 md:grid-rows-3 md:gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-4">
      {/* <!-- Item 1 --> */}
      <div className="col-start-1 col-span-1 row-start-1 row-span-1 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-1 bg-blue-500 text-white flex items-center justify-content font-semibold rounded">
        Item 1
      </div>
      {/* <!-- Item 2 --> */}
      <div className="col-start-1 col-span-1 row-start-2 row-span-1 md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-1 lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:row-span-1 bg-blue-500 text-white flex items-center justify-content font-semibold rounded">
        Item 2
      </div>
      {/* <!-- Item 3 --> */}
      <div className="col-start-1 col-span-1 row-start-3 row-span-1 md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-1 lg:col-start-3 lg:col-span-1 lg:row-start-2 lg:row-span-1 bg-blue-500 text-white flex items-center justify-content font-semibold rounded">
        Item 3
      </div>
      {/* <!-- Item 4 --> */}
      <div className="col-start-1 col-span-1 row-start-4 row-span-1 md:col-start-3 md:col-span-1 md:row-start-3 md:row-span-1 lg:col-start-3 lg:col-span-1 lg:row-start-3 lg:row-span-1 bg-blue-500 text-white flex items-center justify-content font-semibold rounded">
        Item 4
      </div>
      {/* <!-- Item 5 --> */}
      <div className="col-start-1 col-span-1 row-start-5 row-span-1 md:col-start-1 md:col-span-2 md:row-start-2 md:row-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-span-2 bg-blue-500 text-white flex items-center justify-content font-semibold rounded">
        Item 5
      </div>
    </div>
  );
}
