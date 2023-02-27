import React from 'react'
import { View, Text, Pressable } from 'react-native'

function Result({ massage, setResult, resultType }) {

    

    return (
        <View>
            <View style={{ backgroundColor:`${resultType}`,borderRadius:'10px' , marginTop:'20%', alignItems:'center',flex:'1' }}>
                <Text style={{ color: 'white',flex:'0.5',fontSize:'1.5em' }}>
                 {massage}
                </Text>

                <Pressable onPress={()=> setResult(false)} style={{backgroundColor:{resultType}, }}>
                    <Text style={{color:"white",fontSize:'1.5em',marginTop:'50%'}}>OK</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Result
