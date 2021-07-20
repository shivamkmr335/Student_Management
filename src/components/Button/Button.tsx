import { ButtonHTMLAttributes } from 'react';
import { Children } from 'react';
import {FC,memo} from 'react';
import { HiLockClosed } from 'react-icons/hi';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'success' | 'danger';
    children: string;
    look?: 'solid' | 'outline';
}

const Button: FC<Props> = ({children, className , theme , look , ...rest}) => {

    var themeClasses;
    if(theme === 'primary'){ themeClasses = "blue" }
    else if(theme === 'danger'){ themeClasses = "red"} 
    else if(theme === 'success'){ themeClasses = "green"} 
    else if(theme === 'secondary'){ themeClasses = "purple"}
    
    var lookClasses = (look === 'solid')? ("bg-"+themeClasses+"-500 text-white hover:bg-"+themeClasses+"-400") : ("border + border-"+themeClasses+"-600 text-"+themeClasses+"-600 hover:bg-"+themeClasses+"-200 ")

    var IconThemeClasses = (look ==='solid')? (" text-"+themeClasses+"-700") : ( " text-"+themeClasses+"-600") 

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