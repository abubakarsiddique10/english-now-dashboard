const Textarea = ({ handleBlur, placeholder, name, value, required }) => {

    return (
        <textarea
            onBlur={handleBlur}
            className="w-full h-full border py-3 px-4"
            placeholder={placeholder}
            name={name}
            required={required}>
        </textarea>
    )
}
export default Textarea;