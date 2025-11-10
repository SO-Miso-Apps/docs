---
title: Troubleshooting
description: Quick solutions to common issues with sticky cart.
sidebar_position: 3
---

# Troubleshooting

Quick fixes for common issues.

## Sticky Cart Not Appearing

| Issue | Solution |
|-------|----------|
| Theme extension not enabled | Shopify Admin → Themes → Customize → Add "Sticky Add to Cart" block → Save |
| Browser cache | Hard refresh: `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows) |
| Desktop visibility | Customizer → General → Show on Desktop: ON |
| Wrong page type | Only shows on product pages (not homepage/collections) |

## Changes Not Showing

**Did you Deploy?**
- "Save" = Stores config
- "Deploy" = Publishes live
- Wait 1-2 minutes

**Clear all caches:**
1. Browser: `Cmd+Shift+R` / `Ctrl+Shift+R`
2. Shopify: Wait 2-3 minutes
3. Test incognito mode

## Styling Issues

### Text Cut Off

**Reduce font size:**
```
Typography → Decrease sizes → Save → Deploy
```

**Shorten text:**
```
Languages → Use shorter labels
```

### Looks Different Than Preview

**Test in:**
- Multiple browsers (Chrome, Safari, Firefox)
- Actual devices (not just emulation)
- Incognito mode

**Common causes:**
- Browser differences
- Mobile vs desktop rendering
- Theme CSS conflicts

## Functionality Issues

### Add to Cart Not Working

| Step | Action |
|------|--------|
| 1 | Check console: Press F12 → Look for red errors |
| 2 | Test theme button: Does default button work? |
| 3 | Clear cache: Hard refresh + incognito mode |
| 4 | Disable extensions: May block cart API |

### Variant Selection Not Working

**Verify:**
- [ ] Product has variants in Shopify
- [ ] Variants are in stock
- [ ] Options properly configured
- [ ] Test different products

## Mobile Issues

### Hard to Tap Buttons

**Increase tap targets:**
```
Spacing → Button Padding: Increase
Minimum: 44x44px
Typography → Button Font Size: Increase
```

Test on actual phone!

### Different on iPhone vs Android

**Expected behavior:**
- iOS (Safari) vs Android (Chrome) render differently
- Minor differences normal
- Optimize for majority platform

## Performance Issues

| Issue | Fix |
|-------|-----|
| Loads slowly | Use system fonts, apply preset |
| Scrolling laggy | Close other tabs, restart browser |
| Overall slow | Check page speed (may be theme) |

## Common Error Messages

| Error | Fix |
|-------|-----|
| "Failed to add to cart" | Check stock, verify variant, test theme button |
| "Configuration not found" | Complete setup, save, deploy, refresh |
| "Theme extension not active" | Add block in Theme Customizer → Save |

## Getting Help

### Before Contacting Support

**Gather:**
1. Store URL
2. Browser & version
3. Device type
4. Steps to reproduce
5. Screenshots
6. Console errors (F12 → Console → Screenshot red errors)

### Get Console Errors

```
1. Press F12
2. Click "Console" tab
3. Reproduce issue
4. Screenshot red errors
5. Send to support
```

### Contact

**Email:** hi@misoapps.com

**Include:**
- Store URL
- Detailed description
- Screenshots
- Console errors
- When it started

**Response:** Usually < 24 hours

## Prevention Tips

✅ Test before deploying  
✅ Clear cache after changes  
✅ Keep browser updated  
✅ Test on multiple devices  
✅ Save frequently  
✅ Monitor after deployment

## Still Stuck?

- Check [FAQ](./faq) for more answers
- Review documentation
- Contact support - we're here to help!

Most issues resolve quickly!
