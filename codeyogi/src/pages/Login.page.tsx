import {FC,memo} from 'react';

interface Props {
}

const LoginPage: FC<Props> = (props) => {
  return (
    <div>
      This is Login Page
    </div>
  );
};

LoginPage.defaultProps = {
}

export default  memo(LoginPage);