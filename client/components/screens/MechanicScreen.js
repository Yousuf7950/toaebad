import React,{useState,useEffect,Component} from "react";
import {View,Text,Button,StyleSheet, Touchable} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";
import { ScrollView } from "react-native-gesture-handler";

import getDirections from 'react-native-google-maps-directions'
 
export default class MechanicScreen extends Component {
 
  handleGetDirections = () => {
    const data = {
       source: {
       
      },
      mode:'driving',
      destination: {
       
      },
      params: [
        {
          key: "travelmode",
          value: "driving"        // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate"       // this instantly initializes navigation using the given travel mode
        }
      ],
      waypoints: [
        {
          latitude: -33.8600025,
          longitude: 18.697452
        },
        {
          latitude: -33.8600026,
          longitude: 18.697453
        },
           {
          latitude: -33.8600036,
          longitude: 18.697493
        }
      ]
    }
 
    getDirections(data)
  }
 
  render() {
    return (
      <View>
        <Button onPress={this.handleGetDirections} title="Get Directions" />
      </View>
    );
  }
}
