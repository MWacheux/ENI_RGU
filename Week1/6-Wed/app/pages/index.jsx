import {useQuery} from 'react-query'
import axios from 'axios'

const fetchQuotes = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/getAllQuotes');
  return response.data;
};

export default function Index() {

    const { data, isLoading, error } = useQuery({
        queryKey: ['quotes'],
        queryFn: fetchQuotes,
    });
 
  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

    return (
        <div>
            <h1>Home</h1>
            <ul>
                {data && data.map((quote, index) => (
                <li key={index}>{quote.quoteName}</li>
                ))}
            </ul>

            <button onClick={() => {
            }}>Retrieve ToDo List</button>

            <button onClick={() => {
            }}>Save ToDo List</button>
        </div>
    );
}