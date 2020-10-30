import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase';
import Routes from './src/Routes';

function App() {
	if (!firebase.apps.length) {
		var firebaseConfig = {
			apiKey: "AIzaSyDRjsxyWzfbkOEeR9kDUWfLJSnZWObwpqA",
			authDomain: "banco-hq.firebaseapp.com",
			databaseURL: "https://banco-hq.firebaseio.com",
			projectId: "banco-hq",
			storageBucket: "banco-hq.appspot.com",
			messagingSenderId: "1005961736296",
			appId: "1:1005961736296:web:282735feb3629de11f8bdd"
		};

        firebase.initializeApp(firebaseConfig);
	}
	
	return (
		<NavigationContainer>
			<Routes />
		</NavigationContainer>
	);
}

export default App;
