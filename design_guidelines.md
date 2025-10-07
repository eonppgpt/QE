# QE Gift Delivery Service - Design Guidelines

## Design Approach: Reference-Based (Premium E-Commerce + Emotional Storytelling)

Drawing inspiration from **Airbnb's emotional storytelling**, **luxury brand aesthetics**, and **premium gifting services** to create a heartfelt, sophisticated experience that connects people across borders.

**Core Design Principles:**
- Emotional connection through visual warmth
- Elegant simplicity with premium feel
- Trust-building through refined aesthetics
- Seamless user journey from discovery to purchase

---

## Color Palette

**Light Mode (Primary):**
- **Background Base**: 40 8% 98% (Soft ivory)
- **Surface Elevated**: 30 15% 95% (Warm cream)
- **Primary Brand**: 345 60% 85% (Soft rose)
- **Primary Accent**: 345 45% 65% (Warm dusty rose)
- **Text Primary**: 30 20% 25% (Rich warm brown)
- **Text Secondary**: 30 10% 45% (Muted taupe)
- **Border Subtle**: 30 12% 88% (Gentle beige)

**Dark Mode (Admin Dashboard):**
- **Background**: 30 15% 12% (Deep warm charcoal)
- **Surface**: 30 12% 18% (Elevated warm gray)
- **Text**: 30 8% 92% (Warm off-white)

---

## Typography

**Font Families:**
- **Headings**: 'Cormorant Garamond', serif (elegant, editorial feel)
- **Body & UI**: 'Inter', sans-serif (clean, readable)

**Scale:**
- Hero Headline: text-5xl md:text-7xl, font-light, tracking-tight
- Section Titles: text-3xl md:text-4xl, font-light
- Product Names: text-2xl, font-normal
- Body Text: text-base md:text-lg, leading-relaxed
- Price Display: text-xl md:text-2xl, font-medium
- Form Labels: text-sm, font-medium, uppercase, tracking-wide

---

## Layout System

**Spacing Units:** Tailwind 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Container Strategy:**
- Full-width hero: w-full
- Content sections: max-w-7xl mx-auto px-6 md:px-8
- Forms: max-w-3xl mx-auto
- Admin dashboard: max-w-screen-2xl

**Section Padding:**
- Mobile: py-16
- Desktop: py-24 to py-32

---

## Component Library

### Hero Section
- Full-width background with brand imagery (브랜드이미지컷)
- Overlay gradient: from-transparent to-rose-50/80
- Centered headline with emotional tagline
- Subtle scroll indicator
- Height: min-h-[85vh]

### Gift Set Cards
- Grid layout: grid-cols-1 md:grid-cols-2 gap-8
- Card design: Elevated with soft shadow, rounded-2xl
- Product image: aspect-[4/3], object-cover, rounded-t-2xl
- Content padding: p-8
- Price in prominent rose accent
- "Send Gift" button: Full width, rounded-full, rose gradient background
- Hover: Gentle lift transform and shadow increase

### About Section
- Two-column layout on desktop (text + brand image)
- Centered on mobile
- Background: Subtle rose gradient overlay
- Typography: Larger, airy spacing for emotional impact

### Order Form
- Clean, spacious layout with ample whitespace
- Input fields: Rounded-lg, border in subtle beige, focus:ring-rose-400
- Dropdown styling: Custom arrow, rose accent on selection
- Form sections grouped with subtle dividers
- Submit button: Large, prominent, rose gradient with white text
- Label styling: Uppercase, tracked, warm brown

### Admin Dashboard
- Dark mode implementation
- Data table: Clean rows with hover states
- Status badges: Rounded-full with rose/green indicators
- Sidebar navigation with icon + label
- Card-based order details with expand/collapse

---

## Images

**Hero Section:**
- Use 브랜드이미지컷 or 브랜드이미지컷2 as full-width background
- Apply subtle warm overlay for text readability
- Image should evoke emotional connection and warmth

**Product Cards:**
- QE ORIGINAL SET: Use provided product image
- LUXURY EDITION: Use provided product image  
- WINE & ROSE PACKAGE: Use provided product image
- 100 ROSES BOUQUET: Use elegant rose bouquet imagery (placeholder if not provided)
- All images: aspect-ratio-[4/3], rounded corners, high quality

**About Section:**
- Include complementary brand image to reinforce emotional storytelling
- Consider lifestyle imagery showing gift-giving moments

---

## Animations

**Minimal & Purposeful:**
- Card hover: Subtle lift (translateY(-4px)) with shadow transition
- Button hover: Slight scale (1.02) and brightness increase
- Form focus: Smooth ring appearance
- Page transitions: Gentle fade-in for sections on scroll (optional)
- **No** distracting parallax or excessive motion

---

## Responsive Behavior

- Hero text scales gracefully: 2xl → 5xl → 7xl
- Gift cards: 1 column mobile → 2 columns tablet → 2 columns desktop
- Form: Single column throughout, wider on desktop
- Navigation: Hamburger menu on mobile, horizontal on desktop
- Spacing: Reduce py and px values proportionally for mobile

---

## Special Considerations

**Trust & Security:**
- Payment method display with secure badges
- Order confirmation messaging
- Professional admin interface builds internal confidence

**Emotional Design Details:**
- Soft shadows instead of harsh borders
- Rounded corners throughout (rounded-lg to rounded-2xl)
- Generous whitespace for breathing room
- Warm color transitions, never jarring
- Heartfelt microcopy throughout journey

**Accessibility:**
- High contrast text on backgrounds (WCAG AA minimum)
- Form labels clearly associated
- Focus states visible and attractive
- Responsive touch targets (min 44x44px)