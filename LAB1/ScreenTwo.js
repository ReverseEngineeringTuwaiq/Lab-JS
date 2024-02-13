import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import App from './App';

function ScreenTwo({ navigation }) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const validateEmail = () => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(email)) {
            setEmailError('');
            setIsSubmitDisabled(false);
        } else {
            setEmailError('Enter valid Email!');
            setIsSubmitDisabled(true);
        }
    }

    const submit = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your Email'
                onChangeText={(text) => setEmail(text)}
                value={email}
                onBlur={validateEmail}
            />
            {emailError ? <Text>{emailError}</Text> : null}
            <Text style={styles.title}>Password:</Text>
            <TextInput style={styles.input} placeholder='Enter your Password' secureTextEntry={true}/>
            <Button title="Submit" onPress={submit} disabled={isSubmitDisabled}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        width: 300,
        borderWidth: 1,
        borderRadius: 6,
        fontSize: 20,
        padding: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        paddingTop: 32,
        paddingBottom: 8,
    },
});

export default ScreenTwo;
