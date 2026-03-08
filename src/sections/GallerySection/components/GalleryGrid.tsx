export const GalleryGrid = () => {
  const images = [
    { src: "/jimbos/gal1.jpg", alt: "Jimbos Cleaning Gallery 1" },
    { src: "/jimbos/gal2.jpg", alt: "Jimbos Cleaning Gallery 2" },
    { src: "/jimbos/gal3.jpg", alt: "Jimbos Cleaning Gallery 3" },
    { src: "/jimbos/gal4.jpg", alt: "Jimbos Cleaning Gallery 4" },
    { src: "/jimbos/gal5.jpg", alt: "Jimbos Cleaning Gallery 5" },
    { src: "/jimbos/gal6.jpg", alt: "Jimbos Cleaning Gallery 6" },
  ];

  return (
    <div className="box-border caret-transparent gap-x-[18px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[18px] mt-10 md:gap-x-5 md:grid-cols-[1fr_1fr_1fr] md:gap-y-5 md:mt-14">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative box-border caret-transparent blur-0 overflow-hidden rounded-lg md:rounded-xl block cursor-pointer hover:opacity-90 transition-opacity ${
            index === 0
              ? "col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[400px] md:row-end-[span_2] md:row-start-[span_2] md:h-auto"
              : index === images.length - 1 && images.length % 3 === 1
              ? "col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[277px] md:col-end-[span_2] md:col-start-[span_2]"
              : "h-[277px]"
          }`}
        >
          <img
            src={image.src}
            sizes="100vw"
            alt={image.alt}
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            loading={index < 3 ? "eager" : "lazy"}
            onError={(e) => {
              console.error("Failed to load image:", image.src);
            }}
          />
        </a>
      ))}
    </div>
  );
};
