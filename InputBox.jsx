import React, {useId} from 'react'


function InputBox({
    label,
    Amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   
    const amountInputId = useId();  // to provide unique id (can be a string or a hexadecimal quantity) 

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input               
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={Amount}
                    onChange={(e) => onAmountChange && // checker hai ki onAmountChange exist bhi kar rha hai ya nahi, agar nahi toh dusra func call ho jaayega
                    onAmountChange(Number(e.target.value))} 
                    id={amountInputId} // type casting karni padi kyunki notorious js e.target.value o string format main deti hai humein 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange &&
                        onCurrencyChange(e.target.value)
                    }
                    disabled={currencyDisable}
                >
                        {currencyOptions.map((currency) => ( // **{Important}** jab bhi jsx file main loop lagao key zaroor add karna(react rokega nahi par uski performancce bahut degrade ho jaati hai). Jab bhi loop ke andar koi html tag hota hai tab react dom create karta hai, ab baar baar same element create na ho dom main usse bachne ke liye hum html elemnet main ek key paas kar dete hai, to distinguish the following.
                            <option key={currency} // *** Donot use useId to generate  key for loops (use key only from your data) Suggestion from react document.
                            value={currency}>   
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

