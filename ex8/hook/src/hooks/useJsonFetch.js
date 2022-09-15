import {useState, useEffect, useRef} from 'react'

export default function useJsonFetch (url, opts) {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [hasError, setError] = useState(null)
    const timestampRef = useRef()

    useEffect(() => {
        setLoading(() => true)
        fetch(url)
          .then(response => response.json())
          .then(data => setData(() => data))
          .then(() => setLoading(() => true))
          .catch((err) => setError(() => err))
          .finally(() => setLoading(() => false))
            
    },[]);

    return [{data, isLoading, hasError}]

}