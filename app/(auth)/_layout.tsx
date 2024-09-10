import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function AuthLayout() {
    const colorScheme = useColorScheme();
    const router = useRouter();
    return (
        <Stack 
            screenOptions={{
          }}>
            <Stack.Screen name="login" options={{ title: 'Login' }} />
            <Stack.Screen name="register" options={{
                 title: 'Register',
                 headerRight: ()=>(
                    <Button title="Login" onPress={()=> router.push('/(tabs)/explore')} />
                )
                 }}/>
        </Stack>
    )
}