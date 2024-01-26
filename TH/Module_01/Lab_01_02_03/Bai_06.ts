class HV {
    constructor(public hoTen: string, public diaChi: string, public soDienThoai: string) {}
}

class KhoaHoc {
    danhSachHV: HV[] = [];

    constructor(
        public tenKhoaHoc: string,
        public ngayMoKhoaHoc: Date,
        public thoiGianHoc: string
    ) {}

    themHV(HV: HV) {
        if (this.danhSachHV.length < 20) {
            this.danhSachHV.push(HV);
            console.log(`Thêm học viên ${HV.hoTen} vào khóa học ${this.tenKhoaHoc}.`);
        } else {
            console.log(`Khóa học ${this.tenKhoaHoc} đã đầy.`);
        }
    }

    timHVTheoTen(ten: string): HV | undefined {
        return this.danhSachHV.find((HV) => HV.hoTen === ten);
    }

    kiemTraKhoaHocKetThuc(): string {
        const ngayHienTai = new Date();
        if (ngayHienTai >= this.ngayMoKhoaHoc) {
            return "Khoa hoc da ket thuc";
        }
        return "Kho hoc chua ket thuc";
    }

    kiemTraKhoaHocBatDau(): string {
        const ngayHienTai = new Date();
        if (ngayHienTai < this.ngayMoKhoaHoc) {
            return "Khoa hoc chua bat dau";
        }
        return "Khoa hoc da bat dau";
    }
}

const HV1 = new HV("Nguyen Van A", "Ha Noi", "123456789");
const HV2 = new HV("Tran Thi B", "Ho Chi Minh", "987654321");

const khoaHoc1 = new KhoaHoc("Khoa hoc TypeScript", new Date("2023-02-01"), "18:00");
khoaHoc1.themHV(HV1);
khoaHoc1.themHV(HV2);

console.log("Danh sách học viên trong khóa học:");
console.log(khoaHoc1.danhSachHV);

console.log("Tìm học viên theo tên:");
const timHV = khoaHoc1.timHVTheoTen("Nguyen Van A");
console.log(timHV);

console.log("Kiểm tra khóa học đã kết thúc:");
console.log(khoaHoc1.kiemTraKhoaHocKetThuc());

console.log("Kiểm tra khóa học đã bắt đầu:");
console.log(khoaHoc1.kiemTraKhoaHocBatDau());
