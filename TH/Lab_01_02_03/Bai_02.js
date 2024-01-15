"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Vehicle = /** @class */ (function () {
    function Vehicle(chuXe, loaiXe, triGiaXe, dungTichXyLanh) {
        this.chuXe = chuXe;
        this.loaiXe = loaiXe;
        this.triGiaXe = triGiaXe;
        this.dungTichXyLanh = dungTichXyLanh;
    }
    Vehicle.prototype.getChuXe = function () {
        return this.chuXe;
    };
    Vehicle.prototype.getLoaiXe = function () {
        return this.loaiXe;
    };
    Vehicle.prototype.getTriGiaXe = function () {
        return this.triGiaXe;
    };
    Vehicle.prototype.getDungTichXyLanh = function () {
        return this.dungTichXyLanh;
    };
    Vehicle.prototype.setChuXe = function (chuXe) {
        if (chuXe.trim() === "") {
            throw new Error("Chủ xe không được để trống");
        }
        else {
            this.chuXe = chuXe;
        }
    };
    Vehicle.prototype.setLoaiXe = function (loaiXe) {
        if (loaiXe.trim() === "") {
            throw new Error("Loại xe không được để trống");
        }
        else {
            this.loaiXe = loaiXe;
        }
    };
    Vehicle.prototype.setTriGiaXe = function (triGiaXe) {
        if (triGiaXe < 0) {
            throw new Error("Trị giá xe không được bé hơn 0");
        }
        else {
            this.triGiaXe = triGiaXe;
        }
    };
    Vehicle.prototype.setDungTichXyLanh = function (dungTichXyLanh) {
        if (dungTichXyLanh < 0 && dungTichXyLanh > 200) {
            throw new Error("Dung tích xy lanh không được bé hơn 0 và lớn hơn 200");
        }
        else {
            this.dungTichXyLanh = dungTichXyLanh;
        }
    };
    Vehicle.prototype.Thue = function () {
        if (this.getDungTichXyLanh() < 100) {
            return 0.01 * this.getTriGiaXe();
        }
        else if (this.getDungTichXyLanh() >= 100 &&
            this.getDungTichXyLanh() <= 200) {
            return 0.03 * this.getTriGiaXe();
        }
        else {
            return 0.05 * this.getTriGiaXe();
        }
    };
    Vehicle.prototype.titleToString = function () {
        console.log("Tên chủ xe\t\t Loại xe\t Dung tích\t Trị giá\t\t Thuế phải nộp");
        console.log("========================================================================================");
    };
    Vehicle.prototype.toString = function () {
        console.log("".concat(this.getChuXe(), "\t\t ").concat(this.getLoaiXe(), "\t\t ").concat(this.getDungTichXyLanh(), "\t\t ").concat(this.getTriGiaXe(), "\t\t ").concat(this.Thue()));
    };
    return Vehicle;
}());
var xe1 = new Vehicle("Nguyễn Thu Loan", "Future", 35000000, 80);
var xe2 = new Vehicle("Lê Minh Tính", "Ford", 25000000, 150);
// Cho người dùng nhập thông tin cho xe3
var chuXe3 = readlineSync.question("Nhap ten chu xe cho xe3: ");
var loaiXe3 = readlineSync.question("Nhap ten loai xe cho xe3: ");
var TriGia3Input = readlineSync.question("Nhap tri gia xe cho xe3: ");
var TriGia3 = TriGia3Input !== null ? parseFloat(TriGia3Input) : 0;
var dungTichXyLanh3Input = readlineSync.question("Nhap dung tich cho xe3: ");
var dungTichXyLanh3 = dungTichXyLanh3Input !== null ? parseFloat(dungTichXyLanh3Input) : 0;
var xe3 = new Vehicle(chuXe3, loaiXe3, TriGia3, dungTichXyLanh3);
xe1.titleToString();
xe1.toString();
xe2.toString();
xe3.toString();
