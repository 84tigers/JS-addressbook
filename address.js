"use strict";

// constructs AddressBook class and methods
class AddressBook {
    constructor () {
    this.contacts = [];
    }    
    add() {
    // add method
    }
    print() {
    // print to console method
    }
    deleteAt() {
    // delete method
    }
};
// creates Contacts class and data
class Contacts {
    constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
    }
};

const addressBook = new AddressBook;
while (true) {
    let choice = prompt(`Add, Delete, Print, or Quit?`);
    if (choice === `Add`) {
        let name = prompt(`Enter a name:`);
        let email = prompt(`Enter an email:`);
        let phone = prompt(`Enter a phone number:`);
        let relation = prompt(`Enter relation:`);
        addressBook.add(new Contacts(name, email, phone, relation));
        
    } else if (choice === `quit`) {
        break;

    } else if (choice === "print") {
        addressBook.Book.print(); {
            for (let contact of this.contacts) {
                console.log(contact);
            }
        }
    }
};




// CHECKING ARRAY CONTENT
// for (let i = 0, i < AddressBook.length, i++);
// console.log(contacts[i]);



////   *****CLASS NOTES REFERENCE*********

// class Person extends Student {
//     constructor(name) {
//     super();    
//     this.name = name;
//     }
//     speak() {
//         console.log(`A friendly student named ${Student.name} says
//         hello!`)
//     }
// };

// console.log(Student[])



// class Item {
//     constructor(name, price, qty);
// }

// function removeItem(name) {
//     itemList.splice(itemList.indexOf(name) , 1);
    // for (let i = 0; i < DataTransferItemList.length; i++) {
    //     if (name === itemList[i].name) {
    //         itemList.splice(i, 1);
    //     }
    // }
// }

// class Student {
//     constructor(name, age){
//     this.name = name;
//     this.age = age;
//     this.knowledge = 0;
//     }
//     sayHello() {
//     console.log("Hello, front-end!");
//     }
//     study() {
//         this.knowledge++;
//     }
//     party() {
//         this.knowledge -= 2;
//     }
// }

// class FrontEnd extends Student {
//         constructor(name, age, favFood) {
//         super();
//         this.name = name;
//         this.age = age;
//         this.favFood = favFood;
//         this.knowledge = 10;
//         this.superCool = true;
//         this.laptop = true;
//     }
//     learnJavaScript() {
//         this.knowledge += 20;
//     }
//     becomeAdam() {
//         this.favFood = 'Tiramisu';
//     }
//     party() {
//         this.knowledge += 5;
//     }
// }

// let aaron = new FrontEnd("Aaron", 30);
// aaron.learnJavaScript();
// aaron.becomeAdam();
// aaron.party();
// aaron.party();
// console.log(aaron);
// let carly = new Student('Carly', 27);
// console.log(carly)

// need for upcoming lab

// class Items {
//     constructor(name, price, qty) {
//         this.name = name;
//         this.price = price;
//         this.qty;
//     }
// }

// const itemList = [];
// itemList.push(new itemList("bread, 5, 2"));
// console.log(itemList)

    


// const shoppingList = [
//     {
//         names: "banana",
//         price: 1.00
//     },
//     {
//         names: "water",
//         price: 3.00
//     },
//     {
//         names: "bread",
//         price: 1.00
//     },
//     {
//         names: "butter",
//         price: 2.00
//     },
//     {
//         names: "cheese",
//         price: 3.00
//     },
//     {
//         names: "mustard",
//         price: 1.00
//     },
//     {
//         names: "cucumbers",
//         price: 2.00
//     },
//     {
//         names: "milk",
//         price: 3.00
//     },
// ];
// for (let i = 0; i < shoppingList.length; i++) {
//         console.log(shoppingList[i]);
//         // console.log((shoppingList[i].price) +=);
// };

// for (let i = 0; i < shoppingList.length; i++) {
//     console.log(`names: ${names.{}}`);
//     // console.log((shoppingList[i].price) +=);
// };
// let total = 0;
// items.forEach((name) => {
//     total += item.price;
//     });
//     console.log(total);



// METHODS for arrays
// const students = ["Gabriel", "dakota", "matt", "lauren", "steve"]
// students.push("ann marie"); //adds to end of array
// students.unshift("erica", "andrew"); //adds to begining
// students.shift(); // removes first element
// students.pop(); // removes last
// students.splice(2, 2, ); // removes and/or adds (start, length to go, what to add [optional] )
// students.splice(1, 0, "erica"); //moves erica after first
// students.sort(); // sorts array alphabetically
// console.log(students);



// const students = [
//     {
//         names: "Hart",
//         age: 23,
//         favColor: "blue",
//         playFrisbee() {
//             console.log(`${this.names} is playing frisee`);
//         },
//         birthday() {
//             this.age++;
//             return this.age;
//         },
      
//     {
//         names: "Aaron",
//         age: 32,
//         favColor: "electric blue"  
//     },
//     {
//         names: "Rachel",
//         age: 32,
//         favColor: "black"  
//     },
// ];

// students[1].birthday();


// console.log(students[2].favColor);
// // changing names 
// students[0].names = "Jonah";
// console.log(students[0].names);


//  for loop to iterate over array  --- console.log(lists all) ***** checking vaues
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
// };

// for of to iterate over array ----- this is for accessing the direct value of ea index *******checking values
// for (let student of students) {
//     console.log(student);
// };

// for-in  Good for checking properties (adam doesn't like it)

// for (let student in students[0]) {
//     console.log(student);
// };

// for each  ------ lists all
// students.forEach((student) => {
//     console.log(student);
// });


// const logSudent = (student) => {
//     console.log(student);
// };
// students.forEach(logStudents);
