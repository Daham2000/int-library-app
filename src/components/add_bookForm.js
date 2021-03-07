import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView } from "react-native";

export default class AddBookForm extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TextInput
                    placeholder="Name"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="default"
                    style={styles.input} />
                <TextInput
                    placeholder="Author"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="default"
                    style={styles.input} />
                <TextInput
                    placeholder="Date"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="default"
                    style={styles.input} />
                <TextInput
                    placeholder="Description"
                    placeholderTextColor='rgba(250,250,250,0.7)'
                    returnKeyType="go"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="default"
                    style={styles.input} />
                <TouchableOpacity style={styles.btnContainer}>
                    <Text style={styles.btn}>SUBMIT</Text>
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
        borderRadius: 10
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