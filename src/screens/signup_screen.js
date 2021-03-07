import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import SignupForm from '../components/signup_form';

export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <ScrollView >
                        <View style={styles.logoStyle}>
                            <Image style={styles.logoImage} source={require("../images/image1.png")}></Image>
                            <Text style={styles.text}>User Signup</Text>
                        </View>

                        <View style={styles.formController}>
                            <SignupForm />
                        </View>
                    </ScrollView  >
                </View>

            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: "#5896DD",
    },
    logoStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoImage: {
        width: 100,
        height: 100,
    },
    text: {
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 20,
    }
});
