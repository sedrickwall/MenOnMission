export interface Event {
  id: string;
  title: string;
  date: string;
  displayDate: string;
  time: string;
  timeDetails: string;
  location: string;
  locationDetails: string;
  month: string;
  year: number;
}

export const upcomingEvents: Event[] = [
  {
    id: "turkey-dallas-2025",
    title: "Operation Turkey Dallas 2025",
    date: "November 27, 2025",
    displayDate: "Thanksgiving Day",
    time: "8:00 AM - 12:00 PM",
    timeDetails: "This is the big event where we prepare, package, and deliver meals to the homeless and less fortunate.",
    location: "Dallas",
    locationDetails: "Specific locations shared upon registration",
    month: "November",
    year: 2025,
  },
  // ═══════════════════════════════════════════════════════════
  // 📌 ADD MORE EVENTS BELOW - Simply uncomment and fill in:
  // ═══════════════════════════════════════════════════════════
  // {
  //   id: "december-service-2025",
  //   title: "Christmas Community Outreach",
  //   date: "December 14, 2025",
  //   displayDate: "Second Saturday",
  //   time: "9:00 AM - 1:00 PM",
  //   timeDetails: "Gift distribution and meal service",
  //   location: "Dallas",
  //   locationDetails: "Multiple locations available",
  //   month: "December",
  //   year: 2025,
  // },
  // {
  //   id: "january-kickoff-2026",
  //   title: "New Year Kickoff Service Day",
  //   date: "January 4, 2026",
  //   displayDate: "First Saturday",
  //   time: "8:00 AM - 12:00 PM",
  //   timeDetails: "Community cleanup and mentorship",
  //   location: "Dallas",
  //   locationDetails: "Meeting point shared upon RSVP",
  //   month: "January",
  //   year: 2026,
  // },
];

export function getCurrentMonthEvent(): Event | undefined {
  const now = new Date();
  const currentMonth = now.toLocaleString('default', { month: 'long' });
  return upcomingEvents.find(event => event.month === currentMonth);
}

export function getNextEvent(): Event | undefined {
  const now = new Date();
  return upcomingEvents.find(event => {
    const eventDate = new Date(event.date);
    return eventDate >= now;
  });
}
