let tralivali;

const base = [{
    id: 0,
        question: 'տատիկ',
        answer: 'tatik/бабушка',
    }, {
        id: 1,
        question: 'սունկ',
        answer: 'грибы/sunk'
    }, {
        id: 2,
        question: 'հաց',
        answer: 'хлеб/hats'
    }, {
        id: 3,
        question: 'կաթ',
        answer: 'молоко/kat'
    }, {
        id: 4,
        question: 'կաթնաշոռ',
        answer: 'творог/katnashorr'
    }, {
        id: 5,
        question: 'քարտեզ',
        answer: 'карта/kartez'
    }, {
        id: 6,
        question: 'պանիր',
        answer: 'сыр/panir'

    }, {
        id: 7,
        question: 'սուջուխ',
        answer: 'суджук/sujukh'
    }, {
        id: 8,
        question: 'ութսուն',
        answer: '80/utsun'
    }, {
        id: 9,
        question: 'յոթանասուն',
        answer: '70/yotanasun'
    }, {
        id: 10,
        question: 'Կներեք, խնդրում եմ',
        answer: 'Knerek, khndrum yem'
    }, {
        id: 11,
        question: 'հազար',
        answer: 'тысяча/hazar'
    }, {
        id: 12,
        question: 'հարյուր',
        answer: 'сто/hryur'
    }, {
        id: 13,
        question: 'ուզում եմ պատվիրել',
        answer: 'хочу заказать/uzum yem patvirel'
    }, {
        id: 14,
        question: 'իննսուն',
        answer: '90/innsun'
    }, {
        id: 15,
        question: 'քսան',
        answer: 'двадцать/ksan'
    }, {
        id: 16,
        question: 'երեսուն',
        answer: '30/yeresun'
    }, {
        id: 17,
        question: 'քառասուն',
        answer: '40/karrasun'
    }, {
        id: 18,
        question: 'հիսուն',
        answer: '50/hisun'
    }, {
        id: 19,
        question: 'վաթսուն',
        answer: '60/vatsun'
    }, {
        id: 20,
        question: 'շատ հաճելի է',
        answer: 'очень приятно/shat hacheli e'
    }, {
        id: 21,
        question: 'մեկ',
        answer: '1/mek'
    }, {
        id: 22,
        question: 'երկու',
        answer: '2/yerku'
    }, {
        id: 23,
        question: 'երեք',
        answer: '3/yerek'
    }, {
        id: 24,
        question: 'չորս',
        answer: '4/chors'
    }, {
        id: 25,
        question: 'հինգ',
        answer: '5/hng'
    }, {
        id: 26,
        question: 'վեց',
        answer: '6/vets'

    }, {
        id: 27,
        question: 'յոթ',
        answer: '7/yot'
    }, {
        id: 28,
        question: 'ութ',
        answer: '8/ut'
    }, {
        id: 29,
        question: 'ինը',
        answer: '9/iny'
    }, {
        id: 30,
        question: 'տասը',
        answer: '10/tasy'
    }, {
        id: 31,
        question: 'րոպե',
        answer: 'минута/rope'
    }, {
        id: 32,
        question: 'ժամ',
        answer: 'час/zham'
    // }, {
    //     id: 33,
    //     question: 'Ւ ւ',
    //     answer: '[w] [v] у'
    // }, {
    //     id: 34,
    //     question: 'Փ փ',
    //     answer: 'пь'
    // }, {
    //     id: 35,
    //     question: 'Ք ք',
    //     answer: 'кь/л'
    // }, {
    //     id: 36,
    //     question: 'Եվ և',
    //     answer: 'ев'
    // }, {
    //     id: 37,
    //     question: 'Օ օ',
    //     answer: 'о'
    // }, {
    //     id: 38,
    //     question: 'Ֆ ֆ',
    //     answer: 'ф'
}];

let data;

if (localStorage.getItem("data_words") != null) {
    data = JSON.parse(localStorage.getItem('data_words'));
        
} else {
    data = base;
    localStorage.setItem('data_words', JSON.stringify(data));
}

function clearFields() {
    document.querySelector('#question').value = "";
    document.querySelector('#question').focus();
    document.querySelector('#answer').value = "";
}
