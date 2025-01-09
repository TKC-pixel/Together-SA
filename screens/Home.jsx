import { Text, View, SafeAreaView, StyleSheet, ScrollView, Button } from 'react-native';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Card from '../components/Card';

const Home = () => {
  const navigation = useNavigation();
  const [ministers, setMinisters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPageContent = async () => {
      const apiKey = '6100b478dc3c264656c1d9a059043f01';
      const targetUrl = 'https://www.parliament.gov.za/ministers';
      const apiUrl = `https://api.scraperapi.com?api_key=${apiKey}&url=${encodeURIComponent(targetUrl)}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Failed to fetch content');
        }

        const htmlContent = await response.text();

        // Parsing the HTML content to extract the ministry, minister's names, and their details page URL
        const tableStart = htmlContent.indexOf('<table>');
        const tableEnd = htmlContent.indexOf('</table>', tableStart);
        const tableContent = htmlContent.substring(tableStart, tableEnd);

        // Regular expression to match the rows of the table and extract ministry, minister names, and detail page link
        const regex = /<tr>\s*<td>(.*?)<\/td>\s*<td><a.*?href="(.*?)".*?>(.*?)<\/a><\/td>\s*<\/tr>/g;
        const ministersList = [];
        let match;

        // Loop through the matches and populate the ministers list
        while ((match = regex.exec(tableContent)) !== null) {
          ministersList.push({
            ministry: match[1].trim(),
            minister: match[3].trim(),
            detailsPageUrl: `https://www.parliament.gov.za${match[2].trim()}`, // Full URL of the minister's details page
          });
        }

        setMinisters(ministersList);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPageContent();
  }, []);

  return (
    <>
      <NavBar />
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.cont} onTouchStart={() => navigation.navigate('News')}>
          <Text style={styles.title}>
            Latest News <Ionicons style={styles.title} name="book" size={30} />
          </Text>
        </View>

        <ScrollView style={styles.budget} horizontal={true}>
            <Text style={styles.line}>Budget Allocation 2024 </Text>
            <Ionicons name='cash' size={100} color='grey'/>
            
        </ScrollView>




        <Text style={{ top: 100, fontSize: 25, color: 'grey' }}>Ministers</Text>
        <ScrollView horizontal={true} style={styles.ministersContainer}>
          {ministers.map((minister, index) => (
            <Card
              key={index}
              title={`${minister.ministry}\n ${minister.minister}`}
              detailsPageUrl={minister.detailsPageUrl} // Pass detailsPageUrl to Card
            />
          ))}
        </ScrollView>
      </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cont: {
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
    width: 350,
    height: 90,
    borderRadius: 16,
    top: 30,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.3,
  },
  title: {
    fontSize: 25,
    color: 'grey',
    textAlign: 'center',
  },
  ministersContainer: {
    top: 100,
    width: '100%',
    paddingHorizontal: 20,
  },
  ministerCard: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  ministryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkblue',
  },
  ministerText: {
    fontSize: 16,
    color: 'grey',
  },
  budget: {
    top: 70,
    flex: 1,
    margin: 15,
    width: 300,
    height: 260,
    backgroundColor: '#B2B2B2',
    borderRadius: 30,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.3,
    },
    line: {
        textAlign: 'center',
        fontSize: 20,
        color: 'grey',
        margin: 50
    }
});

export default Home;
