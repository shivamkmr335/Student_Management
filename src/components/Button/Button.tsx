import { ButtonHTMLAttributes } from 'react';
import {FC,memo} from 'react';
import { HiLockClosed } from 'react-icons/hi';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'success' | 'danger';
    children: string;
    look?: 'solid' | 'outline';
    className: string;
}

const Button: FC<Props> = ({children, className , theme , look , ...rest}) => {

    var themeClasses;
    if(theme === 'primary'){ themeClasses = "blue" }
    else if(theme === 'danger'){ themeClasses = "red"} 
    else if(theme === 'success'){ themeClasses = "green"} 
    else if(theme === 'secondary'){ themeClasses = "purple"}

    var bgTheme: string = " bg-"+themeClasses+"-500 "
    var bgThemeHover: string = " bg-"+themeClasses+"-400 "
    var borderTheme: string = " border-"+themeClasses+"-600 "
    var textTheme: string = " text-"+themeClasses+"-600 "
    var darkTextTheme: string = " text-"+themeClasses+"-700 "
    var hollowHoverTheme: string = " bg-"+themeClasses+"-200 "


    
    var lookClasses = (look === 'solid')? ( bgTheme+" text-white hover:"+bgThemeHover) : (" border "+ borderTheme + textTheme +" hover:"+hollowHoverTheme + " ")

    var IconThemeClasses = (look ==='solid')? (" "+darkTextTheme+" ") : ( " "+textTheme+" ") 

  return (
    <button
          {...rest}
          className= {"group relative w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " + className + " " + lookClasses}
          >
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