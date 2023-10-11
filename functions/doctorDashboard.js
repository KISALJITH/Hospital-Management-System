var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};

createDoctor=()=>{

    const tempDoctor={
        name: document.getElementById("add-doctor-name").value,
        registrationNo :document.getElementById("doctor-registration-no").value,
        nic : document.getElementById("doctor-NIC").value,
        specializedArea: document.getElementById("doctor-specialized").value,
        educationalQualification: document.getElementById("educational-qualification").value,
        joinDate : document.getElementById("join-date").value
    }

    const database =firebase.firestore();
    database.collection("doctors")
    .add(tempDoctor)
    .then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
}