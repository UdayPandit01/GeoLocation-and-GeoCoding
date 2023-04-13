import { View, Text } from 'react-native'
import React from 'react'
import GeoLoacation from './components/screens/GeoLoacation'
import FHorizontal from './components/screens/FHorizontal'
import Swipper from './components/screens/Swipper'


const App = () => {
  return (
    <>
   <Swipper/>
   <GeoLoacation/>
   <FHorizontal/>
    </>
  )
}

export default App