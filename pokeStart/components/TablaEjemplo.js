import DataTable from 'react-data-table-component';
import { View } from 'react-native-web';

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


export default function TablaEjemplo() {

	const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const url = "https://swapi.dev/api/people/";

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


	return (
    <View>
      <DataTable 
	  	columns={columns} 
		data={data} 
		/>
    </View>
  );
};