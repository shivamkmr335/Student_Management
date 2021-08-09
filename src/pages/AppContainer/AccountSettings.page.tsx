import { useFormik } from 'formik';
import {FC,memo} from 'react';
import { me, updateUser } from '../../api/auth';
import Avatar from '../../components/Avatar/Avatar';
import Button from '../../components/Button/Button';
import InputBox from '../../components/InputBox/InputBox';
import { User } from '../../models/User';
import { useAppSelector } from '../../store';
import { useHistory } from 'react-router-dom';
import { authActions } from '../../actions/auth.actions';

interface Props {
}

const AccountSettingsPage: FC<Props> = (props) => {

  const user= useAppSelector((state) => state.users.byId[state.auth.id!]);

  console.log(user);

  const history=useHistory();

  const {handleSubmit , getFieldProps } = useFormik({
    initialValues: {
      fName: user.first_name,
      mName: user.middle_name,
      lName: user.last_name,
      phone: user.phone_number,
      day: user.birth_date,
      month: user.birth_month,
      year: user.birth_year,

    },
    onSubmit: (data)=> {
      const user: User = {
        first_name: data.fName,
        middle_name: data.mName,
        last_name: data.lName,
        phone_number:data.phone,
        birth_date: data.day + " ",
        birth_month: data.month + " " ,
        birth_year: data.year + " ",
      }
      updateUser(user)
        .then(()=> {
          console.log(user);
          me().then((u) => {
            authActions.fetch(u);
            history.push("/dashboard");
          }).catch((e)=> console.log(e))
        });
    }
  })



  return (
    <div className="bg-gray-300 w-full min-h-full">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
      <div className="bg-white rounded m-3 p-5"> 
        <h3 className="font-semibold w-full pr-12 ">GENEREAL INFORMATION</h3>
        <div className="flex flex-row-reverse justify-evenly">
          <div> 
            <Avatar className="w-32 m-4" imgUrl="https://icons-for-free.com/iconfiles/png/512/boy+character+man+user+icon-1320085976934394387.png" size="large" border="square"></Avatar>
            <InputBox className=" w-36 " border="border rounded mx-4" placeholder="Change Image URL" ></InputBox>
          </div>
          <div>
            <h4 className="ml-6 mt-4" >Name</h4>
            <div className="flex max-w-full">
              <InputBox  {...getFieldProps("fName")} className=" w-32 " border="border rounded mx-4" value={user.first_name} placeholder="First Name" ></InputBox>
              <InputBox  {...getFieldProps("mName")} className=" w-32 " border="border rounded mx-4" value={user.middle_name} placeholder="Middle Name" ></InputBox>
              <InputBox  {...getFieldProps("lName")} className=" w-32 " border="border rounded mx-4" value={user.last_name} placeholder="Last Name" ></InputBox>
            </div>

            <h4 className="ml-6 mt-4" >Date Of Birth</h4>
            <div className="flex max-w-full">
              <InputBox  {...getFieldProps("day")} className=" w-20 " border="border rounded mx-4" value={user.birth_date} placeholder="Day" ></InputBox>
              <InputBox  {...getFieldProps("month")} className=" w-20 " border="border rounded mx-4" value={user.birth_month} placeholder="Month" ></InputBox>
              <InputBox  {...getFieldProps("year")} className=" w-20 " border="border rounded mx-4" value={user.birth_year} placeholder="Year" ></InputBox>
            </div>

            <h4 className="ml-6 mt-4" >Education</h4>
            <div className="flex max-w-full">
              <InputBox className=" w-64 " border="border rounded mx-4" value={user.education} placeholder="Education Details" ></InputBox>
            </div>
          </div>

        </div>
        
      </div>

      <div className="bg-white rounded m-3 p-5"> 
        <h3 className="font-semibold w-full pr-12 ">CONTACT DETAILS</h3>
        

        <h4 className="ml-6 mt-4" >Phone Number</h4>
        <div className="flex max-w-full">
          <InputBox  {...getFieldProps("phone")} className=" w-64 " border="border rounded mx-4" value={user.phone_number} placeholder="Contact Details" ></InputBox>
        </div>
        <h4 className="ml-6 mt-4" >Mail ID</h4>
        <div className="flex max-w-full">
          <InputBox  {...getFieldProps("email")} className=" w-64 " border="border rounded mx-4" value={user.email} placeholder="email adress" ></InputBox>
        </div>
        <h4 className="ml-6 mt-4" >Permanent Address</h4>
        <div className="flex max-w-full">
          <InputBox  {...getFieldProps("address")} className=" w-64 " border="border rounded mx-4" value={user.hometown} placeholder="address" ></InputBox>
        </div>
        
      </div>

      <div className="flex justify-evenly">
        <Button>Discard Changes</Button>
        <Button type="submit">Save Changes</Button>
      </div>
      </form>
    </div>
  );
};

AccountSettingsPage.defaultProps = {
}

export default  memo(AccountSettingsPage);