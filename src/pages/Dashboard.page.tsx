import { useState } from 'react';
import { useEffect ,FC,memo} from 'react';
import { Link } from 'react-router-dom';
import { fetchGroups, logout } from '../api';
import Button from '../components/Button/Button';

interface Props {
}

const Dashboard: FC<Props> = (props) => {

  const [groups, setGroups] = useState<any>([])
  
  useEffect(()=>{
    fetchGroups({status: "all-groups"})
    .then((group)=> setGroups(group));
  }, []);
  
  console.log(groups);

  return (
    <div>
      This is Dashboard  <br />
      <Link to="/recordings"><span className="text-blue-500">Go To Recordings</span></Link>
      <Button onClick={()=>{
        logout();
        window.location.href = "/login";
      }} >Logout</Button>

      {groups.map((group:any, index: number) => {
        return <div> Group Name: {group.name} <br /> Group Description: {group.description} </div>
      })}

    </div>
  );
};

Dashboard.defaultProps = {
}

export default  memo(Dashboard);