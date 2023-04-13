import { View, Text,StyleSheet ,SafeAreaView,FlatList,Image} from 'react-native'
import React from 'react'
// import Swiper from 'react-native-swiper'



// creating array of object for flatlist items
const FHorizontal = () => {
        const sections = [
            {
                id: '1',
                title: 'First Item',
                uri:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ5uEWFI6mr1Z3Lf73PLyKiWdWYfooD5QQbmiV2J2zTGzSB30OwCBq_9gybMRheIAx-XM&usqp=CAU`,
              },
              {
                id: '2',
                title: 'Second Item',
                uri:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_Gfo9gwa1KI_msFurhOREMhn4H--uMTPMSLqHR9GCmR-HJ_0w9qUdsUT2kecTWhkuqw&usqp=CAU`,
              },
              {
                id: '3',
                title: 'Third Item',
                uri:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEIXjqU_BKiVbpurRQXLrZ_Jjj_pLe96pMUg&usqp=CAU`,
              },
              {
                id: '4',
                title: 'fourth Item',
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rb8s4v2MfgHuYPVWDNesEsUwCIxDXHRlZQ&usqp=CAU",
              },
              {
                id: '5',
                title: 'fifth Item',
                uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYsJMawWVQYi_ItSilgYn1Yx245hUkQc3-Y8zJwlyJWOtrHE_biiQR-8B8G4MftSSSH8&usqp=CAU",
              },
            ]

    // fucntion to call the items in flatlist    
    const renderItem =  ({item,index}) => {
        return (
        <View style={styles.textContainer}>
            {/* {console.log(item)} */}
          <Text style={styles.text}>{item.title}</Text>
          <Image source={{uri: item.uri}} style={styles.image} ></Image>
        </View>
    )}

        return(
        <>
            <View style={styles.container}>
            <Text style={styles.textContainer2}>Pick Your Favourite  (FlatList) </Text>
                
                {/* <Swiper> */}
             <View> 

                <FlatList
                    horizontal
                    data={sections}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    
                    />
                    {/* </Swiper> */}
                    </View>
            </View>
      </>
        )
}

export default FHorizontal

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        marginTop:0,
         padding:10,
        backgroundColor:"#000000"
    },

    textContainer : {
        width:240,
        // color:"white",
    },

    textContainer2:{
        // color:"#03C988",
        marginBottom:15,
        textAlign:"center",
        fontSize:20,
        fontWeight:"800",
        color:"#38E54D",
    },

    text:{
      fontWeight:"300",
      fontStyle:"italic",
      fontSize:18,
      color:"white",
    //   textAlign:'justify',
    },

    image:{
        resizeMode:"cover",
        height: 200,
        width: 220,
    },
})

