const now = new Date()
console.log(now)

const theHour = new Date(2017, 8, 3, 5, 34, 45)
console.log(theHour)

console.log(new Date(2050, 6, 9))

theHour.setFullYear(2800)
theHour.setMonth(5)
theHour.setHours(8, 43)

console.log(theHour)

const myDate = new Date()
const m = myDate.getMonth() 
const y = myDate.getFullYear()
const d = myDate.getDate()

console.log(d,'/', m,'/', y)
