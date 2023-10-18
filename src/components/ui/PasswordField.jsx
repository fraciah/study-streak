const PasswordField = ({ label, ...props }) => {
    return (
        <div>
            <label>{label}</label>
            <input type="password" {...props} />
        </div>
    );
};

export default PasswordField;
