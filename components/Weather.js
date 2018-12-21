import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";

class Weather extends Component {

render() {
     return (
        <LinearGradient colors={["#00C6FB","#005BEA"]} style=
        {styles.container}>
        <View style={styles.upper}>
            <Text> Weather Icon</Text>
        </View>

        <View style={styles.upper}>
            <Text style={styles.title}> Good Weather App</Text>
            <Text style={styles.subtext}> Good Weather App 2</Text>
        </View>

        <View style={styles.lower}>
        <Text style={styles.title}> Good Weather App</Text>
        <Text style={styles.subtitle}> Good Weather App 2</Text>
        </View>

        </LinearGradient>        
        
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    upper: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    lower:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-start",
        paddingLeft:25
    },
    title:{
        fontSize:30,
        backgroundColor:"transparent",
        color:"yellow",
        marginBottom:10,
        fontWeight:"300"

    },
    subtitle:{
        fontSize:24,
        backgroundColor:"transparent",
        color:"yellow",
        marginBottom:100

    }

})
export default Weather;