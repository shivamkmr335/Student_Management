import {FC,memo} from 'react';
import Card from './Card';

interface Props {
    size?: 'small' | 'medium' | 'large';
    NoOfElements: number;
}

const Card8: FC<Props> = ({size, NoOfElements}) => {

    var sizeTheme; 
    if(size === 'large'){ sizeTheme=" text-2xl p-2 px-4 right-28 h-12 " }
    else if(size=== 'medium'){ sizeTheme=" text-lg p-1 px-2 right-24 h-10 " }
    else { sizeTheme=" text-sm px-2 right-24 h-6 " }

    const tabs=[
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg"},
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-7.jpeg"},
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-3.jpeg"},
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-8.jpeg"},
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-6.jpeg"},
    ]


  return (
    <div className="flex flex-row items-center relative bg-gray-100">  
      {tabs.map( function(tab, i){  
        if(i >= NoOfElements || i>4){
            return <></>;
        }
        return <Card index={i} size={size} imgLink={tab.imgLink} key={i}></Card>;
        
      })}
      { NoOfElements>4 &&  <p className={"bg-white text-blue-700 font-semibold relative rounded-full  " + sizeTheme}  >+{NoOfElements-4} more</p>}
    </div>  
  );
};

Card8.defaultProps = {
  size: 'large'
}

export default  memo(Card8);