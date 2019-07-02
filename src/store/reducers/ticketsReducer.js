const initState = {
    films: [
        {
            id: '1',
            title: 'Проклятие Аннабель 3',
            content: 'Преисполнившись решимости удержать Аннабель от дальнейших разрушений и хаоса, демонологи Эд и Лоррейн Уоррены приносят одержимую куклу в запертую комнату артефактов в своем доме, поместив ее под «надежное» освященное стекло и заручившись благословением священника. Однако беспросветная ночь ужаса ждет обитателей дома, когда Аннабель пробуждает злых духов комнаты и их новой мишенью становится десятилетняя дочь Уорренов Джуди и ее друзья.',
            url: 'https://nas.dcp24.ru/img/movie/11185_big.jpg?1558938718',
            image_preview: 'https://nas.dcp24.ru/thumb_hd/Annabelle-CH_TLR-F4_F_RU-XX_RU_51_2K_WR_20190528_EKN_IOP_OV.jpg',
            video: 'https://nas.dcp24.ru/preview/Annabelle-CH_TLR-F4_F_RU-XX_RU_51_2K_WR_20190528_EKN_IOP_OV.mp4',
            price: '1000',
            age: '18+'
        },
    ]
};


const ticketsReducer = (state = initState, action) => {
    return state
};

export default ticketsReducer