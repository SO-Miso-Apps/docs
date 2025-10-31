---
sidebar_position: 5
---

# Khắc phục sự cố

Hướng dẫn giải quyết các vấn đề thường gặp khi sử dụng app Sticky Add to Cart.

## Vấn đề thường gặp

### Nút sticky không hiển thị

**Nguyên nhân có thể:**
- App chưa được kích hoạt
- Theme không tương thích
- Xung đột với JavaScript khác

**Giải pháp:**
1. Kiểm tra app đã được cài đặt và kích hoạt
   - Vào **Settings > Apps and sales channels**
   - Xác nhận app đang ở trạng thái "Active"
2. Kiểm tra cài đặt hiển thị
   - Vào cài đặt app và kiểm tra tùy chọn "Show on devices"
   - Đảm bảo đã chọn thiết bị bạn đang sử dụng
3. Xóa cache trình duyệt
   - Làm mới trang với Ctrl+Shift+R (Windows) hoặc Cmd+Shift+R (Mac)
4. Kiểm tra Console
   - Mở Developer Tools (F12) và xem có lỗi JavaScript không

### Nút sticky hiển thị sai vị trí

**Nguyên nhân:**
- CSS của theme ghi đè style
- Cài đặt offset không đúng

**Giải pháp:**
1. Kiểm tra cài đặt vị trí trong app settings
2. Điều chỉnh offset nếu cần
3. Thêm custom CSS trong phần Advanced settings
4. Liên hệ hỗ trợ với thông tin theme đang sử dụng

### Nút không hoạt động khi click

**Nguyên nhân:**
- JavaScript conflict
- Theme đã có sự kiện click riêng

**Giải pháp:**
1. Kiểm tra Console để xem lỗi
2. Tạm thời tắt các apps khác để kiểm tra xung đột
3. Liên hệ hỗ trợ kỹ thuật

### Giá sản phẩm không cập nhật khi chọn variant

**Nguyên nhân:**
- Theme không sử dụng format giá chuẩn của Shopify
- JavaScript của theme không trigger event

**Giải pháp:**
1. Kiểm tra xem theme có hỗ trợ variant selector không
2. Thử với theme khác để xác nhận vấn đề
3. Báo cáo với thông tin theme cụ thể

### Nút bị che bởi các element khác

**Nguyên nhân:**
- Z-index thấp
- Các element khác có z-index cao hơn

**Giải pháp:**
1. Tăng z-index trong Advanced settings
2. Kiểm tra và điều chỉnh z-index của các element khác trong theme
3. Sử dụng custom CSS nếu cần

### Hiển thị trên mobile không đẹp

**Nguyên nhân:**
- Chưa tối ưu cho mobile
- Kích thước màn hình nhỏ

**Giải pháp:**
1. Kiểm tra cài đặt responsive
2. Điều chỉnh kích thước font và padding cho mobile
3. Có thể ẩn một số thông tin trên mobile để tiết kiệm không gian

## Các lỗi cụ thể

### "App block not found"

**Giải pháp:**
- Đảm bảo theme hỗ trợ app blocks (Online Store 2.0)
- Kiểm tra theme đã được publish

### "Permission denied"

**Giải pháp:**
- Kiểm tra quyền truy cập Admin
- Đảm bảo bạn có quyền quản lý apps

### "Theme incompatible"

**Giải pháp:**
- Nâng cấp theme lên Online Store 2.0 nếu có thể
- Hoặc sử dụng custom integration (liên hệ hỗ trợ)

## Debugging

### Kiểm tra app hoạt động

1. Mở Developer Tools (F12)
2. Vào tab **Console**
3. Cuộn trang sản phẩm
4. Xem có log hoặc error nào không

### Kiểm tra HTML

1. Mở Developer Tools (F12)
2. Vào tab **Elements** hoặc **Inspector**
3. Tìm element có class `sticky-add-to-cart`
4. Kiểm tra xem element có được render không

### Kiểm tra CSS

1. Trong Developer Tools, kiểm tra style của sticky element
2. Xem có CSS nào bị override không
3. Kiểm tra z-index và position

## Liên hệ hỗ trợ

Nếu vấn đề vẫn chưa được giải quyết:

1. **Thu thập thông tin:**
   - Theme đang sử dụng
   - Screenshot lỗi
   - Console errors (nếu có)
   - Mô tả chi tiết vấn đề

2. **Liên hệ:**
   - Email: support@example.com
   - Hoặc qua Shopify App Store

3. **Cung cấp:**
   - Store URL
   - Theme name và version
   - Các apps khác đang sử dụng

