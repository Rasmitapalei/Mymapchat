import { View, Text,Image, TouchableOpacity, Button } from 'react-native'
import React from 'react';

import Layout from './Layout';
import ScrollComponent from './ScrollComponent';

const App = () => {
  return (
    <View>
      <View style={{top: 55,left:85}}>
          <Image 
          source={require('./assets/images/logo.png')}
          />
        </View>
        {/* <TouchableOpacity>
        <View style={{top: 423, left: 120}}>
      <Image 
       source={require('./assets/images/key1.png')}
       style={{height: 17, width:17}}
      />
    </View>
        </TouchableOpacity> */}
    <View>
    <ScrollComponent />
    <Layout />
    </View>
    
    </View>
  )
}

export default App;