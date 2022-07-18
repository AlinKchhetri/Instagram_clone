import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList, ImageBackground, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import Card from '../components/Card';


const data = [
  {
    id: '1',
    title: 'Sajjan Raj Vaidya',
    date: 'July 30',
    type: 'Concert',
    image : require('../assets/images/sajjan.jpg')
  },
  {
    id: '2',
    title: 'Albatross LIVE',
    date: 'Dec 08',
    type: 'Concert',
    image : require('../assets/images/albatross.jpg')
  },
  {
    id: '3',
    title: 'Concert',
    date: 'April 03',
    type: 'Concert',
    image : require('../assets/images/event_1.png')
  },
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;




const Home = ({navigation}) => {


  const [loaded] = useFonts({
    ProductSans: require('../assets/fonts/ProductSans-Regular.ttf'),
    ProductSansBold: require('../assets/fonts/ProductSans-Bold.ttf'),
    ProductSansBlack: require('../assets/fonts/ProductSans-Black.otf')
  });

  if(!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.WelcomeText}>
        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('Profile')
        }}>
          <Image source={require('../assets/images/Memojiemoji.png')} 
          style={{
            width: 55,
            height: 55,
          }}/>
        </TouchableOpacity>
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          right: windowWidth/ 5.5,
        }}>
          <Text style={styles.WelcomeTitle}>Welcome!</Text>
          <Text style={{
            color: 'white',
            fontFamily: 'ProductSansBold',
            fontSize: 20,
          }}>Alin Khatri</Text>
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
        onPress={() => {
          navigation.navigate('Profile')
        }}>
          <Image source={require('../assets/icons/notification.png')} 
          style={{
            width: 25,
            height: 25,
          }}/>
        </TouchableOpacity>
        </View>


          {/* Spending Limit Section */}

        <View style={styles.SpendingText}>
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
          navigation.navigate('Profile')
        }}>
          <Image source={require('../assets/icons/info.png')} 
          style={{
            width: 25,
            height: 25,
            opacity: 0.7
          }}/>
        </TouchableOpacity>
        
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          marginHorizontal: 10,
          right: windowWidth /9,
        }}>
          <Text style={styles.SpendingTitle}>Spending Limit</Text>
          <Text style={{
            color: 'white',
            fontFamily: 'ProductSansBold',
            fontSize: 20,
            top: 8,
          }}>Rs. 30,000</Text>
        </View>
        <TouchableOpacity
        style={{
          width: 80,
          height: 40,
          backgroundColor: '#439DFEE8',
          borderRadius: 8,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignSelf: 'center'
        }}
        onPress={() => {
          navigation.navigate('Profile')
        }}>
          <Text style ={{
            color: 'white',
            fontFamily: 'ProductSansBold',
            fontSize: 15,
          }}>Details</Text>
          <Image source={require('../assets/icons/back_arrow_icon.png')}
          style={{
            width: 20,
            height:20,
            transform: [{scaleX:-1}]
          }}
          />
        </TouchableOpacity>
        </View>

        {/* Credit Card Section */}
          <View>
        < Card />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // flexDirection: 'column',

    // justifyContent: 'center', 
    // alignItems: 'center',
    backgroundColor: '#000'
  },
  WelcomeText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 30,
    marginHorizontal: 15,
  },
  WelcomeTitle: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'ProductSans',
    opacity: 0.6,
    
  },
  SpendingText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 50,
    marginHorizontal: 40,
  },
  SpendingTitle: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'ProductSans',
    opacity: 0.6,
    
  }

  
})

export default Home