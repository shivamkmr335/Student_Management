import {FC,memo} from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

const Dashboard: FC<Props> = (props) => {
  return (
    <div>
      This is Dashboard  <br />
      <Link to="/recordings"><span className="text-blue-500">Go To Recordings</span></Link>
    </div>
  );
};

Dashboard.defaultProps = {
}

export default  memo(Dashboard);