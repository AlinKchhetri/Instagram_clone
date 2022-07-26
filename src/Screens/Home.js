import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, ImageBackground, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import React  from 'react'
import { useFonts } from 'expo-font'
import Card from '../components/Card';
import Transaction from '../components/Transactions';


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
      <ScrollView
      showsVerticalScrollIndicator ={false}>
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
          justifyContent: 'center',
          alignContent: 'flex-start'
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

        {/* Transaction Section */}

        <View>
        <Text style={{
            color: 'white',
            paddingBottom: 15,
            justifyContent: 'center',
            left:30,
            fontFamily: 'ProductSansBold',
            fontSize: 18,
        }}>Recent Transactions</Text>
          <Transaction />
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
    textAlign: 'center'
  },
  SpendingText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 20,
  },
  SpendingTitle: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'ProductSans',
    opacity: 0.6,
    
  }

  
})

export default Home