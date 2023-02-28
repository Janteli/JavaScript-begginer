const monthsE1 = document.querySelector('.date h1');
const fullDateE1 = document.querySelector('.date p');

const daysE1 = document.querySelector('.days');

// for finding total nos of days in the month
const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx +1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx , 1).getDay() - 1;
console.log(firstDay);

// new date for month is defined with var monthInx
// in array form previous last day on adding +1 current month last day
console.log(lastDay);

const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// console.log(months);
monthsE1.innerHTML = months[monthInx];
fullDateE1.innerHTML = new Date().toDateString();
let days = "";
for(let i = firstDay; i>0; i--){
    days += `<div class="empty"></div>`;
}

for(let i=1;i<=lastDay;i++) {
    if(i === new Date().getDate()){
        days += `<div class="today">${i}</div>`;
    }
    days += `<div>${i}</div>`;
}

daysE1.innerHTML = days;
// since day 1 of the month doesnot starts with monday so
// keeping the empty
// highliting the current date



