/**
 * status: pending
 * status: resolve
 * status: reject
 */

//new
//try catch
//then catch --> lấy dữ liệu hoặc dùng để bọc lỗi của cái promise đó
// bắt lỗi function
//syntax
/* function promiseType() {}
try {
} catch (err) {
  console.log(err);
} finally {
} // lỗi hay không lỗi cũng chạy vào đây
//async await thay cho promise để code gọn gàng hơn */
function timeOut(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function run () {
console.log(running);
  await timeOut(2000);
  console.log(endding);
}
