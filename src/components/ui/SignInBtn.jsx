const SignInBtn = ({ children }) => {
    return(
        <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-3xl px-6 py-3">
            {children}
        </button>
    )
}

export default SignInBtn;