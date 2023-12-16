const SignupModal = ({setShowSignupModal}) => {
    return(
        <div className="bg-gray-100 flex flex-col justify-center items-center top-0 left-0 w-full h-full fixed">
            <div className="bg-neutral-700 p-8 h-4/6 w-full sm:w-3/4 md:w-3/5 relative">
                <p className="text-stone-300 text-2xl absolute top-2 right-2 cursor-pointer"
                    onClick={() => setShowSignupModal(false)}>&times;</p>
                <h1 className='text-stone-300 my-8 font-bold text-2xl sm:text-3xl md:text-4xl text-center'>Join Study Streak</h1>
                <div className="flex justify-center my-12">
                    <h3 className="text-stone-300 border border-cyan-500 py-2 px-4 rounded-full hover:text-gray-800 hover:bg-cyan-300 transition duration-300 cursor-pointer font-semibold">Sign up with Google</h3>
                </div>
                <div className="my-8">
                    <h3 className="text-stone-300 text-center md:text-lg">Already have an account? Welcome back !</h3>
                    <h3 className="text-cyan-500 hover:text-cyan-600 text-center my-2 md:text-lg cursor-pointer transition duration-300">Sign in</h3>
                </div>
            </div>
        </div>
    )
}
export default SignupModal;