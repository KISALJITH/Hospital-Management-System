const register=()=>{

    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    if(email && password){

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((cred)=>{
            console.log(cred);
            console.log(cred.user);
        })
        .catch((error)=>{
            console.log(error);
        })

    }
}