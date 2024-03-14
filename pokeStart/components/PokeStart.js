import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Text, View, StyleSheet, ActivityIndicator, FlatList } from "react-native-web";


const columns = [
	{
		name: 'nombre',
		selector: row => row.nombre,
	},
	{
		name: 'height',
		selector: row => row.height,
	},
	{
		name: 'mass',
		selector: row => row.mass,
	},
	{
		name: 'films',
		selector: row => row.films,
	},
];

export default function PokeStart(){

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const url = "https://swapi.dev/api/people";

    useEffect(()=>{
            fetch(url)
            .then(response => response.json())
            .then((result) => {
                setIsLoading(false)
                setData(result.results)
            }, (error)=>{
                setIsLoading(false)
                setError(error)
            })
            
    },[])



    const getContent = () => {
        if (isLoading) {
          return (
            <View>
              <Text style={styles.textProps}>Loading data</Text>
              <ActivityIndicator size='large' color='green' />
            </View>
          );
        }
        if (error) {
          return (
            <View>
              <Text style={styles.textProps}>Error: {error}</Text>
            </View>
          );
        }
        return (
          <View style={styles.container}>
            <DataTable
                columns={columns} 
                data={data} 
              // data={data}
              // renderItem={({ item }) => (
              //   <View>
              //     <Text>Name: {item.name}</Text>
              //     <Text>Heigth: {item.height}</Text>
              //     <Text>Weiht: {item.mass}</Text>
              //     <Text>Created: {item.films}</Text>
              //   </View>
              // )}
            />
          </View>
        );
      };

    return(
        <View>
            {getContent()}
        </View>
    )
}

const styles = StyleSheet.create({
    textProps: {
      fontSize: 35,
    },
    container: {
        border: 2,
      backgroundColor: '#ff',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 10, height: 2 }, 
      shadowRadius: 4,
      shadowOpacity: 0.2,
      marginTop: 20,
    },
    image: {
  
    },
    errorStyle: {
  
    },
  });
  
  