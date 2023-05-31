import { mapIATAToTimezone } from "./codeToTimeZone"


const number = 1685572135409

const date = new Date(number)

console.log(date.toLocaleString('en-US', { timeZone: mapIATAToTimezone['JFK'] }))
console.log(date.toLocaleString('en-US', { timeZone: mapIATAToTimezone['STN'] }))
