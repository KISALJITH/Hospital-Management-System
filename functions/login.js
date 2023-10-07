const registerForm=()=>{
    window.location.href="./../Pages/register.html";
   
}

const login =()=>{
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((respon)=>{
        console.log(respon);
        console.log(respon.user);
        window.location.href="./../Pages/dashboard.html"
    })
    .catch((error)=>{
        console.log(error);
    })

    


}



