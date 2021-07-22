import {FC,memo} from 'react';

interface Props {
    size?: 'small' | 'medium' | 'large';
    className?: string;
    imgLink: string;
    index: number
}

const Card: FC<Props> = ({size,className,imgLink,index}) => {

    var sizeTheme;
    if (size === 'large') { sizeTheme= " h-24 w-24 " }
    else if (size=== 'medium'){ sizeTheme=" h-16 w-16 " }
    else { sizeTheme=" h-12 w-12 " }

    
    var hiddenClass= (index > 3 ) ? " hidden " : " "


  return (
    <div className="relative">    
        <div className={"w-full relative flex " + hiddenClass + className  }   style={{ right: 24*index+"px" }}>
            <img className={"inline-block hover:translate-y-2 border-4 border-white rounded-full " + sizeTheme} src={imgLink} alt="lady icon" />
        </div>
    </div>
  );
};

Card.defaultProps = {
    size: 'large'
}

export default  memo(Card);