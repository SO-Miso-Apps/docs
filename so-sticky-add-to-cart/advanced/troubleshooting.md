---
title: Troubleshooting
description: Quick solutions to common issues with sticky cart.
sidebar_position: 2
---

# Troubleshooting

Quick fixes for common issues.

## Sticky Cart Not Appearing

### Checklist

- [ ] Theme extension enabled
- [ ] Browser cache cleared
- [ ] Desktop visibility enabled (if on desktop)
- [ ] Viewing a product page (not homepage)

### Solutions

**1. Enable Theme Extension:**
```
Shopify Admin → Themes → Customize
→ Product page → Add "Sticky Add to Cart" block → Save
```

**2. Clear Cache:**
- Hard refresh: `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows)
- Or use incognito/private window

**3. Check Desktop Setting:**
```
Customizer → General → Show on Desktop: ON
```

**4. Verify Page Type:**
- Only shows on product pages
- Not on homepage or collections

## Changes Not Showing

### Solutions

**1. Did you Deploy?**
- "Save" = Stores config
- "Deploy" = Publishes live
- Wait 1-2 minutes after deploying

**2. Clear All Caches:**
- Browser: `Cmd+Shift+R` / `Ctrl+Shift+R`
- Shopify: Wait 2-3 minutes
- CDN: Up to 5 minutes
- Test in incognito mode

## Styling Issues

### Text Cut Off or Truncated

**Solutions:**

**Reduce font size:**
```
Typography → Decrease sizes → Save → Deploy
```

**Shorten text:**
```
Languages → Use shorter labels → Save → Deploy
```

### Looks Different Than Preview

**Common causes:**
- Browser differences (Chrome vs Safari)
- Mobile vs desktop rendering
- Theme CSS conflicts

**Test in:**
- Multiple browsers
- Actual devices (not just emulation)
- Incognito mode

## Functionality Issues

### Add to Cart Not Working

**Debug steps:**

1. **Check console errors:**
   ```
   Press F12 → Console tab → Look for red errors
   ```

2. **Test theme button:**
   - Does your theme's default button work?
   - If no, it's a theme issue

3. **Clear cache & cookies:**
   - Hard refresh
   - Disable browser extensions
   - Try incognito mode

### Variant Selection Not Working

**Solutions:**

1. **Verify product setup:**
   - Product has variants in Shopify
   - Variants are in stock
   - Options properly configured

2. **Test different products:**
   - Simple product (no variants)
   - Product with variants
   - Isolate which products fail

## Preview Issues

### Preview Not Loading

**Quick fixes:**

1. Refresh customizer
2. Hard refresh browser
3. Clear cache
4. Try different browser
5. Disable ad blockers

### Preview Not Updating

**Solutions:**

1. Click refresh icon in preview
2. Close and reopen customizer
3. Hard refresh browser

## Mobile Issues

### Hard to Tap Buttons

**Solutions:**

**Increase button size:**
```
Spacing → Button Padding: Increase
Ensure: 44x44px minimum
```

**Increase font:**
```
Typography → Button Font Size: Increase
```

Test on actual phone!

### Different on iPhone vs Android

**Expected:**
- iOS (Safari) vs Android (Chrome) render differently
- Minor differences are normal
- Optimize for your majority platform

## Performance Issues

### Loads Slowly

**Optimizations:**

1. Use system fonts (not Google Fonts)
2. Apply preset (don't over-customize)
3. Check overall page speed (may be theme issue)

### Scrolling Laggy

**Try:**
- Close other browser tabs
- Restart browser
- Update browser
- Test on different device

## Error Messages

### "Failed to add to cart"

**Fix:**
1. Check product is in stock
2. Verify variant available
3. Test theme's default button
4. Clear browser cache

### "Configuration not found"

**Fix:**
1. Complete initial setup
2. Save configuration
3. Deploy to store
4. Refresh page

### "Theme extension not active"

**Fix:**
```
Theme Customizer → Add Sticky Add to Cart block → Save
```

## Getting Help

### Before Contacting Support

**Gather:**
1. Store URL
2. Browser & version
3. Device type
4. Steps to reproduce
5. Screenshots
6. Console errors (F12 → Console)

### Get Console Errors

```
1. Press F12
2. Click "Console" tab
3. Reproduce issue
4. Screenshot red errors
5. Send to support
```

### Contact

**Email:** support@stickyaddtocart.com

**Include:**
- Store URL
- Detailed description
- Screenshots
- Console errors
- When it started

**Response:** Usually < 24 hours

## Prevention Tips

1. ✅ Test before deploying
2. ✅ Clear cache after changes
3. ✅ Keep browser updated
4. ✅ Test on multiple devices
5. ✅ Save frequently
6. ✅ Monitor after deployment

## Still Stuck?

- Check **[FAQ](./faq)** for more answers
- Review documentation
- Contact support - we're here to help!

Most issues resolve quickly. Don't hesitate to reach out!

## Sticky Cart Not Appearing

### Issue: Can't see sticky cart on product pages

**Common causes:**
1. Theme extension not enabled
2. Browser cache
3. Desktop visibility disabled (on desktop)
4. Not on a product page

**Solutions:**

**Check Theme Extension:**
1. Go to Shopify Admin → Online Store → Themes
2. Click "Customize" on active theme
3. Navigate to product page template
4. Verify "Sticky Add to Cart" app block is present
5. Ensure it's enabled (toggle switch on)
6. Click "Save"

**Clear Browser Cache:**
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Or try incognito/private browsing window
3. Clear browser cache completely
4. Restart browser

**Check Desktop Setting:**
1. Open customizer
2. Go to General tab
3. Ensure "Show on Desktop" is enabled (if viewing on desktop)
4. Save and deploy

**Verify Page Type:**
- Sticky cart only appears on product pages
- Won't show on homepage, collections, or other pages
- Test on actual product URL

## Changes Not Showing

### Issue: Made changes but don't see them live

**Solutions:**

**Ensure You Deployed:**
1. Changes require clicking "Deploy" button
2. "Save" only saves configuration
3. "Deploy" publishes to live store
4. Wait 1-2 minutes after deploying

**Clear Cache:**
1. Browser cache (Ctrl+Shift+R)
2. Shopify cache (wait 2-3 minutes)
3. CDN cache (may take up to 5 minutes)
4. Test in incognito window

**Check Version:**
1. Hard refresh page
2. Check browser console for errors
3. Verify latest code is loaded
4. May need to clear app cache

## Styling Issues

### Issue: Looks different than preview

**Mobile vs Desktop:**
- Some CSS properties render differently
- Test on actual devices, not just browser emulation
- Mobile and desktop may need different settings

**Browser Differences:**
- Test in Chrome, Firefox, Safari
- Some older browsers may not support all features
- Update to latest browser version

**Theme Conflicts:**
- Your theme's CSS may override sticky cart styles
- Check for `!important` flags in theme
- Contact support if theme conflicts exist

### Issue: Text is cut off or truncated

**Solutions:**

**Reduce Font Size:**
1. Go to Typography tab
2. Decrease font sizes slightly
3. Test in mobile preview
4. Save and deploy

**Shorten Text:**
1. Go to Languages tab
2. Use shorter button labels
3. Keep under character limits
4. Test appearance

**Increase Container Width:**
- Some themes have narrow containers
- Contact support for theme-specific fixes

## Functionality Issues

### Issue: Add to Cart button not working

**Solutions:**

**Check JavaScript Errors:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for red errors
4. Share errors with support if present

**Verify Cart API:**
1. Test theme's default add-to-cart
2. If theme button also broken, it's a theme issue
3. Check for JavaScript conflicts
4. Disable other apps temporarily

**Clear Cache & Cookies:**
1. Clear browser data
2. Disable browser extensions
3. Test in incognito mode
4. Try different browser

### Issue: Variant selection not working

**Solutions:**

**Check Product Setup:**
1. Verify product has variants in Shopify admin
2. Ensure variants are available/in stock
3. Check variant options are properly configured

**Test Different Products:**
1. Try simple product (no variants)
2. Try product with variants
3. Isolate which products have issues

**Browser Console:**
1. Open DevTools (F12)
2. Check for JavaScript errors
3. Look for variant-related errors

## Preview Issues

### Issue: Preview not loading in customizer

**Solutions:**

**Refresh Customizer:**
1. Close and reopen customizer
2. Hard refresh browser
3. Clear browser cache
4. Try different browser

**Check Internet Connection:**
- Stable connection required
- Slow connection may timeout
- Try refreshing page

**Browser Extensions:**
- Disable ad blockers
- Disable privacy extensions
- These may block preview iframe

### Issue: Preview not updating when making changes

**Solutions:**

**Hard Refresh:**
1. Click refresh icon in preview panel
2. Or close and reopen customizer
3. Changes should apply immediately

**Browser Issues:**
- Clear cache
- Disable extensions
- Update browser

## Performance Issues

### Issue: Sticky cart loads slowly

**Solutions:**

**Optimize Settings:**
1. Use system fonts instead of Google Fonts
2. Minimize customizations
3. Keep code lightweight

**Check Page Speed:**
1. Test overall page load time
2. May be theme or hosting issue
3. Not specific to sticky cart

**Network Issues:**
- Test internet connection speed
- Try different network
- Check if issue is consistent

### Issue: Page scrolling is laggy

**Solutions:**

**Browser Performance:**
- Close other tabs
- Restart browser
- Update to latest version

**Device Performance:**
- Older devices may struggle
- Test on different devices
- May be device limitation

## Mobile-Specific Issues

### Issue: Hard to tap buttons on mobile

**Solutions:**

**Increase Button Size:**
1. Go to Spacing tab
2. Increase button padding
3. Ensure 44x44px minimum
4. Test on actual device

**Increase Font Size:**
1. Go to Typography tab
2. Increase button font size
3. Improves tap target
4. Test on phone

### Issue: Looks different on iPhone vs Android

**Solutions:**

**Test Both Platforms:**
- iOS and Android render differently
- Some CSS differences expected
- Optimize for majority platform

**Browser Differences:**
- Safari (iOS) vs Chrome (Android)
- Test in both browsers
- Minor differences acceptable

## Installation Issues

### Issue: Can't install app

**Solutions:**

**Check Permissions:**
- Must be store owner or have admin access
- Try logging out and back in
- Contact store owner for access

**Browser Issues:**
- Try different browser
- Clear cache and cookies
- Disable extensions

**Shopify Status:**
- Check Shopify status page
- May be temporary outage
- Wait and try again

## Theme Compatibility

### Issue: Conflicts with theme

**Solutions:**

**Check Theme Requirements:**
- App works with Online Store 2.0 themes
- Older themes may need updates
- Update theme to latest version

**Contact Support:**
- Provide theme name and version
- Share screenshots of issue
- Support can help with theme-specific fixes

## Getting Help

### Before Contacting Support

Gather this information:

1. **Store URL**
2. **Browser and version**
3. **Device type** (mobile/desktop)
4. **Steps to reproduce**
5. **Screenshots** of issue
6. **Console errors** (if any)
7. **When issue started**

### How to Get Console Errors

1. Press F12 (or Right-click → Inspect)
2. Click "Console" tab
3. Reproduce the issue
4. Screenshot any red errors
5. Send to support

### Contact Support

**Email:** support@stickyaddtocart.com

**Include:**
- Store URL
- Detailed description
- Screenshots
- Console errors
- Steps to reproduce

**Response Time:**
- Usually within 24 hours
- Faster for urgent issues
- Check spam folder

## Common Error Messages

### "Failed to add to cart"

**Cause:** Cart API error

**Solution:**
1. Check if product is in stock
2. Verify variant is available
3. Test theme's default button
4. Clear browser cache

### "Configuration not found"

**Cause:** App not fully set up

**Solution:**
1. Complete initial setup
2. Save configuration in customizer
3. Deploy to store
4. Refresh page

### "Theme extension not active"

**Cause:** App block not enabled

**Solution:**
1. Go to theme customizer
2. Add/enable Sticky Add to Cart block
3. Save theme
4. Refresh store

## Prevention Tips

1. **Test before deploying** - Use preview extensively
2. **Clear cache after changes** - Avoid confusion
3. **Keep browser updated** - Better compatibility
4. **Test on multiple devices** - Catch device-specific issues
5. **Monitor after deployment** - Catch issues early
6. **Save frequently** - Don't lose work
7. **Document custom settings** - Easy to restore

## Still Having Issues?

If you've tried these solutions and still have problems:

1. **Check [FAQ](./faq.md)** - May have your answer
2. **Review documentation** - Might have missed something
3. **Contact support** - We're here to help
4. **Join community** - Other users may have solutions

Most issues are resolved quickly - don't hesitate to reach out for help!
