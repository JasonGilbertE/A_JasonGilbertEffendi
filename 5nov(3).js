const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
const peopleList = document.getElementById('peopleList');

for (let i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
    peopleList.innerHTML += people[i].toUpperCase() + "<br>";
}