import {FC,memo} from 'react';

interface Props {
    name: string;
    description: string;
    index: number;
}

const UserList: FC<Props> = ({name,description,index}) => {

    const bgTheme= (index%2 === 0 ) ? " bg-gray-50 hover:bg-gray-100 " : " bg-gray-200 hover:bg-gray-300 "

  return (
    <li className={ "flex items-center  " + bgTheme }>
      <div className="pl-4 py-4 w-1/3 text-2xl font-bold ">{name}</div>
      <div className=" w-2/3 text-xl font-semibold text-gray-700 ">{description}</div>
    </li>
  );
};

UserList.defaultProps = {
}

export default  memo(UserList);