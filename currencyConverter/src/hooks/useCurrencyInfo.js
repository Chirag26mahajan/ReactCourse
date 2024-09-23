import {useState,useEffect} from "react"

function useCurrencyInfo(currency){
    const[data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/v1//currencies/{inr}`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])  //jab jab currency change hogi it will re render

    console.log(data);
    return data
    
}

export default useCurrencyInfo