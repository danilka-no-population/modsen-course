const lastSymbol = (str) => {
    if(!str){
        console.log('Вы не передали строку, либо строка пуста!')
    }else{
        console.log(str[str.length - 1])
    }
}

lastSymbol('hello world!')
lastSymbol('Yazvinski Daniil')
lastSymbol('')
lastSymbol()