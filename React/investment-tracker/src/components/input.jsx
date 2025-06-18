export default function Input ({ label, value, onChangeValue }) {

    return (
        <p>
            <label>
                {label}
            </label>
            <input type="number" required value={value} onChange={event => onChangeValue(+event.target.value)} />
        </p>
    )
}