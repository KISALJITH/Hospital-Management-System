var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};

function addPatient(name, nic, joinedDate){
    this.name=name;
    this.nic=nic;
    this.joinedDate=joinedDate;

}

createPatient=()=>{

    const tempPatient = new addPatient(
        document.getElementById("add-patient-name").value,
        document.getElementById("patinet-NIC").value,
        document.getElementById("register-date").value
    )

    const database = firebase.firestore();
    database.collection("patients"); 
}