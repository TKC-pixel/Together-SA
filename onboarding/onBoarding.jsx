import {Text, View, StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = () => {


    return(
        <View style={styles.container}>
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: (<View><Text>Page 1</Text></View>),
                        title: 'Onboarding',
                        subtitle: 'Transperancy',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (<View><Text>Page 2</Text></View>),
                        title: 'Onboarding',
                        subtitle: 'Accountability',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (<View><Text>Page 3</Text></View>),
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
    }

})

export default OnBoarding