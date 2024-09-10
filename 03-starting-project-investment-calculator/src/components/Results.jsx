import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);

  return (
    <section id="results">
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </thead>
        <tbody>
          {results.map((result, index) => {
            const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - userInput.initialInvestment;
            const totalAmountInvested = result.year * userInput.annualInvestment + userInput.initialInvestment;

            return (
              <tr key={index}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
