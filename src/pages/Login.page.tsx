import { useState } from 'react';
import {FC,memo} from 'react';
import {HiLockClosed} from 'react-icons/hi';
import {FaSpinner} from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';

interface Props {
}

const LoginPage: FC<Props> = (props) => {

  // const [email ,setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [data, setData] = useState({email:"",password:""})
  
  const [touched , setTouched] = useState({email:false,password:false});
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();


  //Submit Button
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({...data, [event.target.name]: event.target.value});
  }
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setTouched({...touched, [event.target.name]: true});
  }

  // Validation
  let emailError = "";
  let passwordError = "";

  if(!data.email){
    emailError = "Email address is required"
  }else if(!data.email.endsWith("@gmail.com")){
    emailError= "Please enter a valid email"
  }

  if(!data.password){
    passwordError = "Password is required"
  }else if(data.password.length < 8 ){
    passwordError = "Password must be of 8 characters"
  }


  return (
    <div className="min-h-screen w-1/2 flex items-center justify-center bg-gray-50 py-12 px">
      <div className="space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(event)=> {
            event.preventDefault();
            console.log("Error Here")
            if(emailError || passwordError){
              console.log("Form Submission Rejected");
              return;
            }
            setSubmitting(true);
            setTimeout(()=>{
              console.log(data);
              history.push("/dashboard");
            }, 5000)
            
        }}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
               <label htmlFor="email-address" className="sr-only">  {/* sr-only makes the div hidden but able to be read by screen reader thus making it useful for screen readers */}
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                value={data.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            { touched.email && <div className="text-red-600">{emailError}</div> }
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={data.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            { touched.password && <div className="text-red-600">{passwordError}</div> }
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <HiLockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
            {submitting && <FaSpinner className="animate-spin mt-5"></FaSpinner> }
          </div>
        </form>
      </div>
    </div>
  );
};

LoginPage.defaultProps = {
}

export default  memo(LoginPage);