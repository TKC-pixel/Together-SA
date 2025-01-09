import { SafeAreaView, Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";

const NewsScreen = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            const apiKey = '2527b6630d6769d6f6e5a645b93b238a';

            const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=any&max=50&apikey=2527b6630d6769d6f6e5a645b93b238a';
            try {
                const response = await fetch(url);
  
                if (!response.ok) {
                    throw new Error('Network Issue');
                }

                const data = await response.json();
                setNews(data.articles); 
                console.log(data.articles);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Latest News</Text>
            {loading ? (
                <Text>Loading...</Text>
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                <ScrollView>
                    {news.map((article, index) => (
                        <View key={index} style={styles.newsItem}>
                            {article.image && (
                                <Image
                                    source={{ uri: article.image }}
                                    style={styles.image}
                                />
                            )}
                            <Text style={styles.title}>{article.title}</Text>
                            <Text style={styles.source}>Source: {article.source.name}</Text>
                            <Text style={styles.description}>{article.description}</Text>
                            <Text style={styles.publishedAt}>
                                Published at: {new Date(article.publishedAt).toLocaleString()}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
        margin: 30


    },
    newsItem: {
        marginBottom: 20,
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    source: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    publishedAt: {
        fontSize: 12,
        color: '#888',
    },
});

export default NewsScreen;
