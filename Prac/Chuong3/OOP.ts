class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  setName(name: string): void {
    this.name = name;
  }

  setAge(age: number): void {
    this.age = age;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person1 = new Person("John Doe", 30);

person1.displayInfo();

person1.setAge(31);
person1.setName("John Smith");

person1.displayInfo();