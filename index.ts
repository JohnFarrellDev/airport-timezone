import { mapIATAToTimezone } from "./codeToTimeZone"


const number = Number(new Date())

const date = new Date(number)

console.log(date.toLocaleString('en-US', { timeZone: mapIATAToTimezone['JFK'] })) // new york
console.log(date.toLocaleString('en-US', { timeZone: mapIATAToTimezone['STN'] })) // uk
