import { ButtonHTMLAttributes } from 'react';
import {FC,memo} from 'react';
import { HiLockClosed } from 'react-icons/hi';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'success' | 'danger';
    children: string;
    look?: 'solid' | 'outline';
}

const Button: FC<Props> = ({children, className , theme , look , ...rest}) => {

    var themeClasses;
    if(theme === 'primary'){ themeClasses = "primary" }
    else if(theme === 'danger'){ themeClasses = "danger"} 
    else if(theme === 'success'){ themeClasses = "success"} 
    else if(theme === 'secondary'){ themeClasses = "secondary"}
    
    var lookClasses = (look === 'solid')? (" bg-"+themeClasses+" text-white hover:bg-"+themeClasses+" ") : (" border + border-"+themeClasses+" text-"+themeClasses+" hover:bg-"+themeClasses+" ")

    var IconThemeClasses = (look ==='solid')? (" text-gray-500 ") : ( " text-"+themeClasses+" ") 

  return (
    <button
          {...rest}
          className= {"group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " + className + " " + lookClasses}>
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <HiLockClosed className={"h-5 w-5 " + IconThemeClasses} aria-hidden="true" />
          </span>
          {children}
    </button>
  );
};

Button.defaultProps = {
    theme: 'primary',
    children: "",
    look : 'solid'
}

export default  memo(Button);