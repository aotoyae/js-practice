const promise = new Promise((resolve, reject) => {
  console.log(`doing someting...`);
  setTimeout(() => {
    resolve(`aotoyae`);
    // reject(new Error(`no network`));
  }, 2000);
});

promise
  .then((value) => {
    console.log(value); // aotoyae
  })
  .catch((error) => {
    console.log(error); // Error: no network
  })
  .finally(() => {
    console.log(`finally`); // 성공하던 실패하던 마지막에 실행
  });

// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2) // 2
  .then((num) => num * 3) // 6
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    }); // 5
  })
  .then((num) => console.log(num)); // 5

// Error Handling
const getTree = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`🌲`), 1000);
  });
const getLight = (tree) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${tree} + 💡`), 1000);
    setTimeout(() => reject(new Error(`error! ${tree} + 💡`)), 1000);
  });
const onPower = (light) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${light} => 🎄`), 1000);
  });

getTree()
  .then(getLight)
  .catch((error) => {
    return `🎁`;
  }) // getLight에서 error 발생 시 다른 값을 return
  .then(onPower)
  .then(console.log)
  .catch(console.log);
