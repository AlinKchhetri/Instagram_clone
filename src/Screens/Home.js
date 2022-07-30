import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList, ImageBackground, TouchableWithoutFeedback, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view';
import React  from 'react'
import { useFonts } from 'expo-font'
import {stories} from '../components/stories'
// import axios from 'axios'

// const getApi =  () => {
//   axios.get("https://api.unsplash.com/photos?page=1")
//   .then((response) => {
//       setData(response.data.post);
//   }).catch((error)=>{
//       console.log(error)
//   })
// }



const Home = () => {
  // const [data, setData] = useState();

    // axios.get("https://api.unsplash.com/photos?page=1&W-SS5eRvCvz7SH8h0pTgBnDsUNhcIDTTMxnja4Iu_dA")
    // .then((response) => {
    //     setData(response.data.post);
    // }).catch((error)=>{
    //     console.log(error)
    // })

    // const getAppApi = async () => {
    //   try {
    //     const response = await fetch('https://sheet.best/api/sheets/08655b48-dc92-41dd-b9e9-702704a155b6');
    //     const myData = await response.json();
    //     setData(myData);
    //     SetIsloaded(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  
    // useEffect(() => {
    //   getAppApi();
    // }, [])

  const [loaded] = useFonts({
    // Helvetica: require('../assets/fonts/Helvetica Neue Medium Extended.ttf'),
    RobotoRegular: require('../assets/fonts/Roboto-Regular.ttf'),
    RobotoLight: require('../assets/fonts/Roboto-Light.ttf'),
    RobotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('../assets/fonts/Roboto-Bold.ttf')
  });

  if(!loaded) {
    return null;
  }

  return (
    <View style={{flex: 1, paddingTop: 44, backgroundColor: '#000'}}>
      <ScrollView
      showsVerticalScrollIndicator ={false}>
      <View style={styles.topSection}>
        <View style={styles.logo}>
          <Image source={require('../assets/DarkMode/logo.png')} style={{width: 117, height: 33}}/>
        </View>
        <View style={styles.topBarIcons}>
          <Image source={require('../assets/DarkMode/add.png')} style={{margin: 10, width: 23, height: 23}}/>
          <Image source={require('../assets/DarkMode/heart.png')} style={{margin: 10, width: 23, height: 23}}/>
          <Image source={require('../assets/DarkMode/dm.png')} style={{margin: 10, width: 23, height: 23}}/>
        </View>
      </View>

      {/* Stories */}
      <View style={styles.storiesSection}>
        <View style={styles.myStory}>
          <Image source={require('../assets/DarkMode/mystory.png')} style={{ width: 74, height:89,}}/>
          <Text style={{fontFamily: 'RobotoRegular'}}>Your Story</Text>
        </View>
        <View>
          <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data = {stories}
          renderItem = {(story) => {
            return (
              <View style={styles.otherStory}>
                <ImageBackground source={require('../assets/DarkMode/storycircle.png')} style={{ width: 71, height:71, marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={story.item.image}style={{ width: 66, height:66}}/>
                </ImageBackground>

                <Text style={{color: 'white', fontFamily: 'RobotoRegular', fontSize: 12}}>{story.item.name}</Text>
              </View>
            )}}/>
        </View>
      </View>

      {/* Posts */}

      <View style={styles.postSection}>
        <View style={styles.nameSection}>
          <View style={styles.dpImage}>
            <Image source={require('../assets/DarkMode/p1.png')} style={{ width: 35, height: 35, marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}/>
            <View style={{ flexDirection: 'column',}}>
              <Text style={{color: 'white', fontFamily: 'RobotoMedium', fontSize: 15}}>_alina_</Text>
              <Text style={{color: 'white', fontFamily: 'RobotoLight', fontSize: 12}}>Kathmandu, Nepal</Text>
            </View>
          </View>
          <View>
            <Image source={require('../assets/DarkMode/info.png')} style={{ width: 15, height: 3}}/>
          </View>
        </View>

        <View style={styles.postImage}>
            <Image source={require('../assets/DarkMode/img.png')} resizeMode= 'cover' style={{ width: 400, height:400}}/>
        </View>

        <View style={styles.likeSection}>
          <View style={styles.like}>
          <Image source={require('../assets/DarkMode/heartfill.png')} style={{ width: 29, height:26, marginHorizontal: 7}}/>
          <Image source={require('../assets/DarkMode/comment.png')} style={{ width: 25, height:25, marginHorizontal: 7}}/>
          <Image source={require('../assets/DarkMode/dm.png')} style={{ width: 25, height:21, marginHorizontal: 7}}/>
          </View>
          <View style={styles.save}>
            <Image source={require('../assets/DarkMode/save.png')} style={{ width: 21, height:24}}/>
          </View>


          
        </View>
        <View style={styles.likers}>
          <View style={{
            flexDirection: 'row',
            margin: 10,
          }}>
            <Image source={require('../assets/DarkMode/p1.png')} style={{ width: 18, height:18}}/>
            <Image source={require('../assets/DarkMode/p6.jpg')} style={{ width: 18, height:18}}/>
            <Image source={require('../assets/DarkMode/p7.jpg')} style={{ width: 18, height:18}}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontFamily: 'RobotoRegular', fontSize: 14}}>liked by shreya_058 and others</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row',}}>
          <Text style={{color: 'white', fontFamily:'RobotoBold'}}>_alina_</Text>
          <Text style={{color: 'white', fontFamily:'RobotoBold'}}>Museum Visit</Text>
        </View>
      </View>

      <View style={styles.postSection}>
        <View style={styles.nameSection}>
          <View style={styles.dpImage}>
            <Image source={require('../assets/DarkMode/p1.png')} style={{ width: 35, height: 35, marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}/>
            <View style={{ flexDirection: 'column',}}>
              <Text style={{color: 'white', fontFamily: 'RobotoMedium', fontSize: 15}}>_alina_</Text>
              <Text style={{color: 'white', fontFamily: 'RobotoLight', fontSize: 12}}>Kathmandu, Nepal</Text>
            </View>
          </View>
          <View>
            <Image source={require('../assets/DarkMode/info.png')} style={{ width: 15, height: 3}}/>
          </View>
        </View>

        <View style={styles.postImage}>
            <Image source={require('../assets/DarkMode/img.png')} resizeMode= 'cover' style={{ width: 400, height:400}}/>
        </View>

        <View style={styles.likeSection}>
          <View style={styles.like}>
          <Image source={require('../assets/DarkMode/heartfill.png')} style={{ width: 29, height:26, marginHorizontal: 7}}/>
          <Image source={require('../assets/DarkMode/comment.png')} style={{ width: 25, height:25, marginHorizontal: 7}}/>
          <Image source={require('../assets/DarkMode/dm.png')} style={{ width: 25, height:21, marginHorizontal: 7}}/>
          </View>
          <View style={styles.save}>
            <Image source={require('../assets/DarkMode/save.png')} style={{ width: 21, height:24}}/>
          </View>


          
        </View>
        <View style={styles.likers}>
          <View style={{
            flexDirection: 'row',
            margin: 10,
          }}>
            <Image source={require('../assets/DarkMode/p1.png')} style={{ width: 18, height:18}}/>
            <Image source={require('../assets/DarkMode/p6.jpg')} style={{ width: 18, height:18}}/>
            <Image source={require('../assets/DarkMode/p7.jpg')} style={{ width: 18, height:18}}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontFamily: 'RobotoRegular', fontSize: 14}}>liked by shreya_058 and others</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row',}}>
          <Text style={{color: 'white', fontFamily:'RobotoBold'}}>_alina_</Text>
          <Text style={{color: 'white', fontFamily:'RobotoBold'}}>Museum Visit</Text>
        </View>
      </View>

      <View style={styles.postSection}>
        <View style={styles.nameSection}>
          <View style={styles.dpImage}>
            <Image source={require('../assets/DarkMode/p1.png')} style={{ width: 35, height: 35, marginHorizontal: 7, justifyContent: 'center', alignItems: 'center'}}/>
            <View style={{ flexDirection: 'column',}}>
              <Text style={{color: 'white', fontFamily: 'RobotoMedium', fontSize: 15}}>_alina_</Text>
              <Text style={{color: 'white', fontFamily: 'RobotoLight', fontSize: 12}}>Kathmandu, Nepal</Text>
            </View>
          </View>
          <View>
            <Image source={require('../assets/DarkMode/info.png')} style={{ width: 15, height: 3}}/>
          </View>
        </View>

        <View style={styles.postImage}>
            <Image source={require('../assets/DarkMode/img.png')} resizeMode= 'cover' style={{ width: 400, height:400}}/>
        </View>

        <View style={styles.likeSection}>
          <View style={styles.like}>
          <Image source={require('../assets/DarkMode/heartfill.png')} style={{ width: 29, height:26, marginHorizontal: 7}}/>
          <Image source={require('../assets/DarkMode/comment.png')} style={{ width: 25, height:25, marginHorizontal: 7}}/>
          <Image source={require('../assets/DarkMode/dm.png')} style={{ width: 25, height:21, marginHorizontal: 7}}/>
          </View>
          <View style={styles.save}>
            <Image source={require('../assets/DarkMode/save.png')} style={{ width: 21, height:24}}/>
          </View>


          
        </View>
        <View style={styles.likers}>
          <View style={{
            flexDirection: 'row',
            margin: 10,
          }}>
            <Image source={require('../assets/DarkMode/p1.png')} style={{ width: 18, height:18}}/>
            <Image source={require('../assets/DarkMode/p6.jpg')} style={{ width: 18, height:18}}/>
            <Image source={require('../assets/DarkMode/p7.jpg')} style={{ width: 18, height:18}}/>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: 'white', fontFamily: 'RobotoRegular', fontSize: 14}}>liked by shreya_058 and others</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row',}}>
          <Text style={{color: 'white', fontFamily:'RobotoBold'}}>_alina_</Text>
          <Text style={{color: 'white', fontFamily:'RobotoBold'}}>Museum Visit</Text>
        </View>
      </View>
      </ScrollView>
    </View>     
  )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    topSection:{
      display: 'flex',
      marginHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 'auto',
      // height: 56,
    },
    logo:{
      width: 117,
      height: 33
    },
    topBarIcons:{
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'space-around',
      
    },
    storiesSection:{
      marginVertical:8,
      flexDirection: 'row',
      width: '100%',
      height: 100
    },
    mystory:{
      top: 10
    },
    otherStory:{
      alignItems: 'center',

    },

    nameSection:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: 10,
    },
    dpImage:{
      flexDirection: 'row',
    },
    postImage:{
      justifyContent: 'center', alignItems: 'center', margin: 10,
    },
    likeSection:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
    },
    like:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    likers:{
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 5,
    }




  
})

export default Home