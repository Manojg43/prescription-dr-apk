import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1E1E1E' : '#F5F5F5',
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.content}>
          <Text style={styles.title}>Prescription Dr APK</Text>
          <Text style={styles.subtitle}>
            React Native Application for Prescription Generation
          </Text>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Welcome!</Text>
            <Text style={styles.cardText}>
              This is a starter template for building a prescription generation
              app. The project structure is ready for you to start porting logic
              from the original React web application.
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Next Steps:</Text>
            <Text style={styles.cardText}>
              • Set up navigation between screens{`\n`}
              • Create prescription form components{`\n`}
              • Implement data persistence with AsyncStorage{`\n`}
              • Add PDF generation functionality{`\n`}
              • Integrate printing capabilities
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
});

export default App;
