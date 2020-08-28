import React from "react"
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native"

import { useSelector } from 'react-redux'
// import { deleteTodo } from '../Redux/actions/ActionTodo'

// import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TodoList from "../Components/TodoList"


const Home = ({ navigation }) => {
  const todos = useSelector(state => state.todos)

  // const dispatch = useDispatch()

  // const onPressHandler = id => {
  //   dispatch(deleteTodo(id))
  // }
  //console.log(todos)
  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={state => state.title}
        renderItem={({ item }) => {
          return (
            // <TouchableOpacity
            //   onPress={() =>
            //     navigation.navigate("ShowTodo", {
            //       title: item.title,
            //       content: item.content,
            //       id: item.id,
            //     })}
            //   style={{ backgroundColor: '#d0d0d0', marginBottom: 10 }}
            // >
            //   <View style={styles.todoView}>
            //     <TouchableOpacity onPress={() => onPressHandler(item.id)}>
            //       <FontAwesome name='trash' style={styles.trash} />
            //     </TouchableOpacity>
            //     <Text style={styles.TodoTitle}>{item.title}</Text>
            //     <FontAwesome name='check' style={styles.check} onPress={() => alert('در دسته ساخت')} />
            //   </View>
            // </TouchableOpacity>
            <TodoList item={item} />
          )
        }}
      />
    </View>
  )
}
export default Home
const styles = StyleSheet.create({
  // todoView: {
  //   marginHorizontal: 15,
  //   borderBottomWidth: 1,
  //   paddingBottom: 25,
  //   paddingTop: 25,
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  // },
  // trash: {
  //   padding: 8,
  //   color: '#c41919',
  //   fontSize: 27
  // },
  // TodoTitle: {
  //   fontSize: 20,
  //   // fontWeight: "bold",
  //   textAlign: 'right',
  //   fontFamily: 'SansBold'
  // },
  // check: {
  //   padding: 8,
  //   color: '#17c253',
  //   fontSize: 27,

  // }
})