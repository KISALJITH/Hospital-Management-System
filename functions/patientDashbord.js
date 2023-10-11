var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};


createPatient=()=>{

    const tempPatient = {
       name: document.getElementById("add-patient-name").value,
        nic: document.getElementById("patinet-NIC").value,
        registerDate: document.getElementById("register-date").value
    }

    const database = firebase.firestore();
    database.collection("patients")
    .add(tempPatient)
    .then((response)=>{
        console.log(response);
    }
    ).catch((error)=>
    console.log(error)); 
}