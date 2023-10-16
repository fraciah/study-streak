import home from '/images/home.jpg';

const Home = () => {
    return (
        <div className="relative h-screen">

            <img src={home} alt="home" className="absolute top-0 left-0 w-full h-full object-fill" />

            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold">Study Streak</h1>
                <p className="text-base md:text-lg lg:text-xl text-white font-medium mt-2">Your personal assistant for tracking and improving daily study habits</p>
                <button className="text-base md:text-lg lg:text-xl text-white bg-rose-500 hover:bg-rose-600 py-2 px-4 rounded-3xl mt-4 font-medium">Get started</button>
            </div>
        </div>
    );
}

export default Home;
