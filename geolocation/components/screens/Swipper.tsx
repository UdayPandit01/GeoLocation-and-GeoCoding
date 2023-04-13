import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'


// declaring variable to store image uri 
const uri1 ="https://i.teknolojioku.com/2/1280/720/storage/files/images/2022/07/27/untitled-1-recovered-rMkj_cover.jpg" 

const uri2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROzqdnJyiFicWuh7NV9UBcHBeDn-EWDZ7SdqwU5E5pq786CkN5DLP2T9K1rzouRULCrSo&usqp=CAU"

const uri3 ="https://accountsandkeys.com/wp-content/uploads/2020/05/free-Amazon-Prime-Video-cover.jpg"


// function to create swiping image effect
const Swipper = () => {
  return (

    <View style={styles.container}>
      <Text style={styles.containerText} >Snap Swipper</Text>

      <Swiper style={styles.wrapper} autoplay showsButtons={true}>

        <View style={styles.slide1}>
          {/* <Text style={styles.text}>Hello Swiper</Text> */}

          <Image resizeMode='cover' source={{uri: uri1 }} style={{height:'100%',width:'100%'}}/>

        </View>

        <View style={styles.slide2}>
          {/* <Text style={styles.text}>Beautiful</Text> */}
          <Image resizeMode='cover' source={{uri: uri2 }} style={{height:'100%',width:'100%'}}/>
        </View>

        <View style={styles.slide3}>
          {/* <Text style={styles.text}>And simple</Text> */}
          <Image resizeMode='cover' source={{uri: uri3 }} style={{height:'100%',width:'100%'}}/>
        </View>

      </Swiper>

    </View>
  )
}

export default Swipper

const styles = StyleSheet.create({

  container: {
    flex: 0.5,
  },

  containerText:{
    fontSize:25,
    textAlign:"center",
    fontWeight:"800",
    color:"#000000",
  },

  wrapper: {},
  slide1: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB'
  },

  slide2: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#9DD6EB'undColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#92BBD9'
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }

})