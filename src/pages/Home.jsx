const Home = () => {
    return (
        <div className='bg-homeImg bg-cover bg-center bg-no-repeat h-screen flex flex-col justify-center items-center px-2'>
            <div className='flex flex-col justify-center items-center space-y-14'>
                <h1 className='text-cyan-300 text-5xl sm:text-6xl md:text-7xl text-center font-bold'>Study Streak</h1>
                <div>
                    <p className='text-stone-300 text-base md:text-lg  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quia reiciendis unde optio voluptatibus nihil reprehenderit facilis harum fugiat</p> 
                    <p className='text-stone-300 text-base md:text-lg text-center'>perspiciatis error voluptatum tempora distinctio cumque, facere quas amet quod dicta.</p>
                </div>
            </div>
            <div className='flex justify-center items- space-x-8 mt-12'>
                <button className='text-stone-300 border border-cyan-300 py-1 sm:py-2 px-4 sm:px-5 text-base font-medium hover:text-gray-800 hover:bg-cyan-300 transition duration-300'>Sign In</button>
                <button className='text-stone-300 border border-cyan-300 py-1 sm:py-2 px-4 sm:px-5 text-base font-medium hover:text-gray-800 hover:bg-cyan-300 transition duration-300'>Get started</button>
            </div>
        </div>
    );
}

export default Home;
