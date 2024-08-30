#Step-01: Lựa chọn Framework

- Express.js (Là framework phổ biến nhất, cung cấp một bộ các tính năng và middleware để xây dựng các ứng dụng web)
- Koa.js (Là một framework nhẹ hơn, tập trung vào các middleware và generator function)
- Hapi.js ( framework mạnh mẽ, tập trung vào việc xây dựng các API và microservices.)
- NestJS (Là một framework TypeScript, cung cấp một kiến trúc mô-đun và hiệu suất cao, phù hợp với các ứng dụng quy mô lớn)

---

#Step-02: Thiết lập cấu trúc
Ref: explaint folder

---

#Step-03:
INSTALL PACKAGE & LIBRARY

- Tạo package.json
  npm init -y
- Cài đặt framework express
  npm install express (hỗ trợ sử dụng các middleware, kết nối DB, dùng template engine để render html,...). khi cài xong sẽ có folder node_modules (chứa các thư viện), package-node.json (bản sao file package.json)
- cài đặt thư viện Babel (Trình biên dịch Javascript)
- Cài đặt Nodemon (Tự động update code)
- Cài đặt EJS (cho coding Frontend, nhưng ko khuyên dùng)
- cài đặt dotenv. dành cho lưu trữ các thông tin nhạy cảm như port, IP address, key API...

---

#Step-04:

- Khai báo Route
  GET: Để lấy dữ liệu.
  POST: Để tạo mới dữ liệu.
  PUT: Để cập nhật toàn bộ một tài nguyên.
  PATCH: Để cập nhật một phần của tài nguyên.
  DELETE: Để xóa một tài nguyên.
- Mô hình MVC (Model - View - Controller)
