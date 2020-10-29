import React,{useEffect, useState} from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';
import {getVendors, storeCafeDensity} from '../action/auth';
import { connect } from 'react-redux';
import Input from '../components/Input';

const Vendors = ({navigation, route, getVendors, storeCafeDensity}) => {
    const [vendors, setVendors] = useState([])
    const [density, setDensity] = useState(null);

    useEffect(()=>{
        console.log(route.params);
        fetchVendors()
    },[])

    const changeInput = (e,name) => {
        setDensity(e);
    }

    const fetchVendors = async () => {
        const response = await getVendors({org_id: route.params.id});
        if(response.success) {
            // success
            console.log(response);
            setVendors(response.data.data);
            
        }
    }

    const submit = async () => {
        const response = await storeCafeDensity({
            dm_id: '1',
            org_id: route.params.id,
            density_value: density
        });
        if(response.success) {
            // success
            console.log(response);
            setDensity(null);
            navigation.navigate('Checklist',{org_id: route.params.id, dm_id: '1'});
        }
    }
    return (
        <ScrollView style={styles.mainContainer}>
            <Header navigation={navigation} />
            <View style={styles.card}>
                <Text style={styles.title}>
                    LIST OF VENDORS
                </Text>
                {vendors && vendors.length > 0 && vendors.map((vendor, index) => 
                <View key={index} style={styles.listContainer}>
                    <Text style={styles.listTitle}>
                        {index+1}) {vendor}
                    </Text>
                </View>)}

                
            </View>


            <View style={styles.card}>
                <View style={styles.sensorContainer}>
                    <Text style={{fontSize:18, marginBottom:10}}>Sensor Activate</Text>
                </View>


                <View style={styles.CafeContainer}>
                    <Text style={{fontSize:18, marginBottom:10}}>Cafeteria Density</Text>
                </View>

                <View >
                    {/* <Text style={styles.center}>
                        Value
                    </Text> */}

                    <Input name="density" placeholder="Value" value={density} change={changeInput} />
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
        flex:1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
    },
    card: {
        backgroundColor:'#FFFDFD',
        borderRadius: 10,
        margin:10,
        padding:20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom:10
    },
    listContainer: {
        backgroundColor:'#E4DDDD',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10
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
    }
 });

 const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        getVendors, storeCafeDensity
    }
) (Vendors)