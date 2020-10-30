import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import FunctionSignOut from '../../functions/SignOut';

function Home() {
    return (
        <View style={styles.container}>
            <Button
                title="Logout"
                onPress={FunctionSignOut}
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
});

export default Home;
