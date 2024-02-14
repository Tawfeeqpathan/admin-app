import { useState, useEffect } from "react"
import { Text, View } from "react-native";



export default function Anitext() {
  const names = [
    'Search anything..', 'Cab', 'eletronics'
  ]
  const [currentName, setCurrentName] = useState(names[0]);

  function setRandomName() {
    const index = Math.floor(Math.random() * names.length);
    let newName = names[index]
    if (newName == currentName) { setRandomName() }
    else { setCurrentName(newName) }
    return
  }

  useEffect(() => {
    setTimeout(() => {
      setRandomName()
    }, 2000);
  }, [currentName])

  return (
  <View>
    <Text style={{color:"black"}}>{currentName}</Text>
  </View>
  )
}