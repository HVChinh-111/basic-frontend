# Buổi 3: CSS (Phần 2)

- [Buổi 3: CSS (Phần 2)](#buổi-3-css-phần-2)
  - [A. Phần I. Flex, Grid Layout:](#a-phần-i-flex-grid-layout)
    - [I. Flexbox, Flex Attribute: direction, wrap, flow,...](#i-flexbox-flex-attribute-direction-wrap-flow)
      - [1. Tổng quan Flexbox](#1-tổng-quan-flexbox)
      - [2. Các thuộc tính cơ bản](#2-các-thuộc-tính-cơ-bản)
        - [a. `flex-direction`](#a-flex-direction)
        - [b. `flex-wrap`](#b-flex-wrap)
        - [c. `flex-flow`](#c-flex-flow)
      - [3. Các thuộc tính căn chỉnh (main axis \& cross axis)](#3-các-thuộc-tính-căn-chỉnh-main-axis--cross-axis)
        - [a. Tổng hợp nhanh](#a-tổng-hợp-nhanh)
        - [b. `justify-content` – Căn chỉnh theo **trục chính (main axis)**](#b-justify-content--căn-chỉnh-theo-trục-chính-main-axis)
        - [c. `align-items` – Căn chỉnh theo **trục phụ (cross axis)** (từng dòng, từng item)](#c-align-items--căn-chỉnh-theo-trục-phụ-cross-axis-từng-dòng-từng-item)
        - [d. `align-content` – Căn chỉnh **các dòng (rows)** khi có nhiều dòng](#d-align-content--căn-chỉnh-các-dòng-rows-khi-có-nhiều-dòng)
      - [3. Code ví dụ](#3-code-ví-dụ)
    - [II. Grid, GridView](#ii-grid-gridview)
      - [1. Tổng quan CSS Grid](#1-tổng-quan-css-grid)
        - [a. CSS Grid là gì?](#a-css-grid-là-gì)
        - [b. Kích hoạt CSS Grid](#b-kích-hoạt-css-grid)
      - [2. Các thuộc tính cơ bản của Grid Container](#2-các-thuộc-tính-cơ-bản-của-grid-container)
        - [a. `display: grid` hoặc `inline-grid`](#a-display-grid-hoặc-inline-grid)
        - [b. `grid-template-columns` \& `grid-template-rows`](#b-grid-template-columns--grid-template-rows)
        - [c. `gap`, `row-gap`, `column-gap`](#c-gap-row-gap-column-gap)
        - [d. `grid-auto-rows`, `grid-auto-columns`](#d-grid-auto-rows-grid-auto-columns)
        - [e. `grid-template-areas` (đặt tên vùng layout)](#e-grid-template-areas-đặt-tên-vùng-layout)
      - [3. Các thuộc tính cho Grid Items](#3-các-thuộc-tính-cho-grid-items)
        - [a. `grid-column`, `grid-row`](#a-grid-column-grid-row)
        - [b. `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`](#b-grid-column-start-grid-column-end-grid-row-start-grid-row-end)
        - [c. `grid-area`](#c-grid-area)
        - [d. `justify-self` / `align-self` / `place-self`](#d-justify-self--align-self--place-self)
      - [4. Ví dụ minh họa: 3 cột, 2 hàng](#4-ví-dụ-minh-họa-3-cột-2-hàng)
      - [5. Responsive với Grid](#5-responsive-với-grid)
        - [a. Sử dụng `auto-fit` hoặc `auto-fill` để responsive cột](#a-sử-dụng-auto-fit-hoặc-auto-fill-để-responsive-cột)
        - [b. Kết hợp Media Queries để thay đổi layout theo màn hình](#b-kết-hợp-media-queries-để-thay-đổi-layout-theo-màn-hình)
      - [6. So sánh nhanh Grid vs Flexbox](#6-so-sánh-nhanh-grid-vs-flexbox)
  - [B. Phần 2: Responsive (Media Query)](#b-phần-2-responsive-media-query)
    - [I. Responsive Design là gì?](#i-responsive-design-là-gì)
    - [II. Media Query là gì?](#ii-media-query-là-gì)
      - [Cú pháp cơ bản:](#cú-pháp-cơ-bản)
    - [III. Các loại Media Query phổ biến](#iii-các-loại-media-query-phổ-biến)
      - [1. Theo chiều rộng (width)](#1-theo-chiều-rộng-width)
      - [2. Kết hợp nhiều điều kiện](#2-kết-hợp-nhiều-điều-kiện)
    - [IV. Các breakpoint phổ biến (theo kích thước thiết bị)](#iv-các-breakpoint-phổ-biến-theo-kích-thước-thiết-bị)
    - [V. Mobile-First vs Desktop-First](#v-mobile-first-vs-desktop-first)
    - [VI. Code ví dụ](#vi-code-ví-dụ)
  - [C. Phần 3: Style 1 số thành phần cơ bản](#c-phần-3-style-1-số-thành-phần-cơ-bản)
    - [I. Dropdowns](#i-dropdowns)


## A. Phần I. Flex, Grid Layout:

### I. Flexbox, Flex Attribute: direction, wrap, flow,...

#### 1. Tổng quan Flexbox

**Flexbox** là một hệ thống layout **1 chiều** (ngang hoặc dọc), giúp sắp xếp, căn chỉnh và phân bổ không gian giữa các phần tử trong một container.

**Flexbox** có 2 thành phần chính:
* **container**: là phần tử cha dùng để bọc bên ngoài
* **item**: là phần tử con của container

```css
.container {
  display: flex; /* Kích hoạt flexbox */
}
```

#### 2. Các thuộc tính cơ bản

##### a. `flex-direction`

Xác định hướng sắp xếp các phần tử (items) theo **trục chính (main axis)**.

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

| Giá trị          | Ý nghĩa                      |
| ---------------- | ---------------------------- |
| `row`            | Ngang trái → phải (mặc định) |
| `row-reverse`    | Ngang phải → trái            |
| `column`         | Dọc trên → dưới              |
| `column-reverse` | Dọc dưới → trên              |

##### b. `flex-wrap`

Cho phép các item xuống dòng khi không đủ không gian.

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

| Giá trị        | Ý nghĩa                          |
| -------------- | -------------------------------- |
| `nowrap`       | Không xuống dòng (mặc định)      |
| `wrap`         | Tự động xuống dòng               |
| `wrap-reverse` | Xuống dòng và đảo chiều trục phụ |

##### c. `flex-flow`

Viết tắt của `flex-direction` và `flex-wrap`.

```css
.container {
  flex-flow: row wrap; /* ví dụ */
}
```

#### 3. Các thuộc tính căn chỉnh (main axis & cross axis)

##### a. Tổng hợp nhanh

| Thuộc tính        | Trục áp dụng | Ảnh hưởng đến                                 | Giá trị phổ biến                              |
| ----------------- | ------------ | --------------------------------------------- | --------------------------------------------- |
| `justify-content` | Main axis    | Khoảng cách **giữa các item**                 | `flex-start`, `center`, `space-between`,...   |
| `align-items`     | Cross axis   | **Vị trí** của item                           | `stretch`, `center`, `flex-start`, `flex-end` |
| `align-content`   | Cross axis   | Khoảng cách **giữa các hàng** (khi có `wrap`) | `space-between`, `stretch`, `center`,...      |

> 📌 Lưu ý:
>
> * `align-items` áp dụng cho **item đơn lẻ** theo trục phụ.
> * `align-content` chỉ hoạt động khi có **nhiều hàng** (tức `flex-wrap: wrap`).

##### b. `justify-content` – Căn chỉnh theo **trục chính (main axis)**

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

| Giá trị         | Ý nghĩa                                             |
| --------------- | --------------------------------------------------- |
| `flex-start`    | Dồn về đầu trục (trái với `row`, trên với `column`) |
| `flex-end`      | Dồn về cuối trục                                    |
| `center`        | Căn giữa                                            |
| `space-between` | Các item cách đều, không có khoảng ở đầu/cuối       |
| `space-around`  | Các item cách đều, **có khoảng ở đầu/cuối**         |
| `space-evenly`  | Khoảng cách **đều hoàn toàn**, kể cả đầu và cuối    |

##### c. `align-items` – Căn chỉnh theo **trục phụ (cross axis)** (từng dòng, từng item)

```css
.container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

| Giá trị      | Ý nghĩa                                                            |
| ------------ | ------------------------------------------------------------------ |
| `stretch`    | Kéo giãn item để bằng chiều cao (hoặc rộng) container *(mặc định)* |
| `flex-start` | Căn về phía trên (nếu `row`) hoặc trái (nếu `column`)              |
| `flex-end`   | Căn về phía dưới (hoặc phải)                                       |
| `center`     | Căn giữa theo chiều phụ                                            |
| `baseline`   | Căn theo dòng chữ đầu tiên của item                                |

##### d. `align-content` – Căn chỉnh **các dòng (rows)** khi có nhiều dòng

Chỉ hoạt động nếu `flex-wrap: wrap` và có nhiều dòng.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

| Giá trị         | Ý nghĩa                                    |
| --------------- | ------------------------------------------ |
| `flex-start`    | Dồn các dòng lên trên                      |
| `flex-end`      | Dồn xuống dưới                             |
| `center`        | Căn giữa các dòng                          |
| `space-between` | Các dòng cách đều, không khoảng ở đầu/cuối |
| `space-around`  | Các dòng cách đều, có khoảng ở đầu/cuối    |
| `stretch`       | Giãn dòng để lấp đầy trục phụ *(mặc định)* |

#### 3. Code ví dụ
* **[flexbox.html](codes/flexbox.html)**
* **[flexbox.css](codes/flexbox.css)**

---

### II. Grid, GridView

#### 1. Tổng quan CSS Grid

##### a. CSS Grid là gì?

**CSS Grid Layout** là hệ thống bố cục **2 chiều** (hàng + cột), cho phép chia không gian web thành **lưới ô (grid cells)** để đặt các phần tử con theo hàng, cột một cách trực quan, mạnh mẽ hơn Flexbox khi làm layout phức tạp như:

* **Giao diện nhiều hàng + cột**: dashboard, admin panel, gallery,...
* **UI có hàng-cột đồng bộ** (trái phải đều nhau)
* **Thiết kế responsive theo vùng (area)**

> **So sánh nhanh:**
>
> * **Flexbox:** chỉ theo **1 chiều** (ngang *hoặc* dọc) → tốt cho thanh menu, hàng sản phẩm.
> * **Grid:** theo **2 chiều** → tốt cho dashboard, layout nhiều khối đan xen.

##### b. Kích hoạt CSS Grid

```css
.container {
  display: grid;
}
```

#### 2. Các thuộc tính cơ bản của Grid Container

##### a. `display: grid` hoặc `inline-grid`

```css
.container {
  display: grid;
}
```

##### b. `grid-template-columns` & `grid-template-rows`

Xác định số lượng và kích thước cột/hàng của grid

```css
.container {
  grid-template-columns: 200px 1fr 2fr;
  grid-template-rows: auto 300px;
}
```

| Giá trị         | Ý nghĩa                                     |
| --------------- | ------------------------------------------- |
| `px`, `em`, `%` | Chiều rộng/cao tuyệt đối                    |
| `fr`            | Chia phần tỉ lệ linh hoạt giữa các cột/hàng |
| `auto`          | Chiều cao rộng tự động theo nội dung        |
| `repeat(n, x)`  | Lặp lại `x` n lần → ngắn gọn                |

Ví dụ:

```css
grid-template-columns: repeat(3, 1fr); /* 3 cột bằng nhau */
grid-template-rows: 100px auto; /* hàng 1 cố định, hàng 2 tự động */
```

##### c. `gap`, `row-gap`, `column-gap`

Xác định khoảng cách giữa các ô (không phải padding)

```css
.container {
  gap: 20px; /* cả row và column */
  row-gap: 10px;
  column-gap: 30px;
}
```

##### d. `grid-auto-rows`, `grid-auto-columns`

Xác định kích thước **tự sinh ra** cho hàng/cột nếu chưa được định nghĩa rõ ràng

```css
.container {
  grid-auto-rows: 150px;
}
```

##### e. `grid-template-areas` (đặt tên vùng layout)

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
}
.item1 {
  grid-area: header;
}
.item2 {
  grid-area: sidebar;
}
.item3 {
  grid-area: content;
}
.item4 {
  grid-area: footer;
}
```

#### 3. Các thuộc tính cho Grid Items

##### a. `grid-column`, `grid-row`

Xác định **vị trí và độ rộng** của phần tử trong lưới

```css
.item {
  grid-column: 1 / 3; /* kéo dài từ cột 1 đến cột 3 */
  grid-row: 2 / 4;     /* hàng 2 đến hàng 4 */
}
```

##### b. `grid-column-start`, `grid-column-end`, `grid-row-start`, `grid-row-end`

Cách viết chi tiết hơn nếu muốn tách riêng:

```css
.item {
  grid-column-start: 1;
  grid-column-end: span 2;
}
```

##### c. `grid-area`

Dùng khi bạn khai báo `grid-template-areas` – đặt vào vùng đã đặt tên.

```css
.item {
  grid-area: sidebar;
}
```

##### d. `justify-self` / `align-self` / `place-self`

Căn chỉnh **nội dung bên trong từng ô** (khác Flexbox!)

```css
.item {
  justify-self: center; /* ngang */
  align-self: start;    /* dọc */
}
```

#### 4. Ví dụ minh họa: 3 cột, 2 hàng

```html
<div class="grid-container">
  <div class="item">A</div>
  <div class="item">B</div>
  <div class="item">C</div>
  <div class="item">D</div>
  <div class="item">E</div>
  <div class="item">F</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 100px);
  gap: 10px;
}
.item {
  background: #2980b9;
  color: white;
  text-align: center;
  line-height: 100px;
}
```

#### 5. Responsive với Grid

##### a. Sử dụng `auto-fit` hoặc `auto-fill` để responsive cột

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

| Thuật ngữ  | Ý nghĩa                                                      |
| ---------- | ------------------------------------------------------------ |
| `auto-fit` | Tự động **thu hẹp** số lượng cột phù hợp không gian hiện tại |
| `minmax()` | Chỉ định giới hạn min/max mỗi cột                            |
| `1fr`      | Phần còn lại chia đều                                        |

##### b. Kết hợp Media Queries để thay đổi layout theo màn hình

```css
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr; /* chỉ 1 cột trên mobile */
  }
}
```

#### 6. So sánh nhanh Grid vs Flexbox

| Tiêu chí              | Grid                         | Flexbox                     |
| --------------------- | ---------------------------- | --------------------------- |
| Chiều                 | 2 chiều (hàng và cột)        | 1 chiều (hàng **hoặc** cột) |
| Vị trí item           | Cố định từng hàng/cột        | Dựa trên dòng chảy nội dung |
| Layout phức tạp       | ✅ Tốt hơn                    | ❌ Khó khăn nếu nhiều lớp    |
| Tự động xuống dòng    | Không tự động nếu không wrap | Tự động xuống dòng (wrap)   |
| Dễ chia vùng (`area`) | ✅ Có                         | ❌ Không                     |

---
---

## B. Phần 2: Responsive (Media Query)

### I. Responsive Design là gì?

**Responsive Web Design (RWD)** là kỹ thuật giúp giao diện web **tự điều chỉnh** và **hiển thị tốt** trên mọi kích thước màn hình: desktop, tablet, mobile,...

**Tại sao quan trọng?**

* Cải thiện trải nghiệm người dùng (UX)
* Tối ưu SEO: Google đánh giá cao trang có thiết kế responsive (chuẩn mobile-first indexing)
* Tiết kiệm công sức bảo trì (1 codebase dùng cho nhiều thiết bị)

---

### II. Media Query là gì?

**Media Query** là một kỹ thuật trong CSS giúp áp dụng style **tùy thuộc vào kích thước hoặc đặc điểm thiết bị** (màn hình, độ phân giải, định hướng,...)

#### Cú pháp cơ bản:

```css
@media screen and screen and (điều kiện) {
  /* CSS chỉ áp dụng khi điều kiện đúng */
}
```

---

### III. Các loại Media Query phổ biến

#### 1. Theo chiều rộng (width)

```css
@media screen and (max-width: 768px) {
  /* Áp dụng cho thiết bị <= 768px (tablet, mobile) */
}

@media screen and (min-width: 1200px) {
  /* Áp dụng cho thiết bị >= 1200px (desktop lớn) */
}
```

#### 2. Kết hợp nhiều điều kiện

```css
@media screen and (min-width: 768px) and (max-width: 1199px) {
  /* Áp dụng cho tablet nằm ngang và laptop nhỏ */
}
```

---

### IV. Các breakpoint phổ biến (theo kích thước thiết bị)

| Loại thiết bị      | Width (px)      |
| ------------------ | --------------- |
| Mobile nhỏ         | ≤ 480px         |
| Mobile thường      | 481px – 767px   |
| Ipad               | 768px – 1024px  |
| Laptop nhỏ         | 1025px – 1366px |
| Laptop/Desktop lớn | ≥ 1367px        |


### V. Mobile-First vs Desktop-First

| Chiến lược        | Mô tả                                                    |
| ----------------- | -------------------------------------------------------- |
| **Mobile-first**  | Viết CSS cho mobile trước, rồi mở rộng với `min-width`   |
| **Desktop-first** | Viết CSS cho desktop trước, rồi thu hẹp bằng `max-width` |

![alt text](images/PC-first&Mobile-first.webp)

**Khuyến nghị:** Google ưu tiên Mobile-first.

---

### VI. Code ví dụ

* **[media-query.html](codes/media-query.html)**
* **[media-query.css](codes/media-query.css)**

---
---

## C. Phần 3: Style 1 số thành phần cơ bản

### I. Dropdowns
* **[dropdown-menu.html](codes/dropdown-menu.html)**
* **[dropdown-menu.css](codes/dropdown-menu.css)**