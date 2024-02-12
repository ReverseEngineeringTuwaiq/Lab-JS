import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import App from './App';

function ScreenOne({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const validateInputs = () => {
        const nameRegex = /^[a-zA-Z\s]*$/;
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        const isNameValid = nameRegex.test(name);
        const isEmailValid = emailRegex.test(email);

        if (isNameValid && isEmailValid) {
            setIsSubmitDisabled(false);
        }else{
            setIsSubmitDisabled(true);
        }
    }

    const submit = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.title}>Name:</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your name'
                onChangeText={(text) => setName(text)}
                value={name}
                onBlur={validateInputs}
            />
            <Text style={styles.title}>Email:</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter your Email'
                onChangeText={(text) => setEmail(text)}
                value={email}
                onBlur={validateInputs}
            />
            <Text style={styles.title}>Password:</Text>
            <TextInput style={styles.input} placeholder='Enter your Password' secureTextEntry={true} />
            <Button title="Submit" onPress={submit} disabled={isSubmitDisabled} />
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

export default ScreenOne;
