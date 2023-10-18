const PasswordField = (props ) => {
    const {label, ...otherProps} = props;
    console.log(otherProps)
    return (
        <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2">{label}</label>
            <input className="border rounded  py-2 px-3 text-gray-700" {...otherProps} />
        </div>
    );
};

export default PasswordField;
