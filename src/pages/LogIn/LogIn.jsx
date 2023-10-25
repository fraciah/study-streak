import LogInForm  from '../../components/form/LogInForm';
import SignUpBtn from '../../components/ui/SignUpBtn';

export default function LogIn({ goToSignUp, goToHome }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-logSign bg-no-repeat bg-cover bg-center">
      <h2 onClick={goToHome} className="text-4xl font-bold mb-5 text-gray-800 cursor-pointer">Study Streak</h2>
      <div className="flex w-2/3">
        <div className="bg-rose-500 bg-opacity-80 rounded-l-lg flex flex-col justify-center items-center w-1/3">
          <h2 className="text-white text-xl mb-1">Don't have an account?</h2>
          <SignUpBtn className="border border-white" goToSignUp={goToSignUp}/>  {/*className,goToSignUp as props*/}
        </div>

        <div className="p-5 w-2/3 rounded-r-lg bg-white bg-opacity-40">
          <h1 className="text-rose-500 font-bold text-3xl text-center">Log In</h1>
          <LogInForm />
        </div>
      </div>

    </div>
  );
}