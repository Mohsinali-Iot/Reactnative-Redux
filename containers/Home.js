import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button,Text, TextInput, View } from 'react-native';
import {connect} from 'react-redux'
import {set_data} from '../store/action'
function App(props) {
    console.log("props",props.data)
  const Add_Items=()=>{
    alert("Add Items")
  }
  const clear_all=()=>{
    alert("Add Items")
  }
//   console.log("Props",this.props)
  return (
    //   <view>
    //       <Text>Home Page</Text>
    //   </view>
      <View style={styles.container}>
          <Text>HomePage</Text>
        <View >
          <Text style={styles.header}>Chat-App</Text>
        </View>
        <View style={styles.input}>
            <TextInput
                style={styles.subinp}
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                placeholder="Enter Name"
            />
          <TextInput
              style={styles.subinp}
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => onChangeText(text)}
              placeholder="Enter Email"

          />
        </View>
        {/* <Text>tu pagal hei</Text> */}
        <View style={styles.btns}>
          <View style={styles.mgn}>
            <Button
              title="Add Items"
              onPress={props.set_data}
            />
          </View>
          <View style={styles.mgn}>
            <Button
              title="Clear All"
              onPress={clear_all}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns:{
    flexDirection: 'row',
    justifyContent: 'space',
    // marginLeft:'40px',
    
    // marginLeft:'10',
  },
  
  mgn:{
    marginLeft:'10px',
  },
  input:{
    marginBottom:'20px',
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  subinp:{
    marginLeft:'20px',
    // paddingLeft:"200px",
  },
  header:{
    fontSize:50,
    fontWeight:"bold",
    marginBottom:20,
  }
});

const mapStateToProps=(state)=>{
    return state;
}
const mapDispatchToProps=(dispatch)=>({
    set_data:()=>dispatch(set_data())
})
export default connect (mapStateToProps,mapDispatchToProps)(App)