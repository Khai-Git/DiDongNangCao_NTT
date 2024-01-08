// Section 3.1: String Literal Types
let myFavoritePet: "dog";
myFavoritePet = "dog";

type Species = "cat" | "dog" | "bird";
type Pet = string;
type Cat = string;
type Dog = string;
type Bird = string;

function buyPet(pet: "cat", name: string): Cat;
function buyPet(pet: "dog", name: string): Dog;
function buyPet(pet: "bird", name: string): Bird;
function buyPet(pet: Species, name: string) : Pet {
    return pet + " " + name;
}

// buyPet(myFavoritePet,"Doggo")

const myNewPet: Pet = buyPet(myFavoritePet, "Doggo");
console.log(myNewPet);

let dog = buyPet(myFavoritePet,"Rocky")
console.log(dog);

