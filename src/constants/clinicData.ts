// Centralized clinic data and constants
export const CLINIC_DATA = {
  name: "Brighton Beach Animal Clinic",
  shortName: "bbacvet.com",
  tagline: "Veterinary Care",

  contact: {
    phone: {
      number: "(929) 738-1230",
      href: "tel:+19297381230",
    },
    email: {
      address: "bbacvet@gmail.com",
      href: "mailto:bbacvet@gmail.com",
    },
    address: {
      street: "122 Brighton 11th Street",
      city: "Brooklyn, NY 11235",
      full: "122 Brighton 11th Street, Brooklyn, NY 11235",
      googleMapsUrl:
        "https://www.google.com/maps/search/?api=1&query=122%20Brighton%2011th%20Street%2C%20Brooklyn%2C%20NY%2011235",
    },
  },

  hours: {
    weekdays: "Mon, Wed, Thu, Fri: 9AM-6PM, Sat: 9AM-4PM",
    weekend: "Tue & Sun: Closed",
    detailed: {
      monday: "9:00 AM - 6:00 PM",
      tuesday: "Closed",
      wednesday: "9:00 AM - 6:00 PM",
      thursday: "9:00 AM - 6:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "Closed",
    },
  },

  social: {
    instagram: {
      handle: "@bbac.vet",
      url: "https://www.instagram.com/bbac.vet/?igsh=ZzcxYnYweWNxazJm",
    },
  },

  booking: {
    clinicId: "brightonbeachac",
  },

  established: "2025",
  description:
    "Compassionate veterinary care for your beloved pets. We're committed to providing exceptional healthcare in a warm, welcoming environment.",
} as const;
