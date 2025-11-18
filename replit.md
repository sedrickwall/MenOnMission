# Men on Mission Website

A premium faith-driven brotherhood organization website with sleek design inspired by huly.io

## Overview

Premium website featuring:
- Deep navy (#0A1A2F) and gold (#C8A45D) branding
- Poppins/Inter fonts for premium feel
- Full-screen hero sections with smooth animations
- Modal-based forms for clean UX

## Pages

- **Home**: Hero section, mission overview, upcoming events, and call-to-action
- **About**: Organization story and values
- **Events**: Current month's event + expandable future events section
- **Contact**: Contact form and organization details

## Event Management System

Events are now managed through a centralized data file for consistency across the site.

### How to Manage Events

**Location**: `client/src/lib/events.ts`

This file contains:
1. Event data structure (Event interface)
2. Array of upcoming events
3. Helper functions to get current/next events

### Adding New Events

1. Open `client/src/lib/events.ts`
2. Add new event objects to the `upcomingEvents` array:

```typescript
{
  id: "your-event-id",
  title: "Event Title",
  date: "December 14, 2025",
  displayDate: "Second Saturday",
  time: "9:00 AM - 1:00 PM",
  timeDetails: "Additional time info",
  location: "Dallas",
  locationDetails: "Details shared upon RSVP",
  month: "December",
  year: 2025,
}
```

3. The event will automatically appear on:
   - Home page (shows next upcoming event)
   - Events page (shows current month's event)

### Displaying Multiple Events on Events Page

Currently, the Events page shows only the current month's event. To show ALL upcoming events as cards:

1. Open `client/src/components/EventsContent.tsx`
2. Find the commented section marked with:
   ```
   📌 ADDITIONAL EVENT CARDS - TO SHOW MORE EVENTS
   ```
3. Uncomment the entire section (lines ~144-214)
4. This will display all events from `events.ts` in a grid layout

## Forms Integration

Three live forms integrated via modals:
1. **Join the Mission** (Jotform) - Accessible from nav, homepage, and contact page
2. **Event RSVP** (Google Forms) - Event registration
3. **Contact Form** (Jotform) - General inquiries

## Technical Details

- **Stack**: React + TypeScript + Vite + Express
- **UI**: Shadcn/ui components with Tailwind CSS
- **Routing**: Wouter for client-side routing
- **State**: React Context for modal management

## Recent Changes

- Fixed vite.config.ts ES module compatibility (added __dirname shim)
- Created centralized event management system in `client/src/lib/events.ts`
- Events page now pulls data from same source as home page
- Added expandable section for displaying multiple event cards
- Connected all RSVP buttons to event registration modal

## Design Choices

- Modal-based forms for cleaner UX instead of inline embeds
- Shared event data between Home and Events pages for consistency
- Hidden/expandable sections for easy content expansion
- Brand colors: Deep navy (#0A1A2F), gold (#C8A45D), white text, slate gray secondary
