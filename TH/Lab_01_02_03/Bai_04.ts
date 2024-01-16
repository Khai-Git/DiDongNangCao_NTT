class Product {
    private description!: string;
    private productID!: string;
    private price!: number;

    constructor(description?: string, productID?: string, price?: number){
        if(description && productID && price){
            this.description = description;
            this.productID = productID;
            this.price = price;
        }
    }

    getDescription(): string{
        return this.description;
    }
    getProductID(): string{
        return this.productID;
    }
    getPrice(): number{
        return this.price;
    }
    setDescription(description: string): void{
        this.description = description;
    }
    setProductID(productID: string): void{
        this.productID = productID;
    }
    setPrice(price: number): void{
        this.price = price;
    }

    toString(): void{
        console.log(`Description: ${this.getDescription()}, ProductID: ${this.getProductID()}, Price: ${this.getPrice()}`);
    }
}

class OrderDetail{
    private product!: Product;
    private quantity!: number;

    constructor(product?: Product, quantity?: number){
        if (product && quantity) {
            this.product = product;
            this.quantity = quantity;
        }
    }

    getProduct(): Product{
        return this.product;
    }
    getQuantity(): number{
        return this.quantity;
    }
    setProduct(product: Product): void{
        this.product = product;
    }
    setQuantity(quantity: number):void{
        this.quantity = quantity;
    }
    calcToalPrice(): number{
        return this.quantity * this.product.getPrice();
    }
    toString(): void{
        console.log(`Product: ${this.getProduct()}, Quantity: ${this.getQuantity()}`);
    }
}

class Oder{
    private orderId!: number;
    private orderDate!: Date;
    private lineItems: OrderDetail[] = [];
    private count!: number;

    constructor(orderId: number, orderDate: Date){
        if(orderId && orderDate){
            this.orderId = orderId;
            this.orderDate = orderDate;
        }
    }

    getLineItems(): OrderDetail[]{
        return this.lineItems;
    }
    getOrderDate(): Date{
        return this.orderDate;
    }
    getOrderId(): number{
        return this.orderId;
    }
    setOrderDate(orderDate: Date): void{
        this.orderDate = orderDate;
    }

    addLineItem(product: Product, count: number): void{
        this.lineItems.push(new OrderDetail(product, count));
    }
    toString(): void{
        console.log(`OrderID: ${this.orderId}, OrderDate: ${this.getOrderDate()}, LineItems: ${this.getLineItems()}, Count: ${this.count}`);
    }
}

const product1 = new Product("No", "1", 8000);
product1.toString()
const detail1 = new OrderDetail(product1, 10);
detail1.toString()
const order1 = new Oder(1, new Date(2024,1,16));
order1.toString()
const myDate = new Date(2024, 1, 16);
console.log(myDate);