import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function results({input}) {

    const annualData = calculateInvestmentResults(input);


    return (
        <table id="result">
            <thead>
            <tr>
                <th>
                    Year
                </th>
                <th>
                    Investment Value
                </th>
                <th>
                    Interest (Year)
                </th>
                <th>
                    Total Interest
                </th>
                <th>
                    Invested Capital
                </th>
            </tr>
            </thead>
            <tbody>
            {annualData.map((yearData) => (
                <tr key={yearData.year}>
                    <td>
                        {yearData.year}
                    </td>
                    <td>
                        {formatter.format(yearData.valueEndOfYear)}
                    </td>
                    <td>
                        {formatter.format(yearData.interest)}
                    </td>
                    <td>
                        {formatter.format(yearData.totalInterest)}
                    </td>
                    <td>
                        {formatter.format(yearData.investedCapital)}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}