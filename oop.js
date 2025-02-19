class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    getTotalPrice() {
        return this.product.price * this.quantity;
        }
    }
    
    class ShoppingCart {
        constructor() {
        this.items = [];
        }
        addItem(product, quantity) {
            let existingItem = this.items.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
            this.items.push(new ShoppingCartItem(product, quantity));
            }
            }
        
            removeItem(productId) {
            this.items = this.items.filter(item => item.product.id !== productId);
            }
        
        getTotalItems() {
            return this.items.reduce((total, item) => total + item.quantity, 0);
            }
        
            displayCart() {
            if (this.items.length === 0) {
                console.log("Your shopping cart is empty.");
                return;
            }
            this.items.forEach(item => {
                console.log(`${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
            });
            console.log(`Total Items: ${this.getTotalItems()}`);
            }
        }
        const product1 = new Product(1, "zarbout", 1200);
        const product2 = new Product(2, "bissa", 200);
        const product3 = new Product(3, "guitara", 50);
        
        const cart = new ShoppingCart();
        cart.addItem(product1, 1);
        cart.addItem(product2, 2);
        cart.addItem(product3, 3);
        
        console.log("Shopping Cart:");
        cart.displayCart();
        
        console.log("\nRemoving Headphones...");
        cart.removeItem(2);
        cart.displayCart();