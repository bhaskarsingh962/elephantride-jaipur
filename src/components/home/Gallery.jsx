import { useEffect, useRef, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import {
  galleryCategories,
  galleryImages,
} from "../../data/galleryImages.js";
import { getResponsiveImage } from "../../data/responsiveImages.js";

const previewImageSources = new Set([
  "/images/gallery/gallery-01.webp",
  "/images/gallery/gallery-02.webp",
  "/images/gallery/gallery-04.webp",
  "/images/gallery/gallery-05.webp",
  "/images/gallery/contributed/img-0532.webp",
  "/images/gallery/contributed/img-1511.webp",
  "/images/gallery/contributed/img-3125.webp",
  "/images/gallery/contributed/img-3782.webp",
]);

export default function Gallery({ preview = false }) {
  const [category, setCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const images = preview
    ? galleryImages.filter((image) => previewImageSources.has(image.src))
    : galleryImages;
  const visibleImages =
    category === "All"
      ? images
      : images.filter((image) => image.category === category);
  const lightboxOpen = activeImage !== null;

  const closeLightbox = () => {
    setActiveImage(null);
    triggerRef.current?.focus();
  };

  const showNext = () => {
    setActiveImage((current) =>
      current === null ? null : (current + 1) % visibleImages.length
    );
  };

  const showPrevious = () => {
    setActiveImage((current) =>
      current === null
        ? null
        : (current - 1 + visibleImages.length) % visibleImages.length
    );
  };

  useEffect(() => {
    if (!lightboxOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "Tab") {
        const controls = dialogRef.current?.querySelectorAll(
          "button:not([disabled])"
        );
        if (!controls?.length) return;

        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, visibleImages.length]);

  return (
    <>
      {!preview && (
        <div className="gallery-filters" aria-label="Filter gallery photographs">
          {galleryCategories.map((item) => (
            <button
              type="button"
              key={item}
              className={`gallery-filter${category === item ? " gallery-filter-active" : ""}`}
              aria-pressed={category === item}
              onClick={() => {
                setCategory(item);
                setActiveImage(null);
              }}
            >
              {item === "All" ? "All photographs" : item}
            </button>
          ))}
        </div>
      )}

      <div className="gallery-grid">
        {visibleImages.map((item, index) => {
          const image = preview
            ? getResponsiveImage(
                item.src,
                "(min-width: 1000px) 22vw, (min-width: 651px) 29vw, 44vw",
                item.dimensions
              )
            : { src: item.src };

          return (
            <button
              type="button"
              key={item.src}
              className={`gallery-item gallery-item-${(index % 8) + 1}`}
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setActiveImage(index);
              }}
              aria-label={`View photograph ${index + 1}: ${item.alt}`}
            >
              <img
                src={image.src}
                srcSet={image.srcSet}
                sizes={image.sizes}
                alt={item.alt}
                width={item.dimensions.width}
                height={item.dimensions.height}
                loading="lazy"
                decoding="async"
              />
              <span className="gallery-item-overlay">
                <span>{item.category}</span>
                <Maximize2 size={20} aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>

      {activeImage !== null && visibleImages[activeImage] && (
        <div
          ref={dialogRef}
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            className="lightbox-close"
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <X size={28} aria-hidden="true" />
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photograph"
          >
            <ChevronLeft size={30} aria-hidden="true" />
          </button>

          <div
            className="lightbox-image-container"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={visibleImages[activeImage].src}
              alt={visibleImages[activeImage].alt}
              width={visibleImages[activeImage].dimensions.width}
              height={visibleImages[activeImage].dimensions.height}
            />
            <p>
              {visibleImages[activeImage].category}
              {" · "}
              {String(activeImage + 1).padStart(2, "0")}
              {" / "}
              {String(visibleImages.length).padStart(2, "0")}
            </p>
          </div>

          <button
            className="lightbox-arrow lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photograph"
          >
            <ChevronRight size={30} aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
