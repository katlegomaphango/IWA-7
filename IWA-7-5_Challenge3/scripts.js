const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '\n----------------------------------\n'

// Only change below this line

const sarahBalanceNum = parseFloat(sarahBalance.replace('-', ''))
const leoBalanceNum = parseFloat(leoBalance.replace('-', ''))

const owed = sarahBalanceNum + leoBalanceNum //const owed = parseInt('R' + leoBalance + sarahBalance)

//const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const leo = `\n${leoName} ${leoSurname} (Owed: R ${leoBalanceNum.toFixed(2)})` 

//const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = `\n${sarahName} ${sarahSurname} (Owed: R ${sarahBalanceNum.toFixed(2)})\n\n`

//const total = "Total amount owed: "
const total = `  Total amount owed: R ${owed.toLocaleString('en').replace(',', ' ')}`

//const result = leo + sarah + divider + divider + total + owed + divider
const result = leo + sarah + divider + total + divider

console.log(result)