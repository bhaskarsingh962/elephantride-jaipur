import { additionalBlogArticles } from "./additionalBlogArticles.js";
import { getImageDimensions } from "./imageDimensions.js";

const featuredArticleDefinitions = [
  {
    number: "01",
    category: "TRAVEL GUIDE",
    title: "Discover the Timeless Beauty of Jaipur",
    description:
      "Explore the heritage, culture and beautiful surroundings of Rajasthan's Pink City.",
    image: "/images/gallery/contributed/img-3063.webp",
    slug: "discover-the-timeless-beauty-of-jaipur",
    introduction:
      "Jaipur brings together historic architecture, lively streets and a rich cultural heritage. The city's landmarks offer visitors many ways to explore its character and plan a memorable stay.",
    sections: [
      {
        heading: "A city shaped by history",
        paragraphs: [
          "The official Elefriendride travel guide highlights landmarks including Hawa Mahal, Amer Fort, City Palace and Jantar Mantar. Each offers a different way to discover Jaipur's architectural and cultural heritage.",
          "Further places featured in the guide include Nahargarh Fort, Jaigarh Fort, Albert Hall Museum and Jal Mahal. Add the places that interest you to your own Jaipur itinerary.",
        ],
      },
      {
        heading: "Make room for local experiences",
        paragraphs: [
          "Jaipur's attractions extend beyond its historic buildings. The existing guide also points to Galta Ji, Chokhi Dhani, Birla Mandir and Sisodia Rani Garden.",
          "For a visit to Elefriendride, explore the sanctuary and experience pages, then contact the team to ask about current arrangements.",
        ],
      },
    ],
  },
  {
    number: "02",
    category: "JAIPUR ELEPHANT RIDE JOURNAL",
    title: "A Day of Discovery at Elefriendride",
    description:
      "Take a closer look at the destination, its surroundings and the experiences visitors can discover.",
    image: "/images/gallery/contributed/img-3782.webp",
    slug: "a-day-of-discovery-at-elefriendride",
    introduction:
      "Elefriendride's website introduces a range of ways for visitors to spend time with elephants in Jaipur. This overview can help you explore the experiences before contacting the team about your visit.",
    sections: [
      {
        heading: "Explore the experiences",
        paragraphs: [
          "The experiences listed on the website include meeting elephants, riding, walking, feeding, painting and bathing. Each experience has its own page with a photograph and a short description.",
          "Activities and arrangements may vary. Contact Elefriendride directly to confirm what is currently available and ask any questions before you travel.",
        ],
      },
      {
        heading: "Discover the setting",
        paragraphs: [
          "The sanctuary page and visitor gallery offer a closer look at Elefriendride and its surroundings in Jaipur. Browse the photographs to get a sense of the place and the moments visitors share.",
          "When you are ready to plan, use the contact page to reach the team by phone, email or WhatsApp.",
        ],
      },
    ],
  },
  {
    number: "03",
    category: "VISITOR GUIDE",
    title: "Planning Your Jaipur Experience",
    description:
      "A few helpful ideas to make planning your visit to Jaipur simple and enjoyable.",
    image: "/images/gallery/contributed/img-0133.webp",
    slug: "planning-your-jaipur-experience",
    introduction:
      "A little preparation can make it easier to plan a visit to Jaipur. Use these pointers to explore Elefriendride's information and ask the team about details that matter for your trip.",
    sections: [
      {
        heading: "Review the experience options",
        paragraphs: [
          "Browse the experience pages to learn about elephant meetings, rides, walks, feeding, painting and bathing. The pages describe the activities but do not list prices, schedules or guaranteed availability.",
          "For current details, contact Elefriendride before travelling and ask about the experience you are interested in.",
        ],
      },
      {
        heading: "Keep the practical details handy",
        paragraphs: [
          "Jaipur Elephant Ride has an office at 306, Bheso Walo Ka Mohalla, Moti Katla School, Subhash Chowk, Jaipur, Rajasthan 302002, and a farm at CISF Rd, Delhi Highway, Kunda, Amer, Jaipur, Rajasthan 302028. The contact page includes directions to both locations and a map of the farm.",
          "You can call, email or send an enquiry through WhatsApp. The enquiry form opens a message in WhatsApp for you to review and send; it does not store a booking or confirm a reservation.",
        ],
      },
    ],
  },
  {
    number: "04",
    category: "ELEPHANT JOURNAL",
    title: "Exploring Elephant Sanctuaries in India",
    description:
      "A look at elephant sanctuaries and visitor experiences featured in Elefriendride's published journal.",
    image: "/images/gallery/contributed/img-0841.webp",
    slug: "exploring-elephant-sanctuaries-in-india",
    introduction:
      "An existing Elefriendride journal article introduces elephant sanctuaries in India and highlights a selection of destinations and visitor activities.",
    sections: [
      {
        heading: "Sanctuaries featured in the journal",
        paragraphs: [
          "The published article discusses Kaziranga, Periyar, Bandipur and Mudumalai. It invites readers to learn more about these destinations and the role sanctuaries play in people's encounters with elephants.",
          "The article also turns to experiences in Jaipur, including guided walks, feeding and bathing activities described on the Elefriendride website.",
        ],
      },
      {
        heading: "Explore Elefriendride",
        paragraphs: [
          "For details about the activities listed at Elefriendride, visit the individual experience pages and contact the team to check current availability and visitor guidance.",
        ],
      },
    ],
  },
  {
    number: "05",
    category: "JAIPUR TRAVEL GUIDE",
    title: "Tourist Places in Jaipur",
    description:
      "Explore landmarks and places in Jaipur featured in the existing Elefriendride travel journal.",
    image: "/images/gallery/contributed/img-3064.webp",
    slug: "tourist-places-in-jaipur",
    introduction:
      "Jaipur's architecture, historic landmarks and cultural destinations offer plenty to explore. This guide draws on places featured in Elefriendride's existing Jaipur travel article.",
    sections: [
      {
        heading: "Forts, palaces and landmarks",
        paragraphs: [
          "The published guide names Hawa Mahal, Amer Fort, City Palace, Nahargarh Fort and Jaigarh Fort among Jaipur's destinations. Jantar Mantar and Albert Hall Museum are also included.",
          "Use the guide as a starting point for your own research and check current visitor information for each place as you plan your trip.",
        ],
      },
      {
        heading: "More places to discover",
        paragraphs: [
          "Other destinations mentioned in the article include Jal Mahal, Galta Ji, Chokhi Dhani, Birla Mandir and Sisodia Rani Garden.",
          "If Elefriendride is part of your visit, see the contact page for its address and directions, and ask the team directly about current experience arrangements.",
        ],
      },
    ],
  },
];

export const featuredBlogArticles = featuredArticleDefinitions.map((article) => ({
  ...article,
  imageDimensions: getImageDimensions(article.image),
}));

export const blogArticles = [
  ...additionalBlogArticles,
  ...featuredBlogArticles,
];
