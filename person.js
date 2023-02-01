
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName,
        this.lastName = lastName
    }

    greeting(){
        console.log(`my first name is ${this.firstName} and my last name is ${this.lastName}`)
    }
}

module.exports = Person;