import SignUpForm  from '../components/form/SignUpForm';
import LogInBtn from '../components/ui/LogInBtn';

export default function SignUp({ goToLogIn, goToHome }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-logSign bg-no-repeat bg-cover bg-center">
      <h2 onClick={goToHome} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-800 cursor-pointer">Study Streak</h2>
      <div className="flex flex-col sm:flex-row w-3/4 sm:w-2/3">
        <div className="bg-rose-500 bg-opacity-80 sm:rounded-l-lg flex flex-col justify-center items-center w-full sm:w-1/3 sm:py-0 py-4">
          <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-1 text-center">Already have an account?</h2>
          <h2 className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-1 text-center">Welcome back !</h2>
          <LogInBtn className="border border-white" goToLogIn={goToLogIn}/>  {/*className,goToLogIn as props*/}
        </div>

        <div className="p-5 w-full sm:w-2/3 sm:rounded-r-lg bg-white bg-opacity-40">
          <h1 className="text-rose-500 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">Sign Up</h1>
          <SignUpForm />
        </div>
      </div>

    </div>
  );
}