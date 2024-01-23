class HocVien {
    private hoTen!: string;
    private namSinh!: number;
    private diemMonHoc!: { [monHoc: string]: number };

    constructor(hoTen?: string, namSinh?: number, diemMonHoc?: { [monHoc: string]: number }) {
        if (hoTen && namSinh && diemMonHoc) {
            this.hoTen = hoTen;
            this.namSinh = namSinh;
            this.diemMonHoc = diemMonHoc;
        }
    }

    layDiemTrungBinh(): number {
        const diemTong = Object.values(this.diemMonHoc).reduce((acc, diem) => acc + diem, 0);
        return diemTong / Object.keys(this.diemMonHoc).length;
    }

    coThiLai(): { monHoc: string, diem: number }[] {
        return Object.entries(this.diemMonHoc)
            .filter(([monHoc, diem]) => diem < 5)
            .map(([monHoc, diem]) => ({ monHoc, diem }));
    }

    xetTieuChuan(): string {
        if (this.layDiemTrungBinh() > 7 && !Object.values(this.diemMonHoc).some(diem => diem < 5)) {
            return "Làm luận văn";
        } else if (this.layDiemTrungBinh() <= 7 && !Object.values(this.diemMonHoc).some(diem => diem < 5)) {
            return "Thi tốt nghiệp";
        } else {
            return "Hoc lai";
        }
    }
}

const hocVien1 = new HocVien("Nguyen Van A", 2000, { "Toan": 8, "Van": 7, "Anh": 6, "Ly": 9, "Hoa": 8 });
const hocVien2 = new HocVien("Tran Thi B", 2001, { "Toan": 5, "Van": 6, "Anh": 7, "Ly": 8, "Hoa": 4 });
const hocVien3 = new HocVien("Dinh Nguyen Manh C", 2005, { "Toan": 9, "Van": 1, "Anh": 9, "Ly": 9, "Hoa": 3 });

console.log("Hoc vien 1");
console.log(hocVien1.xetTieuChuan());
console.log(hocVien1.coThiLai());

console.log("Hoc vien 2");
console.log(hocVien2.xetTieuChuan());
console.log(hocVien2.coThiLai());

console.log("Hoc vien 3");
console.log(hocVien3.xetTieuChuan());
console.log(hocVien3.coThiLai());