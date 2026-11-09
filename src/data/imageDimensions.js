import imageDimensions from "./imageDimensions.json";

export function getImageDimensions(src) {
  const dimensions = imageDimensions[src];

  if (!dimensions) {
    throw new Error(`Missing intrinsic image dimensions for "${src}".`);
  }

  return dimensions;
}
