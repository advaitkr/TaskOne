import { useEffect,useState } from "react";
export function usePagination(size,apiCall){
    const [results,setResults] = useState([])
    const [page, setPage] = useState(0)
    const [total,setTotal] = useState(0)
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
    setLoading(true)
     apiCall(page,size)
      .then(({data})=>{
        setResults(data.results)
      })
      .catch((err)=>console.log(err))
   },[])

   return {results,total,loading}
}