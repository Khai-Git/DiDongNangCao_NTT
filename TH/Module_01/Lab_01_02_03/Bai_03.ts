class ToaDo{
    private ten!: string;
    private x!: number;
    private y!: number;

    constructor(x?: number, y?: number){
        if(x && y){
            this.x = x;
            this.y = y;
        }
    }

    getX(): number{
        return this.x;
    }
    getY(): number{
        return this.y;
    }
    setX(x: number): void{
        this.x = x;
    }
    setY(y: number): void{
        this.y = y;
    }
    toString(): void{
        console.log(`X= ${this.getX()}, Y= ${this.getY()}`);
    }
}

class HinhTron{
    private tam!: ToaDo;
    private banKinh!: number;

    constructor(tam?: ToaDo, banKinh?: number){
        if(tam && banKinh){
            this.tam = tam;
            this.banKinh= banKinh;
        }
    }

    getTam(): ToaDo{
        return this.tam;
    }
    getBanKinh(): number{
        return this.banKinh;
    }
    setTam(tam: ToaDo): void{
        this.tam = tam;
    }
    setBanKinh(banKinh: number): void{
        this.banKinh = banKinh;
    }
    tinhChuVi():number{
        return 2 * Math.PI * this.getBanKinh();
    }
    tinhDienTich():number{
        return Math.PI * Math.pow(this.getBanKinh(),2);
    }
    toString():void{
        console.log(`Hình tròn có tâm O(${this.getTam().getX()},${this.getTam().getY()}) với bán kính ${this.getBanKinh()} có diện tích và chu vi lần lượt là ${this.tinhDienTich()} và ${this.tinhChuVi()}`);
    }
}

const toaDo1 = new ToaDo(5,5);
const hinhTron1 = new HinhTron(toaDo1, 10.5)
hinhTron1.toString()