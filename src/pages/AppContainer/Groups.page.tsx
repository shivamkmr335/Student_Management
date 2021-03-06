import { FC, memo, useEffect } from "react";
import InputBox from "../../components/InputBox/InputBox";
import UserList from "../../components/UserList/UserList";
import { fetchGroups } from "../../api/group";
import { store, useAppSelector } from "../../store";
import { GROUPS_QUERY_COMPLETED } from "../../actions/actions.constants";
import { groupActions } from "../../actions/groups.actions";
import {
  groupQuerySelector,
  groupsSelector,
} from "../../selectors/group.selectors";

interface Props {}

const GroupsPage: FC<Props> = (props) => {
  const query = useAppSelector(groupQuerySelector);

  const groups = useAppSelector(groupsSelector);

  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then((group) => {
      store.dispatch({
        type: GROUPS_QUERY_COMPLETED,
        payload: { groups: group, query: query },
      });
    });
  }, [query]);

  console.log(groups);

  return (
    <div className="w-3/4">
      <div className="flex justify-center">
        <InputBox
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => {
            groupActions.query(e.target.value);
          }}
        ></InputBox>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col text-lg">
          {groups &&
            groups.map((group: any, key: number) => {
              return (
                <UserList
                  name={group.name}
                  key={group.id}
                  id={group.id}
                  index={key}
                ></UserList>
              );
            })}
        </div>
      </div>
    </div>
  );
};

GroupsPage.defaultProps = {};

export default memo(GroupsPage);
