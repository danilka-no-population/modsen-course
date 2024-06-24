var variableVar = 1
var variableVar = 3

console.log(variableVar);

// Переменная, объявленная при помощи var позволяет повторное объявление

let variableLet = 'hello'
let variableLet = 'world'

// Переменная, объявленная при помощи let не позволяет повторное объявление - появляется ошибка
// SyntaxError: Identifier 'variableLet' has already been declared

const variableConst = true
const variableConst = false

// Переменная, объявленная при помощи const не позволяет повторное объявление - появляется ошибка
// SyntaxError: Identifier 'variableConst' has already been declared