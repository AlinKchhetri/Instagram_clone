import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import React, {useState} from 'react'
import {transactionDetails} from '../../components/Groups.js'

const Split = () => {

    const [text, setText] = useState('');

  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
    
    {/* <FlatList
          data = {transactionDetails}
          keyExtractor={(item , index) => item.id.toString()}
          renderItem = {(transaction) => {
            return (
                <Text>{transaction.item.groupName}</Text>
            )
          }
        }
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