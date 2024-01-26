class ChuyenXeNoiThanh{
    private doanhThu: number;
    constructor(maSoChuyen: string, hoTenTaiXe: string, soXe: string,soTuyen: number, soKmDiDuoc: number, doanhThu: number){
        this.doanhThu = doanhThu;
    }
    getDoanhThu(): number {
        return this.doanhThu;
    }
    setDoanhThu(doanhThu: number):void{
        this.doanhThu = doanhThu;
    }
}

class ChuyenXeNgoaiThanh{
    private doanhThu: number;
    constructor(maSoChuyen: string, hoTenTaiXe: string, soXe: string,noiDen: string, soNgayDiDuoc: number, doanhThu: number){
        this.doanhThu = doanhThu;
    }
    getDoanhThu(): number {
        return this.doanhThu;
    }
    setDoanhThu(doanhThu: number):void{
        this.doanhThu = doanhThu;
    }
}

class ChuyenXe{
    danhSachXeNoiThanh: ChuyenXeNoiThanh[] = [];
    danhSachXeNgoaiThanh: ChuyenXeNgoaiThanh[] = []

    addChuyenXeNoiThanh(chuyen: ChuyenXeNoiThanh) {
        this.danhSachXeNoiThanh.push(chuyen);
    }

    addChuyenXeNgoaiThanh(chuyen: ChuyenXeNgoaiThanh) {
        this.danhSachXeNgoaiThanh.push(chuyen);
    }

    tongDoanhThu2LoaiChuyenXe(): number{
        const chuyenXeNoiThanh = this.danhSachXeNoiThanh.reduce((sum,chuyen) => sum + chuyen.getDoanhThu(), 0)
        const ChuyenXeNgoaiThanh = this.danhSachXeNgoaiThanh.reduce((sum,chuyen) => sum + chuyen.getDoanhThu(), 0)
        return chuyenXeNoiThanh + ChuyenXeNgoaiThanh;
    }
}

const chuyenXe = new ChuyenXe();

const noithanh1 = new ChuyenXeNoiThanh("1","Nguyen Van A", "AB23", 3, 3000, 500000);
const noithanh2 = new ChuyenXeNoiThanh("2","Banh thi B", "CD09", 74, 23000, 1000000000);

const ngoaithanh1 = new ChuyenXeNgoaiThanh("3", "Tran Nguyen C", "3D32", "Ha Noi", 30, 80000)
const ngoaithanh2 = new ChuyenXeNgoaiThanh("4", "Dinh Trang D", "6D2176GB", "Ho Chi Minh", 3, 5000000)

chuyenXe.addChuyenXeNoiThanh(noithanh1)
chuyenXe.addChuyenXeNoiThanh(noithanh2)
chuyenXe.addChuyenXeNgoaiThanh(ngoaithanh1)
chuyenXe.addChuyenXeNgoaiThanh(ngoaithanh2)
console.log(chuyenXe);


const overallDoanhThu = chuyenXe.tongDoanhThu2LoaiChuyenXe();
console.log("Tong DoanhThu:", overallDoanhThu);