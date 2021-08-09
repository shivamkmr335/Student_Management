import { useEffect ,FC,memo} from 'react';

interface Props {
}

const Dashboard: FC<Props> = (props) => {

  return null;
};

Dashboard.defaultProps = {
}

export default  memo(Dashboard);




// Changes

// const dispatch = useDispatch();  -> We directly imported store and used store.dispatch