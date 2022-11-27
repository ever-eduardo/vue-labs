const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://vuejs.org/',
            inStock: true,
            inventory:100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'greem'},
                {id: 2235, color: 'blue'}
            ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    }
});