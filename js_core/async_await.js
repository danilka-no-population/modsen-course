const usingFetchedData = async (firstURL, secondURL) => {
    try{
        const firstRes = await fetch(firstURL)
        if(!firstRes.ok){
            throw new Error('При запросе данных возникла ошибка!')
        }
        firstData = await firstRes.text()

        const secondRes = await fetch(secondURL, {
            method: 'POST',
            body: JSON.stringify({
                title: 'Fetched FishText',
                body: firstData,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })

        if(!secondRes.ok){
            throw new Error('При отправке данных возникла ошибка!')
        }
        return secondRes.json()
    } catch(e){
        console.error(`Ошибка: ${e.name} - ${e.message}`)
    }
}

const firstURL = 'https://fish-text.ru/get?format=html&number=1'
const secondURL = 'https://jsonplaceholder.typicode.com/posts'

usingFetchedData(firstURL, secondURL).then(data => {
    console.log(data);
}).catch(e => {
    console.log(`Возникла ошибка: ${e.message}`);
})

// Результат:
// {
//     title: 'Fetched FishText',
//     id: 101,
//     body: '<p>С учётом сложившейся международной обстановки, высокотехнологичная концепция общественного
//              уклада способствует подготовке и реализации стандартных подходов.</p>',
// }