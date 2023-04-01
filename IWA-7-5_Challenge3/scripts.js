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

console.log(sarahBalanceNum, leoBalanceNum)

const owed = sarahBalanceNum + leoBalanceNum
const leo = `\n${leoName} ${leoSurname} (Owed: R ${leoBalanceNum.toFixed(2)})`
const sarah = `\n${sarahName} ${sarahSurname} (Owed: R ${sarahBalanceNum.toFixed(2)})\n\n`
const total = `  Total amount owed: R ${owed.toLocaleString('en').replace(',', ' ')}`
const result = leo + sarah + divider + total + divider

console.log(result)