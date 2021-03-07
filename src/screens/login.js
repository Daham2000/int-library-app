import React, { Component } from 'react';
import { StyleSheet, View, Image,Text } from "react-native";
import LoginForm from '../components/login_form';

export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoStyle}>
                    <Image style={styles.logoImage} source={require("../images/image1.png")}></Image>
                    <Text style={styles.text}>User Login</Text>
                </View>
                <View style={styles.formController}>
                    <LoginForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5896DD",
    },
    logoStyle: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent : 'center',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    text:{
        color: '#fff',
        marginTop: 10,
        textAlign : 'center',
        opacity : 0.9,
        fontSize: 20,
    }
});
