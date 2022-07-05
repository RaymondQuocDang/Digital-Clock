document.addEventListener("DOMContentLoaded", () => {

    // Reload time every second
    setInterval(full_time, 1000);

    // Display time and date
    full_time();
    full_date();

});

// Function to display time on screen
function full_time () {
    
    // new Date function
    let today = new Date ();
    
    // Format hour, minutes and second
    let hour = format_time(today.getHours());
    let minute = format_time(today.getMinutes());
    let second = format_time(today.getSeconds());

        // Show AM and PM
        if (hour < 13) {
            var meridiem = "AM";
        }   else {
            var meridiem = "PM";
            hour = hour - 12;
        }
    
    // Add information to inner HTML
    document.querySelector("#time").innerHTML = `${hour} : ${minute} : ${second} ${meridiem}`
    
}


// Add 0 infront of time if under 10
function format_time (x) {
    if (x < 10) {
        return `0${x}`
    }
    else {
        return x
    }

}

// Display full date on screen
function full_date () {
    
    // Format date
    let today = new Date();
    let month = wordify_month(today.getMonth())
    let day = wordify_day(today.getDay())
    let date = wordify_date(today.getDate())

    // Add full date into inner HTML
    let full_date = `${day}, ${month} ${date} ${today.getFullYear()}`;
    document.querySelector("#date").innerHTML = full_date;

}

// Turn month number into the word
function wordify_month (x) {

// List of months
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// Select and return the appropriate month
let month = months[x]
return month
}

// Turn day number into the word
function wordify_day (x) {

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let day = days[x]
    return day
}


// Add st, nd, rd or th to the end od the date
function wordify_date (x) {
    if (x == 1 || x == 21 || x == 31) {
        return `${x}st`
    }
    else if (x == 2 || x == 22) {
        return `${x}nd`
    }
    else if (x == 3 || x == 23) {
        return `${x}rd`
    }
    else {
        return `${x}th`
    }

}