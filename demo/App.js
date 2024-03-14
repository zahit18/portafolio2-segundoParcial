// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

// export default function App() {
//   const [response, setResponse] = useState(null);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setLoading(false);
//           setResponse(result);
//         },
//         (error) => {
//           setLoading(false);
//           setError(error);
//         }
//       );
//   }, []);

//   console.log(response['bpi']);

//   const getContent = () => {
//     if (isLoading) {
//       return <ActivityIndicator size='large' />;
//     }
//     if (error) {
//       return <Text>{error}</Text>;
//     }
//     return (
//       <View>
//         <Text style={styles.textProps}>BTC to USD: {response.bpi.USD.rate}</Text>
//         <Text style={styles.textProps}>BTC to EURO: {response.bpi.EUR.rate}</Text>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {getContent()}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textProps: {
//     fontSize: 34,
//   }
// });

const data = {
  "time": {
    "updated": "Feb 27, 2024 16:33:18 UTC",
    "updatedISO": "2024-02-27T16:33:18+00:00",
    "updateduk": "Feb 27, 2024 at 16:33 GMT"
  },
  "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
  "chartName": "Bitcoin",
  "bpi": {
    "USD": {
      "code": "USD",
      "symbol": "&#36;",
      "rate": "57,009.408",
      "description": "United States Dollar",
      "rate_float": 57009.4082
    },
    "GBP": {
      "code": "GBP",
      "symbol": "&pound;",
      "rate": "44,951.348",
      "description": "British Pound Sterling",
      "rate_float": 44951.3483
    },
    "EUR": {
      "code": "EUR",
      "symbol": "&euro;",
      "rate": "52,557.772",
      "description": "Euro",
      "rate_float": 52557.7716
    }
  }
};

import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const url = "https://api.coindesk.com/v1/bpi/currentprice.json";

export default function App() {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setResponse(result);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size='large' />;
    }
    if (error) {
      return <Text>Error: {error.message}</Text>;
    }
    return (
      <View>
        {/* <Text style={styles.textProps}>BTC to USD: {response['bpi']['USD']['rate']}</Text> */}
        <Text style={styles.textProps}>BTC to USD: {data.bpi.USD.rate}</Text>
        <Text style={styles.textProps}>BTC to EUR: {response['bpi']['EUR']['rate']}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {getContent()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textProps: {
    fontSize: 34,
  },
});