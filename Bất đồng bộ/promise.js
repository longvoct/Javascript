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

async function run() {
  console.log("running");
  await timeOut(2000);
  console.log("ending");
  console.log();
}
try {
  run();
} catch (err) {
  console.log(err);
}

//arrow function
const fn = async () => {
  const student = {
    fullName: async function () {
      "";
    },
    async callAge() {},
    yearly: async () => {},
  };
};

//bắt lỗi cho async await
//1. return rồi dùng ().then().catch((err)=>console.log(err);)
//2. try catch trong async await
function test(obj) {
  return obj;
}

async function user() {
  try {
    const dev1 = await test("hi");
    console.log(dev1);
  } catch (err) {
    console.log(err);
  }
}

console.log(run());
