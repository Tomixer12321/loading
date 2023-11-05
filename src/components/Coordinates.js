import {useState} from "react"

const Coordinates = () => {
    const [loading,setLoading]=useState(true)
  return <div>
        <div>{loading?"loading...":"data"}</div>
    </div>
}

export default Coordinates