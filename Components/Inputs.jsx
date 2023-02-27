import React, { useState } from 'react'
import { TextInput, View, Text, Pressable, StyleSheet,} from 'react-native'

function Inputs({setMassage, setResult, setResultType}) {

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  

  const calculation = () => {
    let bmi = weight / (height * height)

    if (bmi < 18.5) {
      setMassage('You are under weight');
      setResultType('red');
    }
    else if (bmi > 18.5 && bmi < 24.9){
      setMassage('You are in the best condition');
      setResultType('green');
    }

    if (bmi >= 25 && bmi < 29.9) {
      setMassage('You are a little over weight');
      setResultType('red');
    }

    else if (bmi >= 29.9 && bmi < 39.9) {
      setMassage('Get ready to visit your creator!!!');
      setResultType('red');
    }

    setResult(true);
    setHeight("");
    setWeight("");
    
  }

    return (
      <View >

        <Text style={styles.text}>HEIGHT</Text>
        <TextInput placeholder='Meter' style={styles.input} value={height} onChangeText={(e) => { return setHeight(e) }} />

        <Text style={styles.text}>Weight</Text>
        <TextInput placeholder='Kg' style={styles.input} value={weight} onChangeText={(e) => { return setWeight(e) }} />

        <Pressable onPress={() => calculation()  } style={{ marginHorizontal: "auto", marginVertical: '2%', }}>
          <Text style={{ color: 'white', fontSize: '1em', flex: 0.2, }}>CALCULATE</Text>
        </Pressable>
      </View>
    )
  }

  const styles = StyleSheet.create({
    input: {
      flex: 0.2,
      marginVertical: '2%',
      marginHorizontal: "auto",
      padding: '3%',
      border: '5px white solid',
      color: 'white',
      borderRadius: '10px',
      textAlign: "center",
      fontSize: '1em',
    },

    text: {
      flex: 0.2,
      color: 'white',
      fontSize: '1em',
      marginHorizontal: 'auto'
    }
  });

  export default Inputs;
