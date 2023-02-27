import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Inputs from "./Components/Inputs";
import Result from "./Components/Result";

export default function App() {

  const [massage,setMassage] = useState();
  const [result,setResult] = useState(false);
  const [resultType, setResultType] = useState(''); 


  return (
    <View style={styles.container}>
      <View>
        <Text style={{color:'white', fontSize:'250%'}} >BMI CALCULATOR</Text>
      </View>

      <View style={styles.main}>
         <Inputs setMassage={setMassage} setResult={setResult} setResultType={setResultType}></Inputs>
      </View>

      {result && <Result massage ={massage} setResult={setResult} resultType={resultType}></Result>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  main: {
    paddingVertical:'10%',
    paddingHorizontal:'20%',
    border: "10px white solid",
    borderRadius: "10px",

  },
});
