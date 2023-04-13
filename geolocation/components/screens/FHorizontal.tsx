import { View, Text,StyleSheet ,SafeAreaView,FlatList,Image} from 'react-native'
import React from 'react'




const FHorizontal = () => {
        const sections = [
            {
                id: '1',
                title: 'First Item',
                uri:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm3S_vk1p7wkLgtSifrm7yqChjF0O887a8zA&usqp=CAU`,
              },
              {
                id: '2',
                title: 'Second Item',
                uri:`https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
              },
              {
                id: '3',
                title: 'Third Item',
                uri:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO-hlLa1mnf2V1p__dFMxkNjf44wHphOxH2g&usqp=CAU`,
              },
              {
                id: '4',
                title: 'fourth Item',
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCe6OsN6J51nP9AeXhr9x0EDtbxK_4YiZKQ&usqp=CAU",
              },
              {
                id: '5',
                title: 'fifth Item',
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWYenGebfzJCuwiR4WdjzTzI7BdavwbbeHA&usqp=CAU",
              },
            ]
    const renderItem =  ({item,index}) => {
        return (
        <View style={styles.textContainer}>
            {/* {console.log(item)} */}
          <Text style={styles.text}>{item.title}</Text>
          <Image source={{uri: item.uri}} style={styles.image} ></Image>
        </View>
    )}

        // <SafeAreaView style={styles.container}>
        return(
        <>
            <View style={styles.container}>
                <FlatList
                    horizontal
                    data={sections}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    
                />
            </View>
      </>
        )
}

export default FHorizontal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:0,
        padding:20,
        backgroundColor:"#03C988"
    },

    textContainer : {
        width:240,
    },

    text:{
      fontWeight:"900",
      fontStyle:"italic",
      fontSize:20,
    //   textAlign:'justify',
    },

    image:{
        resizeMode:"cover",
        height: 200,
        width: 220,
    },
})

