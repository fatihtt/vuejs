const app = Vue.createApp({
    data() {
        return {
            product: {
                name: 'Socks',
                description: "Green socks with VueJS logo",
                imageUrl: "./assets/images/socks_green.jpg",
                imageDescription: "green socks",
                url: "https://google.com/search?q=green+socks",
                inStock: true,
                inventory: 10,
                onSale: true,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    {
                        id: "2234", color: "green"
                    },
                    {
                        id:"2235", color: "blue"
                    }
                ],
                sizes: [
                    {
                        id: 133,  name: "small",  code: "S"
                    },
                    {
                        id: 134, name: "medium", code: "M"
                    },
                    {
                        id: 135, name: "large", code: "L"
                    }
                ]
            }
        }
    }
});