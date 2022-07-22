import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import React from 'react'
import Groups from '../components/Groups'

const BillSharing = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView>
      <View style={{
        top: 50,
      }}>
      <Text style={{
        marginHorizontal: 15,
        color: 'white',
        fontFamily: 'ProductSansBold',
        fontSize: 20,
      }}>Bill Splitting</Text>

      <View style={{
        margin: 15,
      }}>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,

        }}>
        <Text style={{
          color: 'white',
          fontFamily: 'ProductSansBold',
          fontSize: 19,          
        }}>Recent Groups</Text>

        <TouchableOpacity 
        style={{
          backgroundColor: '#1f1f1f',
          width: 50,
          height:50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
        }}
        onPress={() => {
          navigation.navigate('addgroup')
        }}>
          <Image source={require('../assets/add.png')} 
          style={{
            width: 25,
            height: 25,
          }}/>
        </TouchableOpacity>
        </View>

        <Groups />
      </View>
    </View>
    </ScrollView>
    </View>
  )
}

export default BillSharing