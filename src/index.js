// var val1 = "var変数"
// console.log(val1)

// let val2 = "let変数"

// console.log(val2)

// const val3 = "const変数"
// console.log(val3)

// val3 ="yoko";

// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// }

// val4.name = "jak"
// val4.address = "Hiroshima"
// console.log(val4)

// const val5 = ["dog", "cat"]
// val5[0] = "bird"
// val5.push("monkey")
// console.log(val5)

// const name = "じゃけぇ"
// const age = 28

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1)

// const message2 = `私の名前は"${name}""です。年齢は${age}です。`
// console.log(message2)

//

// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// }

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1)

// const { name, age } = myProfile
// const message2 = `名前は${name}です。年は${age}歳です。`
// console.log(message2)

// const myProfile = ["じゃけぇ", 28]

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3)

// const [name, age] = myProfile
// const message4 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message4)

// const sayHello = (name = "yoko") => console.log(`こんにちは!${name}さん!`)

// sayHello("ひよこ")
// const arr1 = [1, 2]
// // console.log(arr1)

// // console.log(...arr1)

// const sumFunc = (num1, num2) => console.log(num1 + num2)
// sumFunc(arr1[0], arr1[1])
// sumFunc(...arr1)

const arr2 = [1, 2, 3, 4, 5]
const [num1, num2, ...arr3] = arr2
console.log(num1)
console.log(num2)
