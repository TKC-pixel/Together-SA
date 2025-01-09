import {Text, View, StyleSheet, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {

    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('Home');

    }


    return(
        <View style={styles.container}>
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: (<View>
                            <Image style={styles.lottie} source={require('../assets/trans.gif')} autoPlay loop />

                        </View>),
                        title: 'Onboarding',
                        subtitle: 'Transperancy',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (<View>
                            <Image style={styles.lottie} source={require('../assets/account.gif')} autoPlay loop />

                        </View>),
                        title: 'Onboarding',
                        subtitle: 'Accountability',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (<View>
                            <Image style={styles.lottie} source={require('../assets/relia.gif')} autoPlay loop />

                        </View>),
                        title: 'Onboarding',
                        subtitle: 'Reliability',
                    },
                    ]}
            />
        </View>
    );



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        width: 250,
        height: 250,
    }

})

export default OnBoarding