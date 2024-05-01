import { useEffect, useState } from "react"


const useAxios = (dataURL) => {
    const [data,setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [fetchError,setFetchError] = useState(null)
    
    useEffect(()=> {
        let isMount= true
    })
}