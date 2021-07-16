import {FC,memo} from 'react';
import { Link } from 'react-router-dom';

interface Props {
}

const SignupPage: FC<Props> = (props) => {
  return (
    <div>
      This is Signup Page. <br />
      Already Have an account. <Link to="/login"><span className="text-blue-500">Clink Here</span></Link>
    </div>
  );
};

SignupPage.defaultProps = {
}

export default  memo(SignupPage);