import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import Layout from './Layout';

function ScrollComponent() {
  return (
    <View  style={{top: 60}}> 
       
      <ScrollView horizontal  >
        <TouchableOpacity>
          <View style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
            margin: 3
          }}>
            <Image 
            source={require('./assets/images/jio4.png')}
            style={{
              height:150,
              borderRadius: 12
              
            }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8
          }}>
            <Image 
            source={require('./assets/images/jio3.jpg')}
            style={{
              height:150,
              borderRadius: 12
              
            }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8
          }}>
            <Image 
            source={require('./assets/images/jio2.jpg')}
            style={{
              height:150,
              borderRadius: 12
              
            }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 8
          }}>
            <Image 
            source={require('./assets/images/jio1.jpg')}
            style={{
              height:150,
              borderRadius: 12
              
            }}
            />
          </View>
        </TouchableOpacity>
       
      </ScrollView>
      <View style={{top: 23}}>
        <Layout />
      </View>
    </View>
    
  )
};
const styles = StyleSheet.create({


});
export default ScrollComponent;