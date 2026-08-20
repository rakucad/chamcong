# Chấm công RakuCAD — trang bọc

Trang tĩnh để biến hệ thống chấm công thành **app cài được** trên điện thoại:
có icon logo công ty, mở toàn màn hình, không thanh địa chỉ.

Kho này **không chứa mã nguồn app và không chứa dữ liệu**. Chỉ có:

| Tệp | Việc |
|---|---|
| `index.html` | nhúng app, hiện màn hình chờ khi đang tải |
| `manifest.webmanifest` | khai tên app, màu, icon |
| `sw.js` | service worker tối thiểu — cố ý KHÔNG lưu đệm |
| `icon-*.png`, `apple-touch-icon.png` | icon cho Android và iPhone |

Dữ liệu chấm công nằm ở Google Apps Script, sau lớp đăng nhập, không đi qua đây.

## Đổi địa chỉ app

Chỉ cần sửa khi địa chỉ web app đổi — nằm ở thuộc tính `src` của thẻ `<iframe>`
trong `index.html`. Triển khai bản mới trong Apps Script theo lối
*Quản lý → Chỉnh sửa → Phiên bản mới* thì địa chỉ **không đổi**, khỏi động vào đây.
