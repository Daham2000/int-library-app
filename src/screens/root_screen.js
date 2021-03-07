import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Button, navigation } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreenBtn({ navigation }) {
    return (
        <View style={[{ width: "50%", marginTop: 10, backgroundColor: "red" }]}>
            <Button
                onPress={() =>
                    navigation.natigate('Login')
                }
                title="Login"
                color="#27ae60"
            />
        </View>
    );
}

export default class RootScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.image} source={require("../images/bookLogo.png")}></Image>
                <Text style={styles.title}>Welcome to See Library app</Text>
                <Text style={styles.title2}>Please Login or Signup to access the library</Text>
                <View style={[{ width: "50%", marginTop: 10, backgroundColor: "red" }]}>
                    <Button
                        onPress={() => navigate('Login')}
                        title="Login"
                        color="#27ae60"
                    />
                </View>                
                <View style={[{ width: "50%", marginTop: 5, backgroundColor: "red" }]}>
                    <Button
                        onPress={() => navigate('Signup')}
                        title="Signup"
                        color="#27ae60"
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#3498db",
    },
    image: {
        width: 160,
        height: 110.
    },
    title: {
        fontSize: 22,
        fontWeight: '200',
        color: '#fff',
        fontFamily: "Arial",
        marginTop: 10,
    },
    title2: {
        fontSize: 17,
        fontWeight: '200',
        color: '#fff',
        fontFamily: "Arial",
        marginTop: 10,
        marginBottom: 5,
    },
});
