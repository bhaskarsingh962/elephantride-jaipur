import { getImageDimensions } from "./imageDimensions.js";

const responsiveWidths = [480, 800];

export function getResponsiveImage(src, sizes, dimensions = getImageDimensions(src)) {
  const sourcePath = src.split("?")[0];
  const extensionIndex = sourcePath.lastIndexOf(".");
  const sourceStem = sourcePath.slice(0, extensionIndex);
  const responsiveStem = sourceStem.replace(/^\/images\//, "/images/responsive/");
  const availableWidths = responsiveWidths.filter((width) => width < dimensions.width);
  const srcSet = [
    ...availableWidths.map(
      (width) => `${responsiveStem}-${width}.webp ${width}w`
    ),
    `${src} ${dimensions.width}w`,
  ].join(", ");
  const fallbackWidth = [...availableWidths].reverse()[0];

  return {
    src: fallbackWidth ? `${responsiveStem}-${fallbackWidth}.webp` : src,
    srcSet,
    sizes,
    width: dimensions.width,
    height: dimensions.height,
  };
}

export const homepageHeroImage = getResponsiveImage(
  "/images/activities/elephant-ride.webp",
  "100vw"
);
