import { View, Text , ImageBackground, Dimensions, FlatList} from 'react-native'
import React, {useEffect, useState} from 'react'

const cardDetails = [
    {
      id: '1',
      bankName: 'NIC Asia Bank Ltd.',
      cardNumer: '1234 1234 1234 1234',
      expiryDate: '03/25',
      holderName: 'Alin Khatri'
    },
];

const Card = () => {

    const [cardDetails, setCardDetails] = useState([]);

    useEffect(() => {
        let cardDetails = [
            {
                id: '1',
                bankName: 'NIC Asia Bank Ltd.',
                cardNumer: '1234 1234 1234 1234',
                expiryDate: '03/25',
                holderName: 'Alin Khatri'
              },
        ];
        setCardDetails(cardDetails);
      }, []);

  return (
    <View style={{
        top: Dimensions.get('window').width * 0.2,
        // marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }} >
        <ImageBackground 
        resizeMode='cover'
        style={{
          width: Dimensions.get('window').width -75,
          height: Dimensions.get('window').height -530,
          
        }}
        source={require('../assets/images/card.png')}>
            {cardDetails.map((detail) => {
                return (
                    <View style={{
                        flex: 1,
                    }}>
                        <Text style={{
                            color: 'white',
                            fontFamily: 'ProductSansBold',
                            fontSize: 17,
                            marginHorizontal: 40,
                            top: 27,
                            left: 35,
                        }}
                        key ={detail.id}>{detail.bankName}</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'column',
                            margin:27,

                        }}>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'ProductSansBold',
                                top: 70,
                                fontSize: 25,
                            }}>{detail.cardNumer}</Text>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'ProductSans',
                                top: 75,
                                fontSize: 15,
                            }}>{detail.expiryDate}</Text>
                            <Text style={{
                                color: 'white',
                                fontFamily: 'ProductSans',
                                top: 78,
                                fontSize: 18,
                            }}>{detail.holderName}</Text>
                        </View>
                    </View>
                )
            })}
            
        </ImageBackground>
    </View>
  )
}

export default Card