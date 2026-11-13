
import { getImageDimensions } from "./imageDimensions.js";

const activityDefinitions = [
  {
    id: 1,
    number: "01",
    title: "Elephant Meeting & Introduction",
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
    title: "Feeding the Elephant",
    slug: "feeding-elephant",
    image: "/images/gallery/contributed/img-1968.webp",
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
    id: 3,
    number: "03",
    title: "Paint On the Elephant",
    slug: "painting",
    image: "/images/new%20img/painting.jpeg",
    description:
      "Explore the painting activity featured at Elefriendride.",
    introduction:
      "Learn how to create a traditional decorative design using water-based or herbal colours.",
    details:
      "The colours used here are water-based or herbal, easy to apply and wash away, helping keep the elephant’s skin safe. Learn how to create a traditional decoration and enjoy painting a design across an elephant’s large body.",
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
    id: 4,
    number: "04",
    title: "Shower with Elephant",
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
  {
    id: 5,
    number: "05",
    title: "Walking with the Elephants in Village",
    slug: "walking-with-elephants",
    image: "/images/new%20img/walking.jpeg",
    description:
      "Experience a walk alongside elephants and discover the beauty of your surroundings.",
    introduction:
      "Walk with elephants at Jaipur Elephant Ride and discover the Fun with Elephants activity.",
    details:
      "The idea of an elephant safari gets everyone excited. Our “Fun with Elephants” activity gives visitors an opportunity to get close to these animals, walk alongside them and interact with them. Learn more about this activity and other elephant experiences at Jaipur Elephant Ride.",
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
];

export const activities = activityDefinitions.map((activity) => ({
  ...activity,
  imageDimensions: getImageDimensions(activity.image),
  supportingImages: activity.supportingImages.map((photo) => ({
    ...photo,
    dimensions: getImageDimensions(photo.src),
  })),
}));
