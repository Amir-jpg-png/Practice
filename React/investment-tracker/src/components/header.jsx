import logo from "../assets/investment-calculator-logo.png"

export default function header() {
    return (
        <header id='header'>
            <img src={logo} alt="Logo"/>
            <h1>
                Investment Calculator
            </h1>
        </header>
    )
}