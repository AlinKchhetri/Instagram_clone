import { View, Text , ImageBackground, FlatList, StyleSheet, TouchableWithoutFeedback, Dimensions} from 'react-native'
import React from 'react'


const cardDetails = [
    {
      id: '1',
      bankName: 'NIC Asia Bank Ltd.',
      cardNumber: '1111 1111 1111 1111',
      expiryDate: '03/25',
      holderName: 'Alin Khatri',
      image : require('../assets/images/card.png')
    },
    {
        id: '2',
        bankName: 'Global IME Bank Ltd.',
        cardNumber: '2222 2222 2222 2222',
        expiryDate: '05/25',
        holderName: 'Alin Khatri',
        image : require('../assets/images/card.png')
    },
    {
        id: '3',
        bankName: 'Nabil Bank Ltd.',
        cardNumber: '3333 3333 3333 3333',
        expiryDate: '04/25',
        holderName: 'Alin Khatri',
        image : require('../assets/images/card.png')
    },
  ];

const imageWidth = 325;
const imageHeight = 196;


const Card = ({navigation}) => {
    return (
    <View style={styles.cardSection}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data = {cardDetails}
          renderItem = {(card) => {
            return (
              <TouchableWithoutFeedback
                onPress={()=> {
                  navigation.navigate('Profile')
                }}
              >
              <View style={{
                marginBottom: 20,
                paddingLeft: 20,
              }}>
                <ImageBackground source={card.item.image}
                resizeMode='cover'
                borderRadius={15}
                style={{
                    width: Dimensions.get('window').width -100,
                    height: ((Dimensions.get('window').width -100) * imageHeight ) / imageWidth,
                  justifyContent: 'space-between',
                  margin: 10,
                }}>


                <View style={{
                    width: Dimensions.get('window').width -100,
                    height: ((Dimensions.get('window').width -100) * imageHeight ) / imageWidth,
                    padding: 15,
                  }}>
                    <View style={{
                      top: 10,
                      left: 50,
                    }}>
                      <Text style={{
                        color: 'white',
                        fontFamily: 'ProductSansBlack',
                        fontSize: 15,

                      }}>{card.item.bankName}</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        padding: 10,
                        top: 20,
                    }}>
                      <Text style={{
                        color: 'white',
                        fontFamily: 'ProductSansBold',
                        fontSize: 22,
                      }}>{card.item.cardNumber}</Text>
                      <Text style={{
                        color: 'white',
                        fontFamily: 'ProductSans',
                        fontSize: 13,
                        top: 7,
                      }}>{card.item.expiryDate}</Text>
                      <Text style={{
                        color: 'white',
                        fontFamily: 'ProductSans',
                        fontSize: 17,
                        top: 14,
                      }}>{card.item.holderName}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
              </TouchableWithoutFeedback>
            )
          }}
        />
      </View>
    )
};


const styles = StyleSheet.create({
    cardSection:{
      flex: 1,
      justifyContent: 'space-between'

    }
})

export default Card;