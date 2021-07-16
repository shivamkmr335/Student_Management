import {FC,memo} from 'react';

interface Props {
}

const SignupPage: FC<Props> = (props) => {
  return (
    <div>
      This is Signup Page
    </div>
  );
};

SignupPage.defaultProps = {
}

export default  memo(SignupPage);