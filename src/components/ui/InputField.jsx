const InputField = (props) => {
    const { label, ...otherProps } =  props;
    console.log(otherProps);

    return (
        <div className="mb-1 flex flex-col items-start">
            <label className="text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input className="border rounded  py-2 px-3 text-gray-700 w-full" {...otherProps} />
        </div>
    );
};

export default InputField;
