# Buổi 4: JAVASCRIPT (PHẦN 1)

## A. Phần 1: Syntax cơ bản JS

### I. JavaScript là gì?

#### 1. Định nghĩa

**JavaScript** là một **ngôn ngữ lập trình** được thiết kế để chạy chủ yếu trên **trình duyệt web**, giúp các trang web trở nên **tương tác, động và thân thiện hơn với người dùng**. Tuy nhiên, JavaScript ngày nay không chỉ chạy trong trình duyệt mà còn:

* Chạy **trên máy chủ** (với Node.js).
* Dùng để viết **ứng dụng desktop** (Electron), **mobile** (React Native), và nhiều hơn nữa.

#### 2. Tính chất nổi bật

| Tính chất                    | Giải thích ngắn                                                   |
| ---------------------------- | ----------------------------------------------------------------- |
| **Thông dịch (Interpreted)** | Không cần biên dịch, được trình duyệt chạy trực tiếp.             |
| **Động (Dynamic)**           | Kiểu dữ liệu không cần khai báo cứng (giống Python).              |
| **Yếu kiểu (Loosely typed)** | Không kiểm tra kiểu dữ liệu nghiêm ngặt như Java.                 |
| **Hướng đối tượng**          | Dùng đối tượng (object), class, prototype.                        |
| **Event-driven**             | Hướng theo sự kiện – ví dụ khi người dùng nhấp chuột.             |
| **Chạy phía client**         | Mặc định chạy trên trình duyệt, thao tác trực tiếp với giao diện. |
| **Có thể chạy phía server**  | Nhờ vào môi trường như Node.js.                                   |

#### 3. JavaScript dùng để làm gì?

JavaScript được dùng rất rộng rãi, có thể chia theo **frontend** và **backend**:

##### a. Frontend (trình duyệt – phía người dùng)

* Tạo hiệu ứng động cho giao diện web (dropdown, slider, modal,...)
* Kiểm tra dữ liệu form trước khi gửi (validation)
* Xử lý sự kiện người dùng (nhấp, nhập, kéo thả,...)
* Tương tác với **DOM** (thay đổi nội dung HTML)
* Giao tiếp với server bằng **AJAX** hoặc **fetch**

##### b. Backend (máy chủ – phía server)

* Xây dựng REST API, xử lý request từ frontend
* Kết nối cơ sở dữ liệu (MongoDB, MySQL, PostgreSQL,...)
* Authentication, xử lý logic nghiệp vụ (Node.js)

##### c. Khác

* Ứng dụng desktop (Electron)
* Ứng dụng mobile (React Native)
* Game (Phaser, Three.js)
* Automation (Puppeteer)

#### 4. JavaScript có mặt ở đâu?

| Nơi sử dụng | Môi trường                              |
| ----------- | --------------------------------------- |
| Trình duyệt | Chrome, Firefox, Edge, Safari, Brave... |
| Máy chủ     | Node.js (chạy JavaScript trên server)   |
| IDE         | VS Code, WebStorm, Sublime Text, ...    |

---

### II. Khai báo dữ liệu: Biến, Toán tử

#### 1. Biến trong JavaScript (ES5)

##### a. Khai báo biến với `var`

Trong ES5, cách duy nhất để khai báo biến là dùng **từ khóa `var`**.

```js
var name = "Alice";
var age = 25;
```

##### b. Gán lại và khởi tạo lại

```js
var x = 10;
x = 20;       // ✅ Gán lại giá trị

var x = 30;   // ✅ Khởi tạo lại cùng tên biến (không lỗi)
```

> 🔸 Với `var`, **hoàn toàn có thể khai báo lại** biến **nhiều lần trong cùng phạm vi** – điều này **có thể gây lỗi khó phát hiện** nên trong ES6, người ta thay thế bằng `let` và `const`.

##### c. Phạm vi (Scope) của `var`

`var` có **function scope** – nghĩa là nó chỉ "sống" bên trong **hàm** chứa nó. Nếu nằm ngoài hàm thì sẽ là **biến toàn cục (global variable)**.

```js
function testScope() {
  var message = "Hello";
  console.log(message); // "Hello"
}

console.log(message); // ❌ Lỗi: message không tồn tại ở ngoài hàm
```

Nhưng nếu khai báo trong `if`, `for`,... mà không có hàm bao ngoài thì biến vẫn tồn tại toàn cục:

```js
if (true) {
  var color = "red";
}

console.log(color); // ✅ "red" — vì var không có block scope
```

#### 2. Kiểu dữ liệu cơ bản trong ES5

##### a. Kiểu nguyên thủy (primitive types)

| Kiểu        | Ví dụ                |
| ----------- | -------------------- |
| `number`    | `123`, `3.14`, `-10` |
| `string`    | `"Hello"`, `'World'` |
| `boolean`   | `true`, `false`      |
| `undefined` | biến chưa có giá trị |
| `null`      | không có gì          |

##### b. Kiểu đối tượng (object types)

| Kiểu             | Ví dụ                                   |
| ---------------- | --------------------------------------- |
| `object`         | `{ name: "Alice", age: 25 }`            |
| `array`          | `[1, 2, 3]`                             |
| `function`       | `function sayHi() { ... }`              |
| `date`, `regexp` | Có từ ES3/ES5, dùng nhiều trong thực tế |

##### c. Kiểm tra kiểu với `typeof`

```js
var a = 10;
console.log(typeof a);             // "number"

var b = "hello";
console.log(typeof b);             // "string"

var c;
console.log(typeof c);             // "undefined"

console.log(typeof null);          // "object"

console.log(typeof [1,2,3]);       // "object"
console.log(typeof function(){});  // "function"
```

#### 3. Toán tử trong ES5

##### a. Toán tử số học

| Toán tử | Ý nghĩa     | Ví dụ (`a = 5`, `b = 2`) |
| ------- | ----------- | ------------------------ |
| `+`     | Cộng        | `a + b` → `7`            |
| `-`     | Trừ         | `a - b` → `3`            |
| `*`     | Nhân        | `a * b` → `10`           |
| `/`     | Chia        | `a / b` → `2.5`          |
| `%`     | Chia lấy dư | `a % b` → `1`            |
| `++`    | Tăng 1      | `a++` hoặc `++a`         |
| `--`    | Giảm 1      | `a--` hoặc `--a`         |

##### b. Toán tử gán

```js
var x = 10;
x += 5; // x = x + 5 → 15
x -= 2; // x = x - 2 → 13
x *= 2; // x = x * 2 → 26
x /= 2; // x = x / 2 → 13
```

##### c. Toán tử so sánh

| Toán tử | Ý nghĩa                | Ví dụ (`a = 5`, `b = '5'`) |
| ------- | ---------------------- | -------------------------- |
| `==`    | Bằng (lỏng)            | `a == b` → `true`          |
| `===`   | Bằng (chặt, cùng kiểu) | `a === b` → `false`        |
| `!=`    | Không bằng (lỏng)      | `a != b` → `false`         |
| `!==`   | Không bằng (chặt)      | `a !== b` → `true`         |
| `>`     | Lớn hơn                | `a > 3` → `true`           |
| `<`     | Nhỏ hơn                | `a < 10` → `true`          |
| `>=`    | Lớn hơn hoặc bằng      | `a >= 5` → `true`          |
| `<=`    | Nhỏ hơn hoặc bằng      | `a <= 4` → `false`         |

---

### III. Array, Object, String

#### 1. Mảng (Array)

##### a. Mảng là gì?

**Mảng** là một kiểu dữ liệu đặc biệt dùng để lưu **danh sách các giá trị** có thứ tự. Các phần tử trong mảng được đánh số từ **0 trở đi**.

```js
var fruits = ["apple", "banana", "cherry"];
```

##### b. Truy cập phần tử trong mảng

```js
console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
```

##### c. Thay đổi phần tử

```js
fruits[1] = "mango"; // Thay "banana" bằng "mango"
```

##### d. Một số thao tác với mảng

| Phương thức            | Mô tả                                         | Ví dụ                     |
| ---------------------- | --------------------------------------------- | ------------------------- |
| `push()`               | Thêm phần tử vào cuối                         | `fruits.push("orange")`   |
| `pop()`                | Xóa phần tử cuối                              | `fruits.pop()`            |
| `shift()`              | Xóa phần tử đầu                               | `fruits.shift()`          |
| `unshift()`            | Thêm phần tử vào đầu                          | `fruits.unshift("lemon")` |
| `length`               | Độ dài mảng                                   | `fruits.length`           |
| `indexOf(value)`       | Tìm vị trí phần tử                            | `fruits.indexOf("mango")` |
| `join()`               | Nối mảng thành chuỗi                          | `fruits.join(", ")`       |
| `slice(start, end)`    | Lấy 1 phần mảng (không làm thay đổi mảng gốc) | `fruits.slice(0, 2)`      |
| `splice(start, count)` | Xóa hoặc thay thế phần tử (có thay đổi mảng)  | `fruits.splice(1, 1)`     |

##### e. Duyệt mảng bằng vòng lặp

```js
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

#### 2. Đối tượng (Object)

##### a. Đối tượng là gì?

Đối tượng (object) là **tập hợp các cặp key–value** (thuộc tính và giá trị).

```js
var person = {
  name: "Alice",
  age: 25,
  isStudent: true
};
```

##### b. Truy cập thuộc tính

```js
console.log(person.name);       // "Alice"
console.log(person["age"]);     // 25
```

##### c. Thêm / sửa / xóa thuộc tính

```js
person.gender = "female";      // thêm
person.age = 26;               // sửa
delete person.isStudent;       // xóa
```

##### d. Lặp qua thuộc tính (với `for...in`)

```js
for (var key in person) {
  console.log(key + ": " + person[key]);
}
```

#### 3. Chuỗi (String)

##### a. Chuỗi là gì?

Chuỗi (string) là tập hợp các ký tự được đặt trong **cặp nháy đơn hoặc nháy kép**.

```js
var message = "Hello world";
var name = 'Alice';
```

##### b. Các thao tác với chuỗi

| Phương thức         | Mô tả                          | Ví dụ                                  |
| ------------------- | ------------------------------ | -------------------------------------- |
| `length`            | Độ dài chuỗi                   | `message.length`                       |
| `charAt(i)`         | Lấy ký tự tại vị trí `i`       | `message.charAt(0)` → `'H'`            |
| `indexOf(value)`    | Tìm vị trí đầu tiên xuất hiện  | `message.indexOf("world")` → `6`       |
| `lastIndexOf()`     | Tìm vị trí cuối cùng xuất hiện | `message.lastIndexOf("l")`             |
| `slice(start, end)` | Cắt chuỗi từ `start` đến `end` | `message.slice(0, 5)` → `'Hello'`      |
| `toUpperCase()`     | Viết hoa toàn bộ               | `message.toUpperCase()` → `'HELLO...'` |
| `toLowerCase()`     | Viết thường toàn bộ            | `message.toLowerCase()`                |
| `replace()`         | Thay thế 1 phần của chuỗi      | `message.replace("world", "JS")`       |
| `split(delimiter)`  | Tách chuỗi thành mảng          | `"a,b,c".split(",")` → `["a","b","c"]` |
| `trim()`            | Xóa khoảng trắng đầu/cuối      | `"  abc  ".trim()` → `"abc"`           |

##### c. Nối chuỗi

```js
var greeting = "Hello, " + name + "!";
console.log(greeting); // "Hello, Alice!"
```

> 🔸 **Lưu ý**: Không dùng `template string` (`` `Hello ${name}` ``) ở đây vì nó là cú pháp ES6.

---

### IV. Vòng lặp

#### 1. `for`

##### a. Cú pháp:

```js
for (var i = 0; i < 5; i++) {
  console.log("Lần thứ " + i);
}
```

##### b. Ứng dụng duyệt mảng:

```js
var colors = ["red", "green", "blue"];
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

#### 2. `while`

##### a. Cú pháp:

```js
var i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
```

#### 3. `do...while`

##### a. Cú pháp:

```js
var i = 0;
do {
  console.log(i);
  i++;
} while (i < 3);
```

#### 4. `for...in` (dành cho object)

```js
var student = {
  name: "Alice",
  age: 20,
  grade: "A"
};

for (var key in student) {
  console.log(key + ": " + student[key]);
}
```

##### ❗ Cảnh báo:

* `for...in` không dùng cho **mảng**, vì có thể duyệt cả các thuộc tính không mong muốn.

#### 5. Thoát vòng lặp và bỏ qua bước lặp

| Lệnh       | Ý nghĩa                                       | Ví dụ                   |
| ---------- | --------------------------------------------- | ----------------------- |
| `break`    | Thoát khỏi vòng lặp ngay lập tức              | `if (i == 3) break;`    |
| `continue` | Bỏ qua bước lặp hiện tại, sang vòng tiếp theo | `if (i == 2) continue;` |

---

### V. Function: Các loại Function và Sự khác biệt

#### 1. Khái niệm

* **Function** (hàm) là **tập hợp các câu lệnh** thực hiện một nhiệm vụ cụ thể.
* Hàm giúp **tái sử dụng mã**, chia nhỏ chương trình thành các phần dễ hiểu hơn.

#### 2. Cách khai báo hàm

##### a. Function Declaration (khai báo hàm kiểu chuẩn)

```js
function greet(name) {
  console.log("Hello, " + name);
}

greet("Alice");
```

##### Đặc điểm:

* Có **hoisting**: Có thể gọi hàm trước khi định nghĩa nó.
* Phù hợp cho phần lớn trường hợp.

##### b. Function Expression (hàm là biểu thức)

```js
var greet = function(name) {
  console.log("Hi, " + name);
};

greet("Bob");
```

##### Đặc điểm:

* Không có **hoisting**: phải khai báo trước rồi mới được gọi.
* Được sử dụng khi cần gán hàm cho biến, truyền hàm làm tham số,...

##### c. Named Function Expression (hàm biểu thức có tên)

```js
var sayHello = function hello(name) {
  console.log("Xin chào, " + name);
};

sayHello("Charlie");
// hello("Charlie"); LỖI: vì tên hello chỉ có hiệu lực bên trong hàm
```

##### Đặc điểm:

* Tên `hello` chỉ dùng bên trong hàm (để đệ quy nếu cần).
* Ít dùng nhưng quan trọng trong đệ quy.

#### 3. So sánh Function Declaration và Function Expression

| Đặc điểm               | Function Declaration       | Function Expression           |
| ---------------------- | -------------------------- | ----------------------------- |
| Có hoisting không?     | ✅ Có (gọi trước cũng được) | ❌ Không có                    |
| Gọi trước khi khai báo | Được                       | Không được                    |
| Cách định nghĩa        | `function tên() {}`        | `var tên = function() {}`     |
| Đặt tên bắt buộc?      | ✅ Bắt buộc                 | Có thể vô danh (anonymous)    |
| Linh hoạt hơn          | ❌ Ít linh hoạt hơn         | ✅ Linh hoạt hơn (truyền biến) |

#### 4. Truyền tham số và giá trị trả về

##### a. Hàm có trả về giá trị (`return`)

```js
function sum(a, b) {
  return a + b;
}

var result = sum(2, 3);
console.log(result); // 5
```

##### b. Hàm không trả về (`return` bị thiếu)

```js
function sayHello() {
  console.log("Hello world");
}

var x = sayHello(); // undefined
```

#### 5. Tham số và đối số

##### a. Tham số (parameter): biến định nghĩa trong hàm

##### b. Đối số (argument): giá trị truyền vào khi gọi hàm

```js
function multiply(a, b) { // a, b là tham số
  return a * b;
}

multiply(2, 5); // 2, 5 là đối số
```


#### 6. `arguments` object (ES5 đặc trưng)

* Là một **đối tượng giống mảng**, chứa toàn bộ đối số truyền vào hàm.
* Dùng khi bạn **không biết trước bao nhiêu đối số**.

```js
function showArguments() {
  for (var i = 0; i < arguments.length; i++) {
    console.log("Đối số thứ " + i + ": " + arguments[i]);
  }
}

showArguments("a", "b", 3, true);
```

#### 7. Hàm lồng nhau (Nested Functions)

```js
function outer() {
  function inner() {
    console.log("Đây là hàm bên trong");
  }
  inner();
}

outer();
```

---

### VI. Array Method: Map, Reduce, Filter, Includes, Group, Some, Every

#### 1. `map()`

**Mô tả:**

* Tạo ra **một mảng mới** bằng cách áp dụng một hàm lên **từng phần tử của mảng gốc**.
* Không thay đổi mảng cũ.

**Cú pháp:**

```js
array.map(function(element, index, array) {
  // return giá trị mới
});
```

**Ví dụ:**

```js
var numbers = [1, 2, 3];
var squared = numbers.map(function(n) {
  return n * n;
});
console.log(squared); // [1, 4, 9]
```

#### 2. `filter()`

**Mô tả:**

* Trả về **mảng mới** gồm các phần tử **thỏa mãn điều kiện**.
* Không thay đổi mảng cũ.

**Cú pháp:**

```js
array.filter(function(element, index, array) {
  return điều_kiện;
});
```

**Ví dụ:**

```js
var nums = [1, 2, 3, 4, 5];
var even = nums.filter(function(n) {
  return n % 2 === 0;
});
console.log(even); // [2, 4]
```

#### 3. `reduce()`

**Mô tả:**

* Duyệt qua từng phần tử và **tích lũy** kết quả thành một giá trị duy nhất.

**Cú pháp:**

```js
array.reduce(function(tổngTạm, phầnTử, index, array) {
  return giáTrịTổngMới;
}, giá_trị_khởi_tạo);
```

**Ví dụ:**

```js
var nums = [1, 2, 3, 4];
var sum = nums.reduce(function(total, current) {
  return total + current;
}, 0);
console.log(sum); // 10
```


#### 4. `some()`

**Mô tả:**

* Trả về `true` nếu **ít nhất một phần tử** thỏa mãn điều kiện.

**Ví dụ:**

```js
var numbers = [1, 3, 5, 7];
var hasEven = numbers.some(function(n) {
  return n % 2 === 0;
});
console.log(hasEven); // false
```

#### 5. `every()`

**Mô tả:**

* Trả về `true` nếu **tất cả phần tử** thỏa mãn điều kiện.

**Ví dụ:**

```js
var numbers = [2, 4, 6];
var allEven = numbers.every(function(n) {
  return n % 2 === 0;
});
console.log(allEven); // true
```

#### 6. `includes()` (ES6)

**Mô tả:**

* Trả về `true` nếu mảng **chứa giá trị được kiểm tra**, ngược lại `false`.
* Thay thế đơn giản hơn `indexOf`.

**Cú pháp:**

```js
array.includes(giá_trị, vị_trí_bắt_đầu);
```

**Ví dụ:**

```js
const names = ["Alice", "Bob", "Charlie"];
console.log(names.includes("Bob"));      // true
console.log(names.includes("David"));    // false
```


#### 7. `group()` (ES2023+ — dùng `groupBy()` nếu hỗ trợ), hoặc viết tay ES6

**Cách 1: Dùng `Array.prototype.groupBy()` (hiện có trong ES2023)**

> Một số trình duyệt/chạy môi trường Node.js chưa hỗ trợ. Chạy được ở Chrome 117+, Node 20+.

```js
const people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 20 }
];

const grouped = people.groupBy(person => person.age);
console.log(grouped);
/*
{
  20: [ { name: "Alice", age: 20 }, { name: "Carol", age: 20 } ],
  30: [ { name: "Bob", age: 30 } ]
}
*/
```

**Cách 2: Viết tay bằng ES6 (`reduce`, `const`, arrow function\`)**

```js
const people = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Carol", age: 20 }
];

const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
};

const grouped = groupBy(people, "age");
console.log(grouped);
/*
{
  20: [ { name: "Alice", age: 20 }, { name: "Carol", age: 20 } ],
  30: [ { name: "Bob", age: 30 } ]
}
*/
```

---

### VII. Callback và Higher-Order Function

#### 1. Callback Function

##### a. Khái niệm

**Callback** là một hàm được truyền **như đối số** vào một hàm khác và được **gọi lại (callback)** sau khi một công việc nào đó hoàn tất.

➡ Cơ chế này rất phổ biến trong JavaScript, đặc biệt khi làm việc với **bất đồng bộ (asynchronous)** như: đọc file, truy cập API, timeout, v.v.

##### b. Ví dụ đơn giản (ES5)

```js
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);
```

**Kết quả:**

```
Hello Alice
Goodbye!
```

##### c. Ứng dụng phổ biến

```js
setTimeout(function () {
  console.log("3 giây sau");
}, 3000);
```

#### 2. Higher-Order Function

##### a. Khái niệm

Một **Higher-Order Function (HOF)** là một hàm thỏa **ít nhất một trong hai điều kiện sau**:

* **Nhận một hàm khác làm đối số**
* **Trả về một hàm khác**

➡ HOF là **trung tâm** của lập trình hàm (functional programming) trong JavaScript.

##### b. Ví dụ nhận hàm làm đối số:

```js
function processNumber(num, callback) {
  return callback(num);
}

function double(n) {
  return n * 2;
}

console.log(processNumber(5, double)); // 10
```

##### c. Ví dụ trả về một hàm:

```js
function greeting(message) {
  return function (name) {
    console.log(message + ", " + name);
  };
}

var greetHello = greeting("Hello");
greetHello("Bob"); // Hello, Bob
```

#### 3. So sánh Callback vs HOF

| Đặc điểm         | Callback Function                   | Higher-Order Function                           |
| ---------------- | ----------------------------------- | ----------------------------------------------- |
| Vai trò          | Được truyền vào làm đối số          | Nhận/trả về một hoặc nhiều hàm                  |
| Mục đích chính   | Gọi lại sau khi việc gì đó hoàn tất | Tạo ra logic tổng quát và tái sử dụng linh hoạt |
| Ví dụ thường gặp | `setTimeout`, `map`, `filter`       | `Array.map`, `Array.filter`, `createFunction()` |


## B. Phần 2: JavaScript ES6

### I. `var`, `let`, `const`: Định nghĩa, phân biệt

#### 1. `var`

##### a. Định nghĩa

`var` là cách khai báo biến **cũ** (trước ES6). Khi dùng `var`, biến có **phạm vi function** hoặc **global**, không phải **block**.

##### b. Đặc điểm

* **Hoisting**: Biến khai báo bằng `var` được "kéo lên đầu" (hoisted) và được gán giá trị `undefined`.
* **Cho phép khai báo lại** trong cùng một scope.
* **Không có block scope** (phạm vi khối lệnh), chỉ có function scope.

##### c. Ví dụ

```js
function testVar() {
  console.log(a); // undefined (hoisted)
  var a = 5;
  console.log(a); // 5
}
testVar();
```

#### 2. `let`

##### a. Định nghĩa

`let` là cách khai báo biến **mới từ ES6**. Biến có **phạm vi block** – nghĩa là chỉ tồn tại trong `{ }`.

##### b. Đặc điểm

* **Có block scope** (phạm vi trong khối `{}`).
* **Không cho phép khai báo lại** trong cùng một scope.
* **Có hoisting**, nhưng **không thể truy cập trước khi khai báo** → Gây ra lỗi **ReferenceError** (do tồn tại “Temporal Dead Zone”).

##### c. Ví dụ

```js
function testLet() {
  // console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
  let b = 10;
  console.log(b); // 10
}
testLet();
```

#### 3. `const`

##### a. Định nghĩa

`const` là cách khai báo **biến hằng** – giá trị không thể gán lại.
Biến `const` cũng có **block scope** như `let`.

##### b. Đặc điểm

* Phải **gán giá trị ngay khi khai báo**.
* Không được **gán lại giá trị khác** sau khi khai báo.
* Nếu `const` là **object** hoặc **array**, bạn vẫn **có thể thay đổi nội dung** bên trong (nhưng không gán lại biến khác được).

##### c. Ví dụ

```js
const x = 3;
// x = 4; // ❌ Error: Assignment to constant variable

const arr = [1, 2];
arr.push(3); // ✅ Được phép
console.log(arr); // [1, 2, 3]
```

#### 4. So sánh tổng hợp

| Đặc điểm                      | `var`         | `let`          | `const`        |
| ----------------------------- | ------------- | -------------- | -------------- |
| Phạm vi (Scope)               | Function      | Block          | Block          |
| Có hoisting                   | ✅ Có          | ✅ Có (TDZ)     | ✅ Có (TDZ)     |
| Truy cập trước khi khai báo   | ✅ `undefined` | ❌ Lỗi          | ❌ Lỗi          |
| Gán lại giá trị               | ✅ Có thể      | ✅ Có thể       | ❌ Không thể    |
| Khai báo lại trong cùng scope | ✅ Có thể      | ❌ Không thể    | ❌ Không thể    |
| Bắt buộc gán khi khai báo     | ❌ Không       | ❌ Không        | ✅ Bắt buộc     |
| Sử dụng phổ biến hiện nay     | ❌ Không nên   | ✅ Rất phổ biến | ✅ Rất phổ biến |

#### 5. Code ví dụ tổng hợp

```js
let name = "Alice";
name = "Bob";         // ✅ OK

const pi = 3.14;
// pi = 3.14159;      // ❌ Error: không thể gán lại

var x = 10;
{
  var x = 20;         // ❗ Ghi đè biến bên ngoài (var là function-scope)
  console.log(x);     // 20
}
console.log(x);       // 20 (do bị ghi đè)

let y = 10;
{
  let y = 20;         // block-scope, không ảnh hưởng biến ngoài
  console.log(y);     // 20
}
console.log(y);       // 10
```

---

### II. Arrow Function (`=>`) và Từ khóa `this`

#### 1. Arrow Function (`=>`)

##### a. Định nghĩa

Arrow function là cú pháp mới từ ES6 giúp viết hàm ngắn gọn hơn.
Cú pháp sử dụng toán tử `=>` (fat arrow) thay vì từ khóa `function`.

##### b. Cú pháp cơ bản

```js
// Cách viết thông thường
const add = function(a, b) {
  return a + b;
};

// Arrow function tương đương
const add = (a, b) => {
  return a + b;
};
```

##### c. Rút gọn với return ngầm (implicit return)

Khi hàm chỉ có 1 câu lệnh và trả về giá trị, có thể viết ngắn hơn:

```js
const square = x => x * x;
```

> Nếu chỉ có 1 tham số, có thể bỏ dấu ngoặc `()`. Nếu có 0 hoặc nhiều hơn 1 tham số thì phải có `()`.

```js
const sayHi = () => console.log("Hello");
```

#### 2. So sánh Arrow Function với Function thường

| Tiêu chí                    | Arrow Function                  | Function thường        |
| --------------------------- | ------------------------------- | ---------------------- |
| Cú pháp                     | Ngắn gọn, không dùng `function` | Dùng `function` đầy đủ |
| Có `this` riêng             | ❌ Không có                      | ✅ Có `this` riêng      |
| Dùng làm phương thức object | ❌ Không nên                     | ✅ Nên dùng             |
| Có `arguments` object       | ❌ Không có                      | ✅ Có                   |
| Dùng trong constructor      | ❌ Không dùng được               | ✅ Dùng được            |

#### 3. `this` trong JavaScript

##### a. `this` là gì?

`this` là **từ khóa đặc biệt** dùng để tham chiếu đến **ngữ cảnh thực thi hiện tại** (context).

Nghĩa là `this` trỏ đến **đối tượng đang sở hữu hàm**, **window**, hoặc một giá trị phụ thuộc vào cách hàm được gọi.

##### b. `this` trong function thường

Trong hàm thường, `this` **phụ thuộc vào ngữ cảnh gọi hàm**.

```js
const obj = {
  name: "Alice",
  sayHi: function () {
    console.log("Hi " + this.name);
  }
};
obj.sayHi(); // Hi Alice
```

```js
function globalFunc() {
  console.log(this); // Trong trình duyệt: this = window
}
globalFunc();
```

##### c. `this` trong arrow function

**Arrow function không có `this` riêng.** Nó **kế thừa `this` từ phạm vi cha (lexical this)**.

```js
const obj = {
  name: "Alice",
  sayHi: function () {
    const inner = () => {
      console.log("Hi " + this.name);
    };
    inner();
  }
};
obj.sayHi(); // Hi Alice
```

Ngược lại, nếu dùng function thường bên trong:

```js
const obj = {
  name: "Alice",
  sayHi: function () {
    function inner() {
      console.log("Hi " + this.name); // ❌ this = window (undefined)
    }
    inner();
  }
};
obj.sayHi(); // Hi undefined (trong strict mode sẽ là undefined)
```

#### 4. Kết luận nên dùng khi nào

* Dùng **arrow function** cho các hàm callback, xử lý đơn giản, không cần `this`.
* Dùng **function thường** khi bạn cần `this` gắn với object hoặc dùng trong constructor.
* Không dùng arrow function cho phương thức trong object (method) hoặc constructor.

---

### III. Template Literals

#### 1. Định nghĩa

**Template Literals** là cú pháp mới từ ES6 (ES2015), cho phép bạn:

* Chèn biến và biểu thức trực tiếp vào chuỗi.
* Tạo chuỗi nhiều dòng dễ dàng mà không cần dấu `\n`.
* Dễ đọc và viết hơn so với cách nối chuỗi truyền thống.

> Template Literals sử dụng dấu **backtick** (`` ` ``) thay vì dấu nháy đơn `' '` hay nháy kép `" "`.
 
#### 2. Cú pháp

```js
const name = "Alice";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // My name is Alice and I am 25 years old.
```

#### Bên trong `${}` bạn có thể đặt bất kỳ biểu thức hợp lệ nào:

```js
const a = 5;
const b = 10;
console.log(`The sum is ${a + b}`); // The sum is 15
```

#### 3. So sánh với cách nối chuỗi truyền thống

##### a. Trước ES6 (cách cũ):

```js
const name = "Alice";
const age = 25;
const message = "My name is " + name + " and I am " + age + " years old.";
```

##### b. Với Template Literals:

```js
const message = `My name is ${name} and I am ${age} years old.`;
```

✅ Dễ đọc hơn, ít lỗi hơn.


#### 4. Chuỗi nhiều dòng

##### a. Trước ES6:

```js
const text = "Line 1\n" +
             "Line 2\n" +
             "Line 3";
```

##### b. Với Template Literals:

```js
const text = `Line 1
Line 2
Line 3`;
```

✅ Không cần nối chuỗi hay `\n`.

---


### IV. Destructuring, Rest Parameter, Spread

#### 1. **Destructuring (Phá cấu trúc)**

##### a. Định nghĩa:

**Destructuring** cho phép **tách giá trị từ array hoặc object** và gán trực tiếp vào biến một cách ngắn gọn, thay vì phải truy cập từng phần tử theo cách thủ công.

##### b. Array Destructuring

```js
const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

###### Bỏ qua phần tử:

```js
const [x, , y] = [10, 20, 30];
console.log(x); // 10
console.log(y); // 30
```

##### c. Object Destructuring

```js
const user = {
  name: "Alice",
  age: 25,
  city: "Hanoi"
};

const { name, age } = user;

console.log(name); // Alice
console.log(age);  // 25
```

###### Đổi tên biến:

```js
const { city: userCity } = user;
console.log(userCity); // Hanoi
```

##### d. Destructuring trong tham số hàm

```js
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age}`);
}

greet({ name: "Bob", age: 30 });
```

✅ Cách này giúp code ngắn gọn hơn khi truyền object.

#### 2. **Rest Parameter (`...`)**

##### a. Định nghĩa:

**Rest Parameter** gom nhiều đối số thành một mảng. Thường dùng khi không biết trước số lượng đối số.

```js
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10, 15, 20)); // 50
```

##### b. Kết hợp với destructuring

```js
const [first, ...others] = [1, 2, 3, 4];
console.log(first);  // 1
console.log(others); // [2, 3, 4]
```

#### 3. **Spread Operator (`...`)**

##### a. Định nghĩa:

**Spread** giúp **trải (mở rộng)** một array hoặc object thành từng phần tử riêng lẻ.

##### b. Spread với array

```js
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1, 2, 3, 4]
```

###### Dùng để sao chép array:

```js
const copy = [...arr1];
```

##### c. Spread với object

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

###### Dùng để ghi đè:

```js
const obj3 = { a: 10, ...obj1 }; 
console.log(obj3); // { a: 1, b: 2 } (vì `a: 1` trong obj1 ghi đè `a: 10`)
```

#### 4. Tổng kết: Khác biệt giữa Rest và Spread

| Tính năng  | Vị trí sử dụng                          | Tác dụng                         |
| ---------- | --------------------------------------- | -------------------------------- |
| **Rest**   | Trong **tham số** hàm, **trái** dấu `=` | Gom nhiều phần tử thành 1 mảng   |
| **Spread** | Trong **giá trị**/**phải** dấu `=`      | Trải mảng/object ra từng phần tử |

---

### V. Modules: `export`, `import`

#### 1. **Vấn đề khi không dùng Module**

Trước ES6, nếu bạn viết nhiều file JavaScript, việc chia tách và quản lý code gặp vấn đề:

* Tất cả biến, hàm đều thuộc phạm vi toàn cục (`global scope`) → dễ bị **đụng tên** (conflict).
* Khó tái sử dụng và bảo trì mã nguồn.
* Không có cách chính thống để "chia sẻ" hàm từ file này sang file khác.

➡️ **ES6 Modules** giải quyết vấn đề này bằng cách cung cấp cú pháp `export` và `import`.

#### 2. **Khái niệm cơ bản**

* **Module**: mỗi file `.js` riêng biệt được coi là 1 module.
* Có thể `export` (xuất ra) biến, hàm, lớp từ 1 file.
* Dùng `import` (nhập vào) từ file khác để sử dụng.

#### 3. **Export**

##### a. Export Named (Xuất theo tên)

```js
// math.js
export const PI = 3.14;
export function add(a, b) {
  return a + b;
}
```

##### b. Export Default (Xuất mặc định - chỉ được 1 lần với mỗi file)

```js
// greet.js
export default function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

#### 4. **Import**

##### a. Import Named

```js
// main.js
import { PI, add } from './math.js';

console.log(PI); // 3.14
console.log(add(2, 3)); // 5
```

✅ Có thể đổi tên khi import:

```js
import { add as sum } from './math.js';
console.log(sum(1, 2)); // 3
```

##### b. Import Default

```js
import greet from './greet.js';

greet("Alice"); // Hello, Alice!
```

✅ Import default không cần `{}` và có thể đặt tên bất kỳ.

##### c. Import kết hợp cả default và named

```js
// utils.js
export const log = (x) => console.log(x);
export default function sayHi(name) {
  console.log(`Hi ${name}`);
}
```

```js
// main.js
import sayHi, { log } from './utils.js';

sayHi("Tom"); // Hi Tom
log("Testing"); // Testing
```

#### 5. **Gộp tất cả exports lại khi import**

```js
// math.js
export const PI = 3.14;
export const add = (a, b) => a + b;
```

```js
// main.js
import * as MathUtil from './math.js';

console.log(MathUtil.PI);
console.log(MathUtil.add(2, 4));
```


#### 6. **Lưu ý khi dùng Module**

* Khi chạy bằng **trình duyệt**, file `.js` phải được khai báo `type="module"` trong `<script>`:

```html
<script type="module" src="main.js"></script>
```

* Nếu chạy bằng Node.js:

  * Dùng `import/export` cần thêm `"type": "module"` trong `package.json`
  * Hoặc đổi tên file thành `.mjs`
  * **Hoặc** dùng CommonJS (cũ): `module.exports` và `require`

#### 7. Tổng kết

| Loại    | Cú pháp export         | Cú pháp import               | Ghi chú                 |
| ------- | ---------------------- | ---------------------------- | ----------------------- |
| Named   | `export const a = ...` | `import { a } from '...'`    | Có thể export nhiều     |
| Default | `export default ...`   | `import x from '...'`        | Chỉ 1 cái mỗi file      |
| All     | —                      | `import * as obj from '...'` | Gom tất cả vào 1 object |

## C. Phần 3: DOM

### I. Giới thiệu & khái niệm JS DOM

#### 1. DOM là gì?

DOM (Document Object Model) là **mô hình dạng cây** (tree) mà trình duyệt tạo ra từ **file HTML**. Mỗi phần tử trong HTML (như `div`, `p`, `button`,...) sẽ trở thành một **node** trong cây DOM, cho phép JavaScript **truy cập và thao tác** chúng.

> DOM biến HTML thành đối tượng mà JavaScript có thể xử lý được.

#### 2. Mối quan hệ giữa HTML và DOM

Khi bạn mở một file HTML trên trình duyệt:

* Trình duyệt phân tích (parse) HTML
* Tạo ra **DOM Tree** từ HTML đó
* Mỗi phần tử HTML tương ứng với một **DOM node**
* JavaScript dùng DOM API để **thay đổi nội dung, thêm, xoá, hoặc lắng nghe sự kiện**

🔁 Mọi thay đổi trong DOM bằng JavaScript đều **thay đổi trực tiếp trên trang web** mà người dùng đang xem.

#### 3. Ví dụ minh hoạ mối quan hệ

##### a. HTML:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Chào bạn</h1>
    <button onclick="changeText()">Đổi tiêu đề</button>

    <script>
      function changeText() {
        var element = document.getElementById("title");
        element.innerHTML = "Đã đổi rồi!";
      }
    </script>
  </body>
</html>
```

##### b. Giải thích:

* Khi trang mở, trình duyệt tạo một DOM Tree từ HTML
* `document.getElementById("title")` giúp truy cập node `<h1>`
* `innerHTML = "Đã đổi rồi!"` sẽ **thay đổi nội dung bên trong phần tử đó**

#### 4. Cấu trúc DOM Tree

Ví dụ với đoạn HTML sau:

```html
<html>
  <body>
    <p>Hello</p>
  </body>
</html>
```

Sẽ tạo ra DOM Tree như sau:

```
Document
└── html
    └── body
        └── p
            └── "Hello"
```

* **Document** là gốc
* Mỗi thẻ là một **element node**
* Nội dung chữ là **text node**

#### 5. DOM API

JavaScript cung cấp nhiều phương thức để tương tác với DOM, ví dụ:

| Phương thức                     | Tác dụng                                      |
| ------------------------------- | --------------------------------------------- |
| `getElementById(id)`            | Tìm phần tử theo ID                           |
| `getElementsByTagName(tag)`     | Tìm tất cả phần tử theo tag name              |
| `getElementsByClassName(class)` | Tìm tất cả theo class                         |
| `querySelector(selector)`       | Trả về phần tử đầu tiên khớp với CSS selector |
| `querySelectorAll(selector)`    | Trả về tất cả phần tử khớp với selector       |

> Chúng ta sẽ tìm hiểu chi tiết trong phần **II. Truy cập phần tử DOM**

#### 6 `document` là gì?

Trong JavaScript:

```js
console.log(document);
```

* `document` là **đối tượng gốc** đại diện cho toàn bộ HTML.
* Từ `document`, bạn có thể truy cập bất kỳ thành phần nào như `body`, `h1`, `div`, v.v.

Ví dụ:

```js
document.getElementById("myDiv");
document.querySelector("h1");
document.body.style.backgroundColor = "lightblue";
```

#### 7. DOM là một phần của trình duyệt, không phải JavaScript thuần

DOM không thuộc về ngôn ngữ JavaScript, mà là **Web API** do trình duyệt cung cấp cho JavaScript sử dụng. Nếu chạy JS trong môi trường không có trình duyệt (ví dụ Node.js), thì không có `document`, `window`,...

---

## II. DOM Attribute

### 1. Attribute là gì?

**Attribute (thuộc tính)** trong HTML là những thông tin **bổ sung** được khai báo bên trong **thẻ mở** của phần tử HTML.
Ví dụ:

```html
<img src="avatar.jpg" alt="Ảnh đại diện" id="myImage" width="200">
```

Ở đây, `src`, `alt`, và `width` là các thuộc tính (attributes) của phần tử `<img>`.

Trong DOM, bạn có thể **truy cập, đọc, ghi, xoá các thuộc tính này bằng JavaScript** thông qua các phương thức và thuộc tính tương ứng.

### 2. Truy cập thuộc tính bằng JavaScript

Có 2 cách thường dùng:

#### a. Dùng dấu chấm `.` để truy cập thuộc tính phổ biến

```js
var img = document.getElementById("myImage");
console.log(img.src);      // Lấy đường dẫn hình ảnh
img.alt = "Ảnh mới";        // Gán lại thuộc tính alt
```

> Cách này chỉ dùng được cho **các thuộc tính phổ biến**, được trình duyệt hỗ trợ sẵn (như `src`, `href`, `value`, `id`, `className`,...)

#### b. Dùng phương thức `getAttribute()`, `setAttribute()`, `removeAttribute()`

Cách này **linh hoạt hơn**, dùng được với **mọi thuộc tính**, kể cả thuộc tính tùy biến.

```html
<input id="myInput" type="text" value="hello" custom-data="123">
```

```js
var input = document.getElementById("myInput");

// Lấy thuộc tính
console.log(input.getAttribute("type"));        // → "text"
console.log(input.getAttribute("custom-data")); // → "123"

// Gán lại thuộc tính
input.setAttribute("value", "new value");

// Xoá thuộc tính
input.removeAttribute("custom-data");
```

### 3. So sánh `property` vs `attribute`

| Tiêu chí | Property (thuộc tính JS)                      | Attribute (HTML gốc)           |
| -------- | --------------------------------------------- | ------------------------------ |
| Truy cập | `element.id`, `element.value`,...             | `getAttribute("id")`,...       |
| Tác động | **Giá trị hiện tại** (thay đổi theo thao tác) | **Giá trị ban đầu** trong HTML |
| Đồng bộ  | Không luôn giống nhau                         | Không luôn giống nhau          |

**Ví dụ minh hoạ:**

```html
<input id="myInput" type="text" value="hello">
```

```js
var input = document.getElementById("myInput");

// Người dùng gõ thành "hi" trong ô input

console.log(input.value);              // → "hi"
console.log(input.getAttribute("value")); // → "hello"
```

> 👉 `value` là **property** đã thay đổi theo hành động người dùng
> 👉 `getAttribute("value")` vẫn trả về **giá trị ban đầu** trong HTML

### 4. Ghi nhớ nhanh

| Mục đích                           | Nên dùng gì                              |
| ---------------------------------- | ---------------------------------------- |
| Lấy/đổi giá trị đang hiển thị      | `element.property` (VD: `element.value`) |
| Đọc/ghi giá trị ban đầu trong HTML | `getAttribute()` / `setAttribute()`      |
| Làm việc với thuộc tính tùy biến   | `getAttribute()` / `setAttribute()`      |

---

## III. DOM CSS

### 1. Truy cập và thay đổi CSS bằng JavaScript

JavaScript cho phép **đọc, ghi và thay đổi CSS** của các phần tử HTML thông qua thuộc tính `style`.

#### a. Cú pháp cơ bản

```js
element.style.propertyName = "giá trị";
```

> `propertyName` là tên thuộc tính CSS nhưng viết theo kiểu **camelCase** (không có dấu gạch nối `-`).

**Ví dụ:**

```html
<div id="box">Nội dung</div>
```

```js
var box = document.getElementById("box");
box.style.color = "red";           // Thay đổi màu chữ
box.style.backgroundColor = "yellow"; // Thay đổi màu nền
box.style.fontSize = "20px";       // Đổi kích thước chữ
```

### 2. Ghi nhớ: Tên thuộc tính CSS phải dùng camelCase

| CSS gốc            | JavaScript (camelCase) |
| ------------------ | ---------------------- |
| `background-color` | `backgroundColor`      |
| `font-size`        | `fontSize`             |
| `text-align`       | `textAlign`            |

> Sai: `box.style.font-size = "20px"`
> Đúng: `box.style.fontSize = "20px"`

### 3. Lấy giá trị CSS tính toán từ trình duyệt

Dùng `window.getComputedStyle(element)` để lấy **giá trị đã được trình duyệt tính toán**, kể cả khi không được khai báo trực tiếp bằng `style`.

```js
var computed = window.getComputedStyle(box);
console.log(computed.color);          // → Màu thực tế hiển thị
console.log(computed.fontSize);       // → Kích thước thực tế
```

### 4. Thêm hoặc xoá class CSS

Thay vì thay đổi từng thuộc tính một, bạn có thể thao tác qua `classList`.

#### a. Thêm class

```js
box.classList.add("active");
```

#### b. Xoá class

```js
box.classList.remove("active");
```

#### c. Kiểm tra class tồn tại

```js
if (box.classList.contains("active")) {
  console.log("Đã có class active");
}
```

#### d. Chuyển đổi class (toggle)

##### Ý nghĩa:

Câu lệnh trên sẽ **thêm hoặc gỡ bỏ class `active`** khỏi phần tử có biến `box`, **tuỳ theo việc class đó đang có hay không.**

* Nếu `box` **chưa có class `active`** → thì **nó sẽ được thêm vào**
* Nếu `box` **đã có class `active`** → thì **nó sẽ bị gỡ ra**

```js
box.classList.toggle("active");
```

### 5. Khi nào nên dùng `style` và khi nào nên dùng `classList`?

| Mục đích                                | Nên dùng gì              |
| --------------------------------------- | ------------------------ |
| Thay đổi 1 vài thuộc tính cụ thể        | `element.style.property` |
| Gán nhanh nhiều hiệu ứng qua class      | `element.classList`      |
| Kiểm tra/truy vấn các giá trị tính toán | `getComputedStyle()`     |

---

## IV. DOM Events

### 1. Khái niệm

**DOM Events (Sự kiện)** là cách JavaScript **phản ứng với hành động của người dùng** trên trang web, như: click chuột, nhập bàn phím, rê chuột, cuộn trang,…

JavaScript **lắng nghe các sự kiện** rồi **thực thi hàm xử lý sự kiện** (gọi là *event handler*).

### 2. Cách thêm sự kiện vào phần tử

#### a. Cách 1: Gán trực tiếp qua thuộc tính HTML

```html
<button onclick="sayHello()">Click me</button>
```

```js
function sayHello() {
  alert("Xin chào!");
}
```

> Cách này đơn giản nhưng **không khuyến khích** vì không tách biệt HTML và JS.

#### b. Cách 2: Gán trực tiếp trong JS với `element.onclick`

```html
<button id="btn">Click</button>
```

```js
var btn = document.getElementById("btn");
btn.onclick = function () {
  alert("Đã click");
};
```

> ❗ Ghi đè sự kiện cũ nếu gán nhiều lần (`btn.onclick = ...` chỉ giữ sự kiện cuối cùng).

#### c. Cách 3 (Khuyên dùng): Dùng `addEventListener`

```js
btn.addEventListener("click", function () {
  alert("Click lần nữa!");
});
```

* Có thể gán **nhiều sự kiện cùng lúc**.
* Tách biệt HTML và JS rõ ràng hơn.
* Hỗ trợ gỡ sự kiện bằng `removeEventListener`.

### 3. Một số loại sự kiện thường dùng

| Sự kiện     | Kích hoạt khi...                  |
| ----------- | --------------------------------- |
| `click`     | Người dùng nhấn chuột             |
| `dblclick`  | Nhấn đúp chuột                    |
| `mouseover` | Chuột đi vào phần tử              |
| `mouseout`  | Chuột rời khỏi phần tử            |
| `keydown`   | Nhấn phím bất kỳ                  |
| `keyup`     | Nhả phím sau khi nhấn             |
| `input`     | Người dùng nhập trong ô input     |
| `change`    | Thay đổi giá trị của select/input |
| `submit`    | Gửi form                          |
| `scroll`    | Cuộn trang                        |
| `load`      | Trang (hoặc ảnh) tải xong         |

### 4. Đối tượng `event`

Khi xử lý sự kiện, ta có thể truy cập đối tượng `event` để biết thêm chi tiết về hành động đó.

```js
btn.addEventListener("click", function (event) {
  console.log("Sự kiện:", event.type);       // click
  console.log("Vị trí chuột:", event.clientX, event.clientY);
});
```

### 5. Gỡ sự kiện

Chỉ gỡ được khi:

* Dùng `addEventListener`.
* Hàm xử lý phải là **hàm được đặt tên (không phải ẩn danh)**.

```js
function handleClick() {
  alert("Hello");
}

btn.addEventListener("click", handleClick);

// Gỡ sau 5 giây
setTimeout(function () {
  btn.removeEventListener("click", handleClick);
}, 5000);
```

### 6. Ngăn hành vi mặc định

Một số thẻ có **hành vi mặc định**, ví dụ: thẻ `<a>` sẽ điều hướng trang, thẻ `<form>` sẽ reload khi submit.

Dùng `event.preventDefault()` để ngăn:

```html
<a href="https://google.com" id="link">Đi đến Google</a>
```

```js
document.getElementById("link").addEventListener("click", function (event) {
  event.preventDefault(); // Ngăn điều hướng
  alert("Không đi đâu cả :V");
});
```

---

## V. `innerText`, `textContent`, `innerHTML`

### 1. Giới thiệu

Đây là **3 thuộc tính** quan trọng trong DOM được dùng để **truy cập hoặc thay đổi nội dung của phần tử HTML**.

| Thuộc tính    | Trả về gì?                                | Có phân tích HTML không? | Ẩn/Hiện theo CSS? |
| ------------- | ----------------------------------------- | ------------------------ | ----------------- |
| `innerText`   | Nội dung có thể nhìn thấy (hiển thị)      | ❌ Không phân tích HTML   | ✅ Có              |
| `textContent` | Tất cả văn bản (dù có hiển thị hay không) | ❌ Không phân tích HTML   | ❌ Không           |
| `innerHTML`   | Chuỗi HTML bên trong phần tử              | ✅ Có phân tích HTML      | ❌ Không           |

### 2. So sánh qua ví dụ

```html
<div id="demo">
  Hello <span style="display: none;">world</span>
</div>
```

```js
var div = document.getElementById("demo");

console.log(div.innerText);     // "Hello"        (ẩn phần world)
console.log(div.textContent);   // "Hello world"  (lấy cả nội dung ẩn)
console.log(div.innerHTML);     // "Hello <span style="display: none;">world</span>"
```

### 3. Dùng để thay đổi nội dung

#### a. `innerText`

Chỉ thay đổi văn bản hiển thị:

```js
div.innerText = "Xin chào!";
```

#### b. `textContent`

Thay đổi toàn bộ nội dung văn bản (kể cả nếu nó không hiển thị):

```js
div.textContent = "Nội dung mới (ẩn cũng bị thay)";
```

#### c. `innerHTML`

Cho phép thêm cả thẻ HTML:

```js
div.innerHTML = "<b>Chữ in đậm</b> và <i>nghiêng</i>";
```

> Cẩn thận với `innerHTML`, vì có thể tạo ra lỗ hổng **XSS** nếu nội dung chứa mã người dùng nhập.

### 4. Khi nào dùng thuộc tính nào?

| Mục đích                          | Nên dùng      |
| --------------------------------- | ------------- |
| Lấy nội dung người dùng nhìn thấy | `innerText`   |
| Lấy toàn bộ nội dung dạng text    | `textContent` |
| Lấy hoặc ghi nội dung có thẻ HTML | `innerHTML`   |

---

## VI. PreventDefault, StopPropagation

### 1. Mục đích sử dụng

Khi làm việc với **sự kiện DOM (DOM events)**, đôi khi bạn cần:

* **Ngăn chặn hành vi mặc định** của trình duyệt (như click vào link sẽ chuyển trang, submit form sẽ reload).
* **Dừng việc lan truyền sự kiện** lên các phần tử cha.

Hai phương thức giúp xử lý việc này là:

| Tên hàm             | Mục đích chính                                  |
| ------------------- | ----------------------------------------------- |
| `preventDefault()`  | Ngăn **hành vi mặc định** xảy ra                |
| `stopPropagation()` | Dừng sự kiện **bubbling (lan truyền lên trên)** |

### 2. `preventDefault()`

#### a. Ý nghĩa

Ngăn **trình duyệt thực hiện hành vi mặc định** khi sự kiện xảy ra.

#### b. Ví dụ: Ngăn link chuyển trang

```html
<a href="https://google.com" id="myLink">Go to Google</a>
```

```js
document.getElementById("myLink").addEventListener("click", function(event) {
  event.preventDefault(); // Không chuyển trang
  alert("Link đã bị chặn.");
});
```

#### c. Ví dụ: Ngăn form submit

```html
<form id="myForm">
  <input type="text" />
  <button type="submit">Gửi</button>
</form>
```

```js
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Ngăn reload trang
  alert("Đã xử lý form bằng JS.");
});
```

### 3. `stopPropagation()`

#### a. Ý nghĩa

Khi 1 sự kiện xảy ra, nó **bubbling** (lan truyền từ phần tử con lên cha). `stopPropagation()` giúp **dừng lại ở chính phần tử đó**.

#### b. Ví dụ: Ngăn sự kiện lan truyền

```html
<div id="outer" style="padding: 20px; background: #eee;">
  <button id="inner">Bấm tôi</button>
</div>
```

```js
document.getElementById("outer").addEventListener("click", function() {
  alert("Bạn đã bấm vào div ngoài");
});

document.getElementById("inner").addEventListener("click", function(event) {
  event.stopPropagation(); // Ngăn sự kiện click lan lên div ngoài
  alert("Bạn đã bấm vào nút");
});
```

### 4. Tóm tắt

| Hàm                 | Công dụng chính                       | Dùng khi nào                               |
| ------------------- | ------------------------------------- | ------------------------------------------ |
| `preventDefault()`  | Ngăn hành vi mặc định của trình duyệt | Form, link, checkbox,...                   |
| `stopPropagation()` | Ngăn sự kiện lan truyền lên cha       | Khi không muốn xử lý sự kiện ở phần tử cha |

---

## VII. Get Element Methods

### 1. Giới thiệu

Trong JavaScript, để **truy cập phần tử HTML** (element) trên trang, ta sử dụng các phương thức của `document`. Đây là bước **cốt lõi để thao tác với DOM**.

### 2. Các phương thức thường dùng

#### a. `getElementById(id)`

* **Trả về** phần tử có `id` được chỉ định.
* **Trả về 1 phần tử duy nhất**, hoặc `null` nếu không tìm thấy.

```html
<div id="box">Hello</div>
```

```js
var element = document.getElementById("box");
console.log(element); // <div id="box">Hello</div>
```

#### b. `getElementsByClassName(className)`

* Trả về một **HTMLCollection** (danh sách giống mảng) gồm tất cả phần tử có class tương ứng.
* Không bao giờ trả về `null`, chỉ có thể rỗng (`length = 0`).

```html
<p class="note">Ghi chú 1</p>
<p class="note">Ghi chú 2</p>
```

```js
var notes = document.getElementsByClassName("note");
console.log(notes[0].innerText); // Ghi chú 1
```

#### c. `getElementsByTagName(tagName)`

* Trả về tất cả phần tử có tag tương ứng (`div`, `p`, `span`,...).
* Cũng trả về **HTMLCollection**.

```html
<p>1</p>
<p>2</p>
```

```js
var ps = document.getElementsByTagName("p");
console.log(ps.length); // 2
```

#### d. `querySelector(selector)`

* Nhận vào một **CSS selector**.
* Trả về **phần tử đầu tiên** tìm thấy.
* Trả về `null` nếu không tìm thấy.

```html
<div class="box" id="demo"></div>
```

```js
var el = document.querySelector("#demo");      // theo ID
var box = document.querySelector(".box");      // theo class
var pInDiv = document.querySelector("div p");  // phần tử con
```

#### e. `querySelectorAll(selector)`

* Cũng nhận **CSS selector**, nhưng trả về **NodeList** chứa **tất cả các phần tử** phù hợp.
* Duyệt được bằng `forEach`.

```html
<p class="item">A</p>
<p class="item">B</p>
```

```js
var items = document.querySelectorAll(".item");
items.forEach(function(el) {
  console.log(el.innerText);
});
```

### 3. So sánh HTMLCollection và NodeList

| Tính năng            | HTMLCollection   | NodeList           |
| -------------------- | ---------------- | ------------------ |
| Kết quả từ           | `getElementsBy*` | `querySelectorAll` |
| Duyệt bằng `forEach` | ❌ Không hỗ trợ   | ✅ Có hỗ trợ        |
| Tự động cập nhật     | ✅ Có             | ❌ Không            |

### 4. Nên dùng phương thức nào?

| Trường hợp                              | Nên dùng                                          |
| --------------------------------------- | ------------------------------------------------- |
| Lấy 1 phần tử theo ID                   | `getElementById`                                  |
| Lấy phần tử theo class/tag (toàn trang) | `getElementsByClassName` / `getElementsByTagName` |
| Lấy 1 phần tử bất kỳ (CSS selector)     | `querySelector`                                   |
| Lấy nhiều phần tử (CSS selector)        | `querySelectorAll`                                |

---
