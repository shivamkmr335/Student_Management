import {FC,memo} from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

const LoginPage: FC<Props> = (props) => {
  return (
    <div>
      This is Login Page. <br />
      <Link to="/signup"><span className="text-blue-500">Clink Here</span></Link> <br />
      <Link to="/dashboard"><span className="text-blue-500">Go To Dashboard</span></Link>
    </div>
  );
};

LoginPage.defaultProps = {
}

export default  memo(LoginPage);