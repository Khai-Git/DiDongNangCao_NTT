// Section 2.1: Safety
function double(x: number): number {
    return 2*x;
}
double(2);

// Section 2.2: Readability

console.log('foo'.slice());

// Section 2.3: Tooling
let foo = '123';
{
    const foo = (x: number) => {
        return 2*x;
    }
    console.log(foo(2));
    
}