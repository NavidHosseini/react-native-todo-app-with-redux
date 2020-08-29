import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from '../Redux/actions/ActionTodo'

import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { useNavigation } from '@react-navigation/native'

const TodoList = ({ item }) => {

    const [isComplated, setComplated] = useState()


    const navigation = useNavigation()

    const dispatch = useDispatch()

    const onPressHandler = id => {
        dispatch(deleteTodo(id))
    }

    const CheckIconHandler = id => {
        dispatch(toggleTodo(id))
        setComplated(item.completed)
    }
    console.log(isComplated)
    return (
        <View>
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate("ShowTodo", {
                        title: item.title,
                        content: item.content,
                        id: item.id,
                    })}
                style={{ backgroundColor: '#d0d0d0', marginBottom: 10 }}
            >
                <View style={styles.todoView}>
                    <TouchableOpacity onPress={() => onPressHandler(item.id)}>
                        <FontAwesome name='trash' style={styles.trash} />
                    </TouchableOpacity>
                    <Text style={[isComplated ? styles.TodoTitle : styles.TodoTitleCompleted]}>{item.title}</Text>

                    <FontAwesome name='check'
                        style={[styles.check]}
                        onPress={() => CheckIconHandler(item.id)} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default TodoList

const styles = StyleSheet.create({
    todoView: {
        marginHorizontal: 15,
        borderBottomWidth: 1,
        paddingBottom: 25,
        paddingTop: 25,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    trash: {
        padding: 8,
        color: '#c41919',
        fontSize: 27
    },
    TodoTitle: {
        fontSize: 20,
        // fontWeight: "bold",
        textAlign: 'right',
        fontFamily: 'SansBold',
        color: 'black'
    },


    TodoTitleCompleted: {
        fontSize: 20,
        textAlign: 'right',
        fontFamily: 'SansBold',
        textDecorationLine: 'line-through',
        color: '#696f6b'
    },

    check: {
        padding: 8,
        color: '#17c253',
        fontSize: 27,


    }
})
