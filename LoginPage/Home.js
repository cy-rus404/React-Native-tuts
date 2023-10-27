import React from 'react';
import { ImageBackground, SafeAreaView, StyleSheet,Text,View,Button } from 'react-native';

function Home(props) {
    return (
        <>
        <SafeAreaView style={styles.navbar}>
            <Text style={styles.txt}>CHAIR</Text>
        </SafeAreaView>
            <ImageBackground 
            style={styles.background}
            source={require('../assets/chair.png')}                
            ></ImageBackground>

            <View style={styles.card}
            >
                <Text style={styles.word}>This is available for sale</Text>
            </View>

            <Button style={styles.btn}
                    title="Buy Me"
                    color="#000"

            ></Button>
        </>
    );
}

const styles = StyleSheet.create({
    navbar:{
        backgroundColor:"#b0fc38",
        flex:0.05,
        alignItems:'center',
    },

    txt:{
        fontWeight:"bold",
        fontSize:30
    },

    word:{
        alignSelf:"center",
        top: 20,
        fontWeight:"bold",
        fontSize:30,
    },
    background:{
        width:400,
        height:400,
        flex:0.5,
        top:90,
    },
    card:{
        width:415,
        height:70,
        top:90,
        flex:0.5,
        borderRadius:60,
        backgroundColor:"#b0fc38"
    },
})

export default Home;