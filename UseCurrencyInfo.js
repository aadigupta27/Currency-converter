import { useEffect, useState } from "react";

function UseCurrencyInfo(currency){

    const [data, setData] = useState({}); //default case main empty obj pass kar diya jisse by chance agar API kam nhi ki toh error nahi aayega !
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])

    return data;
}

export default UseCurrencyInfo;