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
      <InputField label="Username" name="username"  required />
      <InputField label="Email" type="email" name="username"  required />
      <PasswordField label="Password" name="password" required />
      <PasswordField label="Confirm Password" name="confirmPassword" required />
      <SignUpBtn>Sign Up</SignUpBtn>
    </form>
  );
}

export default SignUpForm;