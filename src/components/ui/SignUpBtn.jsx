const SignUpBtn = ({ children, ...props }) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default SignUpBtn;
