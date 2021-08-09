import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import {FC,memo} from 'react';
import { IconType } from 'react-icons';
import { HiLockClosed } from 'react-icons/hi';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary' | 'success' | 'danger';
    children: string;
    look?: 'solid' | 'outline';
    className?: string;
    Enable?: boolean;
    Icon?: IconType;
}

const Button: FC<Props> = ({children, className, Enable , theme , look , Icon , ...rest}) => {

    var themeSolidClasses;
    var themeOutlineClasses;

    if(theme === 'primary'){ themeSolidClasses = "  text-white bg-blue-500 hover:bg-blue-400 " ; themeOutlineClasses =" border-2 border-blue-500 bg-blue-100 text-blue-600 hover:bg-blue-200 "}
    else if(theme === 'danger'){ themeSolidClasses = "  text-white bg-red-500 hover:bg-red-400 " ; themeOutlineClasses =" border-2 border-red-500 bg-red-100 text-red-600 hover:bg-red-200 "} 
    else if(theme === 'success'){ themeSolidClasses = "  text-white bg-green-500 hover:bg-green-400 " ; themeOutlineClasses =" border-2 border-green-500 bg-green-100 text-green-600 hover:bg-greeb-200 "} 
    else if(theme === 'secondary'){ themeSolidClasses = "  text-white bg-purple-500 hover:bg-purple-400 " ; themeOutlineClasses =" border-2 border-purple-500 bg-purple-100 text-purple-600 hover:bg-purple-200 "}
 
    var lookClasses = (look === 'solid')? ( " "+themeSolidClasses+" ") : (" "+ themeOutlineClasses + " ")

  return (
    <button
          {...rest}
          className= { classNames( "group relative px-12 flex justify-center py-2 px-4 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:cursor-not-allowed " ,className , lookClasses  ) }
          >
          {
            Icon && (
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <Icon className="h-5 w-5 " aria-hidden="true" />
              </span>
            )
          }
          
          {children}
    </button>
  );
};

Button.defaultProps = {
    theme: 'primary',
    children: "",
    look : 'solid',
    Enable: true,
}

export default  memo(Button);