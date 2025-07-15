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

**💡 Ví dụ thực tế:**

Bạn viết 1 web bằng HTML + Node.js → bạn cần:

* Hosting để chạy Node.js (VD: Render.com)
* Domain trỏ vào hosting (VD: `yourweb.com`)
* Kết quả: người khác truy cập được web bạn trên Internet 
---

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

📄 Ví dụ response là HTML:

```html
<h1>Danh sách sản phẩm</h1>
<ul>
  <li>Áo sơ mi trắng</li>
  <li>Quần jean xanh</li>
</ul>
```

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

## B. 