
const TextField = ({ handleBlur, placeholder, type, value, name, required }) => {
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
        }
    }

    return (
        <>
            <input
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-6"
                type={type}
                name={name}
                required={required}
                placeholder={placeholder} />
        </>
    )
}
export default TextField;