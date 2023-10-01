import { useId } from "react";

export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  name
}) {
  const amountInputId = useId();

  return (
    <>
      <div>
        <label style={{ margin: "10px" }}>{label} : </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
        //   disabled={amountDisabled}
          name={name}
        />

        <label> Currency Type : </label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currencyName) => {
            return (
              <option value={currencyName} key={currencyName}>
                {currencyName}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
