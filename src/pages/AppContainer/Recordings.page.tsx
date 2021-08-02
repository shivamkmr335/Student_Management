import {FC,memo} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { User } from '../../models/User';
import { AppState, useAppSelector } from '../../store';

interface Props {
}

const Recordings: FC<Props> = (props) => {

  const userFirstName= useAppSelector(state => state.me?.first_name);

  return (
    <>
    <div>
      This is Recordings Page 
      <Link to="/dashboard"><span className="text-blue-500">Go To Dashboard</span></Link>
    </div>
    <div>
      <div className="text-2xl text-red-700">UserName: {userFirstName} </div>
    </div>
    </>
  );
};

Recordings.defaultProps = {
}

export default  memo(Recordings);