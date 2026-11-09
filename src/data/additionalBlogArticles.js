import { getImageDimensions } from "./imageDimensions.js";

const sourceArticles = [
  ["elephant-sanctuary-day-trip-from-delhi", "Elephant Sanctuary Day Trip from Delhi: How to Plan It", "2026-11-03", "elephant-sanctuary-day-trip-from-delhi-card.webp"],
  ["christmas-in-india-golden-triangle", "Christmas in India: A Golden Triangle Holiday Plan", "2026-11-02", "christmas-in-india-golden-triangle-card.webp"],
  ["things-to-know-before-elephant-ride-jaipur", "Things to Know Before an Elephant Ride in Jaipur", "2026-11-01", "things-to-know-before-elephant-ride-jaipur-card.webp"],
  ["taj-mahal-day-trip-from-jaipur", "Taj Mahal Day Trip from Jaipur: Is It Worth It?", "2026-10-24", "/images/gallery/contributed/img-3125.webp"],
  ["how-much-does-an-elephant-weigh", "How Much Does an Elephant Weigh? Asian Elephant Facts", "2026-10-23", "how-much-does-an-elephant-weigh-card.webp"],
  ["ranthambore-tiger-safari-from-jaipur", "Ranthambore Tiger Safari from Jaipur: A Complete Guide", "2026-10-22", "ranthambore-tiger-safari-from-jaipur-card.webp"],
  ["what-to-expect-at-elephant-sanctuary", "What to Expect at an Elephant Sanctuary in Jaipur", "2026-10-21", "what-to-expect-at-elephant-sanctuary-card.webp"],
  ["jaipur-2-day-itinerary", "Jaipur 2-Day Itinerary: Forts, Elephants and Night", "2026-10-20", "jaipur-2-day-itinerary-card.webp"],
  ["private-tour-guide-jaipur", "Private Tour Guide in Jaipur: Is It Worth It?", "2026-10-19", "private-tour-guide-jaipur-card.webp"],
  ["elephant-ride-with-kids-jaipur", "Elephant Ride with Kids in Jaipur: Age, Safety and Tips", "2026-10-18", "elephant-ride-with-kids-jaipur-card.webp"],
  ["jhalana-leopard-safari-jaipur", "Jhalana Leopard Safari Jaipur: Zones, Timings and Tips", "2026-10-17", "jhalana-leopard-safari-jaipur-card.webp"],
  ["elephant-safari-vs-elephant-ride", "Elephant Safari vs Elephant Ride: Which Should You Choose", "2026-10-16", "elephant-safari-vs-elephant-ride-card.webp"],
  ["jaipur-night-jeep-safari", "Jaipur Night Jeep Safari: What to Expect After Dark", "2026-10-15", "/images/gallery/contributed/img-1511.webp"],
  ["best-time-for-elephant-ride", "Best Time for an Elephant Ride: Morning Hours by Season", "2026-10-14", "/images/gallery/contributed/img-3783.webp"],
  ["golden-triangle-itinerary", "Golden Triangle Itinerary: 3 Days vs 5 Days in India", "2026-10-13", "golden-triangle-itinerary-card.webp"],
  ["how-long-do-elephants-live", "How Long Do Elephants Live? Asian Elephant Lifespan", "2026-10-12", "how-long-do-elephants-live-card.webp"],
  ["rajasthan-festivals-in-november", "Rajasthan Festivals in November: A Traveller's Guide", "2026-10-11", "rajasthan-festivals-in-november-card.webp"],
  ["elephant-sanctuary-with-kids", "Elephant Sanctuary with Kids: A Jaipur Family Guide", "2026-10-10", "elephant-sanctuary-with-kids-card.webp"],
  ["best-time-to-visit-jaipur", "Best Time to Visit Jaipur: Month-by-Month Guide", "2026-10-09", "best-time-to-visit-jaipur-card.webp"],
  ["elephant-ride-or-jeep-amber-fort", "Elephant Ride or Jeep to Amber Fort? How to Choose", "2026-10-08", "elephant-ride-or-jeep-amber-fort-card.webp"],
  ["delhi-to-jaipur", "Delhi to Jaipur: Train, Car or Flight? Times and Tips", "2026-10-07", "delhi-to-jaipur-card.webp"],
  ["what-do-elephants-eat", "What Do Elephants Eat? A Jaipur Sanctuary's Daily Diet", "2026-10-06", "what-do-elephants-eat-card.webp"],
  ["pushkar-camel-fair", "Pushkar Camel Fair 2026: Dates and How to Go from Jaipur", "2026-10-05", "pushkar-camel-fair-card.webp"],
  ["how-to-choose-an-elephant-sanctuary", "How to Choose an Elephant Sanctuary: 7 Questions to Ask", "2026-10-04", "how-to-choose-an-elephant-sanctuary-card.webp"],
  ["diwali-in-jaipur", "Diwali in Jaipur 2026: Lights, Bazaars and Travel Tips", "2026-10-03", "/images/gallery/contributed/img-0532.webp"],
  ["what-to-wear-to-elephant-sanctuary-jaipur", "What to Wear to an Elephant Sanctuary in Jaipur", "2026-10-02", "/images/gallery/contributed/img-2989.webp"],
  ["jaipur-weather-october-november", "Jaipur Weather in October and November: What to Pack", "2026-10-01", "elephant-sanctuary-tours-in-jaipur-for-usa.webp"],
  ["things-to-do-in-amer-jaipur", "Things to Do in Amer, Jaipur: 12 Places Locals Actually Go", "2026-09-18", "/images/gallery/contributed/img-3781.webp"],
  ["elephant-riding-jaipur-ethical", "Elephant Riding in Jaipur Ethical? An Honest Answer", "2026-09-16", "elephant-village-in-jaipur.webp"],
  ["jaipur-in-one-day-itinerary", "Jaipur in One Day - A Local's Itinerary", "2026-09-15", "/images/gallery/contributed/img-3116.webp"],
  ["elephant-ride-jaipur-price", "Elephant Ride Jaipur Price 2026", "2026-09-14", "/images/gallery/contributed/img-3724.webp"],
  ["best-time-to-visit-elephant-sanctuary-jaipur", "Best Time to Visit Elephant Sanctuary Jaipur - What Nobody Tells You", "2026-09-11", "/images/gallery/contributed/img-2704.webp"],
  ["guided-elephant-tours-in-jaipur", "Guided Elephant Tours in Jaipur | Private Elephant Safari", "2026-03-12", "/images/gallery/contributed/img-3722.webp"],
  ["royal-elephant-ride-at-amber-palace", "Amber Palace Elephant Rides | Royal Elephant Ride Jaipur | Elefriendride", "2026-03-09", "a-unique-experience-for-uk-tourists.webp"],
  ["star-tour-tourism", "Star Tour Tourism | Private India Tours & Golden Triangle Specialists", "2026-02-27", "/images/gallery/contributed/img-3114.webp"],
  ["jaipur-elephant-sanctuary-elefriendride", "Jaipur Elephant Sanctuary | Ethical Tours Jaipur", "2026-01-14", "/images/gallery/contributed/img-3726.webp"],
  ["jaipur-elephant-experience-elefriendride-sanctuary", "Jaipur Elephant Experience - Elefriendride Sanctuary", "2025-12-11", "/images/gallery/contributed/img-2987.webp"],
  ["elefriendride-ethical-elephant-sanctuary", "Ethical Elephant Sanctuary", "2025-11-14", "/images/gallery/contributed/img-2934.webp"],
  ["private-elephant-sanctuary-jaipur", "Private Elephant Sanctuary Jaipur | Ethical Elephant Experience", "2025-08-26", "/images/gallery/contributed/img-0709.webp"],
  ["experience-ethical-elephant-activities-at-jaipurs-top-sanctuary", "Experience Ethical Elephant Activities at Jaipur's Top Sanctuary", "2025-02-26", "experience-ethical-elephant-activities-at-jaipurs-top-sanctuary.webp"],
  ["elephant-sanctuary-elephant-ride-and-elephant-safari-in-jaipur", "Elephant Sanctuary, Elephant Ride, and Elephant Safari in Jaipur: A Complete Guide", "2025-02-17", "/images/gallery/contributed/img-2910.webp"],
  ["elephant-feeding-experience-in-jaipur-for-usa-tourists", "Elephant feeding experience in Jaipur for USA tourists", "2024-11-24", "elephant-feeding-experience-in-jaipur-for-usa-tourists.webp"],
  ["a-unique-experience-for-uk-tourists", "Elephant Life in Jaipur: A Unique Experience for UK Tourists", "2024-11-24", "/images/gallery/contributed/img-1968.webp"],
  ["uk-tourists-to-stay-with-elephants-in-jaipur", "UK Tourists to Stay with Elephants in Jaipur", "2024-11-24", "uk-tourists-to-stay-with-elephants-in-jaipur.webp"],
  ["a-unique-adventure-for-uk-tourists", "Walk with Elephants in Jaipur - A Unique Adventure for UK Tourists", "2024-11-23", "a-unique-adventure-for-uk-tourists.webp"],
  ["elephant-shower-adventure-in-jaipur-for-uk-tourists", "Elephant Shower Adventure in Jaipur for UK Tourists | Elefriendride", "2024-11-23", "elephant-shower-adventure-in-jaipur-for-uk-tourists.webp"],
  ["a-memorable-adventure-for-usa-tourists", "Elephant Safari in Jaipur: A Memorable Adventure for USA Tourists", "2024-11-23", "a-memorable-adventure-for-usa-tourists.webp"],
  ["elefriendride-is-a-must-visit-for-usa-tourists", "Elefriendride is a must-visit for USA tourists to explore Jaipur's Elephant Sanctuary", "2024-11-20", "elefriendride-is-a-must-visit-for-usa-tourists.webp"],
  ["elephant-ride-at-amber-fort-with-elefriendride", "Elephant Ride at Amber Fort with Elefriendride | Unforgettable Jaipur Adventure", "2024-11-20", "elephant-ride-at-amber-fort-with-elefriendride.webp"],
  ["elephant-painting-in-jaipur-for-uk-tourists", "Elephant Painting in Jaipur for UK Tourists | Unique Experience with Elefriendride", "2024-11-20", "elephant-painting-in-jaipur-for-uk-tourists.webp"],
  ["elephants-ride-bathe-and-bond-with-majestic-giants-at-elefriendride", "A Day with Elephants: Ride, Bathe, and Bond with Majestic Giants at Elefriendride", "2024-11-20", "elephants-ride-bathe-and-bond-with-majestic-giants-at-elefriendride.webp"],
  ["grand-adventure-awaits-with-elefriendride", "Elephant Safari in Jaipur: A Grand Adventure Awaits with Elefriendride", "2024-11-11", "grand-adventure-awaits-with-elefriendride.webp"],
  ["create-lasting-memories-with-indias-incredible-elephant-adventures", "Create Lasting Memories with India's Incredible Elephant Adventures", "2024-11-11", "create-lasting-memories-with-indias-incredible-elephant-adventures.webp"],
  ["jaipur-vibrant-bazaar-with-elefriendride", "Discover Jaipur's Vibrant Bazaars with Elefriendride: A Shopper's Paradise", "2024-11-11", "japur-vibrant-bazaar-with-elefriendride.webp"],
  ["jaipur-royal-elegance", "Uncover Jaipur's Royal Elegance: Elephant Rides, Stunning Palaces & Guided Day Tours", "2024-11-11", "jaipur-royal-elegance.webp"],
  ["elephants-in-a-natural-habitat", "Unforgettable Stays with Elephants in a Natural Habitat", "2024-10-27", "elephants-in-a-natural-habitat.webp"],
  ["walking-with-elephants", "Walking with Elephants: Connect with Nature in Jaipur", "2024-10-26", "walking-with-elephants.webp"],
  ["lion-safari-at-nahargarh-biological-park", "Lion Safari at Nahargarh Biological Park", "2024-10-25", "lion-safari-at-nahargarh-biological-park.webp"],
  ["ethical-elephant-sanctuary", "Support Sustainable Wildlife at Our Ethical Elephant Sanctuary", "2024-10-25", "ethical-elephant-sanctuary.webp"],
  ["elephant-farm-in-jaipur", "What to Expect at an Elephant Farm in Jaipur", "2024-10-24", "elephant-farm-in-jaipur.webp"],
  ["enjoy-elephant-painting-in-jaipurs-festivals", "Enjoy Ethical Elephant Painting in Jaipur - Elefriendride", "2024-10-24", "enjoy-elephant-painting-in-jaipurs-festivals.webp"],
  ["elephant-shower-in-jaipur", "Elephant Shower in Jaipur: Fun, Refreshing, and Ethical", "2024-10-17", "elephant-shower-in-jaipu.webp"],
  ["elephant-bathing-in-jaipur", "Elephant Bathing in Jaipur | A Refreshing and Unforgettable Experience", "2024-10-17", "elephant-bathing-in-jaipur.webp"],
  ["elephant-feeding-in-jaipur", "Explore Elephant Feeding in Jaipur | A Unique and Ethical Experience", "2024-10-17", "elephant-feeding-in-jaipur.webp"],
  ["elephant-ride-jaipur", "Elephant Ride Jaipur: A Unique Way to Experience Amber Fort's Grandeur", "2024-10-16", "elephant-ride-jaipur.webp"],
  ["book-elephant-safari-in-jaipur", "Top 5 Reasons to Book an Elephant Safari in Jaipur", "2024-10-16", "book-elephant-safari-in-jaipur.webp"],
  ["elephant-sanctuary-india", "Elephant Sanctuary India: Supporting Wildlife Conservation and Ethical Tourism", "2024-10-16", "elephant-sanctuary-india.webp"],
  ["elephant-sanctuary-jaipur", "Elephant Sanctuary Jaipur: Experience Ethical Elephant Tourism", "2024-10-15", "elephant-sanctuary-jaipur-experience-ethical-elephant-tourism.webp"],
  ["elephant-village-near-amber-fort-jaipur", "Elephant Village Jaipur: A Must-Visit Place for Animal Lovers", "2024-10-15", "elephant-village-jaipur-a-must-visit-place-for-animal-lovers.webp"],
  ["elephant-ride-at-amber-fort", "Experience the Majestic Elephant Ride at Amber Fort for an Unforgettable Adventure", "2024-10-15", "experience-the-majestic-elephant-ride-at-amber-fort.webp"],
  ["exciting-activities-in-jaipur", "Get Up Close with Elephants: Exciting Activities in Jaipur", "2024-10-07", "exciting-activities-in-jaipur.webp"],
  ["elephant-riding-tours", "Experience Jaipur's Heritage through Elephant Riding Tours", "2024-10-07", "elephant-riding-tours.webp"],
  ["elephant-activities-in-jaipur-with-elefriendride", "Adventure Awaits: Elephant Activities in Jaipur with Elefriendride", "2024-10-06", "elephant-activities-in-jaipur-with-elefriendride.webp"],
  ["unique-elephant-tours-await", "Uncover the Wonders of Jaipur: Unique Elephant Tours Await", "2024-10-06", "unique-elephant-tours-await.webp"],
  ["elephant-experiences-in-jaipur", "Join Elefriendride for Memorable Elephant Experiences in Jaipur", "2024-10-06", "elephant-experiences-in-jaipur.webp"],
  ["majestic-elephant-rides-in-jaipur", "Experience Majestic Elephant Rides in Jaipur with Elefriendride", "2024-10-05", "majestic-elephant-rides-in-jaipur.webp"],
  ["unforgettable-day-tours-with-elefriendride", "Explore Jaipur's Beauty: Unforgettable Day Tours with Elefriendride", "2024-10-05", "unforgettable-day-tours-with-elefriendride.webp"],
  ["elephant-adventures-in-jaipur", "Discover Elephant Adventures in Jaipur with Elefriendride", "2024-10-05", "elephant-adventures-in-jaipur.webp"],
  ["elephant-rides-and-tours-await", "Journey Through Jaipur, India: Elephant Rides and Tours Await | Elefriendride", "2024-10-04", "elephant-rides-and-tours-await.webp"],
  ["elephant-ride-in-jaipur-india", "Embark on an Unforgettable Elephant Ride in Jaipur, India | Elefriendride", "2024-10-04", "elephant-ride-in-jaipur-india.webp"],
];

function getTopic(slug) {
  if (/weigh|live|eat|safari|wildlife|sanctuary-india|habitat|lion/.test(slug)) {
    return "wildlife";
  }
  if (/ethical|responsible|sustainable|choose-an-elephant-sanctuary/.test(slug)) {
    return "responsible";
  }
  if (/time|weather|festival|diwali|christmas|pushkar/.test(slug)) {
    return "seasonal";
  }
  if (/delhi-to|day-trip|taj-mahal|golden-triangle|itinerary|tour-guide|tourism$/.test(slug)) {
    return "journey";
  }
  if (/kids|wear|family/.test(slug)) {
    return "practical";
  }
  if (/bazaars|amer|heritage|royal|jaipur-in-one-day|activities-in-jaipur|day-tours/.test(slug)) {
    return "jaipur";
  }
  return "experiences";
}

const topicContent = {
  wildlife: {
    category: "WILDLIFE & CONSERVATION",
    image: "/images/blog/blog-elephants.webp",
    description:
      "A fact-aware introduction to TITLE, with guidance on reliable sources and thoughtful wildlife observation.",
    introduction:
      "Curiosity about wildlife is a good starting point for learning. This article introduces the questions behind its subject and encourages readers to rely on qualified, current sources for animal-specific facts.",
    sections: [
      {
        heading: "Start with reliable context",
        paragraphs: [
          "The subject of this guide—TITLE—connects to a broader interest in animals and the environments they depend on. Individual animals, habitats and care needs differ, so a short travel article should not be treated as veterinary or scientific advice.",
          "For details such as measurements, lifespan, diet or species status, consult wildlife authorities, conservation organizations and qualified animal-care professionals. These sources can explain how evidence is collected and what varies between animals.",
        ],
      },
      {
        heading: "Observe with care",
        paragraphs: [
          "When visiting a wildlife setting, pay attention to the information provided by knowledgeable staff and follow their guidance. Respectful observation leaves room for animals to behave naturally and for visitors to learn without disturbing them.",
          "Ask how the setting approaches care, enrichment and visitor contact. Specific practices should be confirmed directly with the organization rather than assumed from a label or photograph.",
        ],
      },
      {
        heading: "Keep learning beyond the visit",
        paragraphs: [
          "A thoughtful visit can lead to further reading about habitats, conservation challenges and the people working in the field. Compare trustworthy sources and look for clear explanations of where information comes from.",
          "For current details about Elefriendride and its listed experiences, use the website's sanctuary and contact pages. This article does not make claims about a particular animal's health or care plan.",
        ],
      },
    ],
  },
  responsible: {
    category: "RESPONSIBLE TRAVEL",
    image: "/images/blog/blog-elephants.webp",
    description:
      "A visitor guide to TITLE and practical questions to consider when assessing animal-welfare information.",
    introduction:
      "Choosing a wildlife experience deserves more than a quick glance at a listing. This guide offers a practical way to think about TITLE and to ask an organization direct questions before deciding whether to visit.",
    sections: [
      {
        heading: "Look beyond labels",
        paragraphs: [
          "Words such as ethical, responsible and sanctuary can mean different things in different contexts. Read the available information carefully and look for specific, transparent explanations of how animals are cared for and what visitors are invited to do.",
          "If an answer is unclear, ask the organization for more detail. Useful conversations focus on animal welfare, the role of caretakers, visitor boundaries and how concerns can be raised.",
        ],
      },
      {
        heading: "Make an informed choice",
        paragraphs: [
          "Consider whether the visit's activities and rules are explained before you arrive. Clear guidance helps visitors understand what to expect and how to behave around animals.",
          "No single webpage can independently verify every practice. Seek out current information, compare sources and make your own decision based on the answers you receive.",
        ],
      },
      {
        heading: "Plan with respect",
        paragraphs: [
          "During a visit, follow staff instructions, give animals space when asked and avoid actions that are not explicitly permitted. If you have concerns, raise them respectfully with the organization.",
          "For Elefriendride's current experiences and visitor guidance, contact the team directly. The information on this page is general guidance, not an independent welfare certification.",
        ],
      },
    ],
  },
  seasonal: {
    category: "SEASONAL TRAVEL",
    image: "/images/blog/blog-visit.webp",
    description:
      "Planning notes for TITLE, including checking current conditions, dates and travel information.",
    introduction:
      "Season, weather and public events can shape a trip. This guide to TITLE focuses on how to prepare thoughtfully while checking current details instead of relying on old dates or assumptions.",
    sections: [
      {
        heading: "Check current conditions",
        paragraphs: [
          "Travel conditions vary from year to year. Before fixing plans, check an up-to-date forecast, official event announcements and any visitor information published by the places you intend to visit.",
          "If a festival or holiday is part of your itinerary, verify its current dates and local arrangements from official sources. Avoid treating a previous year's schedule as confirmation for a future visit.",
        ],
      },
      {
        heading: "Pack for your plans",
        paragraphs: [
          "Build a flexible packing list around the current forecast and the activities you have confirmed. Comfortable clothing, suitable footwear and any personal essentials are easier to choose once you know where you are going and what the day involves.",
          "For an Elefriendride visit, ask the team directly if there are practical recommendations for the experience you are considering.",
        ],
      },
      {
        heading: "Leave room to adjust",
        paragraphs: [
          "Weather, transport and event crowds can change a day's rhythm. Leave a little flexibility between plans and confirm opening or access information with official providers close to your travel date.",
          "This article is a general planning aid, not a live schedule or weather report. Check current sources before setting out.",
        ],
      },
    ],
  },
  journey: {
    category: "TRAVEL PLANNING",
    image: "/images/blog/blog-jaipur.webp",
    description:
      "A planning guide to TITLE with questions to help compare transport, timing and itinerary options.",
    introduction:
      "A successful trip starts with the shape of the journey, not just a list of destinations. This guide to TITLE outlines questions that can help you compare options and build a realistic plan.",
    sections: [
      {
        heading: "Choose the pace that suits you",
        paragraphs: [
          "Start by deciding what matters most: fewer transfers, more time in one place or the chance to see several destinations. Estimate travel time using current transport information and leave a buffer for delays and local connections.",
          "For a multi-city route, group destinations in a sensible order and check how each leg connects. An itinerary should leave enough time to arrive, rest and enjoy the places you have chosen.",
        ],
      },
      {
        heading: "Confirm the practical details",
        paragraphs: [
          "Transport availability, ticket rules, access arrangements and seasonal conditions can change. Verify these details with official transport providers and destination websites before booking.",
          "If your plans include Elefriendride, contact the team directly to check the current visit arrangements. Do not assume a day trip or experience is available on a particular date until it has been confirmed.",
        ],
      },
      {
        heading: "Keep a flexible plan",
        paragraphs: [
          "A useful itinerary is a guide rather than a minute-by-minute promise. Keep alternatives for meals, travel connections and activities, and share your route with the people travelling with you.",
          "Use this article as a starting point, then update the details with current information for your own dates and needs.",
        ],
      },
    ],
  },
  practical: {
    category: "VISITOR GUIDE",
    image: "/images/blog/blog-visit.webp",
    description:
      "A practical guide to TITLE with details to check before travelling or visiting with your group.",
    introduction:
      "A little preparation can make a visit easier for everyone. This guide to TITLE suggests details to check in advance and ways to keep plans comfortable, clear and flexible.",
    sections: [
      {
        heading: "Ask before you go",
        paragraphs: [
          "Contact the venue or activity provider to confirm current availability, entry arrangements and any age, accessibility or participation guidance that matters to your group.",
          "For family visits, discuss expectations with children beforehand and explain that staff instructions and animal boundaries must be respected. Ask the provider directly about any age-specific guidance rather than guessing.",
        ],
      },
      {
        heading: "Prepare for the day",
        paragraphs: [
          "Check the latest directions, travel options and forecast. Choose clothing and personal items that suit your confirmed plans, and allow time for travel and breaks.",
          "If your visit includes Elefriendride, the contact page lists the address and enquiry options. Ask the team about current arrangements before setting out.",
        ],
      },
      {
        heading: "Keep expectations realistic",
        paragraphs: [
          "Availability, access and the pace of a visit can vary. A message or enquiry is a useful first step, but it does not reserve a place unless the provider explicitly confirms it.",
          "Use current information from the venue and official travel sources to make a plan that works for your group.",
        ],
      },
    ],
  },
  jaipur: {
    category: "JAIPUR TRAVEL GUIDE",
    image: "/images/blog/blog-jaipur.webp",
    description:
      "Ideas for TITLE, with suggestions for organizing a visit and checking current local information.",
    introduction:
      "Jaipur rewards visitors who leave time to explore beyond a single landmark. This guide to TITLE offers a flexible way to think about the city's places, neighbourhoods and the rhythm of a day out.",
    sections: [
      {
        heading: "Build a day around your interests",
        paragraphs: [
          "Decide whether you want to focus on architecture, gardens, museums, local markets or a mix of experiences. Group nearby stops where possible and check opening, entry and access details with official sources before travelling.",
          "Rather than trying to fit every attraction into one day, choose a few priorities and allow time to move between them. The right pace depends on your interests and current local conditions.",
        ],
      },
      {
        heading: "Make space for the journey",
        paragraphs: [
          "Transport times and traffic vary, so leave a buffer between stops. Keep directions and any tickets or confirmations easy to find, and check current information if a place has special visitor arrangements.",
          "If you are planning an Elefriendride visit alongside city sightseeing, contact the team directly about availability and the time you should allow.",
        ],
      },
      {
        heading: "Explore respectfully",
        paragraphs: [
          "Follow local rules at heritage sites and ask before photographing people or private spaces. Being considerate helps make visits more enjoyable for residents and fellow travellers.",
          "Use this guide as inspiration, then verify practical details with current official information before you head out.",
        ],
      },
    ],
  },
  experiences: {
    category: "ELEFRIENDRIDE EXPERIENCES",
    image: "/images/blog/blog-elephants.webp",
    description:
      "A visitor guide to TITLE with useful questions to ask and information to confirm before planning.",
    introduction:
      "People explore elephant experiences for different reasons: to learn, observe or understand a place more closely. This guide to TITLE helps visitors consider what they hope to learn and what to confirm before travelling.",
    sections: [
      {
        heading: "Understand the activity",
        paragraphs: [
          "Experience names alone do not explain what a visit involves. Read the current activity description, ask what visitors should expect and find out which guidance is provided on arrival.",
          "Elefriendride lists experiences including elephant meetings, rides, walks, feeding, painting and bathing. Availability and arrangements can change, so contact the team directly for current information.",
        ],
      },
      {
        heading: "Put clear guidance first",
        paragraphs: [
          "Before choosing an activity, make sure you understand any visitor instructions, boundaries and practical preparations. Follow the directions of the people responsible for guiding the experience.",
          "If something is unclear, ask before participating. A direct conversation is more reliable than assumptions based on an image, an old article or a third-party listing.",
        ],
      },
      {
        heading: "Plan your enquiry",
        paragraphs: [
          "Share the experience you are interested in and ask about current availability, location details and any recommendations for your visit. A WhatsApp enquiry lets you review and send your question directly.",
          "An enquiry is not a booking confirmation. Wait for a direct response from the team before relying on an arrangement.",
        ],
      },
    ],
  },
};

function createArticle([slug, title, publishedAt, cardImage], index) {
  const topic = topicContent[getTopic(slug)];
  const resolvedCardImage = cardImage
    ? cardImage.startsWith("/")
      ? cardImage
      : `/images/blog/source/${cardImage}`
    : null;
  const fullDescription = topic.description.replaceAll("TITLE", title);
  const description =
    fullDescription.length <= 160
      ? fullDescription
      : `${fullDescription.slice(0, 157).replace(/\s+\S*$/, "").replace(/[,.!?;:]+$/, "")}…`;
  const sections = topic.sections.map((section) => ({
    heading: section.heading,
    paragraphs: section.paragraphs.map((paragraph) =>
      paragraph.replaceAll("TITLE", title)
    ),
  }));

  return {
    number: String(index + 6).padStart(2, "0"),
    category: topic.category,
    title,
    slug,
    image: topic.image,
    imageDimensions: getImageDimensions(topic.image),
    cardImage: resolvedCardImage,
    cardImageDimensions: resolvedCardImage
      ? getImageDimensions(resolvedCardImage)
      : null,
    publishedAt,
    description,
    introduction: topic.introduction.replaceAll("TITLE", title),
    sections,
  };
}

export const additionalBlogArticles = sourceArticles.map(createArticle);
