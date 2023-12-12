// 1. async
async function fetchUser() {
  return `aotoyae`;
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getMelon() {
  await delay(2000);
  return `🍈`;
}

async function getLemon() {
  await delay(1000);
  return `🍋`;
}

async function pickFruits() {
  const melonPromise = getMelon();
  const lemonPromise = getLemon();
  const melon = await melonPromise;
  const lemon = await lemonPromise;
  return `${melon} + ${lemon}`;
}

pickFruits().then(console.log); // `🍈 + 🍋`

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getMelon(), getLemon()]).then((fruits) =>
    fruits.join(` + `)
  );
}

pickAllFruits().then(console.log); // `🍈 + 🍋`

// + race
function pickOnlyOne() {
  return Promise.race([getMelon(), getLemon()]);
}

pickOnlyOne().then(console.log); // `🍋`
