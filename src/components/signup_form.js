'use strict';

import React, { Component } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class SignupForm extends ValidationComponent {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            nameError: "", 
            email: "", 
            emailError: "", 
            newPassword: "",
            passwordConfirm: "" ,
            passwordError: "",
            passwordConError: "",
        };
    }

    _onPressButton() {
        
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput
                    placeholder="User name"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="next"
                    onSubmitEditing={() => this.email.focus()}
                    keyboardType="default"
                    ref="name"
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                    style={styles.input} />
                <Text></Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="next"
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    onSubmitEditing={() => this.newPassword.focus()}
                    keyboardType="email-address"
                    ref="email"
                    style={styles.input} />
                <Text></Text>
                <TextInput
                    ref="newPassword"
                    placeholder="Password"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    onChangeText={(newPassword) => this.setState({ newPassword })}
                    value={this.state.newPassword}
                    secureTextEntry={true}
                    style={styles.input} />
                <Text></Text>
                <TextInput
                    placeholder="Password Confirm"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="go"
                    secureTextEntry
                    ref="passwordConfirm"
                    onChangeText={(passwordConfirm) => this.setState({ passwordConfirm })}
                    value={this.state.passwordConfirm}
                    style={styles.input} />
                <Text></Text>
                {this.isFieldInError('confirmPassword') && this.getErrorsInField('confirmPassword').map(errorMessage => <Text>{errorMessage}</Text>)}
                <TouchableOpacity style={styles.btnContainer} onPress={this._onPressButton}>
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
    },
    textValidationStyle: {
        fontSize: 10,
        margin: 1,
        color: '#e74c3c',
    }
});