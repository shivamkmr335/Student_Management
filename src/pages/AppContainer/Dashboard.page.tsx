import { useEffect ,FC,memo} from 'react';
import InputBox from '../../components/InputBox/InputBox';
import UserList from '../../components/UserList/UserList';
import { fetchGroups } from '../../api/group';
import { useDispatch, useSelector } from 'react-redux';
import {  useAppSelector } from '../../store';

interface Props {
}

const Dashboard: FC<Props> = (props) => {

  const query= useAppSelector(state => state.groupQuery);

  const groups= useAppSelector(state =>{
    const groupIds = state.groupQueryMap[state.groupQuery] || [];
    const group= groupIds.map(id => state.groups[id]);
    return group;
  })
  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetchGroups({status: "all-groups", query})
    .then((groups)=> 
      dispatch({
        type: "groups/fetch", 
        payload: {groups:groups, query: query}
      })
    );
  }, [query]);

  console.log(groups);

  return (
    <div className="w-3/4">
      <div className="flex justify-between">
        <InputBox type="text" value={query} onChange={(e) => {
          dispatch({type: "groups/query", payload: e.target.value})
        }}></InputBox>
      </div>

      <ul className="ml-8 my-12 p-2 bg-gray-300 text-2xl w-full">
        {groups && groups.map((group:any, key:number) => {
          return <UserList name={group.name} description={group.description} index={key} ></UserList>
        })}
      </ul>
    </div>
  );
};

Dashboard.defaultProps = {
}

export default  memo(Dashboard);