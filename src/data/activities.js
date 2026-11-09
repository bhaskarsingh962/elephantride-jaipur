
import { getImageDimensions } from "./imageDimensions.js";

const activityDefinitions = [
  {
    id: 1,
    number: "01",
    title: "Elephant Meeting",
    slug: "elephant-meeting",
    image: "/images/activities/elephant-meeting.webp",
    description:
      "Observe elephants interacting with each other and discover their fascinating social behaviour.",
    introduction:
      "An elephant meeting is an opportunity to spend time near these remarkable animals and learn about the encounters Elefriendride offers in Jaipur.",
    details:
      "Elefriendride describes elephant meetings as a chance to observe elephants and their social behaviour. Ask the team about current arrangements before your visit.",
    supportingImages: [
      {
        src: "/images/gallery/gallery-05.webp",
        alt: "Family visitors meeting an elephant",
      },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "Elephant Ride",
    slug: "elephant-ride",
    image: "/images/activities/elephant-ride.webp",
    description:
      "Discover Jaipur's surrounding landscape through the elephant ride experience.",
    introduction:
      "Explore the landscape around Jaipur through the elephant ride experience featured on the Elefriendride website.",
    details:
      "The ride is one of the experiences described by Elefriendride. Contact the team to confirm availability and any visit details before making plans.",
    supportingImages: [
      {
        src: "/images/gallery/gallery-06.webp",
        alt: "Elephants and visitors outdoors at Elefriendride",
      },
      {
        src: "/images/gallery/contributed/img-3004.webp",
        alt: "Elephant walking along a path with visitors nearby",
      },
    ],
  },
  {
    id: 3,
    number: "03",
    title: "Walking with Elephants",
    slug: "walking-with-elephants",
    image: "/images/activities/elephant-walking.webp",
    description:
      "Experience a walk alongside elephants and discover the beauty of your surroundings.",
    introduction:
      "Walking with elephants offers visitors a chance to experience the surroundings alongside these animals.",
    details:
      "The existing Elefriendride website describes guided walks and interactions with elephants. Contact the team for current availability and visit guidance.",
    supportingImages: [
      {
        src: "/images/gallery/contributed/img-3722.webp",
        alt: "Visitor walking alongside an elephant",
      },
      {
        src: "/images/gallery/contributed/img-3723.webp",
        alt: "Children walking near an elephant",
      },
    ],
  },
  {
    id: 4,
    number: "04",
    title: "Feeding Elephant",
    slug: "feeding-elephant",
    image: "/images/activities/elephant-feeding.webp",
    description:
      "Discover the feeding experience and opportunities to interact with elephants.",
    introduction:
      "The feeding experience gives visitors a way to connect with elephants through one of the activities listed by Elefriendride.",
    details:
      "Feeding is featured among the experiences on the Elefriendride website. Please ask the team about current arrangements and guidance for visitors.",
    supportingImages: [
      {
        src: "/images/gallery/contributed/img-2023.webp",
        alt: "Visitor spending time with an elephant",
      },
      {
        src: "/images/gallery/gallery-04.webp",
        alt: "Visitor beside an elephant at Elefriendride",
      },
    ],
  },
  {
    id: 5,
    number: "05",
    title: "Painting on Elephant",
    slug: "painting",
    image: "/images/activities/elephant-painting.webp",
    description:
      "Explore the painting activity featured at Elefriendride.",
    introduction:
      "Painting on Elephant is an activity featured on the Elefriendride website, where visitors can take part in creating a shared memory.",
    details:
      "The existing website describes painting with safe, non-toxic paints. Contact Elefriendride to confirm the current activity details before visiting.",
    supportingImages: [
      {
        src: "/images/gallery/contributed/img-3727.webp",
        alt: "Visitor painting a design on an elephant",
      },
      {
        src: "/images/gallery/contributed/img-3728.webp",
        alt: "Visitor taking part in elephant painting",
      },
    ],
  },
  {
    id: 6,
    number: "06",
    title: "Bathing with Elephant",
    slug: "bathing",
    image: "/images/activities/elephant-bathing.webp",
    description:
      "Discover the bathing experience with elephants at Elefriendride.",
    introduction:
      "Bathing with Elephant is one of the experiences described on the Elefriendride website.",
    details:
      "The existing website describes visitors joining elephants for a bathing experience. Contact the team to confirm current availability and visitor guidance.",
    supportingImages: [
      {
        src: "/images/gallery/contributed/img-2704.webp",
        alt: "Elephants and visitors during a water experience",
      },
      {
        src: "/images/gallery/contributed/img-3304.webp",
        alt: "Visitors with an elephant outdoors",
      },
    ],
  },
];

export const activities = activityDefinitions.map((activity) => ({
  ...activity,
  imageDimensions: getImageDimensions(activity.image),
  supportingImages: activity.supportingImages.map((photo) => ({
    ...photo,
    dimensions: getImageDimensions(photo.src),
  })),
}));
