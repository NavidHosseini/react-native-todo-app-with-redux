import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"
import { useRoute } from "@react-navigation/native"
import { edittodo } from '../Redux/actions/ActionTodo'
import { useDispatch } from 'react-redux'


const EditTodo = ({ navigation }) => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const dispatch = useDispatch()



    const PressEditTodo = ({ title, content, id }) => {
        dispatch(edittodo({ title, content, id }))
    }


    const route = useRoute()
    const id = route.params.id


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
                    title="Edit todo"
                    onPress={() => {
                        PressEditTodo({ title, content, id })
                        navigation.navigate("Home")
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        margin: 20,
        backgroundColor: "#bbcfd5",
        borderRadius: 20
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

export default EditTodo