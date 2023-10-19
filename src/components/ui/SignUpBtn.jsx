const SignUpBtn = ({ children }) => {
    return (
        <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-3xl px-7 py-2 mt-1">
            {children}
        </button>
    );
};

export default SignUpBtn;
