import { Text, View, StyleSheet, TextInput } from 'react-native'
import { GlobalStyles } from '../constants/Styles'
import Icon from 'react-native-vector-icons/Ionicons';


export default function Header() {
    return (
        <View style={styles.container}>

            <View style={styles.searchSection}>
            <Icon  name='home' color='red' size={24} />
                <TextInput
                    style={styles.input}
                    placeholder="Search dishes, restaurants"
                    underlineColorAndroid="transparent"
                    placeholderTextColor={GlobalStyles.gray}
                />
            </View>
            <Icon  name='home' color='red' size={24} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop:20
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius:10,
        flex:1,
        marginRight:10,
        borderColor:GlobalStyles.secondary,
        elevation:5
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        marginRight:50,
        backgroundColor: '#fff',
        color: '#424242',
        fontSize:15
    },
    filterSection: {
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        width:50,
        borderRadius:10,
        borderColor:GlobalStyles.secondary,
        elevation:5
    },
})

