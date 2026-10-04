let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let evenCount = []
let oddCount = []
for (let element of array) {
  if (element % 2 === 0) {
    evenCount.push(element)
  } else {
    oddCount.push(element)

  }
}


console.log(evenCount);
console.log(oddCount);







let arr = []

while (true) {
  let message = prompt("Введите команду")
  if (message === "stop") {
    break
  }
  let parts = message.split(", ")
  let text = parts[1]
  let command = parts[0]
  if (command === "add") {
    arr.splice(arr.length, 0, text)

  }
  if (command === "del") {
    let index = arr.indexOf(text)
    arr.splice(index, 1)

  }

}
console.log(arr);
