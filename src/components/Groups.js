import { View, Text , FlatList, StyleSheet, TouchableWithoutFeedback, Dimensions, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';



export const transactionDetails = [
    {
      id: '1',
      groupName: 'College Friends',
      Members: ['a', 'b', 'c'],
    },
    {
        id: '2',
        groupName: 'School Friends',
      },
      {
        id: '3',
        groupName: 'Work',
      },
      {
        id: '4',
        groupName: 'Pokhara Group',
      },
      {
        id: '5',
        groupName: 'Chitwan Group',
      },
  ];

  const Members = [
    {
        id: '1',
        groupName: 'College Friends',
        memberName: 'Alin Khatri',
        contactNo: '9800000000',
        avatar: require('../assets/images/Memojia.png')
    },
    {
        id: '2',
        groupName: 'College Friends',
        memberName: 'Suman Thapa',
        contactNo: '9800000000',
        avatar: require('../assets/images/Memojib.png')
    },
    {
        id: '3',
        groupName: 'College Friends',
        memberName: 'Salina Mahat',
        contactNo: '9800000000',
        avatar: require('../assets/images/Memojic.png')
    },

  ];




const Groups = () => {

    const navigation = useNavigation();

    return (
    <View style={styles.transactionSection}>
        
        <FlatList
          data = {transactionDetails}
          renderItem = {(transaction) => {
            return (
              <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 5,
              }}>
                <View style={{
                    margin: 5,
                    display: 'flex',
                    backgroundColor: '#1f1f1f',
                    width: Dimensions.get('window').width -50,
                    borderRadius: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    padding: 3,
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: 10,
                        

                    }}>
                        <Text style={{
                            color: 'white',
                            fontFamily: 'ProductSansBold',
                            fontSize: 18,
                        }}>{transaction.item.groupName}</Text>
                        <View style={{

                        }}>
                            <FlatList
                            style={{
                                flexDirection: 'row',
                            }}
                            data = {Members}
                            renderItem = {(member) => {
                            return (
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 3,
                                }}>
                                    <Image source={member.item.avatar} style={{
                                        width: 35,
                                        height: 35,
                                        padding: 5,
                                    }} />
                                </View>
                            )}} />
                        </View>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                    style={{
                    width: 80,
                    height: 40,
                    backgroundColor: '#439DFEE8',
                    borderRadius: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    alignSelf: 'center',
                    right: 20,
                    }}
                    onPress={() => {
                    navigation.navigate('SplitUI')
                    }}>
                    <Text style ={{
                        color: 'white',
                        fontFamily: 'ProductSansBold',
                        fontSize: 15,
                    }}>Split</Text>
                    <Image source={require('../assets/icons/back_arrow_icon.png')}
                    style={{
                        width: 20,
                        height:20,
                        transform: [{scaleX:-1}]
                    }}
                    />
                    </TouchableOpacity>
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
    transactionSection:{
      flex: 1,
        marginVertical: 10

    }
})


export default Groups;