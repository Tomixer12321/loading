import {useState,useEffect} from "react"

const url="http://api.open-notify.org/iss-now.json"

const Coordinates = () => {
    const [loading,setLoading]=useState(true)
    const [cooordinates,setCoordinates]=useState({})

    const getCoordinates=async()=>{
        const response= await fetch(url)
        const issCoordinates= await response.json()
        setLoading(false)
        setCoordinates(issCoordinates)
    }

    useEffect(()=>{
        getCoordinates()
    },[])


  return <div>
        <div>{loading?"loading...":"data"}</div>
    </div>
}

export default Coordinates