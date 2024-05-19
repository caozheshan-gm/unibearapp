import { View, Text,TextInput ,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react'
import {icons} from '../constants'



const FormField = ({title,value,placeholder,handleChangeText,otherStyle,...props}) => {
    const [showPassword,setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyle} `}>
      <Text className="text-base text-black-100 font-pmedium">{title}</Text>
      <View  
      className="w-full h-16 px-4 bg-blue-100 rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
        <TextInput 
        className="flex-1 text-black font-psemibold text-base"
        placeholder='placeholder'
        value={value}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={!showPassword && title === 'Password'}

        keyboardType={props.keyboardType} // Pass the keyboardType prop
        {...props} // Spread the remaining props to the TextInput
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField