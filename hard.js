// Inside a closure, create an object called PII 
// (Personally Identifiable Information)that cannot
// be accessed directly. The object should have at 
// least two properties: name and SSN. Only the name 
// property should be accessible, and it should be 
// called through a public function. The SSN property 
// should not be accessible at all. Creating private 
// objects and private properties helps you control 
// who has access to what data and helps you prevent 
// people who shouldn't see important info like social 
// security numbers from getting access to the data.
// You can use 'getName' or other get methods to access 
// data that people might need. For example, people addressing
// a package or email may need a customer's name, but they 
// definitely shouldn't have access to their SSN.


// Create an object called PII
class PII {
    #ssn
    constructor (firstName, lastName, ssn) {
        // Person's Name
        this.firstName = firstName;
        this.lastName = lastName;
        //Make person's SSN private
        this.#ssn = ssn;
    }
    
    // Function to get person's name
   getName() {
        console.log(`Their name is ${this.firstName} ${this.lastName}`);
   };

    // Function to get person's SSN
    getSSN() {
        console.log(`${this.firstName} ${this.lastName}'s SSN is ${this.ssn}`);
    };
}

// new PII
let emma = new PII("Emma", "Taylor", 123-45-6789);

console.log(emma.getName()); // Their name is Emma Taylor
console.log(emma.getSSN()); // Emma Taylor's SSN is undefined
// SSN is showing as undefined becuase it is a private property so it will not show.