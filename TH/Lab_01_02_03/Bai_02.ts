class Vehicle{
    private chuXe: string;
    private loaiXe: string;
    private triGiaXe: number;
    private dungTichXyLanh: number;

    constructor(chuXe: string, loaiXe: string, triGiaXe: number, dungTichXyLanh: number){
        this.chuXe = chuXe;
        this.loaiXe = loaiXe;
        this.triGiaXe = triGiaXe;
        this.dungTichXyLanh = dungTichXyLanh;
    }

    getChuXe(): string{
        return this.chuXe;
    }
    setChuXe(chuXe: string): void {
        this.chuXe = chuXe;
    }
}