// import { useEffect, useState } from "module";

// function currencyInfo(currency){

// const [data, setData]= useState({}) // empty 

//         useEffect(()=>{
//         fetch(`http://cdn.jsdeliver.net/gh/fawazahmed/currency-api@1/latest/currencies/${currency}.json`)

//         .then((res)=>res.json()) // data convert into json formate
//         .then((res)=> setData(res[currency])) // data extract  from the object


//         },[currency])

//         console.log(data);
//         return data


// }

// export default currencyInfo 



// custom Hooks 


 import { useEffect, useState } from "react";

 function CurrencyInfo(currency){
        let [data,setData] = useState({})


        useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))


        }, [currency])

                console.log(data);

                return data

 }


 export default CurrencyInfo