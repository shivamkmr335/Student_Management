import {FC,memo} from 'react';
import {useHistory} from "react-router-dom";
import {FaSpinner} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useFormik } from "formik";
import * as yup from "yup";
import InputBox from '../../components/InputBox/InputBox';
import Button from '../../components/Button/Button';
import { login } from '../../api/auth';
import { useDispatch } from 'react-redux';



interface Props {
}


const LoginPage: FC<Props> = (props) => {

  const dispatch = useDispatch();
  const history=useHistory();

  const {handleSubmit , getFieldProps , touched , isSubmitting , errors , isValid} = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    isInitialValid: false,
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8,"Password must have atleat 8 characters" )
    }),
    onSubmit: (data)=> {
      login(data).then((u)=>{
        dispatch({type: "me/login", payload:u})
        history.push("/dashboard");
      })
    }
  })
  
  return (
    <div className="min-h-screen lg:w-1/2 w-screen  flex items-center justify-center bg-gray-50">
      <div className="space-y-8">
      <p className="text-4xl">Log In to <span className="text-blue-500">CORK</span></p>
      <p className="mt-2 text-lg">New Here? <Link to="/signup" className="text-blue-500 underline">Create an account</Link></p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >

          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">

            <InputBox
              id="email-address"
              type="email"
              autoComplete="email"
              placeholder="Email Address"
              required
              {...getFieldProps("email")}
              touched= {touched.email}
              error= {errors.email}
            ></InputBox>

            <InputBox
              id="password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              required
              {...getFieldProps("password")}
              touched= {touched.password}
              error= {errors.password}
            ></InputBox>

            
          </div>

          <div className="flex items-center justify-between">
            

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <Button theme="secondary" look="solid" type="submit" disabled={!isValid}>Sign Up</Button>
            {isSubmitting && <FaSpinner className="animate-spin mt-5"></FaSpinner> }
          </div>
        </form>

        <div className="w-full text-center items-center">
          <div className="flex mb-8">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded "
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                keep me logged in
              </label>
          </div>
          <Link to="/forgot-password" className="font-medium w-full text-center text-indigo-600 mt-12 hover:text-indigo-500">
                Forgot password?
          </Link>
        </div>

        <p className="mt-4">© 2020 All Rights Reserved.<Link to="/dashboard" className="text-blue-500">CORK</Link> is a product of <br /> Designreset. <span className="text-blue-500 ">Cookie Preferences, Privacy, and Terms.</span></p>
      </div>
    </div>
  );
};

LoginPage.defaultProps = {
}

export default  memo(LoginPage);