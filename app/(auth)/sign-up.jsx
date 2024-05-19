import { View, Text ,ScrollView,Image} from 'react-native'
import {React,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import {icons} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import {Link} from 'expo-router'

const SignUp = () => {


  const [form,setForm] = useState({
    phone: '',
    password: '',
  })

  const submit = () => {
    
  }

  const [isSubmitting, setIsSubmitting] = useState(false)


  // Function to handle phone number input changes
  const handlePhoneChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setForm({ ...form, phone: numericText });
  };

  return (
    <SafeAreaView className="bg-primary2 h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image source = {icons.odi} 
          resizeMode="contain" 
          className="w-[140px] h-[140px]"/>
          <Text className="text-2xl text-semibold mt-10 font-psemibold">
            Sign up to odking app
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"       
          />

          <FormField
            title="Phone Number"
            value={form.phone}
            handleChangeText={handlePhoneChange}
            otherStyles="mt-10" 
            keyboardType="phone-pad"      
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          
          />
          <CustomButton 
            className=""
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
            
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-blue-500 font-pregular">
              Have an account already?
              
            </Text>
            <Link 
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
              >Sign in
            </Link>
          </View>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp