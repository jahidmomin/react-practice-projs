import "./App.css";
import InputBox from "./components/InputBox";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [fromFieldValue, setfromFieldValue] = useState(0); //inputAmount
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [toFieldValue, setToFieldValue] = useState(0); //convertedAmount

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  const swapCurrency = () => {
  
    setToFieldValue(1000);
    setfromFieldValue(toFieldValue);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

  };

  let convertCurrency = () => {
    setToFieldValue(fromFieldValue * currencyInfo[toCurrency]);
  };

  return (
    <>
      <h1>Currency Converter App</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convertCurrency();
        }}
      >
        <InputBox
          name="input"
          label="From"
          amount={fromFieldValue}
          currencyOptions={options}
          onAmountChange={(fromFieldValue) => setfromFieldValue(fromFieldValue)}
          selectedCurrency={fromCurrency}
          onCurrencyChange={(selectedCurrency) =>
            setFromCurrency(selectedCurrency)
          }
        />

        <button onClick={() => swapCurrency()}>Swap</button>

        <InputBox
          name="result"
          label="To"
          amount={toFieldValue}
          currencyOptions={options}
          onAmountChange={(toFieldValue) => setToFieldValue(toFieldValue)}
          selectedCurrency={toCurrency}
          onCurrencyChange={(selectedCur) => setToCurrency(selectedCur)}
          // amountDisabled={false}
        />

        <button type="submit">
          Convert Currency {fromCurrency} to {toCurrency}
        </button>
      </form>
    </>
  );
}

export default App;
