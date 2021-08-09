import {FC,memo} from 'react';
import Avatar from '../../components/Avatar/Avatar';
import { useAppSelector } from '../../store';

interface Props {
}

const Dashboard: FC<Props> = (props) => {

  const user= useAppSelector((state) => state.users.byId[state.auth.id!]);

  const fullName = user.first_name+" "+ user.middle_name + " " + user.last_name;
  const DOB = user.birth_date+"- "+user.birth_month+"- "+user.birth_year;

  return (
    <div className="flex justify-evenly m-12">
      <Avatar className="w-32" imgUrl="https://icons-for-free.com/iconfiles/png/512/boy+character+man+user+icon-1320085976934394387.png" size="large" border="circle"></Avatar>
      <div className="text-lg p-3 px-4 bg-gray-200 h-28">
        <p className="bg-gray-50"><span className="text-gray-600 font-semibold mr-7">Name:</span>{fullName} </p>
        <p className="bg-gray-100"><span className="text-gray-600 font-semibold mr-10">Dob:</span>{DOB}</p>
        <p className="bg-gray-50"><span className="text-gray-600 font-semibold mr-2">Contact:</span> {user.phone_number}</p>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {
}

export default  memo(Dashboard);




// Changes

// const dispatch = useDispatch();  -> We directly imported store and used store.dispatch