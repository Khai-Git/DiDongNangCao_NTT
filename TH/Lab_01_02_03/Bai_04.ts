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
    toString(): string{
        return `| ${this.getProductID()} | ${this.getDescription()} | ${this.getPrice()}`;
    }
    // toString(): string{
    //     return `Description: ${this.getDescription()}, ProductID: ${this.getProductID()}, Price: ${this.getPrice()}`;
    // }
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
    calcTotalPrice(): number{
        return this.quantity * this.product.getPrice();
    }
    toString(): string{
        return `${this.getProduct().toString()} | ${this.getQuantity()} | ${this.calcTotalPrice()}`;
    }
    // toString(): string{
    //     return `Product: ${this.getProduct().toString()}, Quantity: ${this.getQuantity()}`;
    // }
}

class Order{
    private orderId!: number;
    private orderDate!: Date;
    private lineItems: OrderDetail[] = [];
    private count: number = 0;

    // constructor(orderId?: number, orderDate?: Date){
    //     if(orderId && orderDate){
    //         this.orderId = orderId;
    //         this.orderDate = orderDate;
    //     }
    // }
    constructor(orderId?: number, orderDate?: Date, lineItems?: OrderDetail[]){
        if(orderId && orderDate && lineItems){
            this.orderId = orderId;
            this.orderDate = orderDate;
            this.lineItems = lineItems;
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
    calTotalCharge(): number{
        for (const lineItem of this.lineItems) {
            this.count += lineItem.calcTotalPrice();
        }

        return this.count;
    }
    addLineItem(product: Product, count: number): void{
        this.lineItems.push(new OrderDetail(product, count));
    }
    toString(): string {
        const formattedDate = this.getOrderDate().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });

        return `OrderID: ${this.orderId}\nOrderDate: ${formattedDate}\n${this.getLineItems().map(item => item.toString()).join('\n')}\nTong tien thanh toan: ${this.calTotalCharge()}`;
        // return `OrderID: ${this.orderId}\nOrderDate: ${formattedDate}\n${this.getLineItems().map(item => item.toString()).join('\n')}`;
    }
    
}

const product1 = new Product("Banh Trang", "1", 8000);
const detail1 = new OrderDetail(product1, 10);

const order1 = new Order(1, new Date(2024,1,16), [detail1]);

const product2 = new Product("Product 2", "2", 5000);
const detail2 = new OrderDetail(product2, 5);

const product3 = new Product("Product 3", "3", 12000);
const detail3 = new OrderDetail(product3, 8);

order1.addLineItem(product2, 5);
order1.addLineItem(product3, 8);

console.log(order1.toString());
const order1 = new Order(1, new Date(2024,1,16));
order1.toString()