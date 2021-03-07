import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                  <TextInput
                    placeholder="User name"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="next"
                    onSubmitEditing={() => this.emailInput.focus()}
                    keyboardType="default"
                    style={styles.input} />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="next"
                    ref={(input) => this.emailInput = input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    style={styles.input} />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="next"
                    secureTextEntry
                    ref={(input) => this.passwordInput = input}
                    onSubmitEditing={() => this.passwordConfirm.focus()}
                    style={styles.input} />
                <TextInput
                    placeholder="Password Confirm"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="go"
                    secureTextEntry
                    ref={(input) => this.passwordConfirm = input}
                    style={styles.input} />
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btn}>REGISTER</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 60,
        backgroundColor: 'rgba(250,250,250,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10,
    },
    btnContainer: {
        backgroundColor: '#298069',
        paddingVertical: 10,
    },
    btn: {
        textAlign: 'center',
        fontWeight: '600',
        color: '#FFFFFF'
    }
});