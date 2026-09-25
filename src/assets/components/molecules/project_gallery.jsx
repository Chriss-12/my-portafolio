import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const carouselOptions = {
  align: "start",
  containScroll: "trimSnaps",
  loop: false,
  duration: 25,
  breakpoints: {
    "(prefers-reduced-motion: reduce)": { duration: 0 },
  },
};

function ProjectGallery({ slides, labels, copy }) {
  const visibleSlides = slides.slice(0, 5);
  const [viewportRef, emblaApi] = useEmblaCarousel(carouselOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canGoPrevious, setCanGoPrevious] = useState(false);
  const [canGoNext, setCanGoNext] = useState(visibleSlides.length > 1);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelection = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanGoPrevious(emblaApi.canScrollPrev());
      setCanGoNext(emblaApi.canScrollNext());
    };

    updateSelection();
    emblaApi.on("select", updateSelection);
    emblaApi.on("reInit", updateSelection);

    return () => {
      emblaApi.off("select", updateSelection);
      emblaApi.off("reInit", updateSelection);
    };
  }, [emblaApi]);

  return (
    <div className="project-gallery" role="region" aria-roledescription={copy.galleryRole} aria-label={copy.gallery}>
      <div className="project-gallery__viewport" ref={viewportRef}>
        <div className="project-gallery__track">
          {visibleSlides.map((slide, index) => (
            <div className="project-gallery__slide" role="group" aria-label={`${index + 1} ${copy.galleryOf} ${visibleSlides.length}`} aria-hidden={selectedIndex !== index} key={slide.image}>
              <span className="project-gallery__caption" aria-hidden="true">
                {labels?.[index]?.label ?? slide.label}
              </span>
              <img
                src={slide.image}
                alt={labels?.[index]?.alt ?? slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="project-gallery__controls">
        <span className="project-gallery__count" aria-live="polite" aria-label={`${selectedIndex + 1} ${copy.galleryOf} ${visibleSlides.length}`}>
          <span aria-hidden="true">{String(selectedIndex + 1).padStart(2, "0")} / {String(visibleSlides.length).padStart(2, "0")}</span>
        </span>
        <div className="project-gallery__arrows">
          <button type="button" onClick={() => emblaApi?.scrollPrev()} disabled={!canGoPrevious} aria-label={copy.previousImage}>
            <i className="fa fa-arrow-left" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => emblaApi?.scrollNext()} disabled={!canGoNext} aria-label={copy.nextImage}>
            <i className="fa fa-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectGallery;
