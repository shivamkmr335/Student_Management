import {FC,memo} from 'react';

interface Props {
}

const NotFound: FC<Props> = (props) => {
  return (
    <div>
      Sorry, The Page is Not Found.
    </div>
  );
};

NotFound.defaultProps = {
}

export default  memo(NotFound);