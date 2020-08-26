import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
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
            <View style={styles.Button}>
                <Button
                    title="اضافه به لیست"
                    onPress={() => {
                        onPressHandler()
                        navigation.navigate("Home")
                    }}
                />
            </View>
        </View>
    )
}

export default CreateTodo

const styles = StyleSheet.create({
    TextInput: {
        margin: 20,
        backgroundColor: "#bbcfd5",
    },
    textView: {
        alignItems: "center",
    },
    Text: {
        fontSize: 40,
    },
    Button: {
        marginHorizontal: 20,
    },
    TextInputcontent: {
        margin: 20,
        backgroundColor: "#bbcfd5",
        paddingBottom: 170,
    },
})
