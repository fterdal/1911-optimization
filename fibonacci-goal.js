// MEMOIZATION

// MEMOIZED
// function fibonacci(num) {
//   const memo = new Map()
//   function innerFibonacci(num) {
//     // console.count('fib call')
//     // console.log(num)
//     if (num === 1 || num === 2) return 1
//     if (memo.has(num)) return memo.get(num)
//     const result = innerFibonacci(num - 2) + innerFibonacci(num - 1)
//     memo.set(num, result)
//     // console.log(memo)
//     return result
//   }
//   return innerFibonacci(num)
// }

// UNMEMOIZED
function fibonacci(num) {
  // console.count("fib call")
  if (num === 1 || num === 2) return 1
  return fibonacci(num - 2) + fibonacci(num - 1)
}

const start = new Date()
const input = 40
console.log(`fibonacci(${input}) => ${fibonacci(input)}`)

console.log(`It took ${new Date() - start} milliseconds`)
