import {FC,memo} from 'react';

interface Props {
}

const Sidebar: FC<Props> = (props) => {
  return (
    <div className="h-screen bg-black w-1/3">
      This is Sidebar
    </div>
  );
};

Sidebar.defaultProps = {
}

export default  memo(Sidebar);