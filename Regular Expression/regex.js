//Reqular expression: Biểu thức chính quy
//1. 2 cách khai báo với Regex
const re1 = /hello/;
const re2 = new RegExp("hello");
//hello world
//regex.test(value) --> true or false
console.log(re1.test("hello world"));

//2. Anchor ^ $ --> kiểm tra trong regular expression có start/end với từ nào đó ko
//^ string bắt đầu với từ nào đó
// $ string kết thúc với từ nào đó

//
const re3 = /hi/;
// re3.test("hi");
/hi$/.test("welcome to hi");

//3.ranges []
//[a-z]: các kí tự in thường
//[A-Z]: các ký tự in Hoa
//[0-9]: các số từ 0 -> 9
//[a-z0-9A-Z]: các số từ 0-9 hoặc từ a-->z hoặc A-->Z

/[a-z]/.test("aadf");
/[0-9]/.test("10000"); //--> true
/[0-9]/.test("waxwx10000abc"); //--> true
/[0-9]/.test("waabc"); //--> false
// Phủ định
/[^a-z]/.test("aadf"); //--> phủ định : false

//4. Meta characters
// \d: khớp với số nó sẽ tương đương với [0-9]
/\d/.test("1234"); //--> true
//\D: ngượi lại với \d tương đương với [^0-9]
/\D/.test(123); //-->false
//\w: tương đương với [a-zA-Z0-9_] (có cả dấu gạch dưới)
//\W ngược lại với \w
// \s: khớp với các kí tự khoảng trắng: space, tab ,new line
// \S: các kí tự không phải khoảng trắng
// \n: khớp với newline(xuống hàng)
// \t: khớp với lại tab character
// .n:khớp với tất cả mọi thứ trừ newline (\n)
// [^]: khớp với tất cả mọi thứ bao gồm newline (\n)

//5. Quantifiers: {n} {n,m} + ? *
//string.match(regex) "abc".match(/\w/) --> []
const str1 = "Welcome to 20222046";
console.log(str1.match(/\d\d\d\d/)[0]); //--> ddeer layas 2022//nhưng như vậy sẽ dài --> dùng {}
console.log(str1.match(/\d{4}/)[0]); //{n}: số lượng nhất đình
console.log(str1.match(/\d{4,6}/)[0]); //{n,m}: số lượng trong khoảng từ n tới m
console.log(str1.match(/\d+/)[0]); //--> +: lấy 1 hoặc nhiều kí tự thảo điều kiện --> lấy hết
const str2 = "color or colour?";
console.log(str2.match(/color/)[0]);
console.log(str2.match(/colou?r/g)); //--> array
//?: có thể có hoặc không

//flag
//g: global
//i : case insensitive --> ko phân biệt hoa thường
//m: multiple lines :nhiều hàng

//*: không có hoặc là nhiều. dấu + thì phải có ít nhất một cái, dấu * thì sao cũng đc
const str3 = "12345";
console.log(str3.match(/d*/g));
//--> lấy hết

//6. groups ()
console.log(/(\d{3})?(\w+)/.test("123"));
//hoặc cái này hoặc cái kia --> true
