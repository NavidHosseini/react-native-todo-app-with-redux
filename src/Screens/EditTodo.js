import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native"
import { useRoute } from "@react-navigation/native"
import { edittodo } from '../Redux/actions/ActionTodo'
import { useDispatch } from 'react-redux'


const EditTodo = ({ navigation }) => {

    const [title, setTitle] = useState()
    const [content, setContent] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        setContent(`${Content}`)
        setTitle(`${Title}`)
    }, [])



    const PressEditTodo = ({ title, content, id }) => {
        dispatch(edittodo({ title, content, id }))
    }


    const route = useRoute()
    const id = route.params.id
    const Title = route.params.title
    const Content = route.params.content

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
                    PressEditTodo({ title, content, id })
                    navigation.navigate("Home")
                }}
            >
                <View style={styles.Button}>

                    <Text style={styles.ButtonText}>اصلاح</Text>
                </View>

            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        margin: 20,
        backgroundColor: "#c7cbd2",
        borderRadius: 10
    },

    Button: {
        marginHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#ec5a1a',
        padding: 20,
        borderRadius: 7,

    },
    TextInputcontent: {
        margin: 20,
        backgroundColor: "#c7cbd2",
        paddingBottom: 170,
        borderRadius: 10
    },
    ButtonText: {
        fontFamily: 'Sans',
        color: '#fff'
    }
})

export default EditTodo