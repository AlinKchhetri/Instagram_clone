import { StyleSheet, Text, View, FlatList, Image, TextInput, TouchableOpacity, Alert, Dimensions, Modal } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ScrollView } from 'react-native-virtualized-view';
import { useNavigation } from '@react-navigation/native';
import GestureRecognizer from 'react-native-swipe-gestures';


const transactionDetails = [
  {
    id: '1',
    transactionType: 'Debit',
    SenderName: '',
    RecieverName: 'Aakash Thapa',
    date: '2022/02/20',
    Amount: ' - 12,000',
    image : require('../../assets/images/Memojib.png')
  },
  {
      id: '2',
      transactionType: 'Credit',
      SenderName: 'Sumana Basnet',
      RecieverName: '',
      date: '2022/03/29',
      Amount: ' + 1,000',
      image : require('../../assets/images/Memojic.png')
  },
  {
      id: '3',
      transactionType: 'Debit',
      SenderName: '',
      RecieverName: 'Ashma Gurung',
      date: '2022/03/02',
      Amount: ' - 10,000',
      image : require('../../assets/images/Memojia.png')
  },
  {
      id: '4',
      transactionType: 'Debit',
      SenderName: '',
      RecieverName: 'Ashma Gurung',
      date: '2022/03/02',
      Amount: ' - 10,000',
      image : require('../../assets/images/Memojib.png')
  },
  {
      id: '5',
      transactionType: 'Debit',
      SenderName: '',
      RecieverName: 'Ashma Gurung',
      date: '2022/03/02',
      Amount: ' - 10,000',
      image : require('../../assets/images/Memojic.png')
  },
  {
      id: '6',
      transactionType: 'Debit',
      SenderName: '',
      RecieverName: 'Ashma Gurung',
      date: '2022/03/02',
      Amount: ' - 10,000',
      image : require('../../assets/images/Memojia.png')
  },
];

const Split = () => {

  const navigation = useNavigation();

  const [text, setText] = useState('');
  const [Splitted, setSplitted] = useState(text);

  const [modalVisible, setModalVisible] = useState(false);


  // const SplitAmount = Math.round((Math.floor(text))/(transactionDetails.length));

  const SplitAmount = () =>{
    setSplitted(Math.round((Math.floor(text))/(transactionDetails.length)))
  }


  return (
    <View style={{
        flex: 1,
        backgroundColor: 'black',
    }}>
      <ScrollView>

      <View style={{
        top: 30,
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'column',
        
      }}>
        <Text style={{
          color: 'white',
          fontFamily: 'ProductSansBold',
          fontSize: 20,
        }}>Group Name</Text>
        <View style={{
          flexDirection: 'row',
          paddingVertical: 15,
          justifyContent: 'space-between'
          
        }}>
          <View style={{
            flexDirection: 'row',
          }}>
          <Image source={require('../../assets/images/Memojic.png')} style={{
            width: 55,
            height:55,
            marginRight:  10
            
          }}/>

          <Image source={require('../../assets/images/Memojia.png')}style={{
            width: 55,
            height:55,
            marginRight:  10
          }}/>
          <Image source={require('../../assets/images/Memojib.png')}style={{
            width: 55,
            height:55,
            marginRight:  10
          }}/>
          <Image source={require('../../assets/images/Memojic.png')}style={{
            width: 55,
            height:55,
            marginRight:  10
          }}/>
          </View>

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
        </View>
      </View>

    
      <View style={{
        justifyContent: 'center',
        alignItems: 'baseline',
        flexDirection: 'row',
        padding:  20,
      }}>

        <Text style={{
          color: 'white',
          fontFamily: 'ProductSansBold',
          fontSize: 16,
          padding: 10,
        }}>Total Bill :</Text>

        <TextInput
            style={{
              height: 40, 
              backgroundColor: '#1f1f1f', 
              color: 'white', 
              padding: 20,
              borderRadius: 17,
              width: 300
            }}
            keyboardType='number-pad'
            placeholder="Enter your total bill"
            defaultValue={text}
            onChangeText={newText => setText(newText)}
            
        />
        
      </View>

      <View>
        <TouchableOpacity onPress={SplitAmount}>
          <Text style={{
          color: 'white',
          fontFamily: 'ProductSansBold',
          fontSize: 16,
          padding: 10,
        }}>Split</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View>
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
                        <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={{
                          width: 80,
                          height: 40,
                          backgroundColor: '#439DFEE8',
                          borderRadius: 8,
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          alignItems: 'center',
                          }}>
                          <Text
                          style ={{
                            color: 'white',
                            fontFamily: 'ProductSansBold',
                            fontSize: 15,
                        }}>Pay</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        padding: 12,
                    }}>
                      <Text style={{padding: 10, fontSize: 20, color: 'white', fontFamily: 'ProductSansBold'}}>
            {Splitted}
          </Text>
                        
                    </View>
                </View>
              </View>
            )
          }}
        />
        </View>
      </View>

      <GestureRecognizer
      
      style={{flex: 1}}
      onSwipeUp={ () => setModalVisible(!modalVisible) }
      onSwipeDown={ () => setModalVisible(!modalVisible) }>


      <Modal
        style={{
          height: 300
        }}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{
          height: '70%',
          marginTop: 'auto',
          backgroundColor: '#1f1f1f',
          opacity: 0.98,
          borderRadius: 25,
        }}>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 20,
          }}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            fontFamily: 'ProductSansBold'
          }}>Payment</Text>

          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Image source={require('../../assets/add.png')}
              style={{
                width: 30,
                height:30,
                transform: [{rotate: '45deg'}]
              }}
              />
          </TouchableOpacity>
          </View>

          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{
              color: 'white',
              fontFamily: 'ProductSansBold',
              fontSize: 16,
              marginHorizontal: 20,

            }}>Payment Details</Text>

            <Text style={{
              color: 'white',
              fontFamily: 'ProductSansBold',
              fontSize: 16,
              marginHorizontal: 20,
              padding: 10
            }}>Total Bill</Text>

            <Text style={{
              color: 'white',
              fontFamily: 'ProductSansBold',
              fontSize: 16,
              marginHorizontal: 20,
              padding: 10
            }}>Rs. {Splitted}</Text>



            <TouchableOpacity>
            <View style={{
              flexDirection: 'row',
              
            }}>
              <Image source={require('../../assets/Payment/esewa.png')}
              style={{
                width: 100,
                height: 110
              }}/>

              <Image source={require('../../assets/Payment/ime.png')}
              style={{
                width: 100,
                height: 110
              }}/>

              <Image source={require('../../assets/Payment/cash.png')}
              style={{
                width: 100,
                height: 110
              }}/>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </GestureRecognizer>


      </ScrollView>
    </View>
  )
}

export default Split 

const styles = StyleSheet.create({})