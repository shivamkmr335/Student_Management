import {FC,memo} from 'react';
import { useHistory } from 'react-router-dom';
import { groupActions } from '../../actions/groups.actions';

interface Props {
    name: string;
    index: number;
    id:number;
}

const UserList: FC<Props> = ({name,index,id}) => {

    const bgTheme= (index%2 === 0 ) ? " bg-gray-50 hover:bg-gray-100 " : " bg-gray-200 hover:bg-gray-300 ";

    const history = useHistory();

  return (
    <button className={ "items-center  w-72 text-center p-2 flex justify-between font-semibold" + bgTheme } 
      onClick={(e)=> {
        groupActions.setSelectedId(id);
        history.push("/groupsSelected");
      }}>
      {name} <span>{id}</span>
    </button>
  );
};

UserList.defaultProps = {
}

export default  memo(UserList);