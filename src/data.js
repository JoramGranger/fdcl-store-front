export const sliderItems = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg",
        title: "ANNIVERSARY SALE",
        description: "TAKE GOOD CARE OF THAT SKIN! GET FLAT 50% OFF FOR NEW ARRIVALS.",
        bg: "FFe8e8"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg",
        title: "POPULAR SALE",
        description: "TAKE GOOD CARE OF THAT SKIN! GET FLAT 50% OFF FOR NEW ARRIVALS.",
        bg: "FFe8e8"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg",
        title: "FLASH SALE",
        description: "TAKE GOOD CARE OF THAT SKIN! GET FLAT 50% OFF FOR NEW ARRIVALS.",
        bg: "FFe8e8"
    },

]

export const categories = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/14780455/pexels-photo-14780455.jpeg",
        title: "BY CATEGORY"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/14780455/pexels-photo-14780455.jpeg",
        title: "BY SKIN CONCERN"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/14780455/pexels-photo-14780455.jpeg",
        title: "BY SKIN TYPE"
    },
];

export const popularProducts = [
    {
        id: 2,
        img: "https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg"
    },
    {
        id: 3,
        img: "https://delightsupplies.net/wp-content/uploads/2022/05/Cetaphil-Moisturizing-Lotion-Grey-Cover-500x500.jpg"
    },
    {
        id: 4,
        img: "https://delightsupplies.net/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-16-at-13.12.23.jpg"
    },
    {
        id: 5,
        img: "https://delightsupplies.net/wp-content/uploads/2022/05/Hawaiian-Argan-Oil-Hydrating-Sleek-Conditioner-Pink-Cover-500x500.jpg"
    },
];

export const NewProducts = [
    {
        id: 2,
        price: 25000,
        name: 'mositurizer',
        img: "https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg"
    },
    {
        id: 3,
        price: 68000,
        name: 'skin oil',
        img: "https://delightsupplies.net/wp-content/uploads/2022/05/Cetaphil-Moisturizing-Lotion-Grey-Cover-500x500.jpg"
    },
    {
        id: 4,
        price: 56000,
        name: 'shower gel',
        img: "https://delightsupplies.net/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-16-at-13.12.23.jpg"
    },
    {
        id: 5,
        price: 45000,
        name: 'newton',
        img: "https://delightsupplies.net/wp-content/uploads/2022/05/Hawaiian-Argan-Oil-Hydrating-Sleek-Conditioner-Pink-Cover-500x500.jpg"
    },
];

export const ProductCategories = [
    // skin type
    {
        category: 'Skin Type',
        subCategories: [
            {   
                id: 1,
                 childCategory: 'Oily Skin',
                  link: '/shop?category=oily-skin',
                  img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
            },
            {
                id: 2,
                childCategory: 'Dry Skin',
                link: '/shop?category=dry-skin',
                img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
            },
            {
                id: 3,
                childCategory: 'Sensitive Skin',
                link: 'sensitive-skin',
                img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
            },
            {
                id: 4,
                childCategory: 'Combination Skin',
                link: 'combination-skin',
                img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
            },
        ],
        // skin concern
    },
    {
        category: 'Skin Concern',
        subCategories: [
            {
                id: 5,
                childCategory: 'Acne',
                link: 'acne',
                img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
            },
            {
                id: 6,
                childCategory: 'Hyperpigmentation',
                link: 'hyperpigmentation',
                img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
            },
            {
                id: 7,
                childCategory: 'Even Skin Tone',
                link: 'even-skin-tone',
                img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
            },
            {
                id: 8,
                childCategory: 'Open Pores',
                link: 'open-pores',
                img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
            },
            {
                id: 9,
                childCategory: 'Stretch Marks',
                link: 'stretch-marks',
                img:'https://delightsupplies.net/wp-content/uploads/2022/05/Aveeno-Daily-Moisturixing-Lotion-Grey-Cover-500x500.jpg'
            }
        ]
    }
];