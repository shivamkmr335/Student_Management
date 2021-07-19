import {FC,memo} from 'react';
import { DiCss3  } from "react-icons/di";

interface Props {
}

const AuthHero: FC<Props> = (props) => {
  return (
    <div className="h-screen w-1/2 bg-black flex items-center justify-center">
      <DiCss3 className="text-yellow-500 h-64 w-64" />
    </div>
  );
};

AuthHero.defaultProps = {
}

export default  memo(AuthHero);