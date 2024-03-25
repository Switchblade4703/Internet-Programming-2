document.getElementById("btn").addEventListener("click", () => {
    alert("Button clicked!");
  });

class employee {
    constructor(id, fullname){
        this.id = id;
        this.fullname = fullname;
    }
}

var emp1 = new employee(131, "Scarlet Milk");

console.log(emp1.fullname + " Employee ID: " + emp1.id);