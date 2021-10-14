
contactApp.controller('LoginController', ['$scope', function($scope) {
    console.log("estamos en Login!");
    
    // Direccionamiento de usuario

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            window.location="../ListaContactos/ListaContactos.html";
        }
    });

}]);