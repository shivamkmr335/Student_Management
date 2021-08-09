import {FC,memo} from 'react';
import Avatar from '../../components/Avatar/Avatar';
import { groupSelectorById } from '../../selectors/group.selectors';
import { useAppSelector } from '../../store';

interface Props {
}

const GroupPageCard: FC<Props> = (props) => {

    const groupSelected = useAppSelector(groupSelectorById);

    console.log("Card",groupSelected);

  return (
    <>
      <div className="flex flex-col h-full bg-gray-200 p-4 rounded  m-12" >
          <h1 className="w-full text-xl text-center font-bold">Group ID: {groupSelected.id}</h1>
          <div className="flex justify-between font-serif mt-6 items-center">
              <div>
                  <p><span className="font-semibold mr-8">Group Name:</span> {groupSelected.name}</p>
                  <p><span className="font-semibold mr-4">Group Creator:</span> {groupSelected.creator ? groupSelected.creator.first_name : "No Creator Found"}</p>
                  <p><span className="font-semibold mr-12">Created At:</span>  {groupSelected.created_at}</p>
              </div>
              <div className="ml-8">
                  <Avatar imgUrl="https://icons-for-free.com/iconfiles/png/512/boy+character+man+user+icon-1320085976934394387.png" size="large" border="square"></Avatar>
              </div>
          </div>
          <div>
              <h1 className="text-gray-600 text-sm">Group Description</h1>
              <div className="bg-gray-200 w-full border border-gray-400 rounded p-3 max-w-screen-sm">{groupSelected.description} </div>
          </div>
      </div>
    </>
  );
};

GroupPageCard.defaultProps = {
}

export default  memo(GroupPageCard);