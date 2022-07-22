import { View, Text , FlatList, StyleSheet, TouchableWithoutFeedback, Dimensions, Image} from 'react-native'
import React from 'react'


const transactionDetails = [
    {
      id: '1',
      transactionType: 'Debit',
      SenderName: '',
      RecieverName: 'Aakash Thapa',
      date: '2022/02/20',
      Amount: ' - 12,000',
      image : require('../assets/images/Memojic.png')
    },
    {
        id: '2',
        transactionType: 'Credit',
        SenderName: 'Sumana Basnet',
        RecieverName: '',
        date: '2022/03/29',
        Amount: ' + 1,000',
        image : require('../assets/images/Memojib.png')
    },
    {
        id: '3',
        transactionType: 'Debit',
        SenderName: '',
        RecieverName: 'Ashma Gurung',
        date: '2022/03/02',
        Amount: ' - 10,000',
        image : require('../assets/images/Memojia.png')
    },
    {
        id: '4',
        transactionType: 'Debit',
        SenderName: '',
        RecieverName: 'Ashma Gurung',
        date: '2022/03/02',
        Amount: ' - 10,000',
        image : require('../assets/images/Memojic.png')
    },
    {
        id: '5',
        transactionType: 'Debit',
        SenderName: '',
        RecieverName: 'Ashma Gurung',
        date: '2022/03/02',
        Amount: ' - 10,000',
        image : require('../assets/images/Memojib.png')
    },
    {
        id: '6',
        transactionType: 'Debit',
        SenderName: '',
        RecieverName: 'Ashma Gurung',
        date: '2022/03/02',
        Amount: ' - 10,000',
        image : require('../assets/images/Memojic.png')
    },
  ];



const Transaction = () => {
    return (
    <View style={styles.transactionSection}>
        
        <FlatList
          data = {transactionDetails}
          renderItem = {(transaction) => {
            return (
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <View style={{
                    margin: 5,
                    display: 'flex',
                    backgroundColor: '#1f1f1f',
                    width: Dimensions.get('window').width -30,
                    padding: 10,
                    borderRadius: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View>
                        <Image source={transaction.item.image} style={{
                            width: 50,
                            height: 50,
                        }}/>
                    </View>
                    <View style={{
                        flex: 1,
                        left: 10,
                        justifyContent: 'space-around'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontFamily: 'ProductSansBold',
                            fontSize: 16,
                        }}>{transaction.item.RecieverName}{transaction.item.SenderName}</Text>
                        <Text style={{
                            color: 'white',
                            fontFamily: 'ProductSans',
                            fontSize: 13
                        }}>{transaction.item.date}</Text>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        padding: 12,
                    }}>
                        <Text style={{
                            color: 'white',
                            fontFamily: 'ProductSansBold',
                            fontSize: 15
                        }}>{transaction.item.Amount}</Text>
                    </View>
                </View>
              </View>
            )
          }}
        />
      </View>
    )
};


const styles = StyleSheet.create({
    cardSection:{
      flex: 1,


    }
})

export default Transaction;