import firebase from 'firebase';

interface IUser {
    name: string;
    email: string;
    password: string;
}

function FunctionSignUp(data: IUser) {
    firebase
        .auth()
        .createUserWithEmailAndPassword(data.email.toString().trim(), data.password.trim())
        .then()
        .catch(error => console.log('falhou ' + error));
};

export default FunctionSignUp;
