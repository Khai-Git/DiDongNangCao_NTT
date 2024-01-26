class SachGiaoKhoa{
    private maSach!: string;
    private ngayNhap!: Date;
    private donGia!: number;
    private soLuong!: number;
    private nhaXuatBan!: string;
    private tinhTrang!: string;

    constructor(maSach?: string, ngayNhap?: Date, donGia?: number, soLuong?: number, nhaXuatBan?: string, tinhTrang?: boolean){
        if(maSach && ngayNhap && donGia && soLuong && nhaXuatBan && tinhTrang){
            this.maSach = maSach;
            this.donGia = donGia;
            this.soLuong = soLuong;
            this.nhaXuatBan = nhaXuatBan;
            this.setTinhTrang(tinhTrang);
        }
    }
    getNhaXuatBan(): string{
        return this.nhaXuatBan;
    }
    getDonGia(): number{
        return this.donGia;
    }
    setDonGia(donGia: number): void{
        this.donGia = donGia;
    }
    getSoLuong(): number{
        return this.soLuong;
    }
    setSoLuong(soLuong: number): void{
        this.soLuong = soLuong;
    }
    getTinhTrang(): string{
        return this.tinhTrang;
    }
    setTinhTrang(tinhTrang: boolean): void{
        this.tinhTrang = tinhTrang ? "moi" : "cu";
    }
    ThanhTien(): number{
        if(this.tinhTrang){
            return this.soLuong * this.donGia;
        }
        return this.soLuong * this.donGia * 50 / 100;
    }
}
class SachThamKhao{
    private maSach!: string;
    private ngayNhap!: Date;
    private donGia!: number;
    private soLuong!: number;
    private nhaXuatBan!: string;
    private thue!: number;

    constructor(maSach?: string, ngayNhap?: Date, donGia?: number, soLuong?: number, nhaXuatBan?: string, thue?: number){
        if(maSach && ngayNhap && donGia && soLuong && nhaXuatBan && thue){
            this.maSach = maSach;
            this.donGia = donGia;
            this.soLuong = soLuong;
            this.nhaXuatBan = nhaXuatBan;
            this.thue = thue;
        }
    }
    getNhaXuatBan(): string{
        return this.nhaXuatBan;
    }
    getDonGia(): number{
        return this.donGia;
    }
    setDonGia(donGia: number): void{
        this.donGia = donGia;
    }
    getSoLuong(): number{
        return this.soLuong;
    }
    setSoLuong(soLuong: number): void{
        this.soLuong = soLuong;
    }
    ThanhTien(): number{
        return this.soLuong * this.donGia + this.thue;
    }
}

class Sach{
    private listSachSGK: SachGiaoKhoa[] = [];
    private listSachSTK: SachThamKhao[] = [];

    themSGK(sach: SachGiaoKhoa){
        this.listSachSGK.push(sach)
    }
    themSTK(sach: SachThamKhao){
        this.listSachSTK.push(sach)
    }
    timSachTheoNXB(tenNhaXuatBan: string): SachGiaoKhoa | SachThamKhao | string{
        const tenSGK = this.listSachSGK.find((nxb)=> nxb.getNhaXuatBan() === tenNhaXuatBan);
        const tenSTK = this.listSachSTK.find((nxb)=> nxb.getNhaXuatBan() === tenNhaXuatBan);
        if (tenSGK) {
            return tenSGK;
        } else if (tenSTK) {
            return tenSTK;
        }
        return "Khong tim thay";
    }
    thanhTienSGK():number{
        return this.listSachSGK.reduce((sum, s)=>sum + s.ThanhTien(),0)
    }
    thanhTienSTK():number{
        return this.listSachSTK.reduce((sum, s)=>sum + s.ThanhTien(),0)
    }
    TrungBinhCongDonGiaSTK(): number{
        const count  = this.listSachSTK.length;
        const donGiaSTK = this.listSachSTK.reduce((sum, sach) => sum + sach.getDonGia(), 0);
        return donGiaSTK/count;
    }
}

const listSach = new Sach();

const SGK1 = new SachGiaoKhoa("1", new Date(2024,12,26),50000, 300, "Kim Dong", true);

const STK1 = new SachThamKhao("2", new Date(2024,11, 23), 53000, 150, "Chinh Sang", 30000);

listSach.themSGK(SGK1)
listSach.themSTK(STK1)
console.log(listSach);

const thanhTienSGK = listSach.thanhTienSGK()
console.log("Tong thanh tien SGK: " + thanhTienSGK);

const tenNXB = "Kim Dong"
const timSach = listSach.timSachTheoNXB(tenNXB);
console.log("Sach trong kho: ");
console.log(timSach);
