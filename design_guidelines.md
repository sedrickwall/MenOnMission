# Men on Mission - Design Guidelines

## Design Approach
**Reference-Based**: Drawing from huly.io's premium dark aesthetic combined with Apple.com elegance and modern faith-driven warmth. This creates a sophisticated, exclusive brotherhood experience that feels both aspirational and welcoming.

## Core Design Principles
1. **Premium Minimalism**: Generous whitespace, deliberate element placement, restrained color usage
2. **Smooth Motion**: Subtle fade-ins, gentle parallax effects, smooth scroll transitions
3. **Full-Screen Impact**: Sections that command attention with breathing room
4. **Hierarchy Through Scale**: Large, bold typography contrasted with refined body text

## Typography System

**Font Stack**: Poppins (headings), Inter (body)
- **Hero/H1**: Poppins Bold, 4.5rem (72px) desktop / 2.5rem mobile, tracking tight (-0.02em)
- **H2 Section Headers**: Poppins SemiBold, 3rem (48px) desktop / 2rem mobile
- **H3 Cards/Subsections**: Poppins Medium, 1.75rem (28px)
- **Body Text**: Inter Regular, 1.125rem (18px), line-height 1.7, letter-spacing 0.01em
- **Accent Text**: Inter Medium, 0.875rem (14px), uppercase, tracking wide (0.15em), gold color
- **CTA Buttons**: Poppins SemiBold, 1rem (16px)

## Color Application

**Primary Palette**:
- Deep Navy (#0A1A2F): Backgrounds, primary sections, footer
- Gold (#C8A45D): CTAs, accents, borders, hover states, icons
- White (#FFFFFF): Primary text on dark, card backgrounds
- Slate Gray (#444444): Secondary text, subtle borders

**Usage Patterns**:
- **Hero**: Deep navy background with white text, gold CTA button
- **Alternating Sections**: Navy backgrounds alternate with white for visual rhythm
- **Cards**: White cards on navy sections with gold accent borders on hover
- **Forms**: White input fields with slate gray placeholders, gold focus states

## Layout System

**Spacing Units**: Tailwind scale - primarily use 4, 6, 8, 12, 16, 20, 24, 32 units
- **Section Vertical Padding**: py-24 to py-32 desktop, py-16 mobile
- **Container Max Width**: max-w-7xl for full sections, max-w-4xl for text-focused content
- **Card/Element Gaps**: gap-8 for grids, gap-12 for major sections
- **Inner Content Padding**: px-6 to px-12 for cards

**Grid Patterns**:
- Core Pillars: 3-column grid (lg:grid-cols-3), single column mobile
- Features/Benefits: 2-column grid (md:grid-cols-2)
- All grids stack to single column on mobile

## Component Library

### Hero Section
- **Height**: 90vh minimum
- **Background**: Full-screen image/video with 40% dark overlay
- **Content**: Vertically centered, max-w-4xl container
- **CTA Button**: Blurred background (backdrop-blur-sm), gold border, white text, large padding (px-10 py-4)
- **Tagline**: Large Poppins bold, white, centered

### Section Headers
- **Pattern**: Accent label (gold, uppercase, small) + Large heading + Optional subtitle
- **Alignment**: Center-aligned for maximum impact
- **Spacing**: mb-16 between header and content

### Cards (Pillars/Features)
- **Style**: White background with subtle shadow, rounded-2xl
- **Padding**: p-8 to p-10
- **Hover**: Lift effect (transform scale 1.02), gold border-t-4, increased shadow
- **Icon**: 3rem size, gold color, mb-6
- **Title**: Poppins Medium, 1.5rem
- **Description**: Inter Regular, slate gray

### Scripture Section
- **Design**: Full-width quote block, centered text
- **Quote Text**: Poppins Medium, 2rem, white, italic
- **Reference**: Inter Regular, gold, 1rem, uppercase
- **Background**: Deep navy with subtle texture or gradient

### Forms (Embedded)
- **Container**: max-w-2xl, centered, white background card with p-12
- **Integration**: Jotform/Google Form embedded with custom styling to match brand
- **Section Background**: Navy to create contrast with white form card

### Navigation
- **Style**: Fixed top, transparent initially, becomes deep navy on scroll with backdrop blur
- **Logo**: White/gold version, left-aligned
- **Links**: Inter Medium, white, gold underline on hover
- **Height**: 80px, px-8 padding

### Footer
- **Background**: Deep navy with subtle top border (gold, 1px)
- **Layout**: 3-column grid on desktop, stacked mobile
- **Content**: Logo + tagline, quick links, social media placeholders
- **Copyright**: Center-aligned, slate gray, Inter Regular, small text

## Animation Strategy

**Scroll-Based Animations** (very subtle):
- **Fade-In**: Elements fade from opacity 0 to 1 as they enter viewport
- **Parallax**: Hero background moves slower than scroll (0.5x speed)
- **Stagger**: Card grids animate in sequence with 100ms delay between items

**Interaction Animations**:
- **Button Hover**: Slight scale (1.05), gold glow effect
- **Card Hover**: Lift transform (translateY -4px), shadow increase
- **Link Hover**: Underline slide-in from left

**Performance**: Use CSS transforms and opacity only, duration 300-400ms, easing cubic-bezier

## Images

### Hero Section
**Image**: Men in action - serving homeless, praying in circle, walking together with purpose. Shot should feel authentic, not stock-photo. Warm golden hour lighting preferred.
- **Placement**: Full-screen background, cover fit
- **Treatment**: 40% dark overlay for text legibility
- **Specs**: 1920x1080 minimum resolution

### About Page
**Image Strip**: 3-4 authentic photos of members in service, displayed as horizontal gallery or grid
- **Placement**: Below mission statement
- **Style**: Grayscale with gold color overlay on hover
- **Layout**: Equal-width cards, subtle rounded corners

### Event Cards (Optional Enhancement)
**Icons/Illustrations**: Custom line-art style icons for Homeless Outreach, Mentorship, Family Days
- **Color**: Gold stroke, transparent fill
- **Placement**: Top of each category card

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, reduced font sizes, py-12 sections)
- Tablet: 768px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full multi-column layouts, maximum visual impact)

**Mobile Optimizations**:
- Hero height: 80vh on mobile
- Font scale: Reduce by 30-40%
- Card padding: Reduce to p-6
- Navigation: Hamburger menu

## Accessibility
- Minimum contrast ratio 4.5:1 for body text, 3:1 for large text
- Focus states: 2px gold outline on all interactive elements
- Form labels clearly associated with inputs
- Semantic HTML5 structure with proper heading hierarchy