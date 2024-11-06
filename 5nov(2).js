const countdownElement = document.getElementById('countdown');

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
    countdownElement.innerHTML += i + "<br>";
}