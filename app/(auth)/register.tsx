import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const register = () => {
  return (
    <View>
      <Text>register</Text>
      <Link href={"/(auth)/login"}>login</Link>
    </View>
  )
}

export default register

const styles = StyleSheet.create({})