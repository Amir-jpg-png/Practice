import Input from "./input.jsx";

export default function Inputs ( {inputProps } ) {

    const {
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
        setInitialInvestment,
        setAnnualInvestment,
        setExpectedReturn,
        setDuration
    } = inputProps;

    return (
        <section id="user-input">
            <div className="input-group">
                <Input label="Initial Investment" value={initialInvestment} onChangeValue={setInitialInvestment} />
                <Input label="Annual Investment" value={annualInvestment} onChangeValue={setAnnualInvestment} />
            </div>
            <div className="input-group">
                <Input label="Expected Return" value={expectedReturn} onChangeValue={setExpectedReturn} />
                <Input label="Duration" value={duration} onChangeValue={setDuration} />
            </div>
        </section>

    )
}