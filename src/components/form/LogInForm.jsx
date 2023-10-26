import LogInBtn from "../ui/LogInBtn";
import PasswordField from '../ui/PasswordField';
import InputField from '../ui/InputField';

const LogInForm = ({goToDashboard}) =>{
  const handleSubmit = (event) => {
    event.preventDefault();
    //handle form submission
    //after successful login, navigate to dashboard
    goToDashboard();
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField label="Username" name="username" required />
      <PasswordField label="Password" type="password" name="password" required />
      <div className="w-full flex justify-center">
        <LogInBtn />
      </div>
    </form>
  );
}

export default LogInForm;