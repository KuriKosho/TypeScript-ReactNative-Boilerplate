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
                headerStyle: {
                    backgroundColor: Colors[colorScheme ?? 'light'].tint,
                },
                headerTintColor: Colors[colorScheme ?? 'light'].background,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
          }}>
            <Stack.Screen name="login" options={{ title: 'Login' }} />
            <Stack.Screen name="register" options={{title: 'Register' }}/>        
        </Stack>
    )
}