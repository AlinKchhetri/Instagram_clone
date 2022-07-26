import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, {useState} from 'react'
import axios from 'axios'


const postMember = () => {
    axios({
        method: 'POST',
        url: 'http://localhost:3006/members',
        data: {
           id: '4',
           memberName: 'Amit Khatri',
           contactNumebr: '9800000000',
           avatar: require('../../assets/images/Memojic.png')
        }
    })
    .then(function(response){
        console.log(JSON.stringify(response.data))
    })
    .catch(function(error){
        console.log(JSON.parse(error))
    })
}

const getMember = () => {
    axios({
        method: 'GET',
        url: 'http://localhost:3006/members',
    })
    .then(function(response){
        console.log(JSON.stringify(response.data))
    })
    .catch(function(error){
        console.log(JSON.parse(error))
    })
}


const Add = () => {

    const [data, setData] = useState();

    const getApi =  () => {
        axios.get("https://reactnative.dev/movies.json")
        .then((response) => {
            setData(response.data.movies);
        }).catch((error)=>{
            console.log(error)
        })
    }

    // const displayApi = () =>{
    //     <View>
    //         <FlatList 
    //             data={data}
    //             keyExtractor={item => item.id}
    //             renderItem = {(group) => {
    //       return (
    //         <Text>{group.item.title}</Text>
    //       )}} />
    //     </View>
    // }


  return (
    <View style={{

    }}>
      <Text>Add</Text>
      <TouchableOpacity 
      onPress={getApi}
      style={{
        backgroundColor: 'blue',
        padding: 20,
      }}>
        <Text>ADD</Text>
      </TouchableOpacity>

      <View>
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem = {({item}) => {
          return (
            <Text>{item.releaseYear}</Text>
          )}} />
        </View>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({})