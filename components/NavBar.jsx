import {Text, SafeAreaView, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NavBar = () => {


    return(
        <SafeAreaView>
            <View style={styles.nav}>
                <View style={styles.icons}>
                    <Ionicons name='notifications-circle' size={42} color='grey'/>
                </View>

                <View style={styles.icons}>
                    <Ionicons name='person-circle' size={42} color='grey'/>  
                </View>                
                
            </View>
            

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        gap: 6,
        justifyContent: 'flex-end',
        right: 15,
        top: 0,
    },
    heading: {
        fontFamily: 'ROBOTO',
        fontSize: 25,
        left: 10
    },
    icons: {
        width: 45,
        height: 45,
        borderRadius: '50%',
        backgroundColor: '#D3D3D3',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '4px, 4px, 4px black'

    }
})

export default NavBar;