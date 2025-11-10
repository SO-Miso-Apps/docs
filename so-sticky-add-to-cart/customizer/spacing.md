---
title: Spacing
description: Adjust border radius, padding, and gaps for perfect layout.
sidebar_position: 6
---

# Spacing

Control layout, padding, and visual breathing room for polished appearance.

## Border Radius

**Range:** 0-30px

| Value | Style | Use Case |
|-------|-------|----------|
| **0px** | Sharp | Modern, minimal, tech |
| **8px** | Subtle | Professional (recommended) |
| **16px** | Rounded | Friendly, approachable |
| **30px** | Pill | Playful, modern |

**Tip:** Match your theme's button radius.

## Collapsed Padding

**Default:** 12px vertical, 16px horizontal

**Small (8-10px):**
- Compact layout
- Save space
- Mobile-focused

**Medium (12-14px):**
- Standard (recommended)
- Balanced

**Large (16-18px):**
- Premium feel
- Generous space
- Desktop-focused

## Button Padding

**Default:** 12px vertical, 24px horizontal

### Vertical Padding
- **8-10px** - Compact
- **12-14px** - Standard (recommended)
- **16-18px** - Prominent

### Horizontal Padding
- **16-20px** - Narrow
- **24-28px** - Medium
- **32-40px** - Wide

**Mobile Tip:** Ensure buttons are min 44x44px for touch targets.

## Element Gap

**Range:** 8-32px

- **8-12px** - Tight, compact
- **16-20px** - Standard (recommended)
- **24-32px** - Generous, airy

## Layout Presets

### Compact
```
Radius: 4px
Collapsed: 10px / 14px
Button: 10px / 20px
Gap: 12px
```
→ Mobile-first, space-saving

### Balanced (Recommended)
```
Radius: 8px
Collapsed: 12px / 16px
Button: 12px / 24px
Gap: 16px
```
→ Works for most stores

### Spacious
```
Radius: 12px
Collapsed: 16px / 20px
Button: 14px / 28px
Gap: 24px
```
→ Premium, desktop-focused

### Modern Minimal
```
Radius: 0px
Collapsed: 14px / 18px
Button: 12px / 26px
Gap: 20px
```
→ Clean, sharp aesthetic

## Best Practices

1. ✅ Match theme spacing
2. ✅ Ensure 44x44px touch targets
3. ✅ Test on mobile first
4. ✅ Adjust in small increments (2-4px)
5. ✅ Less is often more

## Accessibility

- Buttons minimum 44x44px
- Clear visual separation
- Easy touch targets
- Adequate spacing for readability

## Next Steps

- **[Languages](./languages.md)** - Customize text
- **[Presets](./presets.md)** - Pre-configured layouts
- **[Effects](./effects.md)** - Button animations

## Border Radius

Controls the roundness of corners for buttons and the cart container.

**Range:** 0-30px

### Values Guide

- **0px:** Sharp, modern corners (minimal aesthetic)
- **4-8px:** Subtle rounding (professional)
- **12-16px:** Noticeable rounding (friendly)
- **20-24px:** Very rounded (playful)
- **28-30px:** Pill-shaped (modern)

### Best For

**0px (Sharp):**
- Modern, minimal brands
- Tech products
- Professional services

**8px (Subtle):**
- Most versatile
- Professional appearance
- Safe default

**16px (Rounded):**
- Friendly brands
- Consumer products
- Approachable feel

**30px (Pill):**
- Playful brands
- Youth products
- Modern aesthetic

### Matching Your Theme

Use your theme's button border radius for consistency. Find it by inspecting your theme's "Add to Cart" button.

## Collapsed Padding

Padding inside the collapsed cart bar.

**Default:** 12px vertical, 16px horizontal

### When to Increase

- Larger text sizes
- More breathing room desired
- Desktop-focused store
- Premium feel

### When to Decrease

- Compact layout preferred
- Mobile screen space limited
- Minimal aesthetic
- Many products to show

## Button Padding

Space inside buttons (affects button size).

**Default:** 12px vertical, 24px horizontal

### Vertical Padding

**Small (8-10px):**
- Compact buttons
- Save vertical space
- Minimal design

**Medium (12-14px):**
- Standard, comfortable
- Good tap targets
- Recommended

**Large (16-18px):**
- Prominent buttons
- Easy to click
- Accessibility-focused

### Horizontal Padding

**Narrow (16-20px):**
- Short button labels
- Compact layout

**Medium (24-28px):**
- Standard sizing
- Balanced appearance

**Wide (32-40px):**
- Prominent CTAs
- Lots of space
- Desktop layouts

### Mobile Considerations

**Minimum:** 44x44px total button size for touch targets

Calculate: (font size) + (2 × vertical padding) = minimum 44px

## Element Gap

Spacing between elements (image, text, buttons).

**Range:** 8-32px

### Values Guide

- **8-12px:** Tight, compact
- **16-20px:** Standard spacing
- **24-32px:** Generous, airy

### When to Use Each

**Small Gap (8-12px):**
- Limited vertical space
- Many elements to show
- Compact aesthetic

**Medium Gap (16-20px):**
- Most versatile
- Good default
- Clean appearance

**Large Gap (24-32px):**
- Premium brands
- Minimal layouts
- Lots of screen space

## Spacing Combinations

### Compact Layout
```
Border Radius: 4px
Collapsed Padding: 10px / 14px
Button Padding: 10px / 20px
Element Gap: 12px
```
**Best for:** Mobile-first, content-heavy pages

### Balanced Layout
```
Border Radius: 8px
Collapsed Padding: 12px / 16px
Button Padding: 12px / 24px
Element Gap: 16px
```
**Best for:** Most stores (recommended)

### Spacious Layout
```
Border Radius: 12px
Collapsed Padding: 16px / 20px
Button Padding: 14px / 28px
Element Gap: 24px
```
**Best for:** Premium brands, desktop-focused

### Modern Minimal
```
Border Radius: 0px
Collapsed Padding: 14px / 18px
Button Padding: 12px / 26px
Element Gap: 20px
```
**Best for:** Clean, modern aesthetic

## Visual Examples

### Tight Spacing Effect
- Elements close together
- Compact appearance
- More content visible
- Can feel crowded

### Generous Spacing Effect
- Elements have room
- Breathable layout
- Premium feel
- May use more space

## Best Practices

1. **Consistency:** Match your theme's spacing
2. **Mobile First:** Ensure adequate touch targets
3. **Test Visual Weight:** Balance whitespace
4. **Consider Content:** Adjust for element sizes
5. **Brand Alignment:** Match your brand's style

## Common Mistakes

**Too Tight:**
- Elements touching
- Hard to tap
- Feels cramped

**Too Loose:**
- Disconnected elements
- Wasted space
- Poor mobile UX

**Inconsistent:**
- Different spacing everywhere
- Unprofessional
- Confusing

## Accessibility

- Buttons minimum 44x44px
- Clear visual separation
- Easy touch targets
- Adequate contrast

## Quick Tips

- Start with defaults
- Adjust in small increments (2-4px)
- Test on mobile first
- Match theme button styles
- Less is often more

## Next Steps

- [Languages](./languages.md) - Customize text
- [Presets](./presets.md) - Try pre-configured layouts
- [Best Practices](../advanced/best-practices.md) - Design tips
