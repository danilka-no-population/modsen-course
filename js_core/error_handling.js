const errorCatching = (obj, prop) => {
    try{
        return obj[prop]
    } catch(e){
        if(e.name === 'TypeError'){
            console.error(`${e.name} - ${e.message}`)
        }else{
            throw e
        }
    }
}

try{
    let incorrectObj
    console.log(errorCatching(incorrectObj, 'prop1')) //TypeError - Cannot read properties of undefined (reading 'prop1')
} catch(e){
    console.error(`Ошибка другого типа: ${e.name} - ${e.message}`)
} finally{
    console.log('Ошибка отловлена внутри блока catch функции errorCatching\n')
}

try{
    const correctObj = {name: 'Daniil', age: 21}
    console.log(errorCatching(correctObj, 'age')) //Блок try внутри функции отработал корректно
} catch(e){
    console.error(`Ошибка другого типа: ${e.name} - ${e.message}`)
} finally{
    console.log('Блок try внутри функции отработал корректно\n')
}

try{
    console.log(errorCatching(obj, 'age')) //Ошибка другого типа: ReferenceError - obj is not defined
} catch(e){
    console.error(`Ошибка другого типа: ${e.name} - ${e.message}`)
} finally{
    console.log('Ошибка отловлена во внешнем блоке try/catch/finally')
}