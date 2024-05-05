import SelectInput from "./SelectInput"

function InputField({ question, name, options }) {
    return (
        <>
            <p className="mb-4 inter-regular text-xl min-h-[45px] align-text-bottom">{question}</p>
            <SelectInput className='mb-7' name={name} options={options} />
        </>
    )
}

export default InputField