import firebase from 'firebase';

function FunctionSignOut() {
    console.log('signout')
    firebase
        .auth()
        .signOut()
        .then(() => console.log('logout funfou'))
        .catch(error => console.log('logout falhou ' + error));
};

export default FunctionSignOut;