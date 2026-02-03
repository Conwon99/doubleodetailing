export const ServicesPricing = () => {
  const partRepairs = [
    { name: "Battery Replacement Only", price: "from £10" },
    { name: "Battery Reseal (with pressure test pass printed ticket)", price: "£50" },
    { name: "Standard Glass Replacement", price: "from £40" },
    { name: "Shaped Glass Replacement (square, oval etc)", price: "from £60" },
    { name: "Crown & Stem Repairs", price: "from £45" },
    { name: "Case and Bracelet Polishing", price: "from £80" },
  ];

  const servicing = [
    { name: "Quartz Service (Movement Exchange, on fashion brands including Armani, DKNY, Fossil etc)", price: "from £50" },
    { name: "Quartz Service", price: "from £150" },
    { name: "Mechanical Service (Manual Wind)", price: "from £200" },
    { name: "Mechanical Service (Automatic Movement)", price: "from £230" },
    { name: "Vintage Watch Service", price: "from £250" },
    { name: "Mechanical Chronograph Service", price: "from £330" },
    { name: "Automatic Chronograph Service", price: "from £350" },
    { name: "Omega Co-Axial Service", price: "from £295" },
    { name: "Rolex Servicing", price: "from £350" },
  ];

  return (
    <div className="box-border caret-transparent gap-x-8 flex flex-col gap-y-8 mt-10 md:flex-row md:mt-14 md:gap-y-0">
      {/* Part Repairs Column */}
      <div className="box-border caret-transparent flex-1">
        <div className="bg-white box-border caret-transparent rounded-lg border border-neutral-200 overflow-hidden md:overflow-visible">
          <div className="relative box-border caret-transparent h-48 overflow-hidden rounded-t-lg">
            <img
              src="/w3.jpeg"
              alt="Part Repairs"
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            />
            <div className="absolute bg-black/50 box-border caret-transparent bottom-0 inset-x-0 px-6 py-4">
              <h3 className="text-2xl font-medium box-border caret-transparent text-white md:text-3xl">
                Part Repairs
              </h3>
            </div>
          </div>
          <div className="box-border caret-transparent p-6 md:p-8">
            <div className="box-border caret-transparent space-y-4">
              {partRepairs.map((service, index) => (
                <div
                  key={index}
                  className="box-border caret-transparent border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="box-border caret-transparent flex flex-col gap-y-1 md:flex-row md:justify-between md:items-start md:gap-x-4">
                    <div className="text-[15px] box-border caret-transparent leading-6 text-gray-700 flex-1 md:text-base">
                      {service.name}
                    </div>
                    <div className="text-[15px] font-medium box-border caret-transparent leading-6 text-black whitespace-nowrap md:text-base">
                      {service.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Servicing Column */}
      <div className="box-border caret-transparent flex-1">
        <div className="bg-white box-border caret-transparent rounded-lg border border-neutral-200 overflow-hidden md:overflow-visible">
          <div className="relative box-border caret-transparent h-48 overflow-hidden rounded-t-lg">
            <img
              src="/w4.jpeg"
              alt="Servicing"
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            />
            <div className="absolute bg-black/50 box-border caret-transparent bottom-0 inset-x-0 px-6 py-4">
              <h3 className="text-2xl font-medium box-border caret-transparent text-white md:text-3xl">
                Servicing
              </h3>
            </div>
          </div>
          <div className="box-border caret-transparent p-6 md:p-8">
            <div className="box-border caret-transparent space-y-4">
              {servicing.map((service, index) => (
                <div
                  key={index}
                  className="box-border caret-transparent border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="box-border caret-transparent flex flex-col gap-y-1 md:flex-row md:justify-between md:items-start md:gap-x-4">
                    <div className="text-[15px] box-border caret-transparent leading-6 text-gray-700 flex-1 md:text-base">
                      {service.name}
                    </div>
                    <div className="text-[15px] font-medium box-border caret-transparent leading-6 text-black whitespace-nowrap md:text-base">
                      {service.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
