import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import FunctionSignIn from '../../functions/SignIn';

function SignIn(props) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder='E-mail'
            />
            <TextInput
                style={styles.textInput}
                onChangeText={text => setPassword(text)}
                value={password}
                placeholder='Password'
            />
            <Button
                title="Login"
                onPress={() => FunctionSignIn({email, password})}
            />
            <Text
                onPress={() => props.navigation.navigate('SignUp')}
            >
                Cadastre-se
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    textInput: {
        height: 40,
        width: '90%',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10
    }
});

export default SignIn;
