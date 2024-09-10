import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);

  return (
    <section id="results">
      <table id="result">
        <thead>
          <th>Year</th>
          <th>Interest</th>
          <th>End of year value</th>
          <th>Added value this year</th>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.year}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.valueEndOfYear)}</td>
              <td>{formatter.format(result.annualInvestment)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
