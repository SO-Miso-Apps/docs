---
sidebar_position: 6
---

# API & Customization

Hướng dẫn sử dụng API và tùy chỉnh nâng cao cho developers.

## Events

App phát ra các events JavaScript mà bạn có thể lắng nghe:

### `stickyAddToCart:show`

Event được trigger khi nút sticky hiển thị.

```javascript
document.addEventListener('stickyAddToCart:show', function(event) {
  console.log('Sticky button is now visible');
  // Your custom code here
});
```

### `stickyAddToCart:hide`

Event được trigger khi nút sticky ẩn đi.

```javascript
document.addEventListener('stickyAddToCart:hide', function(event) {
  console.log('Sticky button is now hidden');
  // Your custom code here
});
```

### `stickyAddToCart:click`

Event được trigger khi người dùng click vào nút sticky.

```javascript
document.addEventListener('stickyAddToCart:click', function(event) {
  console.log('Sticky button clicked');
  // Track analytics, etc.
});
```

### `stickyAddToCart:added`

Event được trigger sau khi sản phẩm được thêm vào giỏ thành công.

```javascript
document.addEventListener('stickyAddToCart:added', function(event) {
  console.log('Product added to cart:', event.detail);
  // Show notification, update cart count, etc.
});
```

## CSS Classes

App sử dụng các CSS classes mà bạn có thể override:

### Main container

```css
.sticky-add-to-cart {
  /* Main container */
}

.sticky-add-to-cart--visible {
  /* When sticky is visible */
}

.sticky-add-to-cart--hidden {
  /* When sticky is hidden */
}
```

### Product info

```css
.sticky-add-to-cart__product {
  /* Product info container */
}

.sticky-add-to-cart__image {
  /* Product image */
}

.sticky-add-to-cart__title {
  /* Product title */
}

.sticky-add-to-cart__price {
  /* Product price */
}
```

### Button

```css
.sticky-add-to-cart__button {
  /* Add to cart button */
}

.sticky-add-to-cart__button:hover {
  /* Button hover state */
}

.sticky-add-to-cart__button:disabled {
  /* Button disabled state */
}
```

## Custom CSS Examples

### Thay đổi màu nền

```css
.sticky-add-to-cart {
  background-color: #f5f5f5 !important;
  border-top: 1px solid #e0e0e0;
}
```

### Thay đổi style nút

```css
.sticky-add-to-cart__button {
  background-color: #ff6b6b !important;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
}
```

### Ẩn hình ảnh sản phẩm

```css
.sticky-add-to-cart__image {
  display: none;
}
```

### Thay đổi layout

```css
.sticky-add-to-cart__product {
  flex-direction: column;
  align-items: center;
}
```

## JavaScript API

### Force show/hide

```javascript
// Show sticky button programmatically
window.StickyAddToCart?.show();

// Hide sticky button programmatically
window.StickyAddToCart?.hide();

// Toggle sticky button
window.StickyAddToCart?.toggle();
```

### Get current state

```javascript
// Check if sticky is visible
const isVisible = window.StickyAddToCart?.isVisible();

// Get current product info
const productInfo = window.StickyAddToCart?.getProductInfo();
```

## Integration với Analytics

### Google Analytics

```javascript
document.addEventListener('stickyAddToCart:added', function(event) {
  gtag('event', 'add_to_cart', {
    currency: 'USD',
    value: event.detail.price,
    items: [{
      item_id: event.detail.productId,
      item_name: event.detail.productName,
      price: event.detail.price,
      quantity: event.detail.quantity
    }]
  });
});
```

### Facebook Pixel

```javascript
document.addEventListener('stickyAddToCart:added', function(event) {
  fbq('track', 'AddToCart', {
    content_name: event.detail.productName,
    content_ids: [event.detail.productId],
    value: event.detail.price,
    currency: 'USD'
  });
});
```

## Advanced Customization

### Custom trigger logic

```javascript
// Override default visibility logic
window.StickyAddToCartConfig = {
  triggerOffset: 100, // Show after scrolling 100px
  hideOnScrollUp: true, // Hide when scrolling up
  customTrigger: function(scrollY) {
    // Your custom logic
    return scrollY > 500;
  }
};
```

### Modify button text dynamically

```javascript
document.addEventListener('stickyAddToCart:show', function() {
  const button = document.querySelector('.sticky-add-to-cart__button');
  if (button) {
    button.textContent = 'Buy Now - Only $' + currentPrice;
  }
});
```

## Best Practices

1. **Performance**
   - Sử dụng event delegation thay vì multiple listeners
   - Debounce scroll events nếu tự implement

2. **Accessibility**
   - Đảm bảo sticky button có proper ARIA labels
   - Keyboard navigation support

3. **Mobile**
   - Test trên nhiều thiết bị mobile
   - Đảm bảo touch targets đủ lớn (minimum 44x44px)

4. **Testing**
   - Test với nhiều themes khác nhau
   - Test với các apps khác để tránh conflicts

