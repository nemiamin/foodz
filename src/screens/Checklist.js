import React,{useState} from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../components/Header';
import TextInput2 from '../components/Input';
import {cafeteriaRemark} from '../action/auth';
import { connect } from 'react-redux';

const Checklist = ({navigation, cafeteriaRemark}) => {
    const [form,setForm] = useState({hygine: '', qualityoffood: '', cleaness:'', staff_attend:'',stock:'', other:'', remark:''})

    const setHygine = (value) => {
        setForm({...form, hygine: value});
    }

    const setQuality = (value) => {
        setForm({...form, qualityoffood: value});
    }

    const setClean = (value) => {
        setForm({...form, cleaness: value});
    }

    const changeInput = (e, name) => {
        setForm({...form, [name]: e})
    }

    const setStock = (value) => {
        setForm({...form, stock: value});
    }

    const submit = async () => {
        const response = await cafeteriaRemark(form);
        if(response.success) {
            // success
            console.log(response)
            navigation.navigate('Dashboard');
        }
    }
    return (
        <ScrollView style={styles.mainContainer}>
            <Header navigation={navigation} />
            <View style={styles.card}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        OTHER DETAILS
                    </Text>
                </View>
                <View style={styles.listContainer}>
                    <View style={styles.item_1}>
                        <Text style={{marginLeft:10}}>
                            Hygiene
                        </Text>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.hygine == 'good' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setHygine('good')} >
                        <Text style={{padding:10}}>
                            Good
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.hygine == 'bad' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setHygine('bad')} >
                        <Text style={{padding:10}}>
                            Bad
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.hygine == 'average' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setHygine('average')} >
                        <Text style={{padding:10}}>
                            Average
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listContainer}>
                    <View style={styles.item_1}>
                        <Text style={{marginLeft:10}}>
                            Quality of Food
                        </Text>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.qualityoffood == 'good' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setQuality('good')} >
                        <Text style={{padding:10}}>
                            Good
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.qualityoffood == 'bad' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setQuality('bad')} >
                        <Text style={{padding:10}}>
                            Bad
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.qualityoffood == 'average' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setQuality('average')} >
                        <Text style={{padding:10}}>
                            Average
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>



                <View style={styles.listContainer}>
                    <View style={styles.item_1}>
                        <Text style={{marginLeft:10}}>
                            Clieanliness of Kitchen
                        </Text>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.cleaness == 'good' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setClean('good')} >
                        <Text style={{padding:10}}>
                            Good
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.cleaness == 'bad' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setClean('bad')} >
                        <Text style={{padding:10}}>
                            Bad
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.cleaness == 'average' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setClean('average')} >
                        <Text style={{padding:10}}>
                            Average
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>

                <TextInput2 name="staff_attend" bgColor="white" placeholder="Staff Attendance" inputColor="black" value={form.staff_attend} change={changeInput} />

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

                    <View style={{...styles.green_item, backgroundColor: form.stock == 'maintained' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setStock('maintained')} >
                        <Text style={{padding:10}}>
                            Maintained
                        </Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{...styles.green_item, backgroundColor: form.stock == 'not maintained' ? '#78E20D' : '#DAD7D7',}}>
                    <TouchableOpacity onPress={()=>setStock('not maintained')} >
                        <Text style={{padding:10}}>
                            Not Maintained
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>

            </View>

           <View style={{marginHorizontal:10}}>
                <TextInput2 name="other" bgColor="white" inputColor="black" placeholder="Other" value={form.other} change={changeInput} />
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
                 <TextInput value={form.remark} name="remark" onChangeText={(e)=>changeInput(e,'remark')} multiline={true} numberOfLines={3} placeholder='Reason For Cancellation' style={{ backgroundColor: '#F1EFEF', marginHorizontal: 0, textAlign: 'left',  }} />
             </View>
               </View>
               <TouchableOpacity onPress={()=>submit()} style={styles.buttonContainer}>
                <Text style={styles.button}>
                    Submit
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor:'#FEF7F7'
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
        
        borderColor:'white',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    green_item: {
        flex:1,
        
        borderColor:'white',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    }
 });


 const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        cafeteriaRemark
    }
) (Checklist)