import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import FunctionSignUp from '../../functions/SignUp';

function SignUp() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => setName(text)}
                value={name}
                placeholder='Nome'
            />
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
                title="Se cadastrar"
                onPress={() => FunctionSignUp({name, email, password})}
            />
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

export default SignUp;
