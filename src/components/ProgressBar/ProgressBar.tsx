import {FC,memo} from 'react';

interface Props {
    progress: number;
    theme: 'simple' | 'gradient';
}

const ProgressBar: FC<Props> = ({progress,theme}) => {

    var colorTheme= "blue-400 ";

    if(progress > 90 ){ colorTheme = "purple-600 "}
    else if(progress > 80 ){ colorTheme = "purple-400 "}
    else if(progress > 70 ){ colorTheme = "red-600 "}
    else if(progress > 60 ){ colorTheme = "red-400 "}
    else if(progress > 50 ){ colorTheme = "yellow-600 "}
    else if(progress > 40 ){ colorTheme = "yellow-400 "}
    else if(progress > 30 ){ colorTheme = "green-600 "}
    else if(progress > 20 ){ colorTheme = "green-400 "}
    else if(progress > 10 ){ colorTheme = "blue-600 "}

    var bgTheme= (theme === 'gradient')? " bg-gradient-to-r from-gray-200  to-"+colorTheme : " bg-"+colorTheme;

  return (
    <div className="h-12 bg-gray-200 rounded-full mx-8">
      <div className={"rounded-full h-12"+ bgTheme} style= {{width:progress+"%" }}></div>
    </div>
  );
};

ProgressBar.defaultProps = {
}

export default  memo(ProgressBar);