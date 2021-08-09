import {FC,memo, useEffect} from 'react';
import InputBox from '../../components/InputBox/InputBox';
import UserList from '../../components/UserList/UserList';
import { fetchGroups } from '../../api/group';
import {  store, useAppSelector } from '../../store';
import { GROUPS_QUERY_COMPLETED } from '../../actions/actions.constants';
import { groupActions } from '../../actions/groups.actions';
import { groupQuerySelector, groupsSelector } from '../../selectors/group.selectors';


interface Props {
}

const GroupsPage: FC<Props> = (props) => {
    const query= useAppSelector(groupQuerySelector);

    const groups= useAppSelector(groupsSelector);
    useEffect(()=>{
      fetchGroups({status: "all-groups", query})
      .then((groups)=> {
        store.dispatch({
          type: GROUPS_QUERY_COMPLETED, 
          payload: {groups:groups, query: query}
        })
      }
      );
    }, [query]);
  
    console.log(groups);
  
    return (
      <div className="w-3/4">
        <div className="flex justify-between">
          <InputBox type="text" value={query} onChange={(e) => {
            groupActions.query(e.target.value)
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

GroupsPage.defaultProps = {
}

export default  memo(GroupsPage);