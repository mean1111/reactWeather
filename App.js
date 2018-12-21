import React, {Component} from 'react';
import { StyleSheet, Text, View, Image , ActivityIndicator } from 'react-native';
import Weather from './components/Weather';

class App extends React.Component {
  state = {
    isLoaded:false
  };

  render() {
    const {isLoaded} = this.state;
    return(
      <View style={styles.container}>
        {isLoaded ? null : ( 
        <Weather></Weather>
      )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"#fff"
  },

  loading: {
    flex:1,
    backgroundColor:"#FDF6aa",
    justifyContent: "flex-end",
    paddingLeft:25
  },

  loadingText:{
    fontSize:38,
    marginBottom:100
  }
})

export default App;
