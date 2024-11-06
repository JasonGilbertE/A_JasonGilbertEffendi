function showDataTypes() {
    let name = "Jason";
    console.log("String:", name);
    alert("String: " + name);

    let age = 25;
    console.log("Number:", age);
    alert("Number: " + age);

    let isStudent = true;
    console.log("Boolean:", isStudent);
    alert("Boolean: " + isStudent);

    let colors = ["red", "green", "blue"];
    console.log("Array:", colors);
    alert("Array: " + colors.join(", "));

    let person = {
        name: "Jason",
        age: 25,
        isStudent: true
    };
    console.log("Object:", person);
    alert("Object: " + JSON.stringify(person));
}
