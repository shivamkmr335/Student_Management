import { useState, FC,memo } from 'react';
import { HiX } from 'react-icons/hi';

interface Props {
    theme?: 'primary' | 'warning' | 'success' | 'error';
    children: string;
    look: 'solid' | 'outline';
    className: string;
}

const Alert: FC<Props> = ({children, theme, look, className , ...rest}) => {

    var themeClasses;
    if(theme === 'primary'){ themeClasses = "blue" }
    else if(theme === 'error'){ themeClasses = "red"} 
    else if(theme === 'success'){ themeClasses = "green"} 
    else if(theme === 'warning'){ themeClasses = "yellow"}
    
    var lookClasses = (look === 'solid')? ` bg-${themeClasses}-500 text-white hover:bg-${themeClasses}-400` :  
      ` bg-${themeClasses}-100 text-${themeClasses}-600 hover:bg-${themeClasses}-200`

    var IconThemeClasses = (look ==='solid')? ( ` text-${themeClasses}-200`) : ( ` text-${themeClasses}-600`) 
    const [hide,setHide] =useState("flex");

  return (
    <div className= {"w-full justify-between py-3 px-4 text-sm font-medium rounded-md "+ lookClasses + " " + hide + " " + className} >
      <div className="">{children}</div>
      <button onClick={()=> setHide("hidden")}><HiX className={"h-5 w-5 " + IconThemeClasses}  /></button>
    </div>
  );
};

Alert.defaultProps = {
    children: "This is a alert Box",
    theme: "primary"

}

export default  memo(Alert);