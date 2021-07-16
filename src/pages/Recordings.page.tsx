import {FC,memo} from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

const Recordings: FC<Props> = (props) => {
  return (
    <div>
      This is Recordings Page 
      <Link to="/dashboard"><span className="text-blue-500">Go To Dashboard</span></Link>
    </div>
  );
};

Recordings.defaultProps = {
}

export default  memo(Recordings);