# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



Hướng Dẫn Cài Đặt & Chạy Dự Án

Hướng dẫn này cung cấp các bước cần thiết để thiết lập và chạy dự án cục bộ.

👉 Lưu ý quan trọng: Hãy chạy Server trước, sau đó mới đến Client.

1. Yêu Cầu Tiên Quyết
Dự án này yêu cầu Node.js để chạy.

Cài đặt Node.js
Nếu bạn chưa cài đặt Node.js:

Truy cập trang web chính thức của Node.js: https://nodejs.org/en/download/

Tải xuống trình cài đặt phù hợp với hệ điều hành của bạn.

Chạy trình cài đặt.

2. Thiết Lập Server (Backend)
Các bước này giúp bạn thiết lập và chạy phần Server của dự án.

⚙️ Thiết lập Cấu hình
Mở thư mục dự án trong VS Code.

Thiết lập MongoDB:

Truy cập MongoDB Atlas và đăng ký/đăng nhập: https://www.mongodb.com/cloud/atlas/register

Tạo một Cluster và lấy MongoDB URI của bạn.

Thêm MongoDB URI vào biến môi trường trong file .env của thư mục server.

Thiết lập ImageKit:

Truy cập ImageKit: https://imagekit.io

Đăng ký/Đăng nhập và lấy các khóa API của bạn.

Thêm các khóa sau (PUBLIC_KEY, PRIVATE_KEY, URL_ENDPOINT) vào biến môi trường trong file .env của thư mục server.

🚀 Chạy Server
Mở thư mục server trong Terminal tích hợp (Integrated Terminal) của VS Code.

Cài đặt Dependencies bằng lệnh:

Bash

npm install
Chạy Server bằng lệnh:

Bash

npm run server
⚠️ QUAN TRỌNG: Đảm bảo Server đang chạy trước khi chuyển sang chạy Client.

3. Chạy Client (Frontend)
Sau khi Server đã khởi động thành công, bạn có thể chạy phần Client.

Mở thư mục client trong một Terminal tích hợp mới.

Cài đặt Dependencies bằng lệnh:

Bash

npm install
Chạy Dự án Client bằng lệnh:

Bash

npm run dev
Dự án Client sẽ khởi động và thường có thể truy cập được qua trình duyệt tại địa chỉ hiển thị trên Terminal (thường là http://localhost:3000 hoặc tương tự).
