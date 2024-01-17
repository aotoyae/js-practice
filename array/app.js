function createItem(name, price) {
  return {
    name,
    price,
  };
}

const items = [
  createItem("computer", 2100),
  createItem("tv", 1800),
  createItem("book", 15),
  createItem("phone", 1600),
  createItem("coffee", 5),
  createItem("keyboard", 200),
  createItem("mouse", 140),
];

// 가격이 300 이하인 아이템 배열 구하기
const result = items.filter((item) => item.price <= 300);
console.log(result);

// 아이템들의 총 가격 구하기
const totalPrice = items.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);
console.log(totalPrice);

// 특정 이름의 아이템 구하기
const foundBook = items.find((item) => item.name === "book");
console.log(foundBook);

const itemList = document.getElementById("itemList");
items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = `이름: ${item.name} / 가격: ${item.price}`;

  itemList.appendChild(li);
});
