import { useState,useEffect } from "react"

const useFetch=(url)=>{
    const [loading,setLoading]=useState(true)
    const [data,setData]=useState({})

    useEffect(()=>{
        const getCoordinates=async()=>{
            const response= await fetch(url)
            const issCoordinates= await response.json()
            setLoading(false)
            setData(issCoordinates)
        }
        getCoordinates()
    },[url])
    return{data,loading}
}
export default useFetch