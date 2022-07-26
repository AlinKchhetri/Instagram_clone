import { StyleSheet, Text, FlatList, Image, View, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'


const AddGroup = () => {

  const [data, setData] = useState();
  const [isloaded, SetIsloaded] = useState(true);

  const getAppApi = async () => {
    try {
      const response = await fetch('https://sheet.best/api/sheets/08655b48-dc92-41dd-b9e9-702704a155b6');
      const myData = await response.json();
      setData(myData);
      SetIsloaded(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAppApi();
  }, [])
  


  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {isloaded ? <ActivityIndicator/> : (


      <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem = {(group) => {

          return (
            <View>
              <Text>{group.item.avatar}</Text>
              <Image source={{uri : group.item.avatar}} />
            </View>
          )
        }}
      />
      )}
    </View>
  )
}

export default AddGroup

const styles = StyleSheet.create({})