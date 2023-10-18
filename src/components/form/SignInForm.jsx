import SignInBtn from "../ui/SignInBtn";

const SignInForm = () =>{
  const handleSubmit = (event) => {
    event.preventDefault();
    //handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <SignInBtn>SIGN IN</SignInBtn>
    </form>
  );
}

export default SignInForm;