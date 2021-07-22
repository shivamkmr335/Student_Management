import {FC,memo} from 'react';
import Card from './Card';

interface Props {
    size?: 'small' | 'medium' | 'large';
    NoOfElements: number;
}

const Card8: FC<Props> = ({size, NoOfElements}) => {

    var sizeTheme= (size === 'large')? " text-2xl p-2 px-4 right-28 " : ( (size=== 'medium')? " text-lg p-1 px-2 right-24 " : " text-sm px-2 right-24 " )

    const tabs=[
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg"},
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-7.jpeg"},
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-3.jpeg"},
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-8.jpeg"},
        {imgLink: "https://designreset.com/cork/ltr/demo4/assets/img/profile-6.jpeg"},
    ]


  return (
    <div className="flex flex-row relative bg-gray-100">  
      {tabs.map( function(tab, i){  
        
        if(i >= NoOfElements || i>4){
            return <></>;
        }

        return <Card index={i} size={size} imgLink={tab.imgLink} key={i}></Card>;
        
      })}
      { NoOfElements>4 &&  <p className={"bg-white text-blue-700 font-semibold relative rounded-full" + sizeTheme}  >+{NoOfElements-4} more</p>}
    </div>  
  );
};

Card8.defaultProps = {
}

export default  memo(Card8);