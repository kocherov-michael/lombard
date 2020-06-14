import './map.scss'

const mapElement = document.querySelector("#map")
// console.log(mapElement)
if (mapElement) {

    const contactsArray = []

    const contactCardElements = document.querySelectorAll('[data-contact-card]')
    contactCardElements.forEach(card => {
        // получаем строку с координатами в виде "широта, долгота" 
        // и разбиваем по запятой
        const coords = card.getAttribute('data-coordinates').split(',')
        // console.log(coords)
        // const x = card.getAttribute('data-coordinatesX')
        // const y = card.getAttribute('data-coordinatesY')
        const x = coords[0].trim()
        const y = coords[1].trim()
        const title = card.getAttribute('data-coordinates-title')
        // заполняем масив координат отделений
        // contactsArray.push({ x, y, title })
        contactsArray.push({ x, y, title })
        
    })
    console.log(contactsArray)


    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){

        const centerCoordinates = [59.955486, 30.337817]
        // если только 1 точка, то пеомещаем её в центр
        if (contactsArray.length === 1) {
            centerCoordinates[0] = contactsArray[0].x
            centerCoordinates[1] = contactsArray[0].y
        }
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: centerCoordinates,
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 11,
            autoReverseGeocode: false
        });

        // myMap.geoObjects
        //     .add(new ymaps.Placemark([59.955486, 30.337817], {
        //         balloonContent: 'цвет <strong>голубой</strong>',
        //         iconCaption: 'Очень длиннный, но невероятно интересный текст'
        //     }, {
        //         preset: 'islands#blueCircleDotIconWithCaption',
        //         iconCaptionMaxWidth: '150'
        //     }))
        //     .add(new ymaps.Placemark([59.949300, 30.315381], {
        //         balloonContent: 'цвет <strong>голубой</strong>',
        //         iconCaption: 'Очень длиннный, но невероятно интересный текст'
        //     }, {
        //         preset: 'islands#blueCircleDotIconWithCaption',
        //         iconCaptionMaxWidth: '150'
        //     }));

        // const contactCardElements = document.querySelectorAll('[data-contact-card]')
        // contactCardElements.forEach(card => {
        //     const x = card.getAttribute('data-coordinatesX')
        //     const y = card.getAttribute('data-coordinatesY')
        //     const title = card.getAttribute('data-coordinates-title')

        //     myMap.geoObjects
        //         .add(new ymaps.Placemark([x, y], {
        //             balloonContent: 'цвет <strong>голубой</strong>',
        //             iconCaption: title
        //         }, {
        //             preset: 'islands#blueCircleDotIconWithCaption',
        //             iconCaptionMaxWidth: '250'
        //         }))
        // })

        if (contactsArray.length > 0) {
            // обходим массив координат, которые создали перед инициализацией
            contactsArray.forEach(card => {
                // const x = card.getAttribute('data-coordinatesX')
                // const y = card.getAttribute('data-coordinatesY')
                // const title = card.getAttribute('data-coordinates-title')
    
                myMap.geoObjects
                    .add(new ymaps.Placemark([card.x, card.y], {
                        balloonContent: 'цвет <strong>голубой</strong>',
                        iconCaption: card.title
                    }, {
                        preset: 'islands#blueCircleDotIconWithCaption',
                        iconCaptionMaxWidth: '250'
                    }))
            })

        }

    }
}


