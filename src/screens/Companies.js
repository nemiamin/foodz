import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { fetchCompanies } from '../action/auth';

const Companies =  ({navigation,fetchCompanies}) => {
    const [companies, setCompanies] = useState([]);

    useEffect(()=>{
        getComapnies();
    },[]);

    const getComapnies = async () => {
        console.log('api called');
        const response = await fetchCompanies();
        if(response.success) {
            // console.log(response);
            setCompanies(response.data.data)
        }
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <Header navigation={navigation} />
            <View style={styles.card}>
                    <Text style={styles.title}>
                        LIST OF COMPANIES
                    </Text>

{companies.map((company, index) =>
    <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('Vendors')}>
    <Text style={styles.comapnies}>
    {index+1}) {company}
    </Text>
</TouchableOpacity>
    )}
            </View>
            
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
    comapnies: {
        fontSize:22,
        marginHorizontal:15,
        padding:7
    },
    list: {
        backgroundColor:'#E4DDDD',
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 10
    }
 });


 const mapStateToProps = state => ({

})


export default connect(
    mapStateToProps, {
        fetchCompanies
    }
) (Companies)