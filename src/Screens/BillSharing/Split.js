import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {transactionDetails} from '../../components/Groups.js'

const Split = () => {

  const navigation = useNavigation();

  const [text, setText] = useState('');


  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>

      <TouchableOpacity 
        style={{
          backgroundColor: '#1f1f1f',
          width: 50,
          height:50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
        }}
        onPress={() => {navigation.navigate('add')} }>
          <Image source={require('../../assets/add.png')} 
          style={{
            width: 25,
            height: 25,
          }}/>
        </TouchableOpacity>

        {/* <FlatList 
          data={json}
        /> */}

    

    <TextInput
        style={{height: 40, backgroundColor: 'red', color: 'white', width: 200}}
        placeholder="Type"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
    />
    <Text style={{padding: 10, fontSize: 42, color: 'white'}}>
        {(Math.floor(text))/(transactionDetails.length)}
      </Text>
    </View>
  )
}

export default Split 

const styles = StyleSheet.create({})