import React from 'react'
import { useEffect , useState } from 'react'
//axios
import axios  from 'axios'
const useAxiosGetData = (path) => {
  const [data, setData] = useState(null);

  const fetchData = () => {
    axios.get(path)
      .then(response => setData(response.data))
      .catch(err => {
        const status = err.response?.status
        setData(status)
      });
  };

  useEffect(() => {
    fetchData(); // Obtener datos iniciales cuando el componente se monta
  }, []);

  // Devolver los datos y una función para obtener datos manualmente
  return [data, fetchData];
};

export default useAxiosGetData
