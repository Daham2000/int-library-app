import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView,Image, Button } from 'react-native';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.logoImage} source={require("../images/bookLogo.png")}></Image>
                <Text style={styles.text}>See Library</Text>
                <View style={[{ width: "50%", marginTop: 5,borderRadius:20, backgroundColor: "#2c3e50" }]}>
                    <Button
                        onPress={() => navigate('AddBook')}
                        title="Add a book"
                        color="#27ae60"
                        style={styles.btn}
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
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: "#5896DD",
    },
    logoImage: {
        width:150,
        height:100
    },
    text: {
        fontSize: 25,
        color: "#ecf0f1",
        marginTop: 8,
        marginBottom:10,
    },
    btn:{
        borderRadius:20,

    }
});

