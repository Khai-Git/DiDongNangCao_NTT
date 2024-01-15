import * as readlineSync from "readline-sync";

class Vehicle {
  private chuXe: string;
  private loaiXe: string;
  private triGiaXe: number;
  private dungTichXyLanh: number;

  constructor(
    chuXe: string,
    loaiXe: string,
    triGiaXe: number,
    dungTichXyLanh: number
  ) {
    this.chuXe = chuXe;
    this.loaiXe = loaiXe;
    this.triGiaXe = triGiaXe;
    this.dungTichXyLanh = dungTichXyLanh;
  }

  getChuXe(): string {
    return this.chuXe;
  }
  getLoaiXe(): string {
    return this.loaiXe;
  }
  getTriGiaXe(): number {
    return this.triGiaXe;
  }
  getDungTichXyLanh(): number {
    return this.dungTichXyLanh;
  }
  setChuXe(chuXe: string): void {
    if (chuXe.trim() === "") {
      throw new Error("Chủ xe không được để trống");
    } else {
      this.chuXe = chuXe;
    }
  }
  setLoaiXe(loaiXe: string): void {
    if (loaiXe.trim() === "") {
      throw new Error("Loại xe không được để trống");
    } else {
      this.loaiXe = loaiXe;
    }
  }
  setTriGiaXe(triGiaXe: number): void {
    if (triGiaXe < 0) {
      throw new Error("Trị giá xe không được bé hơn 0");
    } else {
      this.triGiaXe = triGiaXe;
    }
  }
  setDungTichXyLanh(dungTichXyLanh: number): void {
    if (dungTichXyLanh < 0 && dungTichXyLanh > 200) {
      throw new Error("Dung tích xy lanh không được bé hơn 0 và lớn hơn 200");
    } else {
      this.dungTichXyLanh = dungTichXyLanh;
    }
  }
  Thue(): number {
    if (this.getDungTichXyLanh() < 100) {
      return 0.01 * this.getTriGiaXe();
    } else if (
      this.getDungTichXyLanh() >= 100 &&
      this.getDungTichXyLanh() <= 200
    ) {
      return 0.03 * this.getTriGiaXe();
    } else {
      return 0.05 * this.getTriGiaXe();
    }
  }
  titleToString(): void {
    console.log(
      "Tên chủ xe\t\t Loại xe\t Dung tích\t Trị giá\t\t Thuế phải nộp"
    );
    console.log(
      "========================================================================================"
    );
  }
  toString(): void {
    console.log(
      `${this.getChuXe()}\t\t ${this.getLoaiXe()}\t\t ${this.getDungTichXyLanh()}\t\t ${this.getTriGiaXe()}\t\t ${this.Thue()}`
    );
  }
}

const xe1 = new Vehicle("Nguyễn Thu Loan", "Future", 35000000, 80);
const xe2 = new Vehicle("Lê Minh Tính", "Ford", 25000000, 150);

// Cho người dùng nhập thông tin cho xe3
const chuXe3 = readlineSync.question("Nhap ten chu xe cho xe3: ");
const loaiXe3 = readlineSync.question("Nhap ten loai xe cho xe3: ");

const TriGia3Input = readlineSync.question("Nhap tri gia xe cho xe3: ");
const TriGia3 = TriGia3Input !== null ? parseFloat(TriGia3Input) : 0;

const dungTichXyLanh3Input = readlineSync.question("Nhap dung tich cho xe3: ");
const dungTichXyLanh3 =
  dungTichXyLanh3Input !== null ? parseFloat(dungTichXyLanh3Input) : 0;

const xe3 = new Vehicle(chuXe3, loaiXe3, TriGia3, dungTichXyLanh3);

xe1.titleToString();
xe1.toString();
xe2.toString();
xe3.toString();
