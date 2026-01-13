// ═══════════════════════════════════════════════════════════
// 📅 EVENT MANAGEMENT SYSTEM
// ═══════════════════════════════════════════════════════════
// This file is your single source of truth for all events.
// Simply add/edit events here, and they'll automatically appear
// across all pages that use the UpcomingEventCard component.
//
// HOW TO ADD A NEW EVENT:
// 1. Copy an existing event object below
// 2. Update all the fields with your new event details
// 3. Make sure the date format is "Month Day, Year" (e.g., "January 15, 2026")
// 4. Save the file - that's it! Your event will show up automatically
//
// TIPS:
// - Events are automatically sorted by date
// - The "Next Event" on homepage shows the closest upcoming event
// - The Events page can show current month or all upcoming events
// - Delete or comment out past events to keep the list clean
// ═══════════════════════════════════════════════════════════

export interface Event {
  id: string; // Unique identifier (use lowercase-with-dashes)
  title: string; // Event name shown to users
  date: string; // Full date: "Month Day, Year"
  displayDate: string; // Short description: "Thanksgiving Day", "Second Saturday"
  time: string; // Time range: "8:00 AM - 12:00 PM"
  timeDetails: string; // Additional time info or event description
  location: string; // City or venue name
  locationDetails: string; // Additional location details
  month: string; // Month name: "January", "February", etc.
  year: number; // Four-digit year: 2026
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
  // 📌 ADD MORE EVENTS BELOW - Simply uncomment and customize:
  // ═══════════════════════════════════════════════════════════
  {
    id: "january-service-2026",
    title: "MLK Weekend Outreach",
    date: "January 17, 2026",
    displayDate: "Third Saturday",
    time: "9:00 AM - 1:00 PM",
    timeDetails: " Morning Activities (Registration opens at 9 AM) Start the day with our large-scale community cleanup as neighbors, nonprofits, churches, small businesses, and volunteers come together to beautify South Dallas. Breakfast is available for registered volunteers. We will accomplish: Community Cleanup Neighborhood beautification projects engaging 2,500+ volunteers Mural Installations Local artists creating public art that celebrates Black history & culture",
    location: "Dallas",
    locationDetails: "Multiple locations available",
    month: "January",
    year: 2026,
  },
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

/**
 * Get the event for the current month
 * Used on the Events page to highlight this month's event
 */
export function getCurrentMonthEvent(): Event | undefined {
  const now = new Date();
  const currentMonth = now.toLocaleString('default', { month: 'long' });
  return upcomingEvents.find(event => event.month === currentMonth);
}

/**
 * Get the next upcoming event (chronologically closest)
 * Used on the Home page to show the next event
 */
export function getNextEvent(): Event | undefined {
  const now = new Date();
  return upcomingEvents.find(event => {
    const eventDate = new Date(event.date);
    return eventDate >= now;
  });
}

/**
 * Get all upcoming events (future events only)
 * Useful if you want to display multiple events
 */
export function getAllUpcomingEvents(): Event[] {
  const now = new Date();
  return upcomingEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= now;
  }).sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}
