import {FC,memo} from 'react';

interface Props {
    progress: number;
    theme: 'simple' | 'gradient';
}

const ProgressBar: FC<Props> = ({progress,theme}) => {

    var colorTheme= " blue-400 ";
    var gradientColor= " ";
    if(progress > 90 ){ gradientColor=" to-purple-600 "; colorTheme = " bg-purple-600 "}
    else if(progress > 80 ){gradientColor=" to-purple-600 " ; colorTheme = " bg-purple-400 "}
    else if(progress > 70 ){gradientColor=" to-red-600 " ; colorTheme = " bg-red-600 "}
    else if(progress > 60 ){gradientColor=" to-red-600 " ; colorTheme = " bg-red-400 "}
    else if(progress > 50 ){gradientColor=" to-yellow-600 " ; colorTheme = " bg-yellow-600 "}
    else if(progress > 40 ){gradientColor=" to-yellow-600 " ; colorTheme = " bg-yellow-400 "}
    else if(progress > 30 ){gradientColor=" to-green-600 " ; colorTheme = " bg-green-600 "}
    else if(progress > 20 ){gradientColor=" to-green-600 " ; colorTheme = " bg-green-400 "}
    else if(progress > 10 ){gradientColor=" to-blue-600 " ; colorTheme = " bg-blue-600 "}
    else {gradientColor=" to-blue-600 " ; colorTheme = " bg-blue-600 "}

    var bgTheme= (theme === 'gradient')? " bg-gradient-to-r from-gray-200 " + gradientColor : colorTheme;

  return (
    <div className="h-12 bg-gray-200 rounded-full mx-8">
      <div className={"rounded-full h-12 "+ bgTheme} style= {{width:progress+"%" }}></div>
    </div>
  );
};

ProgressBar.defaultProps = {
}

export default  memo(ProgressBar);