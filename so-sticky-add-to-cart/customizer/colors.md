---
title: Colors
description: Customize button colors, badges, and text to match your brand.
sidebar_position: 4
---

# Colors

Match your brand with complete color customization for buttons, badges, and text.

## Button Colors

### Primary Button

**Add to Cart button color**

| Color | When to Use |
|-------|-------------|
| **Black** (#000000) | Bold, fashion, high contrast |
| **Green** (#4CAF50) | Eco-friendly, positive action |
| **Blue** (#2196F3) | Tech, trust, professional |
| **Brand Color** | Match your logo/theme |

**Hover State:**
- 10-20% darker than primary
- Provides visual feedback
- Formula: If #4CAF50 → use #45A049

### Secondary Button

**Buy Now button color** (if enabled)

**Approaches:**
1. **Inverted** - Primary solid → Secondary outlined
2. **Lighter shade** - Of primary color
3. **Accent color** - Complementary from palette

## Price & Badges

### Sale Price
**Default:** Red (#F44336)

**Alternatives:**
- Orange (#FF9800) - Urgent but friendly
- Dark Red (#C62828) - Sophisticated

### Discount Badge
**Purpose:** Show savings (e.g., "-20%")

**Popular combinations:**
- Red BG + White text
- Black BG + White text
- Brand color + Contrast text

## Color Palettes

### Classic Conversion
```
Primary: #000000 (Black)
Hover: #333333 (Dark Gray)
Sale: #F44336 (Red)
```
→ Bold, high contrast

### Fresh & Modern
```
Primary: #4CAF50 (Green)
Hover: #45A049 (Dark Green)
Sale: #FF5722 (Orange)
```
→ Positive, eco-friendly

### Elegant Minimal
```
Primary: #424242 (Dark Gray)
Hover: #212121 (Almost Black)
Sale: #D32F2F (Muted Red)
```
→ Sophisticated, clean

## Accessibility

### Contrast Requirements

**WCAG AA Standard:**
- Normal text: 4.5:1 ratio
- Large text: 3:1 ratio
- Buttons: 3:1 against background

**Tools:**
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Browser DevTools Accessibility tab

### Color Blindness

- Test with simulation tools
- Don't rely only on color
- Pair with text/icons

## Using Color Picker

1. Click color swatch
2. Choose method:
   - Click color wheel
   - Enter hex code (#000000)
   - Use RGB sliders
3. Click outside to close

### Getting Your Brand Colors

**From website:**
```
1. Open DevTools (F12)
2. Inspect element
3. Check computed styles
4. Copy hex codes
```

**From logo:**
- Upload to color extraction tool
- Copy hex values

## Common Mistakes

❌ **Too similar buttons** - Can't distinguish primary/secondary  
✅ Create clear contrast

❌ **Poor contrast** - Text unreadable  
✅ Use contrast checker (4.5:1 minimum)

❌ **Clashing with theme** - Inconsistent branding  
✅ Extract colors from existing theme

## Quick Tips

- **Can't decide?** Start with a preset
- **New brand?** Black/white always works
- **Bold brand?** Use vibrant colors
- **Luxury?** Muted, sophisticated tones
- **Eco/natural?** Earth tones, greens

## Next Steps

- **[Typography](./typography)** - Fonts and sizes
- **[Spacing](./spacing)** - Layout
- **[Presets](./presets)** - Pre-made palettes

## Button Colors

### Primary Button Background

The main "Add to Cart" button color.

**What to use:**
- Your brand's primary color
- High-contrast color for visibility
- Color that matches your theme

**Examples:**
- Fashion store: #000000 (black) or brand color
- Eco-friendly: #4CAF50 (green)
- Luxury: #8B7355 (gold/brown)
- Tech: #2196F3 (blue)

**Tips:**
- Must stand out from background
- Should match other CTA buttons
- Test for color-blind accessibility

### Primary Button Hover

Color when hovering over the add-to-cart button.

**Best practice:**
- 10-20% darker than primary color
- Provides visual feedback
- Confirms button is interactive

**Quick formula:**
If primary is #4CAF50, hover could be #45A049 (slightly darker green)

### Secondary Button Background

The "Buy Now" button color (if enabled).

**What to use:**
- Complementary to primary button
- Still stands out
- Different enough to distinguish

**Common approaches:**
1. **Inverted**: Primary solid → Secondary outlined
2. **Lighter shade**: Of primary color
3. **Accent color**: From your brand palette

**Examples:**
- Primary black → Secondary white with black border
- Primary green → Secondary light green
- Primary blue → Secondary orange (complementary)

### Secondary Button Hover

Hover state for the buy now button.

**Same principle:**
- Slightly darker than secondary background
- Consistent with primary hover behavior
- Clear visual feedback

## Price Colors

### Sale Price Color

Highlights discounted prices to draw attention.

**Popular choices:**
- **Red** (#F44336) - Classic sale indicator
- **Orange** (#FF9800) - Urgent but friendly
- **Dark red** (#C62828) - Sophisticated urgency

**Purpose:**
- Catches eye immediately
- Signals savings
- Drives urgency

**When to use bold colors:**
- Frequent sales
- Competitive pricing
- Impulse-buy products

**When to use subtle colors:**
- Luxury brands
- Minimal aesthetic
- Always-on discounts

### Regular Price (Strikethrough)

Automatically styled when product is on sale. Shows original price crossed out next to sale price.

**Styling:**
- Gray tone (not customizable)
- Strikethrough applied automatically
- Appears only when discount active

## Badge Colors

### Discount Badge Background

Background color for sale percentage badges (e.g., "-20%").

**Popular combinations:**
- Red background + White text
- Black background + White text
- Your brand color + Contrasting text

**Purpose:**
- Highlights savings amount
- Creates visual interest
- Reinforces value

**Best practice:**
- High contrast with text
- Matches sale price color theme
- Stands out but not garish

### Discount Badge Text

Text color for the discount percentage.

**Guidelines:**
- Must be readable on badge background
- Usually white or black
- Test for accessibility (WCAG AA minimum)

**Contrast checker:**
- White on red: Excellent
- Black on yellow: Good
- Gray on light gray: Poor (avoid)

## Color Combinations

### Recommended Palettes

**Classic Conversion:**
```
Primary Button: #000000 (Black)
Primary Hover: #333333 (Dark Gray)
Secondary Button: #FFFFFF (White)
Secondary Hover: #F5F5F5 (Light Gray)
Sale Price: #F44336 (Red)
Badge BG: #F44336 (Red)
Badge Text: #FFFFFF (White)
```

**Fresh & Modern:**
```
Primary Button: #4CAF50 (Green)
Primary Hover: #45A049 (Dark Green)
Secondary Button: #81C784 (Light Green)
Secondary Hover: #66BB6A (Medium Green)
Sale Price: #FF5722 (Deep Orange)
Badge BG: #FF5722 (Deep Orange)
Badge Text: #FFFFFF (White)
```

**Elegant & Minimal:**
```
Primary Button: #424242 (Dark Gray)
Primary Hover: #212121 (Almost Black)
Secondary Button: #BDBDBD (Light Gray)
Secondary Hover: #9E9E9E (Medium Gray)
Sale Price: #D32F2F (Muted Red)
Badge BG: #424242 (Dark Gray)
Badge Text: #FFFFFF (White)
```

**Bold & Energetic:**
```
Primary Button: #E91E63 (Pink)
Primary Hover: #C2185B (Dark Pink)
Secondary Button: #F8BBD0 (Light Pink)
Secondary Hover: #F48FB1 (Medium Pink)
Sale Price: #FF6F00 (Orange)
Badge BG: #FF6F00 (Orange)
Badge Text: #FFFFFF (White)
```

## Accessibility

### Contrast Requirements

**WCAG AA Standard** (minimum):
- Normal text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio
- Buttons: 3:1 against background

**How to check:**
1. Use online contrast checker
2. Enter background and text colors
3. Ensure AA or AAA compliance

**Tools:**
- WebAIM Contrast Checker
- Contrast Ratio (Lea Verou)
- Browser DevTools Accessibility tab

### Color Blindness

**Test your colors:**
- Red-green color blindness most common
- Use tools like Colorblind Web Page Filter
- Don't rely only on color to convey info

**Best practices:**
- Pair red/green with text labels
- Use icons alongside colors
- Test with simulation tools

## Using the Color Picker

### How to Select Colors

1. **Click color swatch** - Opens color picker
2. **Choose method:**
   - Click on color wheel
   - Enter hex code (#000000)
   - Use RGB sliders
   - Pick from recent colors
3. **Click outside** to close picker

### Hex Codes

**Format:** #RRGGBB
- # = Required prefix
- RR = Red value (00-FF)
- GG = Green value (00-FF)
- BB = Blue value (00-FF)

**Examples:**
- #000000 = Black
- #FFFFFF = White
- #FF0000 = Red
- #00FF00 = Green
- #0000FF = Blue

### Getting Your Brand Colors

**From your website:**
1. Open DevTools (F12)
2. Use element inspector
3. Check computed styles
4. Copy hex codes

**From your logo:**
1. Upload to color picker tool
2. Extract color palette
3. Use hex codes in customizer

**From brand guidelines:**
- Check brand style guide
- Use exact hex codes
- Maintain consistency

## Testing Colors

### Preview in Different Scenarios

**Light backgrounds:**
- Test on white product images
- Verify button visibility
- Check text readability

**Dark backgrounds:**
- Test on dark product photos
- Ensure sufficient contrast
- Verify badge visibility

**Various products:**
- Colorful product images
- Black and white photos
- Busy/patterned backgrounds

### Mobile vs Desktop

**Mobile considerations:**
- Smaller screen = colors more prominent
- Sunlight glare reduces contrast
- Test on actual devices

**Desktop considerations:**
- Larger screen = more context
- Better color accuracy
- Monitor calibration varies

## Common Mistakes

### Too Similar Colors

**Problem:** Primary and secondary buttons look identical

**Solution:** Create clear distinction
- Different shades
- One solid, one outlined
- Complementary colors

### Poor Contrast

**Problem:** Text hard to read on button

**Solution:** Use contrast checker
- Aim for 4.5:1 minimum
- Test with actual users
- Adjust until readable

### Clashing with Theme

**Problem:** Sticky cart colors don't match store

**Solution:** Extract colors from theme
- Use same button color
- Match accent colors
- Maintain brand consistency

### Too Many Colors

**Problem:** Rainbow effect, no cohesion

**Solution:** Limit color palette
- 2-3 main colors maximum
- Use shades of same color
- Keep it simple

## Best Practices

1. **Match Your Brand** - Use existing brand colors
2. **Contrast Matters** - Ensure text is readable
3. **Test Accessibility** - Check WCAG compliance
4. **Keep It Simple** - Don't use too many colors
5. **Consider Context** - How colors look on products
6. **Test on Devices** - Preview on actual phones/tablets
7. **Get Feedback** - Ask team and customers

## Quick Tips

- **Can't decide?** Use a preset as starting point
- **Brand new?** Black/white is always safe
- **Bold brand?** Don't be afraid of color
- **Luxury feel?** Use muted, sophisticated tones
- **High energy?** Use bright, saturated colors
- **Eco/natural?** Earth tones and greens
- **Tech/modern?** Blues and cool grays

## Next Steps

- [Typography](./typography.md) - Set fonts and sizes
- [Spacing](./spacing.md) - Adjust layout
- [Presets](./presets.md) - Try pre-made color schemes
- [Best Practices](./best-practices.md) - Design tips

Your color choices create the first impression and drive action - choose wisely!
