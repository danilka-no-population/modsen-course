const loadURLContent = async (arr) => {
    try{
        let fetchedData = arr.map(url => fetch(url)
        .then(res => res.text())
        .catch(e => {
            console.error(`Fetchin error: ${e.message}`)
            throw e
        }))

        const results = await Promise.all(fetchedData)
        return results
    } catch(e){
        console.error(`Ошибка: ${e.name} - ${e.message}`)
    }
}

const fishArr = ['https://fish-text.ru/get?format=html&number=1', 'https://fish-text.ru/get?format=html&number=2', 'https://fish-text.ru/get?format=html&number=3']
loadURLContent(fishArr).then(data => {
    data.forEach(el => {
        console.log(el)
    })
}).catch(e => {
    console.error(`Возникла ошибка: ${e.message}`)
})

// Результат:
// 1. <p>Являясь всего лишь частью общей картины, независимые государства лишь добавляют 
// фракционных разногласий и функционально разнесены на независимые элементы.</p>

// 2. <p>Кстати,  ключевые особенности структуры проекта объективно рассмотрены соответствующими инстанциями.
// Приятно, граждане, наблюдать, как многие известные личности, инициированные исключительно
// синтетически, объединены в целые кластеры себе подобных.</p>

// 3. <p>Имеется спорная точка зрения, гласящая примерно следующее: явные признаки победы институционализации
// являются только методом политического участия и подвергнуты целой серии независимых исследований. Но консультация
// с широким активом требует от нас анализа анализа существующих паттернов поведения. Равным образом, новая
// модель организационной деятельности требует анализа модели развития.</p>