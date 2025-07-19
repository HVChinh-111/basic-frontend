# Buổi 1: Cơ bản về web - html

## A. Cơ bản về web

### I. Các thuật ngữ, lĩnh vực trong web

#### 1. Domain (Tên miền)

##### a. Định nghĩa

Domain là **tên định danh của website** trên internet. Nó thay thế cho địa chỉ IP vốn rất khó nhớ.

Ví dụ: thay vì nhớ `142.250.190.4`, chỉ cần nhớ `www.google.com`.

##### b. Cấu trúc tên miền

Tên miền thường gồm:

* Tên chính (ví dụ: `google`, `facebook`)
* TLD (Top-Level Domain – phần đuôi): `.com`, `.vn`, `.org`,...

| Tên miền      | Tên       | TLD    |
| ------------- | --------- | ------ |
| google.com    | google    | .com   |
| wikipedia.org | wikipedia | .org   |
| amazon.co.uk  | amazon    | .co.uk |

##### c. Phân loại TLD

**Generic TLD (gTLD):** dùng toàn cầu

| TLD                            | Ý nghĩa                 |
| ------------------------------ | ----------------------- |
| `.com`                         | Commercial – thương mại |
| `.org`                         | Organization – tổ chức  |
| `.net`                         | Network – mạng lưới     |
| `.info`                        | Information – thông tin |
| `.xyz`, `.online`, `.tech`,... | Các TLD mới             |

**Country-code TLD (ccTLD):** theo quốc gia

| TLD | Quốc gia |
| --- | -------- |
| .vn | Việt Nam |
| .us | Hoa Kỳ   |
| .jp | Nhật Bản |
| .kr | Hàn Quốc |

**Sponsored TLD (sTLD):** theo tổ chức

| TLD  | Tổ chức đặc biệt |
| ---- | ---------------- |
| .edu | Giáo dục         |
| .gov | Chính phủ        |
| .mil | Quân đội Hoa Kỳ  |

---

#### 2. URL (Uniform Resource Locator)

##### a. Định nghĩa

URL là **địa chỉ đầy đủ của tài nguyên trên web**, bao gồm giao thức, tên miền, đường dẫn, tham số,...

Ví dụ:

```
https://www.example.com:443/products?id=123#reviews
```

##### b. Cấu trúc URL

| Thành phần        | Ý nghĩa                                  |
| ----------------- | ---------------------------------------- |
| `https`           | Giao thức truyền dữ liệu (bảo mật)       |
| `www.example.com` | Domain – tên miền                        |
| `:443`            | Cổng truyền dữ liệu (mặc định với HTTPS) |
| `/products`       | Đường dẫn đến tài nguyên                 |
| `?id=123`         | Query string – tham số gửi lên server    |
| `#reviews`        | Anchor – phần đánh dấu trong trang       |

##### c. Ứng dụng

* Cho phép xác định chính xác nội dung cần truy cập
* Có thể thay đổi tham số để tải dữ liệu khác (như tìm kiếm sản phẩm, lọc,...)

---
#### 3. Hosting

##### a. Định nghĩa

Hosting là dịch vụ cho thuê **không gian trên máy chủ (server)** để lưu trữ mã nguồn website, hình ảnh, dữ liệu,... và cho phép truy cập từ Internet.

##### b. Phân loại hosting

| Loại hosting          | Đặc điểm chính                                    | Phù hợp với                |
| --------------------- | ------------------------------------------------- | -------------------------- |
| Shared Hosting        | Nhiều web dùng chung server → rẻ, giới hạn        | Web nhỏ, blog cá nhân      |
| VPS Hosting           | Máy chủ ảo, cấu hình riêng, ổn định hơn           | Backend app, web vừa       |
| Cloud Hosting         | Phân tán trên nhiều server → chịu tải cao         | Web vừa – lớn              |
| Dedicated Server      | Thuê nguyên server vật lý → mạnh, giá cao         | Hệ thống lớn, doanh nghiệp |
| Serverless / Jamstack | Không cần quản lý server, dùng dịch vụ trung gian | Web tĩnh, frontend         |

##### c. Một số nền tảng hosting miễn phí cho sinh viên học web
| Nền tảng         | Dành cho                   | Hỗ trợ                     |
| ---------------- | -------------------------- | -------------------------- |
| GitHub Pages     | Website tĩnh               | HTML, CSS, JS tĩnh         |
| Netlify          | Frontend web               | Tự động deploy từ Git      |
| Vercel           | Fullstack (Next.js)        | SSR, Edge functions        |
| Render / Railway | Backend (Node.js, Java...) | Dễ deploy backend miễn phí |

##### d. Cách hoạt động

1. Upload source code lên hosting qua Git, FTP, giao diện quản lý.
2. Hosting gán một địa chỉ (domain hoặc IP) cho website.
3. Khi người dùng truy cập → hosting nhận request → trả về trang web.

#### 4. IP Address

##### a. Định nghĩa

IP (Internet Protocol Address) là **địa chỉ số định danh thiết bị trên mạng**. Giống như số nhà, IP cho phép các thiết bị định vị và giao tiếp qua Internet.

##### b. Phân loại

| Loại IP | Định dạng     | Ghi chú                            |
| ------- | ------------- | ---------------------------------- |
| IPv4    | `192.168.1.1` | Dạng phổ biến, giới hạn số lượng   |
| IPv6    | `2001:db8::1` | Dài hơn, hỗ trợ nhiều thiết bị hơn |

##### c. Ứng dụng

* Trình duyệt sẽ dùng **IP thật** của server để kết nối.
* IP được **DNS dịch ra từ domain**.
  Ví dụ: `facebook.com` → DNS trả IP `157.240.229.35`

---

#### 5. DNS (Domain Name System)

##### a. Định nghĩa

DNS là **hệ thống phân giải tên miền thành địa chỉ IP**. Trình duyệt không hiểu `youtube.com`, nó cần IP cụ thể để truy cập → DNS giúp làm điều đó.

##### b. Cách hoạt động

1. Nhập domain vào trình duyệt
2. Trình duyệt hỏi DNS: “Tên miền này ứng với IP nào?”
3. DNS trả về IP → trình duyệt dùng IP đó để tải website

##### c. Ý nghĩa

* DNS giúp con người dễ nhớ website
* Thay đổi IP hosting nhưng vẫn giữ domain
* Nền tảng quan trọng để website hoạt động

---

#### 6. Server

##### a. Định nghĩa

Server là **máy chủ**, là nơi **lưu trữ và xử lý** các yêu cầu từ client (như trình duyệt của người dùng).
Khi bạn truy cập vào một trang web, **trình duyệt gửi yêu cầu đến server**, và server sẽ **phản hồi lại dữ liệu** (HTML, ảnh, video, JSON,...).

📌 Nếu website là một nhà hàng, thì server chính là **bếp** – nơi nhận đơn gọi món (request) từ khách và mang món ăn (dữ liệu) ra.

##### b. Vai trò của server trong hoạt động web

* **Nhận request** từ client (thường là qua giao thức HTTP/HTTPS)
* **Xử lý dữ liệu**, gọi cơ sở dữ liệu nếu cần
* **Trả lại kết quả** (HTML, JSON, hình ảnh...) về cho trình duyệt

📌 Ví dụ thực tế:

* Trình duyệt gõ: `https://myshop.com/products`
* Server nhận request `/products`
* Server truy vấn dữ liệu sản phẩm từ cơ sở dữ liệu
* Trả về HTML hiển thị danh sách sản phẩm

##### c. Cách hoạt động đơn giản của một server web

1. Trình duyệt gửi request HTTP/HTTPS đến server
2. Server phân tích đường dẫn và dữ liệu yêu cầu
3. Nếu cần, server truy cập vào cơ sở dữ liệu
4. Server xây dựng nội dung phản hồi (HTML hoặc JSON)
5. Trình duyệt nhận response và hiển thị kết quả

##### d. Các loại server trong phát triển web

| Loại server        | Chức năng chính                           | Ví dụ cụ thể                  |
| ------------------ | ----------------------------------------- | ----------------------------- |
| Web server         | Nhận HTTP request và trả dữ liệu web      | Apache, Nginx                 |
| Application server | Xử lý logic nghiệp vụ, giao tiếp với CSDL | Node.js, Express, Spring Boot |
| Database server    | Lưu trữ và truy vấn dữ liệu               | MySQL, PostgreSQL, MongoDB    |
| File server        | Quản lý và cung cấp tập tin               | FTP server, Google Drive API  |
| Mail server        | Gửi và nhận email                         | Gmail SMTP, Mailgun           |

##### e. Phân biệt giữa server vật lý và server ảo

| Kiểu server     | Đặc điểm                                         | Ví dụ sử dụng               |
| --------------- | ------------------------------------------------ | --------------------------- |
| Server vật lý   | Một máy tính thật, cấu hình mạnh                 | Thuê riêng tại data center  |
| Server ảo (VPS) | Máy ảo tạo ra trên 1 server vật lý               | Linode, DigitalOcean, Vultr |
| Cloud server    | Server hoạt động trên nền tảng điện toán đám mây | AWS, Google Cloud, Azure    |

##### f. Hosting có phải là server?

* **Server** là máy chủ (phần cứng hoặc phần mềm).
* **Hosting** là dịch vụ thuê server để lưu website.

📌 Nói cách khác:

> Hosting = thuê một phần server để chạy website của bạn
> Server = máy chủ thật, nơi vận hành toàn bộ dữ liệu web/app

---

#### 7. Các khái niệm quan trọng trong quy trình Mục II

##### a. Request & Response

* **Request**: là **yêu cầu** từ client đến server
* **Response**: là **phản hồi** của server về client

##### b. Status code

Mỗi phản hồi HTTP đều có mã trạng thái:

| Mã  | Ý nghĩa                    |
| --- | -------------------------- |
| 200 | OK – thành công            |
| 301 | Redirect – chuyển hướng    |
| 404 | Not Found – không tìm thấy |
| 500 | Server Error – lỗi server  |
---

### II. Cách thức hoạt động của một trang web

#### 1. Clients and servers
Các máy tính có kết nối với internet thì có thể được gọi là **clients** và **servers**. Dưới đây là một mô hình đơn giản để biểu diễn mối quan hệ của chúng:

![alt text](images/client-server.webp)

* **Clients** là các thiết bị có kết nối với internet được sử dụng để duyệt web (ví dụ: máy tính cá nhân có kết nối mạng, điện thoại được kết nối wifi, 3/4/5G) và các phần mềm trình duyệt web có sẳn trên các thiết bị đó (chrome, firefox, ...).
* **Servers** là các máy tính chứa webpages, sites hoặc apps. Khi máy client muốn truy cập vào webpage, một bản sao của webpage sẽ được tải về từ máy server xuống máy client để có thể hiển thị lên trên phần mềm trình duyệt web của người dùng.

#### 2. The other parts of the toolbox
Khái niệm về client và server được đề cập ở trên chưa thực sự nói lên được toàn bộ câu chuyện. Còn rất nhiều các thành phân liên quan nữa, và chúng ta sẽ cùng đề cập tới chúng trong phần tiếp theo đây.

Bây giờ hãy thử tưởng tượng, web giống như một con đường. Cuối con đường đó là client đại diện cho nhà của bạn. Đầu đường sẽ là server, sẽ là một cửa hàng mà bạn muốn tới để mua một số thứ gì đó.

![alt text](images/road.webp)

Trên đường đi từ nhà bạn (client) tới cửa hàng (server), chúng ta sẽ phải chào hỏi một số nhân vật nữa sau đây:

**Internet connection:** nó cho phép bạn có thể gửi và nhận giữ liệu qua lại trên web. Về cơ bản nó như đường ống nối từ nhà bạn (client) tới cửa hàng (server) để bạn vận chuyển hàng hoá qua lại.

**TCP/IP:** **Transmission Control Protocol** và **Internet Protocol** - Giao thức điều khiển truyền dẫn và giao thức kết nối internet. Chúng là những giao thức giao tiếp có thể quyết định được cách mà data của bạn được truyền tải dọc đường truyền internet. Điều này giống như cơ chế vận chuyển cho phép bạn đặt hàng, đến cửa hàng và mua hàng. Trong ví dụ của chúng tôi, nó giống như một chiếc ô tô hoặc một chiếc xe đạp (hoặc bất kỳ phương tiện nào khác mà bạn có thể di chuyển).

**DNS:** Domain Name System - Hệ thống tên miền, nó giống như một cuốn số địa chỉ các websites. Khi bạn gõ một địa chỉ website lên trên thanh trình duyệt, trình duyệt sẽ tìm trong DNS để tìm được địa chỉ IP của website trước, sau khi tìm được thì sẽ sẽ bắt đầu truy suất trang web đó. Trình duyệt sẽ cần phải tìm ra địa chỉ của máy server đang chứa trang web đó để nó có thể gửi HTTP message tới đúng nơi. Cơ bản giống như việc bạn phải tìm được đúng địa chỉ của cửa hàng mà bạn muốn mua sắm.

**HTTP:** Hypertext Transfer Protocol - Giao thức truyền siêu văn bản. Nó là một giao thức ứng dụng nhằm quy định ra một ngôn ngữ chung giữa client và server để chúng có thể dùng và giao tiếp với nhau. Tưởng tượng nó giống như một ngôn ngữ bạn dùng để có thể đặt được những món hàng mà bạn muốn mua ở cửa hàng.

**Component files:** Một website được tạo thành từ rất nhiều files khác nhau, những files này sẽ được chia thành 2 loại chính:
* Code files: Các trang web được xây dựng chủ yếu từ HTML, CSS và JavaScript, sau này có thể còn có nhiều các công nghệ khác.
* Assets: Đây là tên chung cho tất cả nội dung khác tạo nên trang web, chẳng hạn như hình ảnh, âm nhạc, video, tài liệu Word và PDF.

#### 3. So what happens, exactly?
Khi bạn gõ địa chỉ website lên trên thanh trình duyệt (tương đồng với việc bạn đang đi bộ tới cửa hàng):
1. Trình duyệt sẽ đi đến DNS server, tìm địa chỉ chính xác của cái server đang chứa website đó (tìm địa chỉ cửa hàng)
2. Trình duyệt sẽ gửi một HTTP request message tới server đó, yêu cầu máy server gửi về cho nó một bản copy của website đang muốn xem (bạn đi được tới cửa hàng và order hàng hoá muốn mua). Message gửi đi và tất cả các data được gửi qua lại giữa client và server nhờ internet connection sử dụng TCP/IP.
3. Lúc này nếu máy server chấp nhận request tới từ máy client, server sẽ gửi cho client một message "200 OK", nghĩa là "Okay nha, bạn có thể xem website này nha! Nó đây!", và tiếp theo đó server sẽ bắt đầu gửi về cho browser ở client các files của website, nó là một chuỗi các phần nhỏ được gọi là data packets (gói giữ liệu) (Lúc này cửa hàng chấp nhận đơn hàng và đưa hàng hoá cho bạn mang về nhà)
4. Trình duyệt sẽ tập hơn các file đó lại thành một website hoàn chỉnh và hiển thị lên cho bạn xem.

#### 4. Phân tích thứ tự và thành phần các files cấu thành nên website
Khi browsers gửi request đến server để yêu cầu được tải các HTML files, các HTML files đó thường chứa các thẻ `<link>` thường gắn các liên kết để tải các file css, ngoài ra còn có thẻ `<script>` gắn liên kết để tải thêm các file code javaScript khác. Việc hiểu được thứ tự parsing (phân tích cú pháp) của browser khi nó load một trang HTML là cực kỳ quan trọng:

* Browser sẽ phân tích cú pháp HTML trước nhất, như vậy thì browser mới có thể hiểu được thẻ như thẻ `<link>` hoặc thẻ `<script>` được gắn trên HTML
* Trong lúc đọc và phân tích HTML, khi đọc tới các thẻ `<link>`/`<script>`, browser sẽ gửi request ngược lại về phía server để tải tiếp các file css, javaScript được gắn kèm trong các thẻ đó để tiếp tục parsing (phân tích).
* Browser sẽ generates một cây DOM và lưu in-memory (vùng nhớ của browser) để lưu HTML sau khi phân tích, và một cấu trúc CSSOM (CSS Object Model) cũng được lưu in-memory dùng để chứa CSS sau khi phân tích, và sau cùng browser sẽ biên dịch và thực thi JavaScript.
* Sau khi làm xong các step trên, build cây DOM, apply stylesheet từ CSSOM và biên dịch, thực thi xong javaScript. Một website hoàn chỉnh sẽ được hiển thị lên trên browser cho người dùng thưởng thức.

---

#### 5. Chi tiết các bước

##### a. Trình duyệt phân tích URL

* Phân tách thành các phần: giao thức (`https`), domain (`example.com`), port (`443` nếu có), và đường dẫn (`/home`)
* Xác định cần dùng giao thức nào (HTTP hay HTTPS)

##### b. Truy vấn DNS

* Trình duyệt tra trong bộ nhớ cache
* Nếu không có, gửi truy vấn đến DNS resolver
* Nhận về địa chỉ IP tương ứng với tên miền (ví dụ: `203.113.128.1`)

##### c. Kết nối đến server

* Dùng giao thức TCP qua cổng 80 (HTTP) hoặc 443 (HTTPS)
* Nếu là HTTPS → khởi động thêm quá trình **SSL handshake** để đảm bảo mã hóa

##### d. Gửi HTTP request

Trình duyệt gửi yêu cầu đến server, ví dụ:

```
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Chrome
```

##### e. Server xử lý

* Server phân tích đường dẫn `/index.html`
* Có thể gọi thêm file, ảnh, hoặc truy vấn CSDL
* Trả về phản hồi HTTP, ví dụ:

```
HTTP/1.1 200 OK
Content-Type: text/html

<html>
  <body>Hello World!</body>
</html>
```

##### f. Trình duyệt phân tích phản hồi

* **HTML**: được parse thành cây DOM
* **CSS**: được load và áp dụng vào DOM
* **JS**: được tải và thực thi
* Tạo ra giao diện hoàn chỉnh hiển thị cho người dùng

##### g. Ví dụ thực tế: người dùng vào `shopee.vn`

1. Gõ `shopee.vn` → trình duyệt gọi DNS tìm IP của server Shopee
2. Kết nối IP → gửi request lấy nội dung trang chủ
3. Server xử lý và trả về HTML/CSS/JS
4. Trình duyệt hiển thị sản phẩm, hình ảnh, banner, v.v.
5. Người dùng bấm vào từng sản phẩm → tiếp tục gửi request mới

---

## B. HTML

### I. Giới thiệu, Cấu trúc HTML

#### 1. Khái niệm HTML

##### a. HTML là gì?

HTML (HyperText Markup Language) là **ngôn ngữ đánh dấu** dùng để xây dựng cấu trúc của một trang web.
Nó giúp trình duyệt hiểu được **nội dung và bố cục** của một tài liệu web như: đoạn văn, tiêu đề, hình ảnh, liên kết,...

##### b. Vai trò của HTML trong web

* **Xác định nội dung**: chữ, hình ảnh, nút, bảng, form,...
* **Tạo cấu trúc phân cấp**: như các khối nội dung, phần header, footer,...
* **Tương tác với CSS và JavaScript**

##### c. Ví dụ đơn giản

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Trang đầu tiên</title>
  </head>
  <body>
    <h1>Xin chào</h1>
    <p>Đây là đoạn văn.</p>
  </body>
</html>
```

---

#### 2. HTML và XHTML

##### a. HTML truyền thống

* **Dễ viết**, dễ học
* Trình duyệt **linh hoạt**, không bắt lỗi chặt
* Viết sai cấu trúc vẫn có thể chạy

##### b. XHTML (eXtensible HTML)

* Là phiên bản HTML có **cú pháp nghiêm ngặt** theo chuẩn XML
* **Yêu cầu đóng tất cả thẻ** rõ ràng
* Cần viết đúng thứ tự và cú pháp

##### c. So sánh HTML và XHTML

| Tiêu chí          | HTML          | XHTML                   |
| ----------------- | ------------- | ----------------------- |
| Cú pháp           | Dễ tính       | Nghiêm ngặt (theo XML)  |
| Thẻ tự đóng       | Có thể bỏ qua | Phải viết đầy đủ        |
| Trình duyệt xử lý | Linh hoạt     | Bắt lỗi chặt            |
| Mục tiêu          | Dành cho web  | Dễ tích hợp XML systems |

---

#### 3. Cấu trúc tài liệu HTML

##### a. `<!DOCTYPE>`

Khai báo loại tài liệu – giúp trình duyệt **hiểu đây là HTML5**

```html
<!DOCTYPE html>
```

##### b. Thẻ `<html>`

Là phần **gốc bao ngoài toàn bộ tài liệu HTML**

```html
<html lang="vi">
  ...
</html>
```

##### c. Thẻ `<head>`

Chứa các **thông tin cấu hình** cho trang: tiêu đề, charset, liên kết CSS, favicon,...

```html
<head>
  <meta charset="UTF-8" />  
  <title>Hoàng Văn Chính</title>
  <link rel="icon" href="/icons/LogoProPTIT.png" type="image/png" />   
  <meta name="description" content="Giới thiệu Hoàng Văn Chính" />
  <meta name="keyword" content="Hoàng Văn Chính, Chính, giới thiệu" />
  <meta name="author" content="Hoàng Văn Chính" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

##### d. Thẻ `<body>`

Chứa **nội dung hiển thị**: văn bản, hình ảnh, video, liên kết, bảng,...

```html
<body>
  <h1>Hoàng Văn Chính</h1>
  <p>Ngày sinh: 01/11/2005</p>
</body>
```

---

#### 4. Khái niệm: Element, Attribute, Comment

##### a. Element (Phần tử)

* Là **khối cấu trúc cơ bản** trong HTML
* Thường gồm: thẻ mở, nội dung, thẻ đóng

```html
<p>Nội dung</p>
```

##### b. Attribute (Thuộc tính)

* Dùng để **bổ sung thông tin** cho thẻ
* Có dạng: `tên="giá trị"`

```html
<img src="logo.png" alt="Logo">
```
* Ngoài ra còn có Boolean Attribute (Thuộc tính logic):

```html
<audio controls>
  ...
</audio>
```

##### c. Comment (Chú thích)

* Không hiển thị trên trình duyệt
* Dùng để ghi chú trong mã HTML

```html
<!-- Đây là phần comment -->
```

---

#### 5. Thẻ meta

##### Tổng quan về thẻ `<meta>`

* Thẻ `<meta>` nằm trong phần `<head>` của tài liệu HTML
* Dùng để cung cấp **thông tin (metadata)** về tài liệu HTML cho **trình duyệt, công cụ tìm kiếm, mạng xã hội,...**
* Không hiển thị trực tiếp ra trang web

##### 5.1. **Thẻ meta về mã hóa ký tự (charset)**

###### a. Đặt bảng mã cho trang HTML

```html
<meta charset="UTF-8">
```

* **UTF-8**: Hỗ trợ đa ngôn ngữ, bao gồm tiếng Việt
* Nên được đặt **ngay đầu `<head>`** để tránh lỗi font

##### 5.2. **Thẻ meta viewport (thiết bị di động)**

###### a. Giúp trang web hiển thị đúng kích thước trên điện thoại

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* `width=device-width`: trang web rộng bằng thiết bị
* `initial-scale=1.0`: mức zoom ban đầu

##### 5.3. **Thẻ meta mô tả SEO (Search Engine Optimization)**

###### a. Mô tả nội dung trang

```html
<meta name="description" content="Khóa học HTML cơ bản miễn phí cho người mới.">
```

###### b. Từ khóa liên quan đến trang (ít còn dùng, Google bỏ qua)

```html
<meta name="keywords" content="HTML, học web, lập trình frontend">
```

###### c. Tác giả trang web

```html
<meta name="author" content="Hoàng Văn Chính">
```

##### 5.4. **Thẻ meta kiểm soát hiển thị trình duyệt**

###### a. Tự động tải lại trang sau X giây

```html
<meta http-equiv="refresh" content="5">
```

###### b. Chuyển hướng sau X giây

```html
<meta http-equiv="refresh" content="5; url=https://example.com">
```

##### 5.5. **Thẻ meta mạng xã hội (Open Graph – Facebook, Twitter, Zalo...)**

###### a. Tiêu đề khi chia sẻ lên mạng xã hội

```html
<meta property="og:title" content="Khóa học HTML cơ bản">
```

###### b. Mô tả khi chia sẻ

```html
<meta property="og:description" content="Hướng dẫn học HTML từ số 0.">
```

###### c. Ảnh đại diện khi chia sẻ

```html
<meta property="og:image" content="https://example.com/images/thumbnail.jpg">
```

###### d. Đường dẫn gốc

```html
<meta property="og:url" content="https://example.com/khoa-hoc-html">
```

###### e. Kiểu nội dung

```html
<meta property="og:type" content="website">
```

###### f. Twitter Card (hiển thị khi share lên Twitter)

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Khóa học HTML cơ bản">
<meta name="twitter:description" content="HTML cho người mới bắt đầu">
<meta name="twitter:image" content="https://example.com/og-img.jpg">
```

---

##### 6. **Meta robots (chỉ dẫn cho công cụ tìm kiếm)**

###### a. Cho phép index và follow link (mặc định)

```html
<meta name="robots" content="index, follow">
```

###### b. Cấm index và follow

```html
<meta name="robots" content="noindex, nofollow">
```

###### c. Chỉ cấm index

```html
<meta name="robots" content="noindex, follow">
```

---

#### 6. Thẻ Head (title, favicon, ...)

##### a. `<title>`

Tiêu đề trang, hiện trên tab trình duyệt và khi share link

```html
<title>Trang chủ</title>
```

##### b. `<link rel="icon" href="favicon.ico">`

Hiển thị icon nhỏ trên tab trình duyệt (favicon)

##### c. `<link rel="stylesheet" href="style.css">`

Kết nối CSS ngoài để định dạng trang

##### d. `<script src="main.js"></script>`

Kết nối file JavaScript ngoài để tạo tương tác

---

#### 7. Thẻ Body

##### a. Vai trò

Chứa tất cả **nội dung hiển thị** cho người dùng:

* Văn bản
* Tiêu đề
* Danh sách
* Hình ảnh
* Video
* Liên kết
* Form...

##### b. Ví dụ nội dung trong body

```html
<body>
  <h1>Giới thiệu</h1>
  <p>Chúng tôi là đội ngũ phát triển web.</p>
  <img src="team.jpg" alt="Đội ngũ">
  <a href="/contact">Liên hệ</a>
</body>
```

---

Dưới đây là phần trình bày chi tiết cho:

### II. Các thẻ HTML cơ bản

#### 1. Các thẻ văn bản: `h1–h6`, `p`, `br`, `hr`, text formatting

##### a. Thẻ tiêu đề: `h1` đến `h6`

* Dùng để đánh dấu tiêu đề với mức độ quan trọng giảm dần
* Một trang web nên và chỉ nên có duy nhất một thẻ `h1`

```html
<h1>Tiêu đề lớn nhất</h1>
<h2>Tiêu đề cấp 2</h2>
...
<h6>Tiêu đề nhỏ nhất</h6>
```

##### b. Thẻ đoạn văn: `p`

```html
<p>Đây là một đoạn văn.</p>
```

##### c. Xuống dòng: `br`

```html
<p>Dòng 1<br>Dòng 2</p>
```

##### d. Gạch ngang chia nội dung: `hr`

```html
<p>Nội dung phần đầu</p>
<hr>
<p>Nội dung phần sau</p>
```

##### e. Định dạng văn bản (text formatting)

| Thẻ        | Ý nghĩa                               | Ví dụ                               |
| ---------- | ------------------------------------- | ----------------------------------- |
| `<b>`      | In đậm (không mang nghĩa nhấn mạnh)   | `<b>Chữ đậm</b>`                    |
| `<strong>` | In đậm, nhấn mạnh quan trọng          | `<strong>Quan trọng</strong>`       |
| `<i>`      | In nghiêng (không nhấn mạnh)          | `<i>Chữ nghiêng</i>`                |
| `<em>`     | In nghiêng, nhấn mạnh bằng in nghiêng | `<em>Gạch chân</em>`                |
| `<u>`      | Gạch chân                             | `<u>Gạch chân</u>`                  |
| `<del>`    | Gạch xóa                              | `<del>Giá cũ</del>`                 |
| `<mark>`   | Đánh dấu (highlight)                  | `<mark>Quan trọng</mark>`           |
| `<sub>`    | Chỉ số dưới                           | `H<sub>2</sub>O`                    |
| `<sup>`    | Chỉ số trên                           | `X<sup>2</sup>`                     |
| `<small>`  | Văn bản nhỏ                           | `<small>Chữ nhỏ</small>`            |
| `<big>`    | Văn bản lớn                           | `<big>Chữ lớn</big>`                |
| `<code>`   | Đoạn mã code                          | `<code>console.log("Hello")</code>` |

---

#### 2. Thẻ liên kết & media

##### a. Thẻ liên kết: `a`

```html
<a href="https://example.com">Trang web</a>
<a href="#section1">Đi đến Section 1 (trong trang)</a>
<a href="mailto:abc@example.com">Gửi email</a>
```
* Ngoài ra thẻ liên kết còn có thể bọc thẻ `img` hay `video`

###### Các attributes thường dùng:
| Thuộc tính       | Ý nghĩa                                             | Giá trị ví dụ                              |
| ---------------- | --------------------------------------------------- | ------------------------------------------ |
| `href`           | Đường dẫn liên kết (bắt buộc)                       | `https://google.com`                       |
| `target`         | Mở liên kết ở đâu                                   | `_self`, `_blank`, `_parent`, `_top`       |
| `title`          | Hiển thị mô tả khi rê chuột                         | `"Xem trang Google"`                       |
| `rel`            | Mối quan hệ với trang được liên kết (SEO & bảo mật) | `"noopener"`, `"noreferrer"`, `"nofollow"` |
| `download`       | Tải file khi nhấn vào link                          | `"filename.pdf"`                           |
| `type`           | Kiểu nội dung được liên kết                         | `"application/pdf"`                        |
| `hreflang`       | Ngôn ngữ của trang đích                             | `"en"`, `"vi"`                             |
| `referrerpolicy` | Quy định cách gửi referrer                          | `"no-referrer"`                            |

##### b. Ảnh: `img`

```html
<img src="hinh.jpg" alt="Mô tả ảnh" width="300">
```
###### Các attributes thường dùng:
| Thuộc tính       | Bắt buộc? | Mô tả                                                                               | Ví dụ                           |
| ---------------- | --------- | ----------------------------------------------------------------------------------- | ------------------------------- |
| `src`            | ✅ Có      | Đường dẫn ảnh                                                                       | `src="images/pizza.jpg"`        |
| `alt`            | ✅ Có      | Văn bản thay thế khi ảnh lỗi hoặc dùng bởi trình đọc màn hình (SEO + accessibility) | `alt="Ảnh pizza"`               |
| `width`          | ❌         | Đặt chiều rộng ảnh (px hoặc %)                                                      | `width="200px"`                 |
| `height`         | ❌         | Đặt chiều cao ảnh                                                                   | `height="150px"`                |
| `title`          | ❌         | Gợi ý khi rê chuột vào ảnh                                                          | `title="Click để xem chi tiết"` |
| `loading`        | ❌         | Lazy loading ảnh (trì hoãn tải ảnh ngoài màn hình)                                  | `loading="lazy"`                |
| `decoding`       | ❌         | Cách giải mã ảnh: `auto`, `async`, `sync`                                           | `decoding="async"`              |
| `referrerpolicy` | ❌         | Chính sách gửi referrer                                                             | `referrerpolicy="no-referrer"`  |
| `crossorigin`    | ❌         | Cho phép chia sẻ tài nguyên (CORS)                                                  | `crossorigin="anonymous"`       |
| `usemap`         | ❌         | Gắn ảnh với bản đồ ảnh (image map)                                                  | `usemap="#map1"`                |
| `ismap`          | ❌         | Biến ảnh thành một bản đồ ảnh đơn giản khi nằm trong thẻ `<a>`                      | `ismap`                         |


##### c. Video: `video`

```html
<video width="400" controls>
  <source src="video.mp4" type="video/mp4">
  Trình duyệt không hỗ trợ video.
</video>
```
###### Các attributes thường dùng:
| Thuộc tính         | Mô tả                                                    | Ví dụ                     | Mặc định                             |
| ------------------ | -------------------------------------------------------- | ------------------------- | ------------------------------------ |
| `src`              | Đường dẫn tới video                                      | `src="movie.mp4"`         | Không bắt buộc nếu có thẻ `<source>` |
| `controls`         | Hiển thị thanh điều khiển (play, pause...)               | `controls`                | ❌ (mặc định ẩn)                      |
| `autoplay`         | Tự động phát video khi tải trang                         | `autoplay`                | ❌                                    |
| `muted`            | Tắt tiếng mặc định (thường dùng với `autoplay`)          | `muted`                   | ❌                                    |
| `loop`             | Phát lặp lại video sau khi kết thúc                      | `loop`                    | ❌                                    |
| `poster`           | Ảnh thumbnail hiển thị trước khi phát                    | `poster="thumbnail.jpg"`  | Không có ảnh                         |
| `preload`          | Chỉ định cách tải video (metadata, auto, none)           | `preload="metadata"`      | `auto`                               |
| `width` / `height` | Kích thước hiển thị video (px)                           | `width="640px"`           | Tùy trình duyệt                      |
| `crossorigin`      | Kiểm soát quyền truy cập tài nguyên video từ domain khác | `crossorigin="anonymous"` | Không CORS                           |

##### d. Audio: `audio`

```html
<audio controls>
  <source src="nhac.mp3" type="audio/mpeg">
</audio>
```
###### Các attributes thường dùng: tương tự `<video>`
##### e. Nhúng trang ngoài: `iframe`

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/2oCN2q1x3c4?si=hJJDEhtn-vKYGnAB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```
* Copy iframe trực tiếp từ share youtube hoặc gg map.

---

#### 3. HTML List: `ul`, `ol`, `li`

##### a. Danh sách không thứ tự: `ul`

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```
###### Các attributes thường dùng:
| Thuộc tính              | Mô tả                            | Giá trị ví dụ                    | Ghi chú                                                            |
| ----------------------- | -------------------------------- | -------------------------------- | ------------------------------------------------------------------ |
| `type` ✅ *(deprecated)* | Kiểu ký hiệu dấu đầu dòng        | `disc`, `circle`, `square`       | ❌ Không nên dùng trong HTML5 – dùng CSS `list-style-type` thay thế |
| `id`                    | Định danh duy nhất cho danh sách | `id="menu"`                      | Dùng để định danh phần tử                                          |
| `class`                 | Gán lớp CSS để tạo kiểu          | `class="nav-list"`               | Thường dùng trong CSS/JS                                           |
| `style`                 | CSS nội tuyến (inline style)     | `style="list-style-type: none;"` | Không khuyến khích nếu bạn đã dùng file CSS                        |
| `title`                 | Tooltip hiển thị khi rê chuột    | `title="Danh sách sản phẩm"`     | Tăng trải nghiệm người dùng                                        |


##### b. Danh sách có thứ tự: `ol`

```html
<ol>
  <li>Bước 1</li>
  <li>Bước 2</li>
</ol>
```
###### Các attributes thường dùng:
| Thuộc tính | Mô tả                    | Giá trị ví dụ                | Ghi chú                       |
| ---------- | ------------------------ | ---------------------------- | ----------------------------- |
| `type`     | Kiểu đánh số             | `1`, `a`, `A`, `i`, `I`      | ✅ Hợp lệ trong HTML5          |
| `start`    | Số thứ tự bắt đầu        | `start="5"`                  | Sẽ bắt đầu từ số 5, thay vì 1 |
| `title`    | Tooltip khi rê chuột     | `title="Danh sách các bước"` | Gợi ý nội dung                |
| `reversed` | Đảo ngược thứ tự đánh số | `reversed`                   | Đếm ngược: 5, 4, 3…           |

##### c. Danh sách lồng nhau

```html
<ol>
  <li>Ngôn ngữ lập trình
    <ul>
      <li>Python</li>
      <li>JavaScript</li>
    </ul>
  </li>
</ol>
```

---

#### 4. HTML Table

##### a. Thẻ liên quan

| Thẻ       | Vai trò            |
| --------- | ------------------ |
| `<table>` | Khởi tạo bảng      |
| `<thead>` | Phần đầu bảng      |
| `<tbody>` | Phần thân bảng     |
| `<tfoot>` | Phần chân bảng     |
| `<th>`    | Ô tiêu đề (in đậm) |
| `<td>`    | Ô dữ liệu          |
| `<tr>`    | Dòng trong bảng    |

##### b. Các attributes thường dùng:
| Thuộc tính | Mô tả          | Ghi chú       |                |
| ---------- | -------------- | ------------- | -------------- |
| `colspan`  | Gộp nhiều cột  | `colspan="2"` | ✔ Rất hay dùng |
| `rowspan`  | Gộp nhiều hàng | `rowspan="3"` | ✔ Hay dùng     |

##### c. Ví dụ:

```html
<table border="1px">
  <thead>
    <tr>
      <th width="80px">Tên</th>
      <th width="80px">Môn học</th>
      <th width="60px">Điểm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Hoàng</td>
      <td>Toán</td>
      <td>9.5</td>
    </tr>
    <tr>
      <td>Tin</td>
      <td>10</td>
    </tr>
  </tbody>
</table>
```
<br>

![alt text](images/table.png)

---

#### 5. HTML Form

##### 5.1. Khái niệm Form

###### a. Form là gì?

Form (biểu mẫu) trong HTML là **công cụ để thu thập thông tin từ người dùng** và gửi dữ liệu đến server để xử lý.
Ví dụ: đăng ký, đăng nhập, tìm kiếm, đặt hàng,...

###### b. Thẻ cơ bản

```html
<form action="/submit" method="POST">
  <!-- các input ở đây -->
</form>
```

| Thuộc tính | Ý nghĩa                              |
| ---------- | ------------------------------------ |
| `action`   | URL nơi dữ liệu được gửi đến         |
| `method`   | Cách gửi dữ liệu (`GET` hoặc `POST`) |

##### 5.2. Các phần tử trong form (form elements)

###### a. Thẻ `<input>`

| Loại `type` | Mục đích                     | Ví dụ                                    |
| ----------- | ---------------------------- | ---------------------------------------- |
| `text`      | Nhập văn bản ngắn            | `<input type="text">`                    |
| `email`     | Nhập địa chỉ email           | `<input type="email">`                   |
| `password`  | Nhập mật khẩu                | `<input type="password">`                |
| `number`    | Nhập số                      | `<input type="number" min="0" max="10">` |
| `checkbox`  | Chọn nhiều mục/true or false | `<input type="checkbox">`                |
| `radio`     | Chọn 1 trong nhiều tùy chọn  | `<input type="radio" name="gender">`     |
| `date`      | Chọn ngày                    | `<input type="date">`                    |
| `file`      | Tải tệp                      | `<input type="file">`                    |
| `submit`    | Nút gửi form                 | `<input type="submit" value="Gửi">`      |
| `reset`     | Xóa toàn bộ form             | `<input type="reset">`                   |

###### b. `<label>` – Nhãn cho input

```html
<label for="email">Email:</label>
<input type="email" id="email" name="email">
```
* for attribute trong `<label>` tốt cho SEO và accesibility
* value trong `for` phải trùng với value của `id` trong `<input>`

###### c. `<textarea>` – Nhập đoạn văn dài

```html
<textarea name="note" rows="5" cols="30">Ghi chú ở đây</textarea>
```

###### d. `<select>` – Chọn từ danh sách

```html
<select name="city">
  <option value="hn">Hà Nội</option>
  <option value="hcm">Hồ Chí Minh</option>
</select>
```

##### 5.3. Các thuộc tính của input (input attributes)

| Thuộc tính    | Mô tả                                    |
| ------------- | ---------------------------------------- |
| `required`    | Bắt buộc nhập dữ liệu                    |
| `placeholder` | Hiển thị gợi ý bên trong ô nhập          |
| `value`       | Giá trị mặc định                         |
| `readonly`    | Chỉ đọc, không chỉnh sửa được            |
| `disabled`    | Bị khóa, không sử dụng được              |
| `maxlength`   | Giới hạn số ký tự                        |
| `min`, `max`  | Giới hạn giá trị (cho số, ngày,...)      |
| `pattern`     | Kiểm tra định dạng bằng regex            |
| `checked`     | Mặc định được chọn (`checkbox`, `radio`) |

###### Ví dụ:

```html
<input type="text" name="username" placeholder="Tên đăng nhập" required maxlength="20">
```

##### 5.4. Thuộc tính `action` và `method` của form

###### a. `action` – nơi gửi dữ liệu

```html
<form action="/xuly" method="POST">
```

###### b. `method` – cách gửi

* `GET`: dữ liệu đính kèm trong URL (dễ thấy, không bảo mật) nhưng có thể lưu lại dữ liệu
* `POST`: dữ liệu nằm trong body (an toàn hơn)

##### 5. Ví dụ form đầy đủ

```html
<form action="http://www.w3schools.com/action_page.php" method="post" target="_blank" autocomplete="on">
  <label for="fullName">Họ tên:</label><br>
  <input type="text" name="fullName" id="fullName"><br>
  
  <label for="email">Email</label><br>
  <input type="email" name="email" id="email"><br>

  <label for="password">Mật khẩu:</label><br>
  <input type="password" name="password" id="password"><br>
  <label for="confirmPassword">Xác nhận mật khẩu:</label><br>
  <input type="confirmPassword" name="confirmPassword" id="confirmPassword"><br>

  <label>Giới tính:</label><br>
  <input type="radio" name="gender" id="male" valid="male">
  <label for="male">Nam</label><br>
  <input type="radio" name="gender" id="female" valid="female">
  <label for="female">Nữ</label><br>
  <input type="radio" name="gender" id="ortherGender" valid="ortherGender">
  <label for="ortherGender">Khác</label><br>

  <label for="country">Quốc gia:</label><br>
  <select name="country" id="country">
    <option value="thaiLand">Thái Lan</option>
    <option value="japan">Nhật Bản</option>
    <option value="vietnam" selected>Việt Nam</option>
  </select><br><br>

  <label for="note">Ghi chú:</label><br>
  <textarea name="note" rows="4" cols="30"></textarea><br>

  <button type="submit">Đăng ký</button>
</form>
```

---

#### 6. Thẻ script, HTML và JavaScript

##### a. Chèn script vào HTML

```html
<script>
  alert("Xin chào!");
</script>
```

##### b. Kết nối file JS ngoài

```html
<script src="main.js"></script>
```

##### c. Vị trí đặt `script` nên:

* Cuối thẻ `<body>` để tránh chặn hiển thị giao diện
* Hoặc dùng thuộc tính `defer` nếu để trong `<head>`:

```html
<script src="main.js" defer></script>
```

Dưới đây là phần giải thích chi tiết về thẻ `div`, `span` và cách phân biệt chúng:

---

#### 7. Thẻ `div`, `span` và sự phân biệt 2 thẻ

##### 7.1. Thẻ `<div>`

###### a. Là gì?

`<div>` (viết tắt của **division**) là **thẻ khối (block-level)** dùng để **gom nhóm các phần tử lại với nhau** thành một khối nội dung.

###### b. Đặc điểm:

* Chiếm **toàn bộ chiều ngang** của phần tử cha
* Mỗi thẻ `<div>` nằm **trên dòng riêng**
* Thường dùng để **chia layout**, tạo khối nội dung, bố cục, container,...
* Dễ dàng định dạng bằng CSS

###### c. Ví dụ:

```html
<div style="background-color: lightblue">
  <h2>Giới thiệu</h2>
  <p>Chúng tôi là nhóm phát triển web.</p>
</div>
```

##### 7.2. Thẻ `<span>`

###### a. Là gì?

`<span>` là **thẻ nội dòng (inline)** dùng để **bọc nội dung nhỏ bên trong dòng văn bản**, để có thể định dạng riêng biệt bằng CSS/JS.

###### b. Đặc điểm:

* **Không xuống dòng**
* Chỉ chiếm đúng chiều rộng nội dung nó chứa
* Không có ý nghĩa về bố cục, chỉ dùng để **định dạng nội dung nhỏ**
* Thường dùng để **tô màu, bôi đậm, tạo hiệu ứng** cho từ/ngữ bên trong đoạn văn

###### c. Ví dụ:

```html
<p>Tôi thích <span style="color: red;">màu đỏ</span> và <span style="color: blue;">màu xanh</span>.</p>
```

---

##### 7.3. So sánh `div` vs `span`

| Tiêu chí             | `div`                       | `span`                          |
| -------------------- | --------------------------- | ------------------------------- |
| Loại phần tử         | Block (khối)                | Inline (nội dòng)               |
| Chiếm chiều ngang    | Toàn bộ dòng                | Chỉ phần nội dung               |
| Xuống dòng           | Có (luôn nằm trên dòng mới) | Không                           |
| Mục đích chính       | Bố cục, khối nội dung       | Trang trí, định dạng nhỏ        |
| Sử dụng phổ biến cho | Container, layout           | Định dạng từ/câu trong đoạn văn |

---

##### 7.4. Khi nào dùng `div`, khi nào dùng `span`?

| Trường hợp                           | Dùng thẻ gì? | Giải thích                      |
| ------------------------------------ | ------------ | ------------------------------- |
| Chia cột, chia layout                | `div`        | Cần khối riêng biệt, dễ định vị |
| Tô màu một từ trong đoạn văn         | `span`       | Không cần xuống dòng            |
| Tạo khối nội dung có nền riêng       | `div`        | Làm rõ bố cục và dễ thiết kế    |
| Đánh dấu một phần văn bản để thêm JS | `span`       | Nhẹ, nội dòng, dễ thao tác      |

---

### III. Các loại Element: Thẻ block, inline, phân biệt

#### 1. Thẻ Block-level là gì?

##### a. Khái niệm:

Thẻ **block-level** (phần tử khối) là các phần tử:

* **Chiếm toàn bộ chiều ngang** của vùng chứa (mặc định `width: 100%`)
* **Luôn bắt đầu trên dòng mới**
* Dùng để **xây dựng bố cục**, tổ chức các **khối nội dung rõ ràng**

##### b. Ví dụ hiển thị:

```html
<div>Thẻ 1</div>
<div>Thẻ 2</div>
```

Hai thẻ này sẽ hiển thị **trên 2 dòng khác nhau**.

---

#### 2. Thẻ Inline là gì?

##### a. Khái niệm:

Thẻ **inline** (phần tử nội dòng) là phần tử:

* **Không xuống dòng**, hiển thị **trong cùng một dòng**
* **Chỉ chiếm không gian vừa đủ cho nội dung**
* Dùng để **định dạng chi tiết** trong dòng văn bản

##### b. Ví dụ hiển thị:

```html
<p>Chữ <span style="color:red;">màu đỏ</span> và <strong>in đậm</strong></p>
```

---

#### 3. Bảng so sánh `block` và `inline`

| Tiêu chí              | Block-level Element            | Inline Element                        |
| --------------------- | ------------------------------ | ------------------------------------- |
| Chiếm chiều ngang     | Toàn bộ vùng chứa (full width) | Vừa đủ nội dung                       |
| Có xuống dòng không   | ✅ Có                           | ❌ Không                               |
| Có thể chứa thẻ gì    | Chứa được cả block và inline   | Chỉ chứa inline                       |
| Dễ set `width/height` | ✅ Có                           | ❌ Không (trừ khi đổi display)         |
| Ứng dụng phổ biến     | Bố cục, chia vùng              | Định dạng chi tiết trong dòng văn bản |

---

#### 4. Các thẻ Block phổ biến

| Thẻ           | Mô tả                                        |
| ------------- | -------------------------------------------- |
| `<div>`       | Container chung (không có ý nghĩa ngữ nghĩa) |
| `<p>`         | Đoạn văn                                     |
| `<h1>`–`<h6>` | Tiêu đề                                      |
| `<ul>`        | Danh sách không thứ tự                       |
| `<ol>`        | Danh sách có thứ tự                          |
| `<li>`        | Phần tử trong danh sách                      |
| `<header>`    | Phần đầu trang / vùng                        |
| `<footer>`    | Phần chân trang                              |
| `<section>`   | Phân đoạn nội dung                           |
| `<article>`   | Một đơn vị nội dung độc lập                  |
| `<form>`      | Biểu mẫu (form gửi dữ liệu)                  |
| `<table>`     | Bảng                                         |
| `<nav>`       | Vùng điều hướng                              |

---

#### 5. Các thẻ Inline phổ biến

| Thẻ        | Mô tả                              |
| ---------- | ---------------------------------- |
| `<span>`   | Gói nội dung nhỏ nội dòng          |
| `<a>`      | Liên kết (anchor)                  |
| `<strong>` | Nhấn mạnh (in đậm)                 |
| `<em>`     | Nhấn mạnh nhẹ (in nghiêng)         |
| `<b>`      | In đậm (không nhấn mạnh)           |
| `<i>`      | In nghiêng (không nhấn mạnh)       |
| `<u>`      | Gạch chân                          |
| `<img>`    | Ảnh                                |
| `<input>`  | Ô nhập dữ liệu                     |
| `<label>`  | Nhãn cho input                     |
| `<code>`   | Đoạn mã lập trình                  |
| `<br>`     | Xuống dòng trong dòng (line break) |
| `<small>`  | Chữ nhỏ                            |
| `<mark>`   | Highlight                          |
| `<sub>`    | Chỉ số dưới                        |
| `<sup>`    | Chỉ số trên                        |

---

#### 6. Bonus: `inline-block` là gì?

`inline-block` là một kiểu **hiển thị lai giữa inline và block** thông qua CSS:

```html
<span style="display: inline-block; width: 150px; height: 50px; background: lightgray;">
  Tôi là inline-block
</span>
```

| Kiểu hiển thị  | Xuống dòng | Set width/height được? | Ghi chú                                             |
| -------------- | ---------- | ---------------------- | --------------------------------------------------- |
| `block`        | ✅          | ✅                      | Bố cục layout chính                                 |
| `inline`       | ❌          | ❌                      | Định dạng nhỏ trong đoạn văn                        |
| `inline-block` | ❌          | ✅                      | Dùng khi cần set kích thước nhưng vẫn nằm cùng dòng |

---

### III. Semantic HTML: `header`, `footer`, `nav`, `section`, `article`, `aside`, …

#### 1. Semantic HTML là gì?

##### a. Định nghĩa:

**Semantic HTML** (HTML ngữ nghĩa) là việc sử dụng các **thẻ HTML mang ý nghĩa rõ ràng về nội dung** mà chúng bao bọc, giúp:

* Trình duyệt và máy đọc hiểu cấu trúc trang tốt hơn
* Tăng khả năng **SEO**
* Code dễ đọc và bảo trì hơn

##### b. So sánh nhanh:

**Không semantic:**

```html
<div id="header">...</div>
<div id="content">...</div>
<div id="footer">...</div>
```

**Có semantic:**

```html
<header>...</header>
<main>...</main>
<footer>...</footer>
```

---

#### 2. Các thẻ semantic HTML phổ biến

##### a. `<header>`

* Đại diện cho phần **đầu trang** hoặc phần đầu của một khối nội dung (như `section`, `article`)
* Thường chứa: logo, tên website, menu điều hướng, tiêu đề...

Ví dụ:

```html
<header>
  <h1>Trang Blog của tôi</h1>
  <nav>...</nav>
</header>
```

---

##### b. `<footer>`

* Đại diện cho phần **chân trang** hoặc cuối một khối nội dung
* Thường chứa: bản quyền, liên hệ, liên kết chính sách...

Ví dụ:

```html
<footer>
  <p>&copy; 2025 Công ty ABC</p>
</footer>
```

---

##### c. `<nav>`

* Đại diện cho **vùng điều hướng** (navigation)
* Chứa các liên kết điều hướng đến các phần khác trong hoặc ngoài website
* Thường dùng nhất là thanh điều hướng của web

Ví dụ:

```html
<nav>
  <ul>
    <li><a href="/">Trang chủ</a></li>
    <li><a href="/lien-he">Liên hệ</a></li>
  </ul>
</nav>
```

---

##### d. `<main>`

* Đại diện cho **nội dung chính của trang**
* Mỗi trang chỉ nên có **một thẻ `<main>`**
* Không nên lồng trong `header`, `footer`, `article`, `nav`...

Ví dụ:

```html
<main>
  <h2>Bài viết hôm nay</h2>
  <p>HTML là ngôn ngữ đánh dấu...</p>
</main>
```

---

##### e. `<section>`

* Đại diện cho một **phân đoạn nội dung** có cùng chủ đề
* Có thể chứa `header`, `article`, hoặc bất kỳ nội dung gì

Ví dụ:

```html
<section>
  <h2>Giới thiệu</h2>
  <p>Chúng tôi là nhóm lập trình viên trẻ...</p>
</section>
```

---

##### f. `<article>`

* Đại diện cho **một đơn vị nội dung độc lập**, có thể chia sẻ hoặc tái sử dụng (bài viết blog, bình luận,...)
* Có thể nằm trong `section`, `main`,...

Ví dụ:

```html
<article>
  <h3>5 mẹo học HTML</h3>
  <p>Trong bài này, bạn sẽ học cách...</p>
</article>
```

---

##### g. `<aside>`

* Đại diện cho **nội dung phụ**, liên quan nhưng không phải trọng tâm
* Ví dụ: thanh bên, **quảng cáo**, bài viết liên quan

Ví dụ:

```html
<aside>
  <h4>Bài liên quan</h4>
  <ul>
    <li><a href="#">HTML cơ bản</a></li>
  </ul>
</aside>
```

---

#### 3. Bảng tổng hợp các thẻ semantic

| Thẻ         | Mô tả                              | Có thể dùng trong            |
| ----------- | ---------------------------------- | ---------------------------- |
| `<header>`  | Phần đầu của trang/khối nội dung   | `body`, `article`, `section` |
| `<footer>`  | Phần chân trang hoặc của 1 section | `body`, `article`, `section` |
| `<nav>`     | Điều hướng (menu)                  | `body`, `header`, `footer`   |
| `<main>`    | Nội dung chính (duy nhất)          | `body`                       |
| `<section>` | Phân đoạn nội dung theo chủ đề     | `body`, `main`, `article`    |
| `<article>` | Đơn vị nội dung độc lập            | `main`, `section`, `body`    |
| `<aside>`   | Nội dung phụ, ví dụ sidebar        | `body`, `main`, `article`    |

---
