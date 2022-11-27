const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            url: 'https://vuejs.org/',
            inStock: true,
            inventory:100,
            onSale: true
        }
    }
});