const LogInBtn = ({ className, goToLogIn }) => {
    return(
        <button className={`bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-3xl px-8 py-2 mt-1 ${className}`} onClick={goToLogIn}>
            LOG IN
        </button>
    )
}

export default LogInBtn;