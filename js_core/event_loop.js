const getInfoInTime = async (url, time = 100) => {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, time);

    try {
        const res = await fetch(url, { signal });
        
        clearTimeout(timeoutId);

        if (!res.ok) {
            throw new Error(`Ошибка: ${res.status}`);
        }

        return await res.text();
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }

        throw error;
    }
}

getInfoInTime('https://fish-text.ru/get?format=html&number=1', 1500)
    .then(data => {
        console.log('Данные:', data);
    })
    .catch(error => {
        console.error('Ошибка:', error.message);
    });


// Результаты:
// С параметром time = 1500 :
// Данные: <p>Ясность нашей позиции очевидна: разбавленное изрядной долей эмпатии,
// рациональное мышление позволяет выполнить важные задания по разработке
// поэтапного и последовательного развития общества.</p>

// С параметром time = 100 :
// Ошибка: Request timed out