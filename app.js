$(document).ready(function() {
    console.log("cargando la pagina");
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBBt4It7zTgPPRUsyMtOQtX2Be-_Ehz_wQ",
        authDomain: "ram-fb.firebaseapp.com",
        databaseURL: "https://ram-fb.firebaseio.com",
        projectId: "ram-fb",
        storageBucket: "ram-fb.appspot.com",
        messagingSenderId: "692814442202"
    };
    firebase.initializeApp(config);

    var provider = new firebase.auth.GoogleAuthProvider();

    $("#btnLogin").click(function(){
        console.log("Hola mundo");
        firebase.auth().signInWithPopup(provider).then(function(result) {
            console.log(result.user);
            var usuario = result.user;

            $("#btnLogin").hide();
            $("#contenido").append('<div><h3>Bienvenido:</h3> '+ usuario.displayName +'</div>');
            $("#contenido").append('<div><img width="100px" src="'+ usuario.photoURL +'"/></div>');
        }).catch(function(error) {
            console.log(error);
        });
    });
});