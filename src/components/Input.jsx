import '../styles/Input.css'

function Input({ label, inputType, inputValue, handleOnChange }) {
    return (
        <label>
            {label}:{' '}
            <input
                type={inputType}
                value={inputValue}
                onChange={handleOnChange}
            />
        </label>
    )
}

export default Input