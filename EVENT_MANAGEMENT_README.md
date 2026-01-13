# 📅 Event Management System

## Overview
Your Men on Mission website now has a centralized, reusable event management system. You can add, edit, or remove events in **one place** and they'll automatically appear across all pages.

## How It Works

### 🎯 Single Source of Truth
All event data lives in: [`client/src/lib/events.ts`](client/src/lib/events.ts)

### 🧩 Reusable Component
The `UpcomingEventCard` component displays events consistently across pages.

### 📍 Where Events Appear
- **Home Page**: Shows the next upcoming event
- **Events Page**: Shows current month's event + all event categories
- **Can be used anywhere**: Import and use the component on any page

## Adding a New Event (Simple 3-Step Process)

### Step 1: Open the events file
Navigate to: `client/src/lib/events.ts`

### Step 2: Add your event
Copy this template and add it to the `upcomingEvents` array:

```typescript
{
  id: "your-event-id-2026",           // Unique ID (lowercase-with-dashes)
  title: "Your Event Title",          // Event name displayed to users
  date: "February 15, 2026",          // Full date (Month Day, Year)
  displayDate: "Third Saturday",      // Short description
  time: "9:00 AM - 1:00 PM",         // Time range
  timeDetails: "Additional details about timing or event description",
  location: "Dallas",                 // City or venue
  locationDetails: "Exact location shared after registration",
  month: "February",                  // Month name (must match date)
  year: 2026,                        // Year (must match date)
},
```

### Step 3: Save the file
That's it! Your event will automatically appear on the website.

## Example: Adding a Valentine's Day Event

```typescript
export const upcomingEvents: Event[] = [
  // ... existing events ...
  {
    id: "valentines-community-2026",
    title: "Valentine's Day Community Meal",
    date: "February 14, 2026",
    displayDate: "Valentine's Day",
    time: "11:00 AM - 3:00 PM",
    timeDetails: "Serve a special Valentine's meal to families in need",
    location: "Dallas Community Center",
    locationDetails: "123 Main Street, Dallas, TX - Parking available",
    month: "February",
    year: 2026,
  },
];
```

## Using the Event Component on Any Page

Want to show events on a new page? It's super easy:

```tsx
import UpcomingEventCard from "@/components/UpcomingEventCard";
import { getNextEvent } from "@/lib/events";

export default function MyPage() {
  const nextEvent = getNextEvent();
  
  if (!nextEvent) return <div>No upcoming events</div>;
  
  return (
    <div>
      <h1>My Custom Page</h1>
      <UpcomingEventCard 
        event={nextEvent} 
        showRegisterButton={true}
        className="max-w-3xl mx-auto"
      />
    </div>
  );
}
```

## Component Props

### UpcomingEventCard
- `event`: Event object (required) - The event to display
- `showRegisterButton`: boolean (optional, default: true) - Show/hide the RSVP button
- `className`: string (optional) - Additional CSS classes for styling

## Helper Functions Available

All functions are exported from `client/src/lib/events.ts`:

### `getNextEvent()`
Returns the next chronologically upcoming event
```typescript
const nextEvent = getNextEvent();
```

### `getCurrentMonthEvent()`
Returns the event happening in the current month
```typescript
const thisMonth = getCurrentMonthEvent();
```

### `getAllUpcomingEvents()`
Returns all future events, sorted by date
```typescript
const allEvents = getAllUpcomingEvents();
```

## Tips & Best Practices

### ✅ DO:
- Keep event IDs unique and descriptive
- Use consistent date format: "Month Day, Year"
- Remove or comment out past events regularly
- Test after adding new events

### ❌ DON'T:
- Don't edit the event component files directly for new events
- Don't hardcode event data in page components
- Don't forget to match the `month` field with the actual month in the `date`

## Troubleshooting

### Event not showing up?
1. Check that the date is in the future
2. Verify the date format: "Month Day, Year"
3. Ensure the month name matches the date
4. Save the file and refresh your browser

### Want to show multiple events?
Use `getAllUpcomingEvents()` and map over them:

```tsx
import { getAllUpcomingEvents } from "@/lib/events";
import UpcomingEventCard from "@/components/UpcomingEventCard";

const allEvents = getAllUpcomingEvents();

return (
  <div className="grid gap-8">
    {allEvents.map(event => (
      <UpcomingEventCard 
        key={event.id}
        event={event}
        showRegisterButton={true}
      />
    ))}
  </div>
);
```

## Benefits of This System

✨ **No Code Breaking**: Update events without touching component code
📦 **Reusable**: Same component works everywhere
🎨 **Consistent**: Events look the same across all pages
⚡ **Easy Updates**: Change one file, update everywhere
🔒 **Type Safe**: TypeScript ensures data integrity

## Files in This System

```
client/src/
├── lib/
│   └── events.ts                    # 📅 Event data & helper functions
├── components/
│   ├── UpcomingEventCard.tsx        # 🎴 Reusable event card
│   ├── EventSection.tsx             # 🏠 Home page event section
│   ├── EventsContent.tsx            # 📋 Events page content
│   └── FormModal.tsx                # 📝 RSVP modal (updated)
└── pages/
    ├── Home.tsx                     # Uses EventSection
    └── Events.tsx                   # Uses EventsContent
```

---

**Need help?** All components are documented and type-safe. Your IDE will show you available props and functions! 🚀
