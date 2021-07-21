import {FC,memo} from 'react';

interface Props {
    size?: 'small' | 'medium' | 'large';
    status?: 'offline' | 'online';
    border?: 'square' | 'circle';
    className?: string;
    imgLink: string;
    index: number
}

const Card: FC<Props> = ({size,status,border,className,imgLink,index}) => {

    var sizeTheme= (size === 'large')? " h-24 w-24 " : ( (size=== 'medium')? " h-16 w-16 " : " h-12 w-12 " )

    
    var hiddenClass= (index > 3 ) ? " hidden " : " "

    var borderTheme= (border === 'circle')? " rounded-full " : " rounded "

    console.log(status);

  return (
    <div className="relative">    
        <div className={"w-full relative flex  " + hiddenClass + className  }   style={{ right: 24*index+"px" }}>
            <img className={"inline-block hover:translate-y-2 border-4 border-white"+borderTheme + sizeTheme} src={imgLink} alt="lady icon" />
        </div>
    </div>
  );
};

Card.defaultProps = {
    status: undefined,
    border: 'circle',
    size: 'large'

}

export default  memo(Card);