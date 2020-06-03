import './map.scss'

const mapElement = document.querySelector("#map")
console.log(mapElement)
if (mapElement) {

    



    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [59.955486, 30.337817],
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

        const contactCardElements = document.querySelectorAll('[data-contact-card]')
        contactCardElements.forEach(card => {
            const x = card.getAttribute('data-coordinatesX')
            const y = card.getAttribute('data-coordinatesY')
            const title = card.getAttribute('data-coordinates-title')

            myMap.geoObjects
                .add(new ymaps.Placemark([x, y], {
                    balloonContent: 'цвет <strong>голубой</strong>',
                    iconCaption: title
                }, {
                    preset: 'islands#blueCircleDotIconWithCaption',
                    iconCaptionMaxWidth: '250'
                }))
        })

    }
}


