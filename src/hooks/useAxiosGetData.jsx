import React from 'react'
import { useEffect , useState } from 'react'
import axios  from 'axios'


const useAxiosGetData = (path) => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios.get(path)
      .then(response => setData(response.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchData(); // Obtener datos iniciales cuando el componente se monta
  }, []);

  // Devolver los datos y una función para obtener datos manualmente
  return [data, fetchData];
};

export default useAxiosGetData
