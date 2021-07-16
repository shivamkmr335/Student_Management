import {FC,memo} from 'react';
import { useParams } from 'react-router-dom';

interface Props {
}

interface RouteParams {
  lectureNumber: string;
}

const Lecture: FC<Props> = (props) => {

    const {lectureNumber} = useParams<RouteParams>();

  return (
    <div>
      This is Lecture Page showing Lecture No: {lectureNumber}
    </div>
  );
};

Lecture.defaultProps = {
}

export default  memo(Lecture);