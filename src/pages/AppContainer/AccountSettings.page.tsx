import {FC,memo} from 'react';

interface Props {
}

const AccountSettingsPage: FC<Props> = (props) => {
  return (
    <div>
      Hi .. This is Accounts Page
    </div>
  );
};

AccountSettingsPage.defaultProps = {
}

export default  memo(AccountSettingsPage);