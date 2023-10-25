import SignUpForm  from '../../components/form/SignUpForm';
import LogInBtn from '../../components/ui/LogInBtn';

export default function SignUp({ goToLogIn }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-logSign bg-no-repeat bg-cover bg-center">
      <h2 className="text-4xl font-bold mb-5 text-gray-800">Study Streak</h2>
      <div className="flex w-2/3">
        <div className="bg-rose-500 bg-opacity-80 rounded-l-lg flex flex-col justify-center items-center w-1/3">
          <h2 className="text-white text-xl mb-1">Already have an account?</h2>
          <h2 className="text-white text-xl mb-1">Welcome back !</h2>
          <LogInBtn className="border border-white" goToLogIn={goToLogIn}/>  {/*className,goToLogIn as props*/}
        </div>

        <div className="p-5 w-2/3 rounded-r-lg bg-white  bg-opacity-40">
          <h1 className="text-rose-500 font-bold text-3xl text-center">Sign Up</h1>
          <SignUpForm />
        </div>
      </div>

    </div>
  );
}