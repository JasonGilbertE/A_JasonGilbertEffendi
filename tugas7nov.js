let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

antrian.push("Nabila"); 
antrian.push("Maza", "Elsi"); 

antrian.pop();

antrian.shift(); 
antrian.shift(); 

antrian.unshift("Tomi");

const antrianList = document.getElementById("antrianList");
antrian.forEach((nama) => {
    let listItem = document.createElement("li");
    listItem.textContent = nama;
    antrianList.appendChild(listItem);
});
