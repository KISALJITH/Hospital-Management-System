var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};


const createPatient=()=>{

    const tempPatient = {
        name:document.getElementById("add-patient-name").value,
        nic: document.getElementById("patient-NIC").value,
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

patientId=undefined;
// Load Data from DB
const loadPatients =()=>{
    const firestore=firebase.firestore();
    firestore.collection('patients')
    .get()
    .then((result)=>{
        result.forEach((records) => {
            const data =records.data();

            const row =`
            <tr>
                <td>${records.id}</td>
                <td>${data.name}</td>
                <td>${data.nic}</td>
                <td>${data.registerDate}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteData('${records.id}') ">Delete</button>
                    <button class="btn btn-success" onclick="updateData('${records.id}')" data-bs-toggle="modal" data-bs-target="#edit-patient-btn" data-bs-whatever="@mdo">Update</button>
                 </td>
            </tr>
            `;
            $('#table-body-patients').append(row);
            
        });
    })

}

//Update data
const updateData=(id)=>{
    patientId=id;
    const firestore=firebase.firestore();
    firestore.collection("patients")
    .doc(patientId)
    .get().then((response)=>{

        if(response.exists){
            const data =response.data();
                $("#add-patient-name").val(data.name);
                $("#patient-NIC").val(data.nic);
                $("#register-date").val(data.registerDate);
                // document.getElementById("add-patient-name").val(data.name);
                // document.getElementById("patinet-NIC").val(data.patinet-NIC);
                // document.getElementById("register-date").val(data.register-date);
            
        }
        
    })
}

const updateRecords=()=>{
    const firebase=firebase.firestore();
    firestore.collection("patients")
    .doc(patientId)
    .update({
        name: document.getElementById("add-patient-name").value,
        nic: document.getElementById("patinet-NIC").value,
        registerDate: document.getElementById("register-date").value
    }).then(()=>{
        patientId=undefined;
        loadPatients();
    })

}

//Delete data
const deleteData=(id)=>{

}