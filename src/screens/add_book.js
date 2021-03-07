import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from "react-native";
import AddBookForm from '../components/add_bookForm';

export default class Add_Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoStyle}>
                    <Image style={styles.logoImage} source={require("../images/bookLogo.png")}></Image>
                    <Text style={styles.text}>Add a newbook</Text>
                </View>

                <View style={styles.formController}>
                    <AddBookForm />
                </View>
            </View>
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
        width: 160,
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
