import SelectInput from "./SelectInput"

function InputField({ question, name, options }) {
    return (
        <>
            <p className="my-2 mb-1 inter-regular text-lg min-h-[50px] align-text-bottom">{question}</p>
            <SelectInput className='mb-7' name={name} options={options} />
        </>
    )
}

export default InputField