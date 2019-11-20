/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,TextInput,StatusBar,} from 'react-native';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {

  state = {
    placeName:''
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName:val
    });
  };

  render(){
  return (
    <View style={styles.container}>
      <TextInput 
      style={{width:300, borderColor: 'blue', borderWidth:1}} 
      placeholder="An awesome Place"
      value={this.state.placeName} 
      onChangeText={this.placeNameChangeHandler}  
      />
    </View>
  );
}
};

const styles = StyleSheet.create({
  container:{
    //flex:1,
    padding:20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

//export default App;
