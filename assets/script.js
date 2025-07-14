const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const currentDate = new Date();
document.getElementById("date").value = currentDate.getDate();
document.getElementById("month").value = currentDate.getMonth() + 1;
document.getElementById("year").value = currentDate.getFullYear();

document.getElementById("form").addEventListener("change", () => {
    let year = document.getElementById("year").value;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        daysInMonth[1] = 29;
    } else {
        daysInMonth[1] = 28;
    }
    document
        .getElementById("date")
        .setAttribute(
            "max",
            daysInMonth[document.getElementById("month").value - 1]
        );
});

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    document.getElementById("result").textContent = dayFinder(
        parseInt(document.getElementById("date").value),
        parseInt(document.getElementById("month").value),
        parseInt(document.getElementById("year").value)
    );
});

const dayFinder = (date, month, year) => {
    let numberOfDays = date;
    let daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    for (let m = 0; m < month - 1; m++) {
        numberOfDays += daysInMonth[m];
    }
    for (let y = 1; y < year; y++) {
        if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
            numberOfDays += 366;
        } else {
            numberOfDays += 365;
        }
    }

    return `The Day on ${date} / ${month} / ${year} is ${
        daysOfWeek[numberOfDays % 7]
    }`;
};
