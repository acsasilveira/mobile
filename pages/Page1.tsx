import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native'
import logo from "../assets/logo.jpeg"
import Toggle from "../Toggle"
import { IPage } from '../App'

export default function Page1({ setPageI }: IPage) {
  const [flexDirection, setFlexDirection] = useState('row')
  const [justifyContent, setJustifyContent] = useState('center')
  const [alignItems, setAlignItems] = useState('center')
  const layoutStyle = { flexDirection, justifyContent, alignItems }

  const primaryAxis = flexDirection === 'row' ? 'Horizontal' : 'Vertical'
  const secondaryAxis = flexDirection === 'row' ? 'Vertical' : 'Horizontal'

  return (
    <View style={styles.container}>
      <Toggle
        label={'Primary axis (flexDirection)'}
        value={flexDirection}
        options={flexDirectionOptions}
        onChange={(option) => {
          setFlexDirection(option)
        }}
      />
      <Toggle
        label={`${primaryAxis} distribution (justifyContent)`}
        value={justifyContent}
        options={justifyContentOptions}
        onChange={(option) => {
          setJustifyContent(option)
        }}
      />
      <Toggle
        label={`${secondaryAxis} alignment (alignItems)`}
        value={alignItems}
        options={alignItemsOptions}
        onChange={(option) => {
          setAlignItems(option)
        }}
      />
      <Text style={styles.texto}>Olá</Text>
      <TouchableOpacity onPress={()=>{
        Alert.alert('Clicou!!!')
      }}>
        <Image source={logo} style={styles.img} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setPageI(2)
      }} style={styles.botao}>
        <Text>Página 2</Text>
      </TouchableOpacity>

      <View style={[styles.layout, layoutStyle]}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    </View>
  )
}

const flexDirectionOptions = ['row', 'column']
const justifyContentOptions = [
  'flex-start',
  'center',
  'flex-end',
  'space-around',
  'space-between',
]
const alignItemsOptions = ['flex-start', 'center', 'flex-end', 'stretch']

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: '#3B6CD4',
    margin: 5,
  },
  img: {
    width: 150,
    height: 150,
  },
  texto: {
    fontSize: 45,
    margin: 5,
  },
  botao: {
    margin: 5,
  }
})
