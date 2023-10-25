const LogInBtn = ({ className, goToLogIn }) => {
    return(
        <button className={`bg-rose-500 hover:bg-rose-600 text-white sm:text-base text-sm font-semibold rounded-3xl sm:px-8 px-3 sm:py-2 py-1 my-1 ${className}`} onClick={goToLogIn}>
            LOG IN
        </button>
    )
}

export default LogInBtn;