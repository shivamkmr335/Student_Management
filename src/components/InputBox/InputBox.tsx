import { InputHTMLAttributes } from 'react';
import { FC,memo} from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
    error?: string;
    placeholder?: string;
}

const Input: FC<Props> = ({touched, error , className, placeholder, id , ...rest}) => {
  return (
    <>
      <div>
       { id && placeholder && (<label htmlFor={id} className="sr-only">  {/* sr-only makes the div hidden but able to be read by screen reader thus making it useful for screen readers */}
            {placeholder}
        </label>) }
        <input
            id={id}
            {...rest}
            className={"appearance-none rounded-none relative block w-full px-3 py-2 my-3 border-b border-gray-500 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" + className }
            placeholder={placeholder}
        />
        </div>
        { touched && <div className="text-red-600">{error}</div> }
    </>
  );
};

Input.defaultProps = {
  placeholder: "Enter Your Details",
}

export default  memo(Input);