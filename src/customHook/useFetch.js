import { useEffect, useState } from "react";
import axios  from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;










// try {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error("Network response was not ok.");
//     }
//     const fetchedData = await response.json();
//     setData(fetchedData);
// } catch (error) {
//     setError(error);
// } finally {
//     setLoading(false);
// }
// };
// fetchData();

