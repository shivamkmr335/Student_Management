import { useContext } from 'react';
import {FC,memo} from 'react';
import { Link } from 'react-router-dom';
import  AppContext from '../../App.context';

interface Props {
}

const Recordings: FC<Props> = (props) => {

  const {user} = useContext(AppContext)

  return (
    <>
    <div>
      This is Recordings Page 
      <Link to="/dashboard"><span className="text-blue-500">Go To Dashboard</span></Link>
    </div>
    <div>
      <div className="text-2xl text-red-700">UserName: {user!.first_name} </div>
    </div>
    </>
  );
};

Recordings.defaultProps = {
}

export default  memo(Recordings);