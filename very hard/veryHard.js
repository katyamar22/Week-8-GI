// Object prototype chain and prototypal inheritance exercise.


// Create a Person constructor that has three properties: name, job, and age.
class Person {
    constructor (name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    };
    // Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
    exercise() {
        console.log("I love going to the gym!")
    }

    // Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
    fetchJob() {
        console.log(`${this.name} is a ${this.job}.`);
    }
}

let person3 = new Person('Emma', 'Nurse', 34);

console.log(person3); // Person { name: 'Emma', job: 'Nurse', age: 34 }

person3.exercise(); // I love going to the gym!

person3.fetchJob();// Emma is a Nurse.

// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
class Programmer extends Person {
    constructor(name, job, age, languages, busy) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    };

// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. 
    completeTask() {
        this.busy = false;
    };

// Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
    acceptNewTask() {
        this.busy = true;
    }

// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
    offerNewTask() {
        this.busy = true ?
            console.log(`${this.name} is currently not available to complete task.`)
        :
            console.log(`${this.name} can complete this task.`)
        
    }

// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and 
    learnLanguage(newLanguage) {
        this.languages.push(newLanguage);
    }

 // list off all languages the programmer knows.
    listLanguages() {
        console.log(`${this.name} knows ${this.languages.join(' , ')}.`);
    }

}

// Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.

const person1 = new Person('Evan', 'Data Analyst', 23);
console.log(person1); // Person { name: 'Evan', job: 'Data Analyst', age: 23 }

const person2 = new Person('Claire', 'Programmer', 26);

const programmer1 = new Programmer(person2.name, person2.job, person2.age, ['JavaScript']);
console.log(programmer1); // Programmer {
                          //     name: 'Claire',
                          //     job: 'Programmer',
                          //     age: 26,
                          //     languages: 'JavaScript',
                          //     busy: true
                          //   }

const programmer2 = new Programmer ('Tyler', 'Programmer', 24, ['Python', 'HTML']);
programmer2.completeTask();
console.log(programmer2); // now busy = false

programmer2.acceptNewTask();
console.log(programmer2); // now busy= true

programmer2.offerNewTask();// Tyler is currently not available to complete task.

programmer2.learnLanguage('JavaScript');
console.log(programmer2); // languages: [ 'Python', 'HTML', 'JavaScript' ],

programmer2.listLanguages(); // Tyler knows Python , HTML , JavaScript.