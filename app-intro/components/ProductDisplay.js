app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
        <div class="product-image">
            <img :class="{ 'out-of-stock-img': !inStock }" :src="image" alt="A pair of socks">
        </div>
        <div class="product-info">
            <h1>{{ title }}</h1>
            <p>Another nice <span><a :href="url" target="_blank" rel="noopener noreferrer">Vue</a></span> product.</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <product-details :details="details"></product-details>
            <div>
                {{ showSizes }}
            </div>
            <div class="color-circle" 
                :style="{backgroundColor: variant.color}" 
                v-for="(variant, index) in variants" 
                :key="variant.id" 
                @mouseover="updateVariant(index)"></div>
            <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" @:click="addToCart">Add to Cart</button>
            <button class="button" @:click="removeItem">Remove Item</button>
        </div>
    </div>
</div>`,
data() {
    return {
        product: 'Socks',
        brand: 'Vue Mastery',
        selectedVariant: 0,
        url: 'https://vuejs.org/',
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ],
        sizes: ['S', 'M', 'L', 'XL']
    }
},
methods: {
    addToCart() {
        this.cart++;
    },
    removeItem() {
        this.cart--;
    },
    updateVariant(index) {
        this.selectedVariant = index;
    }
},
computed: {
    title() {
        return this.brand + ' ' + this.product;
    },
    showSizes() {
        return this.sizes.join(', ');
    },
    image() {
        return this.variants[this.selectedVariant].image;
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
        if (this.premium) {
            return 'Free';
        }
        return 2.99;
    }
}
});