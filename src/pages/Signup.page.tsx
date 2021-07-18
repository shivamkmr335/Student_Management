import {FC,memo} from 'react';
import {HiLockClosed} from 'react-icons/hi';
import {FaSpinner} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useFormik,} from "formik";
import * as yup from "yup";
import InputBox from '../components/InputBox';

interface Props {
}

const SignupPage: FC<Props> = (props) => {
  const {handleSubmit , getFieldProps , touched , isSubmitting , errors} = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: ""
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8, (min)=> "Atleast" + min+ " characters" ),
      username: yup.string().required().min(2)
    }),
    onSubmit: (data , { setSubmitting })=> {
      console.log("form submitting",data);
      setTimeout(()=>{
        console.log("Form submitted successfully");
        setSubmitting(false);
      },5000)
    }
  })
  
  return (
    <div className="min-h-screen w-1/2 flex items-center justify-center bg-gray-50">
      <div className="space-y-4">
      <p className="text-4xl">Get started with a <br/>free account</p>
      <p className="mt-2 text-lg">Already have an account? <Link to="/login" className="text-blue-500 underline">Log in</Link></p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >

          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">

            <InputBox
              id="Username"
              type="username"
              autoComplete="username"
              placeholder="User Name"
              required
              {...getFieldProps("username")}
              touched= {touched.username}
              error= {errors.username}
            ></InputBox>

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
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <HiLockClosed className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Sign in
            </button>
            {isSubmitting && <FaSpinner className="animate-spin mt-5"></FaSpinner> }
          </div>
        </form>

        <div className="w-full text-center items-center">
          <div className="flex">
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
          <Link to="/forgot-password" className="font-medium w-full text-center text-indigo-600 hover:text-indigo-500">
                Forgot password?
          </Link>
        </div>

        <p className="mt-2">© 2020 All Rights Reserved.<span className="text-blue-500">CORK</span> is a product of <br /> Designreset. <span className="text-blue-500 ">Cookie Preferences, Privacy, and Terms.</span></p>
      </div>
    </div>
  );
};

SignupPage.defaultProps = {
}

export default  memo(SignupPage);