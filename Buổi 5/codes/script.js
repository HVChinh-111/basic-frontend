function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Bắt đầu...");
  await delay(5000);
  console.log("Sau 5 giây");
}

run();