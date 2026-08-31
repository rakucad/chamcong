/**
 * Service worker TỐI THIỂU.
 *
 * Chỉ tồn tại để trình duyệt công nhận trang này là "app cài được" — điều kiện
 * bắt buộc để Chrome hiện nút Cài đặt và để icon ra màn hình chính cho đúng.
 *
 * CỐ Ý KHÔNG lưu đệm gì cả. Đây là sổ lỗi: phiếu lỗi, nguyên nhân, đối sách đều
 * phải là dữ liệu mới nhất từ máy chủ. Lưu đệm ở đây chỉ tổ có ngày hiện ra số
 * liệu cũ mà không ai hiểu vì sao — lỗi kiểu đó rất khó lần ra.
 */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
});

// Không chặn fetch: để mọi yêu cầu đi thẳng ra mạng như bình thường.
