# Buổi 5: JS (BUỔI 2)

- [Buổi 5: JS (BUỔI 2)](#buổi-5-js-buổi-2)
  - [A. JS ASYNC, API](#a-js-async-api)
    - [I. JS ASYNC](#i-js-async)
      - [1. JSON là gì?](#1-json-là-gì)
        - [a. Định nghĩa JSON](#a-định-nghĩa-json)
        - [b. Đặc điểm của JSON](#b-đặc-điểm-của-json)
        - [c. Ví dụ](#c-ví-dụ)
        - [d. Khi nào dùng JSON?](#d-khi-nào-dùng-json)
      - [2. Đồng bộ (Synchronous) vs Bất đồng bộ (Asynchronous)](#2-đồng-bộ-synchronous-vs-bất-đồng-bộ-asynchronous)
        - [a. Đồng bộ](#a-đồng-bộ)
        - [b. Bất đồng bộ](#b-bất-đồng-bộ)
      - [3. Callback và Callback Hell](#3-callback-và-callback-hell)
        - [a. Callback là gì?](#a-callback-là-gì)
        - [b. Callback Hell là gì?](#b-callback-hell-là-gì)
      - [4. Promise](#4-promise)
        - [a. Promise là gì?](#a-promise-là-gì)
        - [b. Trạng thái của Promise](#b-trạng-thái-của-promise)
        - [c. Cách tạo Promise](#c-cách-tạo-promise)
        - [d. Ví dụ bất đồng bộ](#d-ví-dụ-bất-đồng-bộ)
      - [5. Async / Await](#5-async--await)
        - [a. Async là gì?](#a-async-là-gì)
        - [b. Await là gì?](#b-await-là-gì)
        - [c. Ví dụ](#c-ví-dụ-1)
        - [d. Ưu điểm](#d-ưu-điểm)
      - [6. So sánh Callback vs Promise vs Async/Await](#6-so-sánh-callback-vs-promise-vs-asyncawait)
    - [II. FETCH API](#ii-fetch-api)
      - [1. API là gì?](#1-api-là-gì)
        - [a. Định nghĩa](#a-định-nghĩa)
        - [b. Ví dụ](#b-ví-dụ)
      - [2. Query Parameters (Tham số truy vấn)](#2-query-parameters-tham-số-truy-vấn)
        - [a. Khái niệm](#a-khái-niệm)
        - [b. Ví dụ](#b-ví-dụ-1)
        - [c. Cách tạo query string trong JS](#c-cách-tạo-query-string-trong-js)
      - [3. Request Body (Dữ liệu gửi lên server)](#3-request-body-dữ-liệu-gửi-lên-server)
        - [a. Chỉ dùng trong các phương thức như `POST`, `PUT`, `PATCH`](#a-chỉ-dùng-trong-các-phương-thức-như-post-put-patch)
        - [b. Ví dụ body JSON](#b-ví-dụ-body-json)
        - [c. Header quan trọng](#c-header-quan-trọng)
      - [4. Fetch API](#4-fetch-api)
        - [a. Fetch là gì?](#a-fetch-là-gì)
        - [b. Cấu trúc cơ bản (GET)](#b-cấu-trúc-cơ-bản-get)
        - [c. Gửi POST request với body](#c-gửi-post-request-với-body)
        - [d. Dùng với async/await](#d-dùng-với-asyncawait)
      - [5. So sánh phương thức HTTP](#5-so-sánh-phương-thức-http)
    - [III. REST API](#iii-rest-api)
      - [1. REST API là gì?](#1-rest-api-là-gì)
        - [a. REST là gì?](#a-rest-là-gì)
        - [b. Nguyên tắc hoạt động](#b-nguyên-tắc-hoạt-động)
      - [2. Các thao tác CRUD trong REST API](#2-các-thao-tác-crud-trong-rest-api)
        - [a. CRUD là gì?](#a-crud-là-gì)
      - [3. Cấu trúc URL RESTful](#3-cấu-trúc-url-restful)
        - [a. URL là duy nhất cho mỗi loại tài nguyên](#a-url-là-duy-nhất-cho-mỗi-loại-tài-nguyên)
        - [b. Không dùng động từ trong URL](#b-không-dùng-động-từ-trong-url)
      - [4. Ví dụ thực tế (Fake REST API)](#4-ví-dụ-thực-tế-fake-rest-api)
      - [5. RESTful vs REST API](#5-restful-vs-rest-api)
      - [6. Ưu điểm của REST API](#6-ưu-điểm-của-rest-api)
    - [IV. POSTMAN](#iv-postman)
      - [1. Postman là gì?](#1-postman-là-gì)
        - [a. Khái niệm](#a-khái-niệm-1)
        - [b. Tính năng chính](#b-tính-năng-chính)
      - [2. Cài đặt Postman](#2-cài-đặt-postman)
        - [a. Cách tải](#a-cách-tải)
        - [b. Hoặc dùng bản web:](#b-hoặc-dùng-bản-web)
      - [3. Giao diện cơ bản](#3-giao-diện-cơ-bản)
      - [4. Ví dụ dùng Postman với REST API](#4-ví-dụ-dùng-postman-với-rest-api)
        - [a. Gửi GET request](#a-gửi-get-request)
        - [b. Gửi POST request](#b-gửi-post-request)
      - [5. Sử dụng Headers và Params](#5-sử-dụng-headers-và-params)
        - [a. Headers thường dùng](#a-headers-thường-dùng)
        - [b. Params](#b-params)
      - [6. Lợi ích khi dùng Postman](#6-lợi-ích-khi-dùng-postman)
      - [7. So sánh Postman và Fetch](#7-so-sánh-postman-và-fetch)
  - [B. STORAGE](#b-storage)
    - [I. Storing Data](#i-storing-data)
      - [1. Tổng quan về lưu trữ dữ liệu trong trình duyệt](#1-tổng-quan-về-lưu-trữ-dữ-liệu-trong-trình-duyệt)
        - [a. Tại sao cần lưu dữ liệu?](#a-tại-sao-cần-lưu-dữ-liệu)
        - [b. Có 3 cách phổ biến để lưu trữ trong trình duyệt:](#b-có-3-cách-phổ-biến-để-lưu-trữ-trong-trình-duyệt)
      - [2. Cookie](#2-cookie)
        - [a. Cookie là gì?](#a-cookie-là-gì)
        - [b. Tạo cookie bằng JS](#b-tạo-cookie-bằng-js)
        - [c. Đọc cookie](#c-đọc-cookie)
        - [d. Xóa cookie](#d-xóa-cookie)
        - [e. Nhược điểm](#e-nhược-điểm)
      - [3. Local Storage](#3-local-storage)
        - [a. Local Storage là gì?](#a-local-storage-là-gì)
        - [b. Cách sử dụng](#b-cách-sử-dụng)
        - [c. Lưu Object (dùng JSON)](#c-lưu-object-dùng-json)
      - [4. Session Storage](#4-session-storage)
        - [a. Session Storage là gì?](#a-session-storage-là-gì)
        - [b. Cách sử dụng giống hệt Local Storage](#b-cách-sử-dụng-giống-hệt-local-storage)
      - [5. So sánh Cookie vs Local Storage vs Session Storage](#5-so-sánh-cookie-vs-local-storage-vs-session-storage)
    - [II. Token (Access Token, Refresh Token)](#ii-token-access-token-refresh-token)
      - [1. Token là gì?](#1-token-là-gì)
        - [a. Định nghĩa](#a-định-nghĩa-1)
        - [b. Ưu điểm](#b-ưu-điểm)
        - [c. Dạng phổ biến nhất: **JWT (JSON Web Token)**](#c-dạng-phổ-biến-nhất-jwt-json-web-token)
      - [2. Access Token](#2-access-token)
        - [a. Là gì?](#a-là-gì)
        - [b. Đặc điểm](#b-đặc-điểm)
        - [c. Cách sử dụng (JS + Fetch)](#c-cách-sử-dụng-js--fetch)
      - [3. Refresh Token](#3-refresh-token)
        - [a. Là gì?](#a-là-gì-1)
        - [b. Quy trình sử dụng](#b-quy-trình-sử-dụng)
        - [c. Ví dụ (giả lập logic)](#c-ví-dụ-giả-lập-logic)
      - [4. Lưu token ở đâu?](#4-lưu-token-ở-đâu)
      - [5. Minh họa luồng sử dụng Token](#5-minh-họa-luồng-sử-dụng-token)


## A. JS ASYNC, API

### I. JS ASYNC

#### 1. JSON là gì?

##### a. Định nghĩa JSON

* **JSON** (JavaScript Object Notation) là định dạng nhẹ để lưu trữ và trao đổi dữ liệu giữa client và server.
* Nó giống cú pháp đối tượng trong JavaScript, nhưng là **chuỗi (string)**.

##### b. Đặc điểm của JSON

* Là chuỗi văn bản (string)
* Có cấu trúc: `{ key: value }`
* Hỗ trợ các kiểu: string, number, boolean, array, object, null

##### c. Ví dụ

```js
const jsonString = '{"name":"Chinh","age":19,"skills":["HTML","CSS","JS"]}';
const jsonObject = JSON.parse(jsonString); // chuyển chuỗi JSON thành object
console.log(jsonObject.name); // "Chinh"

const jsObject = { name: "Chinh", age: 19 };
const toJSON = JSON.stringify(jsObject); // chuyển object thành chuỗi JSON
console.log(toJSON); // '{"name":"Chinh","age":19}'
```

##### d. Khi nào dùng JSON?

* Khi trao đổi dữ liệu với **API**
* Khi lưu trữ tạm dữ liệu vào `localStorage` / `sessionStorage`

#### 2. Đồng bộ (Synchronous) vs Bất đồng bộ (Asynchronous)

##### a. Đồng bộ

* Thực hiện **tuần tự**, từng dòng một.
* Dòng sau phải **đợi** dòng trước hoàn tất.

```js
console.log("1");
console.log("2");
console.log("3");
// In ra: 1, 2, 3
```

##### b. Bất đồng bộ

* Cho phép **không đợi** dòng trước hoàn thành mới chạy tiếp.
* Ví dụ: `setTimeout`, `fetch`, đọc file, API call...

```js
console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000);
console.log("3");
// In ra: 1, 3, 2 (vì dòng 2 chạy sau 1s)
```

#### 3. Callback và Callback Hell

##### a. Callback là gì?

* Là **hàm được truyền vào một hàm khác** và sẽ được gọi lại sau khi tác vụ xong.

```js
function sayHello(name, callback) {
  console.log("Xin chào " + name);
  callback();
}

sayHello("Hoàng", () => {
  console.log("Đây là callback!");
});
```

##### b. Callback Hell là gì?

* Khi các hàm callback lồng nhau quá nhiều gây khó đọc, khó bảo trì.

```js
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);
```

⛔ Khó đọc và dễ gây lỗi → Giải pháp: **Promise** và **Async/Await**

#### 4. Promise

##### a. Promise là gì?

Là một **đối tượng đại diện cho kết quả** của một tác vụ bất đồng bộ trong tương lai.

Một **Promise** giống như **lời hứa**:

* **"Tôi hứa sẽ làm xong việc này trong tương lai."**

##### b. Trạng thái của Promise

* `pending` (đang chờ)
* `fulfilled` (hoàn thành)
* `rejected` (thất bại)

##### c. Cách tạo Promise

```js
const myPromise = new Promise((resolve, reject) => {
  // Logic...
  const success = true;
  if (success) {
    // Gọi khi xử lý thành công
    resolve("Thành công!");
  } else {
    // Gọi khi xử lý thất bại
    reject("Thất bại!");
  }
});

// Xử lý kết quả bằng .then(), .catch()
myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
```

##### d. Ví dụ bất đồng bộ

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log("Đợi 1 giây xong rồi!"));
```

#### 5. Async / Await

##### a. Async là gì?

* Đặt trước hàm → tự động trả về Promise

##### b. Await là gì?

* Dùng bên trong hàm `async` để **chờ kết quả** Promise trả về

##### c. Ví dụ

```js
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Bắt đầu...");
  await delay(1000);
  console.log("Sau 1 giây");
}

run();
```

##### d. Ưu điểm

* Viết code **gần giống đồng bộ**, **dễ đọc hơn** Promise chaining hoặc callback hell.

#### 6. So sánh Callback vs Promise vs Async/Await

| Tiêu chí             | Callback                 | Promise            | Async/Await                 |
| -------------------- | ------------------------ | ------------------ | --------------------------- |
| Code dễ đọc          | ❌ Dễ thành callback hell | ✅ Tốt hơn callback | ✅✅ Gần như đồng bộ, dễ hiểu |
| Bắt lỗi              | ❌ Khó                    | ✅ .catch()         | ✅ try/catch                 |
| Khả năng tái sử dụng | ❌ Khó                    | ✅ Dễ dùng lại      | ✅ Tốt                       |

---

### II. FETCH API

#### 1. API là gì?

##### a. Định nghĩa

* **API** (Application Programming Interface) là giao diện trung gian cho phép **frontend (JS)** giao tiếp với **server (backend)**.
* Trong lập trình web, API thường dùng để **lấy dữ liệu từ server** hoặc **gửi dữ liệu từ client lên server**.

##### b. Ví dụ

* Lấy danh sách người dùng từ một API:

  ```
  GET https://example.com/api/users
  ```
* Gửi form đăng ký:

  ```
  POST https://example.com/api/register
  ```

#### 2. Query Parameters (Tham số truy vấn)

##### a. Khái niệm

* Query params là phần sau dấu `?` trong URL để truyền dữ liệu (dùng với `GET`).
* Mỗi cặp key=value được nối bằng `&`.

##### b. Ví dụ

```
https://example.com/api/users?page=2&limit=5
```

Trong đó:

* `page=2`: yêu cầu trang số 2
* `limit=5`: mỗi trang có 5 kết quả

##### c. Cách tạo query string trong JS

```js
const page = 2;
const limit = 5;
const url = `https://example.com/api/users?page=${page}&limit=${limit}`;
```

#### 3. Request Body (Dữ liệu gửi lên server)

##### a. Chỉ dùng trong các phương thức như `POST`, `PUT`, `PATCH`

* Gửi dữ liệu như `email`, `password`, `form`...
* Dạng phổ biến nhất là **JSON**

##### b. Ví dụ body JSON

```js
const data = {
  name: "Chinh",
  email: "hvchinh@gmail.com",
};
const jsonData = JSON.stringify(data);
```

##### c. Header quan trọng

```js
headers: {
  "Content-Type": "application/json"
}
```

#### 4. Fetch API

##### a. Fetch là gì?

* `fetch()` là hàm **bất đồng bộ** trong JS dùng để **gửi request đến API** và **nhận phản hồi (response)**.
* Hỗ trợ các phương thức: `GET`, `POST`, `PUT`, `DELETE`,...

##### b. Cấu trúc cơ bản (GET)

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) // chuyển response thành JSON
  .then((data) => console.log(data))
  .catch((error) => console.error("Lỗi:", error));
```

##### c. Gửi POST request với body

```js
const newPost = {
  title: "Bài viết mới",
  body: "Nội dung bài viết",
  userId: 1
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newPost)
})
  .then((response) => response.json())
  .then((data) => console.log("Phản hồi:", data))
  .catch((error) => console.error("Lỗi:", error));
```

##### d. Dùng với async/await

```js
async function createPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: "Test", body: "Hello", userId: 2 })
  });
  const data = await response.json();
  console.log("Đã tạo:", data);
}

createPost();
```

#### 5. So sánh phương thức HTTP

| Phương thức | Mục đích           | Gửi dữ liệu | Ghi vào body |
| ----------- | ------------------ | ----------- | ------------ |
| GET         | Lấy dữ liệu        | Có (query)  | ❌            |
| POST        | Tạo mới            | ✅           | ✅            |
| PUT         | Cập nhật toàn phần | ✅           | ✅            |
| PATCH       | Cập nhật một phần  | ✅           | ✅            |
| DELETE      | Xóa                | Có thể có   | ✅/❌          |

---

### III. REST API

#### 1. REST API là gì?

##### a. REST là gì?

* **REST** (Representational State Transfer) là một kiểu kiến trúc thiết kế API phổ biến nhất hiện nay.
* REST API cho phép **giao tiếp giữa client và server** thông qua **HTTP request**.

##### b. Nguyên tắc hoạt động

* Mỗi "tài nguyên" (resource) được truy cập qua **URL**
* Sử dụng các phương thức HTTP tiêu chuẩn: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
* Dữ liệu thường được truyền ở dạng **JSON**

#### 2. Các thao tác CRUD trong REST API

##### a. CRUD là gì?

* CRUD = Create, Read, Update, Delete (Tạo - Đọc - Cập nhật - Xóa)
* Tương ứng với các HTTP methods:

| Thao tác | HTTP Method | Mô tả                                | Ví dụ Endpoint                       |
| -------- | ----------- | ------------------------------------ | ------------------------------------ |
| Create   | POST        | Tạo mới một tài nguyên               | `POST /users`                        |
| Read     | GET         | Lấy dữ liệu của tài nguyên           | `GET /users` hoặc `GET /users/1`     |
| Update   | PUT/PATCH   | Cập nhật toàn phần/1 phần tài nguyên | `PUT /users/1` hoặc `PATCH /users/1` |
| Delete   | DELETE      | Xóa tài nguyên                       | `DELETE /users/1`                    |

#### 3. Cấu trúc URL RESTful

##### a. URL là duy nhất cho mỗi loại tài nguyên

Ví dụ tài nguyên **users**:

* Lấy tất cả user: `GET /users`
* Lấy 1 user: `GET /users/:id`
* Tạo user: `POST /users`
* Sửa user: `PUT /users/:id`
* Xóa user: `DELETE /users/:id`

##### b. Không dùng động từ trong URL

Sai: `/getUser`, `/deleteUser/1`
Đúng: `/users`, `/users/1`


#### 4. Ví dụ thực tế (Fake REST API)

Sử dụng [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

```js
// GET: lấy danh sách bài viết
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((data) => console.log("Danh sách bài viết:", data));

// POST: tạo bài viết mới
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "Bài viết mới",
    body: "Nội dung...",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Đã tạo:", data));
```

#### 5. RESTful vs REST API

| REST API                                           | RESTful API                              |
| -------------------------------------------------- | ---------------------------------------- |
| API tuân theo nguyên tắc REST                      | Cách triển khai API đúng theo chuẩn REST |
| Có thể vẫn gọi là REST API dù chưa hoàn toàn chuẩn | Phải đúng hoàn toàn kiến trúc REST       |

#### 6. Ưu điểm của REST API

* Dễ hiểu, phổ biến
* Tách biệt rõ frontend và backend
* Dễ mở rộng và tích hợp
* Hỗ trợ bởi mọi ngôn ngữ và framework

---

### IV. POSTMAN

#### 1. Postman là gì?

##### a. Khái niệm

* **Postman** là một công cụ (app) giúp **kiểm thử và tương tác với các API** dễ dàng mà **không cần code**.
* Hữu ích cho cả frontend và backend để **test API trước khi tích hợp vào project**.

##### b. Tính năng chính

* Gửi request các phương thức: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`
* Gửi **params**, **headers**, **body**
* Xem rõ ràng **response**, **status code**, **headers**
* Tạo **collection** (tập hợp các request) để tổ chức và dùng lại
* Tự động hóa kiểm thử API

#### 2. Cài đặt Postman

##### a. Cách tải

* Truy cập: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
* Chọn hệ điều hành → Tải về → Cài đặt

##### b. Hoặc dùng bản web:

* [https://web.postman.co/](https://web.postman.co/)

#### 3. Giao diện cơ bản

| Thành phần | Mô tả                                                           |
| ---------- | --------------------------------------------------------------- |
| URL bar    | Nhập URL của API                                                |
| Method     | Chọn phương thức (`GET`, `POST`,...)                            |
| Params     | Nhập Query Params (sẽ nối vào URL)                              |
| Headers    | Thêm các header cần thiết (như `Content-Type`)                  |
| Body       | Nhập dữ liệu gửi lên (JSON, form-data, text...)                 |
| Send       | Gửi request                                                     |
| Response   | Xem phản hồi từ server: status code, dữ liệu trả về, headers... |

#### 4. Ví dụ dùng Postman với REST API

##### a. Gửi GET request

* URL: `https://jsonplaceholder.typicode.com/posts`
* Method: `GET`
* Bấm **Send**
* Kết quả: Danh sách các bài viết ở phần Body → JSON

##### b. Gửi POST request

* URL: `https://jsonplaceholder.typicode.com/posts`
* Method: `POST`
* Chọn tab **Body** → `raw` → chọn định dạng `JSON`
* Dán nội dung:

```json
{
  "title": "Bài viết từ Postman",
  "body": "Đây là nội dung",
  "userId": 1
}
```

* Bấm **Send**
* Response sẽ hiển thị bài viết mới được tạo giả lập

#### 5. Sử dụng Headers và Params

##### a. Headers thường dùng

| Header        | Giá trị                  | Mục đích                     |
| ------------- | ------------------------ | ---------------------------- |
| Content-Type  | application/json         | Khai báo dữ liệu gửi là JSON |
| Authorization | Bearer token... (nếu có) | Xác thực (nếu API yêu cầu)   |

##### b. Params

* Trong tab **Params**:

  * Key: `page` → Value: `2`
  * Key: `limit` → Value: `10`
* Tự động thêm vào URL: `?page=2&limit=10`

#### 6. Lợi ích khi dùng Postman

| Lợi ích                        | Mô tả                                         |
| ------------------------------ | --------------------------------------------- |
| Test nhanh API                 | Không cần viết code → thao tác bằng giao diện |
| Debug dễ dàng                  | Xem rõ phản hồi, lỗi, headers                 |
| Làm việc nhóm hiệu quả         | Chia sẻ collection cho team                   |
| Tiết kiệm thời gian phát triển | Kiểm tra API trước khi frontend code thực tế  |

#### 7. So sánh Postman và Fetch

| Tiêu chí          | Postman (App)      | Fetch (JavaScript)             |
| ----------------- | ------------------ | ------------------------------ |
| Mục đích chính    | Test, kiểm thử API | Gọi API trong ứng dụng thực tế |
| Dùng có cần code? | ❌ Không cần        | ✅ Cần viết code                |
| Học API dễ hơn    | ✅ Rất trực quan    | ❌ Phải biết JS                 |

---
---

## B. STORAGE

### I. Storing Data

#### 1. Tổng quan về lưu trữ dữ liệu trong trình duyệt

##### a. Tại sao cần lưu dữ liệu?

* Giữ lại thông tin người dùng (ví dụ: đăng nhập, giỏ hàng,...)
* Không cần gọi lại API mỗi lần reload
* Tránh mất dữ liệu khi người dùng tắt tab

##### b. Có 3 cách phổ biến để lưu trữ trong trình duyệt:

* **Cookie**
* **Local Storage**
* **Session Storage**

#### 2. Cookie

##### a. Cookie là gì?

* Là **dữ liệu nhỏ** (tối đa \~4KB) được trình duyệt lưu và **gửi kèm theo mỗi HTTP request**.
* Dùng phổ biến để:

  * Ghi nhớ đăng nhập
  * Theo dõi hành vi người dùng
  * Xác thực người dùng với server

##### b. Tạo cookie bằng JS

```js
// Tạo cookie tên "username" giá trị "Hoang" có hiệu lực 1 ngày
document.cookie = "username=Hoang; max-age=86400; path=/";
```

##### c. Đọc cookie

```js
console.log(document.cookie); // "username=Hoang"
```

##### d. Xóa cookie

```js
document.cookie = "username=; max-age=0";
```

##### e. Nhược điểm

* Giới hạn dung lượng (\~4KB)
* Bảo mật không cao (dễ bị đánh cắp)
* Gửi theo mọi request → tăng tải mạng

#### 3. Local Storage

##### a. Local Storage là gì?

* API của trình duyệt cho phép lưu dữ liệu **lâu dài** (không mất khi reload hoặc tắt trình duyệt).
* Dung lượng khoảng **5-10MB**
* Dữ liệu **chỉ lưu dưới dạng chuỗi (string)**

##### b. Cách sử dụng

```js
// Lưu dữ liệu
localStorage.setItem("name", "Hoàng");

// Lấy dữ liệu
const name = localStorage.getItem("name");
console.log(name); // "Hoàng"

// Xóa một item
localStorage.removeItem("name");

// Xóa toàn bộ
localStorage.clear();
```

##### c. Lưu Object (dùng JSON)

```js
const user = { name: "Hoàng", age: 20 };
localStorage.setItem("user", JSON.stringify(user));

const stored = JSON.parse(localStorage.getItem("user"));
console.log(stored.name); // "Hoàng"
```

#### 4. Session Storage

##### a. Session Storage là gì?

* Cũng giống `localStorage` nhưng chỉ **lưu tạm trong phiên làm việc (session)**.
* Mất dữ liệu khi **đóng tab** hoặc **trình duyệt**.

##### b. Cách sử dụng giống hệt Local Storage

```js
sessionStorage.setItem("temp", "12345");
console.log(sessionStorage.getItem("temp")); // "12345"
sessionStorage.removeItem("temp");
```

#### 5. So sánh Cookie vs Local Storage vs Session Storage

| Tiêu chí           | Cookie                 | Local Storage         | Session Storage     |
| ------------------ | ---------------------- | --------------------- | ------------------- |
| Dung lượng         | \~4KB                  | \~5–10MB              | \~5MB               |
| Thời gian tồn tại  | Có thể set thời hạn    | Vĩnh viễn đến khi xóa | Tồn tại khi còn tab |
| Gửi theo HTTP      | ✅ Có gửi trong request | ❌ Không               | ❌ Không             |
| Dùng lưu đăng nhập | ✅ Phổ biến             | ⚠️ Cẩn thận bảo mật    | ❌ Không an toàn     |
| Truy cập từ JS     | ✅                      | ✅                     | ✅                   |

---

### II. Token (Access Token, Refresh Token)

#### 1. Token là gì?

##### a. Định nghĩa

* **Token** là một chuỗi ký tự được tạo ra bởi server (thường là dạng **JWT**) dùng để:

  * **Xác thực** người dùng (authentication)
  * **Ủy quyền** truy cập tài nguyên (authorization)

##### b. Ưu điểm

* Stateless (không cần lưu session trên server)
* Dễ tích hợp cho API RESTful, mobile app, SPA

##### c. Dạng phổ biến nhất: **JWT (JSON Web Token)**

Ví dụ:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6...
```

#### 2. Access Token

##### a. Là gì?

* **Access Token** là token dùng để xác thực người dùng trong một **khoảng thời gian ngắn** (thường vài phút đến 1 giờ).

##### b. Đặc điểm

* Được gửi kèm mỗi lần gọi API cần xác thực
* Hết hạn nhanh để giảm rủi ro bảo mật

##### c. Cách sử dụng (JS + Fetch)

```js
const token = "access-token-abc123";

fetch("https://api.example.com/user", {
  headers: {
    Authorization: `Bearer ${token}`
  }
})
  .then((res) => res.json())
  .then((data) => console.log(data));
```

#### 3. Refresh Token

##### a. Là gì?

* **Refresh Token** là token có thời gian sống **dài hơn Access Token** (có thể là vài ngày hoặc vài tuần).
* Dùng để **yêu cầu cấp lại Access Token mới** mà không cần đăng nhập lại.

##### b. Quy trình sử dụng

1. Người dùng đăng nhập → nhận **Access Token + Refresh Token**
2. Access Token hết hạn → gửi **Refresh Token** đến server
3. Server xác thực và gửi lại Access Token mới
4. Người dùng tiếp tục sử dụng Access Token mới

##### c. Ví dụ (giả lập logic)

```js
async function refreshAccessToken(refreshToken) {
  const res = await fetch("https://api.example.com/token/refresh", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken }),
  });
  const data = await res.json();
  return data.accessToken;
}
```

#### 4. Lưu token ở đâu?

| Nơi lưu               | Ưu điểm                         | Nhược điểm                                   |
| --------------------- | ------------------------------- | -------------------------------------------- |
| **localStorage**      | Dễ dùng, đơn giản               | ❌ Dễ bị XSS nếu trang web không an toàn      |
| **sessionStorage**    | Dữ liệu biến mất khi tắt tab    | ❌ Không dùng được cho “ghi nhớ đăng nhập”    |
| **Cookie (HttpOnly)** | Bảo mật hơn với `HttpOnly` flag | ⚠️ Cần backend set, không truy cập được từ JS |

✅ **Best Practice (bảo mật cao)**:

* **Access Token**: lưu ở **RAM hoặc sessionStorage**
* **Refresh Token**: lưu ở **HttpOnly Cookie**

#### 5. Minh họa luồng sử dụng Token

```text
[Login] → Server trả Access + Refresh Token
      ↓
[Gọi API] → Gửi Access Token
      ↓
[Token hết hạn?] → Gửi Refresh Token để lấy Access mới
```

---
