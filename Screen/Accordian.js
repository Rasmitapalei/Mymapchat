import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

function Accordian ({navigation}) {
    const fnNavigate = () => {
        navigation.navigate('Forgot')
    }

    return(
        <View>
            <TouchableOpacity  onPress={fnNavigate}>
                <Text>Accordian</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Accordian;

const styles = StyleSheet.create({});
