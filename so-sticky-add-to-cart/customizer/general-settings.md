---
title: General Settings
description: Configure display type, desktop visibility, and buy now button.
sidebar_position: 3
---

# General Settings

Core display options and functionality controls.

## Display Type

### Collapsed (Recommended)

**Minimal bar** with essentials only.

**Shows:**
- Product image
- Name and price
- Expands on click

**Best for:**
- Clean design
- Simple products
- Mobile-first stores
- Minimal variants (1-3 options)

### Expanded

**Full panel** with all details visible.

**Shows:**
- Product image
- Full variant selector
- Both buttons immediately

**Best for:**
- Complex products
- Many variants (3+ options)
- Desktop traffic
- Quick purchase priority

## Desktop Visibility

### Enabled (Default)

Sticky cart appears on all devices.

**Use when:**
- Desktop traffic is 30%+
- Want consistent experience
- Theme doesn't have good solution

### Disabled

Mobile/tablet only.

**Use when:**
- 80%+ mobile traffic
- Desktop theme works great
- Mobile-only focus

:::tip Check Your Analytics
Shopify → Analytics → Sessions by device to decide.
:::

## Buy Now Button

### Disabled (Default)

Single "Add to Cart" button.

**Best for:**
- Encouraging browsing
- Multiple item orders
- Upselling strategies

### Enabled

Two buttons: "Add to Cart" + "Buy Now"

**Best for:**
- Impulse purchases
- Single-item orders
- Express checkout
- Quick conversions

**Behavior:**
- **Add to Cart** → Keeps shopping
- **Buy Now** → Direct to checkout

## Configuration Examples

### Fashion Store (Many Variants)

```
Display: Expanded
Desktop: Enabled
Buy Now: Disabled
```
→ Show all options, encourage browsing

### Digital Products

```
Display: Collapsed
Desktop: Enabled
Buy Now: Enabled
```
→ Simple, fast purchase

### Mobile Accessories

```
Display: Collapsed
Desktop: Disabled
Buy Now: Enabled
```
→ Mobile-focused, quick checkout

## Testing Checklist

- [ ] Mobile view (actual device)
- [ ] Desktop view
- [ ] Products with variants
- [ ] Simple products
- [ ] Button interactions
- [ ] Cart updates correctly

## Quick Tips

| Goal | Setting |
|------|---------|
| Clean interface | Collapsed |
| Show all options | Expanded |
| Mobile only | Desktop: OFF |
| Fast checkout | Buy Now: ON |
| Encourage browsing | Buy Now: OFF |

## Next Steps

- **[Colors](./colors)** - Brand colors
- **[Typography](./typography)** - Fonts
- **[Spacing](./spacing)** - Layout
- **[Effects](./effects)** - Button animations

## Display Type

Choose how the sticky cart is presented to your customers.

### Collapsed

**What it is:**
A minimal bar that shows just the essentials - product image, name, and price.

**Best for:**
- Clean, unobtrusive design
- Stores with simple products
- Maintaining maximum content visibility
- Mobile-first experiences

**Behavior:**
- Appears as a compact bar at bottom of screen
- Expands when customer clicks on it
- Shows full variant selector after click
- Minimizes screen real estate usage

**Recommended when:**
- Products have few variants (1-3 options)
- You want minimal visual impact
- Screen space is at a premium
- Customers prefer less clutter

### Expanded

**What it is:**
A full panel showing product details, variant selector, and buttons all at once.

**Best for:**
- Products with multiple options
- Complex variant combinations
- Maximizing conversion potential
- Desktop experiences

**Behavior:**
- Displays all options immediately
- No click required to see variants
- Faster path to purchase
- More prominent call-to-action

**Recommended when:**
- Products have many variants (colors, sizes, etc.)
- You want maximum visibility
- Desktop is primary traffic source
- Quick purchase is priority

## Desktop Visibility

Control whether the sticky cart appears on desktop devices.

### Enabled (Default)

**What happens:**
- Sticky cart appears on all devices
- Desktop and mobile users see it
- Consistent experience across platforms

**Best for:**
- Stores with significant desktop traffic
- B2B stores
- Products requiring detailed review
- Consistent branding

### Disabled

**What happens:**
- Sticky cart only appears on mobile/tablet
- Desktop users see your theme's default button
- Mobile-optimized experience

**Best for:**
- Mobile-first stores
- When desktop theme already has good UX
- Reducing desktop clutter
- Focusing mobile conversions

**How to decide:**
Check your Shopify analytics:
- If 70%+ traffic is mobile → Consider mobile-only
- If desktop converts better → Keep enabled
- If uncertain → Keep enabled

## Buy Now Button

Add an express checkout option alongside the add-to-cart button.

### Disabled (Default)

**What you get:**
- Single "Add to Cart" button
- Standard shopping flow
- Simpler interface

**Best for:**
- Encouraging cart browsing
- Stores with related products
- Upselling strategies
- Cleaner appearance

### Enabled

**What you get:**
- Two buttons: "Add to Cart" + "Buy Now"
- Express checkout option
- Faster purchase path

**Best for:**
- Impulse purchases
- Single-item orders
- High-intent traffic
- Reducing checkout friction

**Button Behavior:**
- **Add to Cart**: Adds item, keeps shopping
- **Buy Now**: Goes directly to checkout

**Customization:**
- Set button colors in Colors tab
- Primary button = Add to Cart
- Secondary button = Buy Now

## Configuration Examples

### Example 1: Fashion Store with Many Variants

```
✓ Display Type: Expanded
✓ Desktop Visibility: Enabled
✓ Buy Now Button: Disabled
```

**Why:**
- Multiple size/color combinations
- Desktop customers review carefully
- Encourage browsing multiple items

### Example 2: Digital Products Store

```
✓ Display Type: Collapsed
✓ Desktop Visibility: Enabled
✓ Buy Now Button: Enabled
```

**Why:**
- Simple products (no variants)
- Fast purchase desired
- Express checkout valuable

### Example 3: Mobile Accessories Store

```
✓ Display Type: Collapsed
✓ Desktop Visibility: Disabled
✓ Buy Now Button: Enabled
```

**Why:**
- 80% mobile traffic
- Simple products
- Quick purchases common

### Example 4: Luxury Goods Store

```
✓ Display Type: Expanded
✓ Desktop Visibility: Enabled
✓ Buy Now Button: Disabled
```

**Why:**
- Complex customization options
- Desktop review important
- Discourage impulse buys

## How Settings Work Together

### Setting Interactions

**Collapsed + Buy Now Button:**
- Customer clicks collapsed bar
- Panel expands showing variants + 2 buttons
- Choose add to cart or buy now

**Expanded + Buy Now Button:**
- Everything visible immediately
- Two clear action options
- Fastest purchase path

**Collapsed + No Buy Now:**
- Minimal initial appearance
- Expands to show variants + single button
- Cleanest interface

**Expanded + No Buy Now:**
- Full panel always visible
- Single clear action
- Best for complex products

## Testing Your Settings

### What to Test

1. **Mobile Experience**
   - How does collapsed view feel?
   - Is expanded view too large?
   - Are buttons easy to tap?

2. **Desktop Experience**
   - Does it match your theme?
   - Too prominent or too subtle?
   - Easy to interact with?

3. **With Different Products**
   - Simple products (no variants)
   - Complex products (many options)
   - Sale/discounted items
   - Out of stock products

4. **User Flow**
   - Can users easily select variants?
   - Clear what each button does?
   - Smooth add-to-cart process?

### Testing Checklist

- [ ] Test on actual mobile device (not just browser)
- [ ] Test on desktop computer
- [ ] Try with products that have variants
- [ ] Try with simple products
- [ ] Click through full purchase flow
- [ ] Verify cart updates correctly
- [ ] Test buy now button (if enabled)
- [ ] Check with different screen sizes

## Best Practices

### Display Type

**Use Collapsed when:**
- You have minimal variants
- Screen space is important
- You want subtle presence
- Mobile is primary platform

**Use Expanded when:**
- Products have 3+ option types
- You want maximum visibility
- Desktop is significant traffic
- Speed to purchase is crucial

### Desktop Visibility

**Enable when:**
- Desktop traffic is 30%+
- Desktop converts well
- You want consistent experience
- Theme doesn't have good sticky solution

**Disable when:**
- Mobile represents 80%+ traffic
- Desktop theme already works great
- You want mobile-only focus
- Desktop feels too cluttered

### Buy Now Button

**Enable when:**
- Average order has 1-2 items
- Products are impulse-buy friendly
- Checkout speed is competitive advantage
- You have express checkout enabled

**Disable when:**
- You want to encourage browsing
- Average cart has 3+ items
- Upselling is important
- Interface simplicity is priority

## Common Questions

### Can I change these settings later?

Yes! All settings can be changed anytime:
1. Open customizer
2. Adjust settings
3. Save and deploy

### Do settings affect mobile and desktop differently?

Desktop Visibility is platform-specific. Other settings apply to both platforms when enabled.

### Will changing display type affect my colors?

No. Colors, fonts, and spacing are independent of display type.

### How do I know which settings are best?

Start with recommendations for your industry, then A/B test different configurations to see what converts best.

## Next Steps

After configuring general settings:

- [Colors](./colors.md) - Match your brand
- [Typography](./typography.md) - Set fonts and sizes
- [Spacing](./spacing.md) - Adjust layout
- [Presets](./presets.md) - Quick theme application

## Tips

1. **Start Conservative** - Use collapsed view first, expand if needed
2. **Test Mobile First** - Most traffic comes from mobile
3. **Monitor Analytics** - Check conversion before/after changes
4. **Consider Your Products** - Match settings to product complexity
5. **A/B Test** - Try different configurations
6. **Keep It Simple** - Don't overthink it
7. **User Feedback** - Ask customers what they prefer

The right general settings create a foundation for effective conversions while maintaining a great user experience!
