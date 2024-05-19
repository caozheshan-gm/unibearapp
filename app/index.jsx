import { StatusBar } from 'expo-status-bar';
import {  ScrollView, Text, View ,Image} from 'react-native';
import { Link,Redirect,router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import {images } from '../constants'
import {icons } from '../constants'
import CustomButton from '../components/CustomButton';



export default function App() {
  return (
    <SafeAreaView className="bg-primary2 h-full">
      <ScrollView contentContainerStyle={{height:'1'}}>
        <View className="w-full flex justify-center items-center min-h-[85vh] px-4">
          {/* <Image 
            source = {icons.uni}
            className="w-[130px] h-[84px]"
            resizeMode='contain'
          /> */}
          
          <Image 
            source = {icons.odi}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode='contain'
          />
          
          <View className="relative mt-5">
            <Text className="text-3xl text-primary font-bold text-center">
              Welcome to the future with{' '}        
              <Text className='text-secondary-200'>ODIKING</Text> 
            </Text>
            <Image
              source={images.path}
              className="w-[200px] h-[20px] absolute-bottom-2 -right-16"
              resizeMode='contain'
            />
            <View>
              <CustomButton
                title="Continue with Phone Number"
                handlePress={() => router.push("/sign-in")}
                containerStyles="w-full mt-7"
              />
            </View>
            <View>
              <CustomButton
                title="Sign Up"
                handlePress={() => router.push("/sign-up")}
                containerStyles="w-full mt-7"
              />
            </View>

            <View>
              <CustomButton
                title="Scan QR code"
                handlePress={() => router.push("/scan")}
                containerStyles="w-full mt-7"
              />
            </View>
          </View>
          
          
          
          
          
        </View>
        {/* <StatusBar backgroundColor="#161622" style="light" /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

