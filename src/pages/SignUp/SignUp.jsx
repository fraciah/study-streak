import SignUpForm  from '../../components/form/SignUpForm';

export default function Register() {
  return (
    <div className="h-screen bg-slate-300">

      <div className="flex border-2 border-rose-500 rounded-lg">
        <div className="bg-rose-500 flex items-center ju w-1/3">
          <h2 className="text-white text-xl">Already have an account?</h2>
        </div>

        <div className="p-5 w-2/3 bg-white">
          <h1 className="text-rose-500 font-bold text-3xl">Sign Up</h1>
          <SignUpForm />
        </div>
        </div>

    </div>
  );
}