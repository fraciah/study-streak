import SignUpForm  from '../../components/form/SignUpForm';
import SignInBtn from '../../components/ui/SignInBtn';

export default function Register() {
  return (
    <div className="h-screen flex justify-center items-center">

      <div className="flex w-2/3">
        <div className="bg-rose-500 border-2 border-rose-500 rounded-l-lg flex flex-col justify-center items-center w-1/3">
          <h2 className="text-white text-xl mb-1">Already have an account?</h2>
          <SignInBtn/>
        </div>

        <div className="p-5 w-2/3 border-2 border-rose-500 rounded-r-lg bg-white">
          <h1 className="text-rose-500 font-bold text-3xl text-center">Sign Up</h1>
          <SignUpForm />
        </div>
      </div>

    </div>
  );
}