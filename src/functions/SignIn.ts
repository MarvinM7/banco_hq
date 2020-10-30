import firebase from 'firebase';

interface IUserSignIn {
    email: string;
    password: string;
}

function FunctionSignIn(data: IUserSignIn) {
    console.log('signin')
    firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then(() => console.log('signin funfou'))
        .catch(error => console.log('signin falhou ' + error));
};

export default FunctionSignIn;