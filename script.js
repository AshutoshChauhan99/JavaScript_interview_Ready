// Map

// The map() method is an iterative method.It calls a provided callbackFn function once for each element
// in an array and constructs a new array from the results. 

// const nums = [1, 2, 3, 4];

// const multiplyThree = nums.map((num, i, arr) => {
//     return num * 3;
// })

// console.log(multiplyThree)

// polyFill for map
//Array.map((num,i,arr) => { })

Array.prototype.myMap = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}
const nums = [1, 2, 3, 4];

const multiplyThree = nums.myMap((num, i, arr) => {
    return num * 3;
})

console.log(multiplyThree)


// filter Method

// The filter() method creates a new array filled with elements that pass a test provided by a function. 
//The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// const arr = [1, 2, 3, 4];
// const moreThanTwo = arr.filter((num, i, arr) => {
//     return num > 2;
// })
// console.log(moreThanTwo)

//polyfil

Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, arr)) temp.push(this[i]);
    }
    return temp
}
const arr = [1, 2, 3, 4];
const moreThanTwo = arr.myFilter((num, i, arr) => {
    return num > 2;
})
console.log(moreThanTwo)


// Reduce Method

// it takes the values in an array, from the first till the last element,
//and applies functionality such that it changes the array into one singular value.

// const numArr = [1, 2, 3, 4]

// const sum = numArr.reduce((acc, curr, i, arr) => {
//     return acc + curr;
// }, 0)

// console.log(sum)

//arr.reduce(() => { acc, curr, i, arr}, initailValue)
//polyfil

Array.prototype.myReduce = function (cb, initailValue) {
    var accumulator = initailValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator
}

const numArr = [1, 2, 3, 4]

const sum = numArr.myReduce((acc, curr, i, arr) => {
    return acc + curr;
}, 0)

console.log(sum)

// map vs forEach 

const newArr = [1, 2, 3, 4]


const mapResult = arr.map((num, i, arr) => {
    return num + 2// return new array
})

const forEachResult = arr.forEach((num, i) => {
    newArr[i] = num + 2; // return modified old array
})


console.log(mapResult, forEachResult, newArr)


// map filter output based questin
// question1
let students = [
    { name: "Ashutosh", rollNumber: 31, marks: 80 },
    { name: "Ashok", rollNumber: 32, marks: 50 },
    { name: "Anshu", rollNumber: 33, marks: 90 },
    { name: "Anurag", rollNumber: 34, marks: 37 }
]



//for loop method
//let names = [];
// for (let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase())
// }

const names = students.map((stu) => stu.name.toUpperCase())


console.log(names)


const aboveSixty = students.filter((stu) => stu.marks > 60)
console.log(aboveSixty)


const totalMarks = students.reduce((accu, curr) => accu + curr.marks, 0)
console.log(totalMarks)