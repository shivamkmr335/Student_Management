import {FC,memo} from 'react';

interface Props {
    size: 'small' | 'medium' | 'large';
    status: 'offline' | 'online';
    border: 'square' | 'circle';
    className: string;
}

const Avatar: FC<Props> = ({size,status,border,className}) => {

    var sizeTheme= (size === 'large')? " h-24 w-24 " : ( (size=== 'medium')? " h-16 w-16 " : " h-12 w-12 " )

    var IconSizeTheme= (size === 'large')? " h-6 w-6 bottom-2 right-6 border-4" : ( (size=== 'medium')? " h-4 w-4 bottom-1 right-4 border-2 " : "h-3 w-3 bottom-1 right-3 border-2  " )

    var IconColorTheme= (status === 'online')? " bg-green-500 " : (status === 'offline' ? " bg-gray-300 " :  " ")

    var borderTheme= (border === 'circle')? " rounded-full " : " rounded "

    console.log(status);

  return (
    <div>    
        <div className={"w-full relative mt-12 flex justify-center items-end " + className }>
            <img className={borderTheme + sizeTheme} src="https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg" alt="lady icon" />
            {status!==undefined && <div className= { "border-white rounded-full inline-block relative " + IconSizeTheme + IconColorTheme } ></div> }
        </div>
    </div>

  );
};

Avatar.defaultProps = {
    status: undefined,
    border: 'circle',
    size: 'large'

}

export default  memo(Avatar);