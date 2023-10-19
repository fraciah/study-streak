import PasswordField from '../ui/PasswordField';
import InputField from '../ui/InputField';
import SignUpBtn from '../ui/SignUpBtn';

const SignUpForm = () =>{
  const handleSubmit = (event) => {
    event.preventDefault();
    //handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Full Name" name="full name"  required />
      <InputField label="Email" type="email" name="email"  required />
      <InputField label="Username" name="username" required />
      <PasswordField label="Password" type="password" name="password" required />
      <PasswordField label="Confirm Password" type="password" name="confirmPassword" required />
      <div className="w-full flex justify-center">
        <SignUpBtn>SIGN UP</SignUpBtn>
      </div>
    </form>
  );
}

export default SignUpForm;