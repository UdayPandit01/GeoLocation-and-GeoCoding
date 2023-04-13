
import React, { useState } from 'react'
import { View, Text, Pressable,TouchableOpacity,StyleSheet, PermissionsAndroid } from 'react-native'
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoder';

const GeoLoacation = () => {

      // All the states are here
  const [location, setLocation] = useState(false);
  const [address, setAddress] = useState('');


    // Function to get permission for location
const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };

  // Function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },

          // error => {
          //   // See error code charts below.
          //   console.log(error.code, error.message);
          //   setLocation(false);
          // },
          // {enableHighAccuracy: true, timeout: 3000, maximumAge: 2000},
        );
      }
    });
    console.log(location);
  };
  

  // function to get the address using latitude and longitude
  const getAddress = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        // let NY = {
        //   lat: 40.7809261,
        //   lng: -73.9637594
        // };
        // Geocoder.geocodePosition(NY).then(res => {
        Geocoder.geocodePosition({lat: location.coords.latitude, lng: location.coords.longitude}).then(res => {

          // res is an Array of geocoding object
          console.log(res)
          setAddress(res)
      })
      .catch(err => console.log(err))
      }
    });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.containerText} >GET YOUR LOCATION !</Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 20, width: '40%'}}>

        <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={getLocation}>
          <Text  style={styles.buttonText}>Get Location</Text>
        </TouchableOpacity>
        </View>
        
      </View>

      <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text>

      <View>
        <TouchableOpacity style={styles.buttonContainer} onPress={getAddress}>
          <Text  style={styles.buttonText}>Get Address</Text>
        </TouchableOpacity>
      </View>
        <Text>Country: {address ? address[1].country : null}</Text>


    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 0.5,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    marginTop:1,
   
  },

  containerText:{
    color:"#000000",
    fontWeight:"900",
    fontSize:20,
  },

  buttonContainer:{
    marginTop:10,
    borderWidth:0,
    borderRadius:5,
    padding:12,
    backgroundColor:"#03C988",
    
   },

   buttonText:{
    color:"#000000",
    fontSize:15,
    textAlign:"center",
    fontWeight:'700',
   },


});

export default GeoLoacation;