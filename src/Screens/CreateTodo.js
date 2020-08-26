import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native'
import { addtodoAction } from '../Redux/actions/ActionTodo'
import { useDispatch } from 'react-redux'

const CreateTodo = ({ navigation }) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")


    const dispatch = useDispatch()

    const onPressHandler = () => {
        dispatch(addtodoAction({
            id: Math.floor(Math.random() * 9999),
            title: title,
            content: content
        }))
    }

    return (
        <View>
            <TextInput
                placeholder="عنوان"
                style={styles.TextInput}
                onChangeText={text => setTitle(text)}
                value={title}
            />
            <TextInput
                placeholder="متن"
                style={styles.TextInputcontent}
                value={content}
                onChangeText={text => setContent(text)}
            />

            <TouchableOpacity
                onPress={() => {
                    onPressHandler()
                    navigation.navigate("Home")
                }}
            >
                <View style={styles.Button}>
                    <Text style={styles.ButtonText}>ایجاد</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default CreateTodo

const styles = StyleSheet.create({
    TextInput: {
        margin: 20,
        backgroundColor: "#bbcfd5",
        borderRadius: 10

    },

    ButtonText: {
        fontFamily: 'Sans',
        color: '#fff'
    },
    Button: {
        marginHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#1a60ec',
        padding: 20,
        borderRadius: 7,
    },
    TextInputcontent: {
        margin: 20,
        backgroundColor: "#bbcfd5",
        paddingBottom: 170,
        borderRadius: 10

    },
})
