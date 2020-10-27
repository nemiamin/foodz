import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import TextInput2 from '../components/Input';

export default ({navigation}) => {
    return (
        <ScrollView style={styles.mainContainer}>
            <Header navigation={navigation} />
            <View style={styles.card}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        LIST OF CAFETERIA
                    </Text>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.item_1}>
                        <Text style={{marginLeft:10}}>
                            Hygiene
                        </Text>
                    </View>

                    <View style={styles.green_item}>
                        <Text style={{padding:10}}>
                            Good
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={{padding:10}}>
                            Bad
                        </Text>
                    </View>

                    <View style={{...styles.item, borderTopRightRadius:5, borderBottomRightRadius:5}}>
                        <Text style={{padding:10}}>
                            Average
                        </Text>
                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.item_1}>
                        <Text style={{marginLeft:10}}>
                            Quality of Food
                        </Text>
                    </View>

                    <View style={styles.green_item}>
                        <Text style={{padding:10}}>
                            Good
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={{padding:10}}>
                            Bad
                        </Text>
                    </View>

                    <View style={{...styles.item, borderTopRightRadius:5, borderBottomRightRadius:5}}>
                        <Text style={{padding:10}}>
                            Average
                        </Text>
                    </View>
                </View>



                <View style={styles.listContainer}>
                    <View style={styles.item_1}>
                        <Text style={{marginLeft:10}}>
                            Clieanliness of Kitchen
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={{padding:10}}>
                            Good
                        </Text>
                    </View>

                    <View style={styles.item}>
                        <Text style={{padding:10}}>
                            Bad
                        </Text>
                    </View>

                    <View style={{...styles.green_item, borderTopRightRadius:5, borderBottomRightRadius:5}}>
                        <Text style={{padding:10}}>
                            Average
                        </Text>
                    </View>
                </View>

                <TextInput2 name="mobile" bgColor="white" inputColor="black" placeholder="Staff Attendance" />

                <View style={styles.listContainer}>
                    <View style={{flex:1.3,
        justifyContent:'center',
        backgroundColor:'white',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5}}>
                        <Text style={{marginLeft:10}}>
                            Stock
                        </Text>
                    </View>

                    <View style={styles.green_item}>
                        <Text style={{padding:10}}>
                            Maintained
                        </Text>
                    </View>

                    <View style={{...styles.item, borderTopRightRadius:5, borderBottomRightRadius:5}}>
                        <Text style={{padding:10}}>
                        Not Maintained
                        </Text>
                    </View>
                </View>

            </View>

           <View style={{marginHorizontal:10}}>
                <TextInput2 name="mobile" bgColor="white" inputColor="black" placeholder="Other" />
           </View>

           <View style={styles.card_bottom}>
               <Text style={{fontSize:20, fontWeight:'bold'}}>
                   Remarks by The Duty Manager
               </Text>
               
           </View>
           <View style={{backgroundColor:'#F1EFEF', 
        marginHorizontal:10,
        padding:10,borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,}}>
                   {/* <Text style={{paddingBottom:30}}>
                       Its advice that vendor should increase no. of staff which help him in making service prompt.
                   </Text> */}

<View style={{ flex: 1, marginVertical: 0 }}>
                 <TextInput multiline={true} value={'Its advice that vendor should increase no. of staff which help him in making service prompt.'} numberOfLines={3} placeholder='Reason For Cancellation' style={{ backgroundColor: '#F1EFEF', marginHorizontal: 0, textAlign: 'left',  }} />
             </View>
               </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:'#FEF7F7'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
    },
    card: {
        backgroundColor:'#BEBDBD',
        borderRadius: 10,
        margin:10,
        padding:10
    },
    card_bottom: {
        backgroundColor:'white',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        marginTop:10,
        marginEnd:10,
        marginStart:10,
        padding:10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding:5
    },
    titleContainer: {
        backgroundColor: '#FC0202',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:5,
        marginBottom: 20,
    },
    listContainer: {
        display:'flex',
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    },
    listTitle: {
        fontSize:22,
        marginHorizontal:15,
        padding:7
    },
    sensorContainer: {
        flex:1,
        alignItems:'center',
        flexDirection:'column',
        paddingBottom: 90
    },
    CafeContainer: {
        flex:1,
        alignItems:'center'
    },
    center: {
        alignItems:'center',
        fontSize:20,
        marginHorizontal:15,
        padding:7,
        fontWeight:'bold'
    },
    cafeButton: {
        backgroundColor:'#E4DDDD',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10,
        alignItems:'center'
    },
    buttonContainer: {
        backgroundColor:'#78E20D',
        margin:20,
        borderRadius:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    button: {
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        color: 'white',
        fontWeight:'bold',
        fontSize:18
    },
    item_1: {
        flex:2,
        justifyContent:'center',
        backgroundColor:'white',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    item: {
        flex:1,
        backgroundColor:'#DAD7D7',
        borderColor:'white',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    green_item: {
        flex:1,
        backgroundColor:'#78E20D',
        borderColor:'white',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    }
 });