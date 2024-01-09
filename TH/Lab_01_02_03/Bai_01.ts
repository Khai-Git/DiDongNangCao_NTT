class TamGiac {
    private ma: number;
    private mb: number;
    private mc: number;
    
    constructor(ma: number, mb: number, mc: number) {
        if ((ma < 0 && mb < 0 && mc < 0) || (ma + mb <= mc || ma + mc <= mb || mb + mc <= ma)) {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        } else {
            this.ma = ma;
            this.mb = mb;
            this.mc = mc;
        }
    }

    getMa(): number {
        return this.ma;
    }
    setMa(ma: number): void {
        if (ma > 0 && this.mb + this.mc > ma) {
            this.ma = ma;
        }
    }
    getMb(): number {
        return this.mb;
    }
    setMb(mb: number): void {
        if (mb > 0 && this.ma + this.mc > mb) {
            this.mb = mb;
        }
    }
    getMc(): number {
        return this.mc;
    }
    setMc(mc: number): void {
        if (mc > 0 && this.mb + this.ma > mc) {
            this.mc = mc;
        }
    }
    chuvi(): number{
        return this.ma + this.mb + this.mc;
    }
    dientich():number{
        const p = this.chuvi() / 2;
        return Math.sqrt(p*(p-this.ma)*(p-this.mb)*(p-this.mc));
    }
    toString(): void {
        if(this.ma == this.mb && this.ma == this.mc && this.ma > 0 && this.mb > 0 && this.mc > 0){
            console.log("Tam giac deu");
        } else if ((this.ma == this.mb && this.ma != this.mc) || (this.ma == this.mc && this.ma != this.mb) || (this.mb == this.mc && this.mb != this.ma)) {
            console.log("Tam giac can");
        } else if (this.ma <= 0 || this.mb <= 0 || this.mc <=0){
            console.log("Khong la tam giac");
        }else {
            console.log("Tam giac thuong");
        }
        console.log("---------------------------------------------");
        console.log(`Cạnh ma: ${this.ma}, Cạnh mb: ${this.mb}, Cạnh mc: ${this.mc}`);
        console.log(`Chu vi: ${this.chuvi()}`);
        console.log(`Dien tich: ${this.dientich()}`);
        console.log("---------------------------------------------");
    }
}

const h1 = new TamGiac(-3, -4, -5);
h1.toString();
const h2 = new TamGiac(3, 4, -5);
h2.toString();
const tamgiacthuong = new TamGiac(5, 7, 8);
tamgiacthuong.toString();
const tamgiaccan = new TamGiac(6, 6, 8);
tamgiaccan.toString();
const tamgiacdeu = new TamGiac(3, 3, 3);
tamgiacdeu.toString();
