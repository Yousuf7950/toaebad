// import React,{useState,useEffect} from "react";
// import {View,Text,Button,StyleSheet, Touchable, Image,  Dimensions,SafeAreaView,TextInput} from 'react-native';
// // https://github.com/react-native-datetimepicker/datetimepicker

// import DatePicker from 'react-native-datepicker'
// import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// // import { useNavigation } from "@react-navigation/native";
// // import { auth } from "../../firebase";
// // import { TouchableOpacity } from "react-native-gesture-handler";
// // import { FontAwesome } from '@expo/vector-icons';
// const {width, height} = Dimensions.get('window');
// class AppointmentScreen extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name:'',
//       car_number:'',
//       date:'',
//       time:'',
//       phone_number:'',
//       email:'',
//     }

//   }

//   const [appointmentList, setAppointmentList] = useState([]);

//   addAppointment = () => {
//     Axios.post("http://localhost:5001/createAppointment", {
//       name: name,
//       car_number:car_number,
//       date:date,
//       time:time,
//       phone_number:phone_number,
//       email:email,
//     }).then(() => {
//     }
//     )
//   };
//   handleChange(date) {
//     this.setState({
//       startDate: date
//     })
//   }

//   submit(){
//     console.warn("working",this.state)
//   }
//   render(){
//     return(
//       <ScrollView style={{backgroundColor:'white'}}>
//       <View style={styles.header}>
//     <Text style={{color:'white',fontWeight:'700'}}>Appointment</Text>
    
// </View>
//    <View style={styles.container}>
//     <Image source={require('../images/appointment.jpg')} style={{height: '100%', width, resizeMode: 'contain'}}></Image>
//    </View>

//       <View style={styles.container1}>
//         <TextInput placeholder="Enter Name" style={styles.input} onChangeText={(text)=>this.setState({name:text})}/>
//         <TextInput placeholder="Enter Email" style={styles.input} onChangeText={(text)=>this.setState({email:text})}  />
//         <TextInput placeholder="Enter Car Number" style={styles.input} onChangeText={(text)=>this.setState({car:text})} />
//         <TextInput placeholder="Enter Phonenumber" style={styles.input} onChangeText={(text)=>this.setState({phn:text})}/>
//         <DatePicker
//         style={styles.inputDate}
//         date={this.state.date}
//         mode="date"
//         placeholder="select date"
//         format="DD-MM-YYYY"
//         minDate="19-02-2022"
//         maxDate="31-12-2022"
//         confirmBtnText="Confirm"
//         cancelBtnText="Cancel"
        
        
//         customStyles={{
//           dateIcon: {
//             position: 'absolute',
//             left: 0,
//             top: 0,
//             bottom:10,
//             marginLeft: 0
//           },
//           dateInput: {
//             borderColor:'white',
           
         
//           }
//           // ... You can check the source to find the other keys.
//         }}
//         onDateChange={(date) => {this.setState({date: date})}}
//       />
//         <View style={{marginTop:10}}> 
//           <TouchableOpacity style={styles.button1} onPress={()=>this.submit()}><Text style={{color:'white'}}>Submit</Text></TouchableOpacity>
//       </View>
//       <View style={styles.container2}>
//       {/* https://www.npmjs.com/package/react-native-datepicker */}
     
//       </View>
     
      
//       </View>

//       </ScrollView>
//     )
//   }
// }
// export default AppointmentScreen;

// const styles=StyleSheet.create({
//   header:{
//       // flex:1,
//      // marginTop:10,
//       height:35,
//   backgroundColor:'#5D3FD3',
//   color:'white',
//   fontWeight:'700',
//   justifyContent:'center',
//   alignItems:'center',
//   borderBottomColor: 'white',
//   borderBottomWidth: 0.25,
  
//   },
//   container:{
//       // flex:1,
//      // marginTop:10,
//       height:170,
//   backgroundColor:'white',
//   color:'white',
//   fontWeight:'700',
//   justifyContent:'center',
//   alignItems:'center',
//   borderBottomColor: 'white',
//   borderBottomWidth: 0.25,
  
//   },
// container1:{
//       // flex:1,
//      // marginTop:10,
     
//   backgroundColor:'white',
//   color:'white',
//   fontWeight:'700',
//   // justifyContent:'center',
//   alignItems:'center',
//   borderTopLeftRadius:20,
//   borderTopRightRadius:20,
  
//   },
//   container2:{
//       backgroundColor:'white',
//       flexDirection: "row",
  
//       marginLeft: 12,
   
  
//   },
//   input: {
//       height: 45,
     
//       margin: 12,
//       borderWidth: 1,
//       padding: 10,
//       width:'90%',
//       borderRadius:10,
      
//     },
//     inputDate: {
//       height: 45,
     
//       margin: 12,
//       borderWidth: 1,
//       padding: 5,
//       width:'90%',
//       borderRadius:10,
      
//     },
//     button:{
//       backgroundColor:'white',
     
//       padding:15,
//       borderRadius:10,
//       alignItems:'center',
//       margin:5,
//       borderWidth:2,
//       borderColor:'#5D3FD3',
//   },
//   button1:{
//       backgroundColor:'#5D3FD3',
     
//       padding:15,
//       borderRadius:10,
//       alignItems:'center',
      
//       width:width/2,
//       marginLeft: 12,
      
//   },
//   over: {
//       flex: 1,
//       backgroundColor: 'white',
     
//     },
//     titleStyle: {
//       fontSize: 28,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       padding: 10,
//     },
//     textStyle: {
//       fontSize: 16,
//       textAlign: 'center',
//       padding: 10,
//     },
//     touchableOpacityStyle: {
//       position: 'absolute',
//       width: 50,
//       height: 50,
//       alignItems: 'center',
//       justifyContent: 'center',
//       right: 30,
//       bottom: 30,
//     },
//     floatingButtonStyle: {
//       resizeMode: 'contain',
//       width: 50,
//       height: 50,
//       //backgroundColor:'black'
//     },
// })
import React,{useState,useEffect} from "react";
import {View,Text,Button,StyleSheet, Touchable, Image,  Dimensions,SafeAreaView,TextInput} from 'react-native';
// https://github.com/react-native-datetimepicker/datetimepicker

import DatePicker from 'react-native-datepicker'
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
const AppointmentScreen = () => {
  const [name, setName] = useState("");
  const [car_number,setCarnumber]=useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone_number,setPhone]=useState("");
  const [email,setEmail]=useState("");

  // for datetime picker
  const [date1, setDate1] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date1');
  };

  // const showTimepicker = () => {
  //   showMode('time');
  // };
  // const [appointmentList, setAppointmentList] = useState([]);

  const addAppointment = () => {
    Axios.post("http://192.168.18.160:5001/createAppointment", {
      name: name,
      car_number:car_number,
      date:date,
      time:time,
      email:email,
      phone_number:phone_number,
    }).then(() => {
      
    }
    ).catch(function(error){
      console.log("Problem with posting appointment "+error.message);
    });
  };

  return (
    <View>
    <TextInput placeholder="Enter Name" onChangeText={(text) => {setName(text)}}/>
    <TextInput placeholder="Enter Car_number" onChangeText={(text)=>{setCarnumber(text)}}/>
    <TextInput placeholder="Enter Date" onChangeText={(text)=>{setDate(text)}}/>
    <TextInput placeholder="Enter Time"  onChangeText={(text)=>{setTime(text)}}/>
    <TextInput placeholder="Enter Phone number" keyboardType='numeric' onChangeText={(text)=>{setPhone(text)}}/>
    <TextInput placeholder="Enter email" onChangeText={(text)=>{setEmail(text)}}/>

    <Button onPress={showDatepicker} title="Show date picker!" />
    {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date1}
          mode={mode}
          // is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    <Button onPress={addAppointment} title="Book"></Button>
    </View>
  )
}

export default AppointmentScreen;