# Sổ lỗi công việc RakuCAD — trang bọc

Trang tĩnh biến phần **xử lý lỗi** thành một app riêng trên điện thoại: tên
riêng, icon riêng (nền đỏ sẫm, khác hẳn app chấm công nền xám), mở ra là vào
thẳng sổ lỗi.

Đặt vào thư mục **`soloi/`** của kho `rakucad/chamcong` — cạnh các tệp của app chấm
công, không đè lên nhau. Địa chỉ sau khi tải lên:
`https://rakucad.github.io/chamcong/soloi/`

| Tệp | Việc |
|---|---|
| `index.html` | nhúng app ở chế độ `?ung=loi`, hiện màn hình chờ khi đang tải |
| `manifest.webmanifest` | khai tên "RakuCAD — Sổ lỗi", màu, icon |
| `sw.js` | service worker tối thiểu — cố ý KHÔNG lưu đệm |
| `push/OneSignalSDKWorker.js` | nhận thông báo đẩy, phạm vi riêng `/chamcong/soloi/push/` |
| `icon-*.png`, `apple-touch-icon.png` | icon cho Android và iPhone |

## Vì sao không tách hẳn thành dự án Apps Script khác

Đã đo bằng máy: nhánh xử lý lỗi gọi tới **142 trong 371 hàm** của dự án — đăng
nhập, phiên, gửi thư, đọc tham số, hồ sơ, báo cáo. Tách ra là bê gần ba phần tư
bộ mã sang bản thứ hai, và từ đó về sau **sửa gì cũng phải sửa hai lần**, trong
khi chỉ có một người bảo trì.

Nên chỉ có **một** bộ mã, một web app, hai đường vào:

    .../exec              → cả hệ thống chấm công
    .../exec?ung=loi      → chỉ sổ lỗi công việc

Trang bọc này trỏ vào đường thứ hai. Trên điện thoại nó là một app khác hoàn
toàn; trong mã thì vẫn là một.

## Ranh giới thật nằm ở tài khoản, không ở đường dẫn

Ai xoá `?ung=loi` trên thanh địa chỉ thì thấy giao diện đầy đủ — nhưng tài khoản
vai trò `loi` bị **máy chủ** từ chối chấm công (`ktKhongPhaiVaiTroLoi`), chứ
không phải chỉ ẩn thẻ đi. Muốn ai đó chỉ dùng sổ lỗi thì cấp tài khoản vai trò
"Chỉ sổ lỗi công việc", đừng trông vào đường dẫn.

## Thông báo đẩy

Dùng chung một ứng dụng OneSignal với app chấm công. Đăng ký nhận đẩy tính theo
**tên miền**, nên ai đã bật ở app chấm công thì ở đây không phải bật lại. Nhưng
service worker phải nằm trong thư mục con riêng `/chamcong/soloi/push/`: `sw.js` của
trang này đang giữ phạm vi `/chamcong/soloi/`, hai service worker cùng phạm vi thì cái
sau đá cái trước ra và app mất tư cách "app cài được".

## Đổi địa chỉ app

Nằm ở `src` của thẻ `<iframe>` trong `index.html` — **nhớ giữ `?ung=loi` ở
cuối**, mất nó là app này thành app chấm công thứ hai. Triển khai bản mới theo
lối *Quản lý → Chỉnh sửa → Phiên bản mới* thì địa chỉ không đổi, khỏi động vào.
