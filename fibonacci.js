// MEMOIZATION

// UNMEMOIZED
function fibonacci(num) {
  if (num === 1 || num === 2) return 1
  return fibonacci(num - 2) + fibonacci(num - 1)
}

const start = new Date()
const input = 5
console.log(`fibonacci(${input}) => ${fibonacci(input)}`)

console.log(`It took ${new Date() - start} milliseconds`)
