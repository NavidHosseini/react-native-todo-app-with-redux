import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useRoute } from "@react-navigation/native"
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { deleteTodo } from '../Redux/actions/ActionTodo'
import { useDispatch } from 'react-redux'


const ShowTodo = ({ navigation }) => {
  const route = useRoute()
  const id = route.params.id
  const title = route.params.title
  const content = route.params.content

  const dispatch = useDispatch()

  const DeleteHandler = id => {
    dispatch(deleteTodo(id))
  }


  return (
    <>
      <View style={styles.containerTodo}>
        <View style={styles.ViewTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.ViewContent}>

          <Text style={styles.content}>{content}</Text>
        </View>

        <View style={styles.editButtonView} >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome name='edit' style={styles.editButton}
              onPress={() => {
                navigation.navigate("EditTodo", { id, title, content })
              }} />
            <FontAwesome name='trash' style={styles.trash}
              onPress={() => {
                DeleteHandler(id)
                navigation.navigate('Home')
              }} />

          </View>
        </View>
      </View>
      <TouchableOpacity

        onPress={() => { navigation.navigate("Home") }} >
        <View style={styles.ExitButton}>
          <Text>صفحه اصلی</Text>
        </View>

      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  containerTodo: {
    backgroundColor: '#cfcccb',
    height: '45%',
    width: '100%',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 15,
  },
  title: {
    fontFamily: 'SansBold',
    fontSize: 25,
    marginTop: 8,
    marginBottom: 15,
    textDecorationLine: 'underline'
  },
  ViewTitle: {
    alignItems: 'center'
  },
  ViewContent: {
    flex: 1
  },
  content: {
    marginRight: 15,
    fontFamily: 'Sans'
  },
  editButton: {
    fontSize: 28,
    color: '#2b64c8',
    marginBottom: 10,
    marginRight: 28
  },
  editButtonView: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  trash: {
    color: '#c41919',
    fontSize: 28,
    marginLeft: 28
  },
  ExitButton: {
    marginHorizontal: 3,
    alignItems: 'center',
    backgroundColor: '#aeb9cc',
    padding: 20,
    borderRadius: 7,
    marginTop: 20

  },
})

export default ShowTodo