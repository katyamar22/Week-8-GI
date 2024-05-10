// A local gym wants to implement an "exercise of the day" 
// program where there is a free class for that day that 
// promotes a certain exercise. The gym needs some backend 
// logic to update its system to reflect which exercise will 
// be promoted that day. Write a function that will take as 
// an input the name of an exercise and console log a message 
// like Today's exercise: running

// Assign exercise of the day
let exerciseSchedule = {
    sunday: "Yoga",
    monday: "HIIT",
    tuesday: "Cycling",
    wednesday: "Pilates",
    thursday: "Zumba",
    friday: "Cardio",
    saturday: "Weight Lifting"
}

// Create a function that:
function dailyExercise() {
    //Asks for user input
    let userPrompt = prompt("What day of the week is it?");
    let day = userPrompt.toLowerCase();
    

    // shows execise class of the day
    switch (day) {
        case 'sunday':
            let sundayClass = (`Todays exercise class is a ${exerciseSchedule.sunday} class.`);
            document.getElementById('exercise').innerHTML = sundayClass;
            console.log(sundayClass);
            break;
        case 'monday':
            let mondayClass = (`Todays exercise class is a ${exerciseSchedule.monday} class.`);
            document.getElementById('exercise').innerHTML = mondayClass;
            console.log(mondayClass);
            break;
        case 'tuesday':
            let tuesdayClass = (`Todays exercise class is a ${exerciseSchedule.tuesday} class.`);
            document.getElementById('exercise').innerHTML = tuesdayClass;
            console.log(tuesdayClass);
            break;
        case 'wednesday':
           let wednesdayClass = (`Todays exercise class is a ${exerciseSchedule.wednesday} class.`);
           document.getElementById('exercise').innerHTML = wednesdayClass;
           console.log(wednesdayClass);
            break;
        case 'thursday':
            let thursdayClass = (`Todays exercise class is a ${exerciseSchedule.thursday} class.`);
            document.getElementById('exercise').innerHTML = thursdayClass;
            console.log(thursdayClass);
            break;
        case 'friday':
            let fridayClass = (`Todays exercise class is a ${exerciseSchedule.friday} class.`);
            document.getElementById('exercise').innerHTML = fridayClass;
            console.log(fridayClass);
            break;
        case 'saturday':
            let saturdayClass = (`Todays exercise class is  ${exerciseSchedule.saturday} class.`);
            document.getElementById('exercise').innerHTML = saturdayClass;
            console.log(saturdayClass);
            break;
        default: 
            let errorMessage = ("Sorry, that is not a valid option, please try again.");
            document.getElementById('exercise').innerHTML = errorMessage;
            console.log(errorMessage);
    }

}

dailyExercise();
