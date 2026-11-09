import { getImageDimensions } from "./imageDimensions.js";

const contributedPhotos = [
  ["img-0709.webp", "Visitors", "Visitors gathered outdoors at Elefriendride"],
  ["img-0841.webp", "Visitors", "A group of visitors with an elephant"],
  ["img-1864.webp", "Encounters", "Elephants at Elefriendride"],
  ["img-1959.webp", "Encounters", "Visitor beside an elephant"],
  ["img-1968.webp", "Encounters", "Visitor meeting an elephant"],
  ["img-1971.webp", "Encounters", "Visitor spending time with an elephant"],
  ["img-2001.webp", "Painting", "Visitor painting a design on an elephant"],
  ["img-2003.webp", "Painting", "Elephant painting activity"],
  ["img-2023.webp", "Encounters", "Visitor beside an elephant"],
  ["img-2704.webp", "Bathing", "Elephants and visitors during a water experience"],
  ["img-2706.webp", "Bathing", "Elephants and visitors outdoors near water"],
  ["img-2896.webp", "Encounters", "Visitor meeting an elephant"],
  ["img-2902.webp", "Encounters", "Visitors beside an elephant"],
  ["img-2910.webp", "Visitors", "Family visitors meeting an elephant"],
  ["img-2911.webp", "Visitors", "Family visitors outdoors with an elephant"],
  ["img-2912.webp", "Walking", "Visitors walking near elephants outdoors"],
  ["img-2931.webp", "Encounters", "Visitor beside an elephant"],
  ["img-2932.webp", "Encounters", "Visitor spending time with an elephant"],
  ["img-2934.webp", "Encounters", "Elephants at Elefriendride"],
  ["img-2987.webp", "Visitors", "Visitors gathered near elephants outdoors"],
  ["img-2989.webp", "Visitors", "Visitors spending time around elephants"],
  ["img-3004.webp", "Walking", "Elephants walking along a path with visitors nearby"],
  ["img-3113.webp", "Visitors", "A group of visitors with elephants"],
  ["img-3159.webp", "Encounters", "Visitors beside an elephant"],
  ["img-3161.webp", "Encounters", "Visitors meeting an elephant"],
  ["img-3164.webp", "Encounters", "Visitor beside an elephant"],
  ["img-3165.webp", "Encounters", "Visitor spending time with an elephant"],
  ["img-3304.webp", "Bathing", "Visitors and elephants during a water experience"],
  ["img-3307.webp", "Visitors", "Visitors meeting elephants outdoors"],
  ["img-3493.webp", "Encounters", "Visitors with an elephant outdoors"],
  ["img-3500.webp", "Encounters", "Visitor seated beside an elephant"],
  ["img-3503.webp", "Encounters", "Visitor beside an elephant outdoors"],
  ["img-3506.webp", "Encounters", "Visitor spending time with an elephant"],
  ["img-3576.webp", "Encounters", "Two elephants together outdoors"],
  ["img-3722.webp", "Walking", "Visitor walking alongside an elephant"],
  ["img-3723.webp", "Walking", "Children walking near an elephant"],
  ["img-3724.webp", "Walking", "Visitor walking beside an elephant"],
  ["img-3725.webp", "Visitors", "A group of visitors with an elephant"],
  ["img-3726.webp", "Visitors", "Visitors gathered with elephants"],
  ["img-3727.webp", "Painting", "Visitor painting a design on an elephant"],
  ["img-3728.webp", "Painting", "Visitor taking part in elephant painting"],
];

const galleryPhotoDefinitions = [
  {
    src: "/images/activities/elephant-meeting.webp",
    alt: "Visitor meeting an elephant at Elefriendride",
    category: "Encounters",
  },
  {
    src: "/images/activities/elephant-ride.webp",
    alt: "Elephant ride experience at Elefriendride",
    category: "Encounters",
  },
  {
    src: "/images/activities/elephant-walking.webp",
    alt: "Visitors walking near an elephant",
    category: "Walking",
  },
  {
    src: "/images/activities/elephant-feeding.webp",
    alt: "Visitor spending time with an elephant",
    category: "Feeding",
  },
  {
    src: "/images/activities/elephant-painting.webp",
    alt: "Visitor painting a design on an elephant",
    category: "Painting",
  },
  {
    src: "/images/activities/elephant-bathing.webp",
    alt: "Elephants and visitors during a water experience",
    category: "Bathing",
  },
  {
    src: "/images/gallery/gallery-01.webp",
    alt: "Visitors gathered with elephants outdoors",
    category: "Visitors",
  },
  {
    src: "/images/gallery/gallery-02.webp",
    alt: "A group of visitors with an elephant",
    category: "Visitors",
  },
  {
    src: "/images/gallery/gallery-04.webp",
    alt: "Visitor meeting an elephant",
    category: "Encounters",
  },
  {
    src: "/images/gallery/gallery-05.webp",
    alt: "Family visitors meeting an elephant",
    category: "Visitors",
  },
  {
    src: "/images/gallery/gallery-06.webp",
    alt: "Elephants and visitors outdoors",
    category: "Visitors",
  },
  {
    src: "/images/gallery/gallery-07.webp",
    alt: "Visitors standing beside elephants",
    category: "Visitors",
  },
  {
    src: "/images/gallery/gallery-08.webp",
    alt: "Visitor beside an elephant outdoors",
    category: "Encounters",
  },
  {
    src: "/images/gallery/contributed/img-0133.webp",
    alt: "Visitors sharing a moment during a Jaipur visit",
    category: "Visitors",
  },
  {
    src: "/images/gallery/contributed/img-0519.webp",
    alt: "Traditional pottery workshop",
    category: "Jaipur",
  },
  {
    src: "/images/gallery/contributed/img-0532.webp",
    alt: "Colorful goods on display at a local market",
    category: "Jaipur",
  },
  {
    src: "/images/gallery/contributed/img-1511.webp",
    alt: "A landmark illuminated at night",
    category: "Jaipur",
  },
  {
    src: "/images/gallery/contributed/img-3063.webp",
    alt: "Visitors exploring a historic Jaipur landmark",
    category: "Jaipur",
  },
  {
    src: "/images/gallery/contributed/img-3064.webp",
    alt: "Historic architecture in Jaipur",
    category: "Jaipur",
  },
  {
    src: "/images/gallery/contributed/img-3114.webp",
    alt: "A group of travellers on a tour bus",
    category: "Visitors",
  },
  {
    src: "/images/gallery/contributed/img-3116.webp",
    alt: "Visitors in colorful traditional attire",
    category: "Visitors",
  },
  {
    src: "/images/gallery/contributed/img-3125.webp",
    alt: "Visitors at the Taj Mahal",
    category: "Day Trips",
  },
  {
    src: "/images/gallery/contributed/img-3781.webp",
    alt: "Visitor admiring a fort view in Jaipur",
    category: "Jaipur",
  },
  {
    src: "/images/gallery/contributed/img-3782.webp",
    alt: "Child meeting an elephant",
    category: "Encounters",
  },
  {
    src: "/images/gallery/contributed/img-3783.webp",
    alt: "Visitor standing with an elephant",
    category: "Encounters",
  },
  ...contributedPhotos.map(([file, category, alt]) => ({
    src: `/images/gallery/contributed/${file}`,
    alt,
    category,
  })),
];

export const galleryImages = galleryPhotoDefinitions.map((image) => ({
  ...image,
  dimensions: getImageDimensions(image.src),
}));

export const galleryCategories = [
  "All",
  "Encounters",
  "Walking",
  "Feeding",
  "Bathing",
  "Painting",
  "Visitors",
  "Jaipur",
  "Day Trips",
];
