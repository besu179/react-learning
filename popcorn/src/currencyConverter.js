import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [output, setOutput] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchFromApi() {
      try {
        setIsLoading(true); // Start loading
        setError(""); // Reset error state

        // Validate the amount
        if (isNaN(amount)) {
          setError("Please enter a valid number for the amount.");
          return;
        }

        if (amount <= 0) {
          setError("Amount must be greater than 0.");
          return;
        }

        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
        );

        // Check if the response is OK
        if (!response.ok) {
          throw new Error("Failed to fetch data. Please try again later.");
        }

        const data = await response.json();

        // Check if the API returned an error
        if (data.error) {
          throw new Error(data.error);
        }

        // Check if the expected data is present
        if (!data.rates || !data.rates[toCurrency]) {
          throw new Error("Invalid API response.");
        }

        // Update the output state
        setOutput(data.rates[toCurrency]);
      } catch (error) {
        console.error("Error:", error.message);
        setError(error.message); // Set the error state
        setOutput(0); // Reset the output
      } finally {
        setIsLoading(false); // Stop loading
      }
    }

    if (amount > 0) fetchFromApi();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f7f7",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#333" }}>Currency Converter</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <h1>To</h1>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
      </div>
      {isLoading && (
        <p style={{ textAlign: "center", color: "#333" }}>Loading...</p>
      )}
      {error && (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
          Error: {error}
        </p>
      )}
      {amount && !error && !isLoading && (
        <p style={{ textAlign: "center", color: "#333", fontSize: "18px" }}>
          When {amount} {fromCurrency} is converted to {toCurrency}, it is{" "}
          <strong>{output}</strong> 😊
        </p>
      )}
    </div>
  );
}
