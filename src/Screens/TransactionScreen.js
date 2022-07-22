import { View, StyleSheet, Image, TouchableOpacity, TextInput, Text} from 'react-native'
import React from 'react'
import Transaction from '../components/Transactions'

const TransactionScreen = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'black'}}>
      <Text style={{
          flex: 0.25,
            alignItems: 'flex-start',
            margin: 20,
            color: 'white',
            justifyContent: 'center',
            fontFamily: 'ProductSansBold',
            fontSize: 20,
        }}>Recent Transactions</Text>
      <View style={{
        flex: 0.3,
      }}>
      <View style={styles.searchSection}>
        <TextInput 
        placeholder='Search'
        style={styles.searchInput}/>

        <TouchableOpacity onPress={() => {navigation.navigate('Search')}}>
          <Image source={require('../assets/searchSearchIcon.png')}
          style={{opacity: 0.4}}/>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{
        
      }}>
      <Transaction />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  searchSection:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#121212',
    marginHorizontal: 25,
    marginVertical: -18,
    padding: 10,
    borderWidth: 3,
    borderRadius: 16,
  },
  searchInput: {
    marginLeft: 10,
    marginTop: 5,
    width: 270,
    height: 25,
    color: 'white',
    fontSize: 17,
  },
})

export default TransactionScreen