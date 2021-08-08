import {FC,memo} from 'react';
import InputBox from '../../components/InputBox/InputBox';
import { useAppSelector } from '../../store';

interface Props {
}

const AccountSettingsPage: FC<Props> = (props) => {

  const user= useAppSelector((state) => state.users.byId[state.auth.id!]);


  return (
    <div className="bg-gray-300 w-full min-h-full">

      <div className="bg-white rounded m-3 p-5"> 
        <h3 className="font-semibold w-full pr-12 ">GENEREAL INFORMATION</h3>
        <h4 className="ml-6 mt-4" >Name</h4>
        <div className="flex max-w-full">
          <InputBox className=" w-32 " border="border rounded mx-4" value={user.first_name} placeholder="First Name" ></InputBox>
          <InputBox className=" w-32 " border="border rounded mx-4" value={user.middle_name} placeholder="Middle Name" ></InputBox>
          <InputBox className=" w-32 " border="border rounded mx-4" value={user.last_name} placeholder="Last Name" ></InputBox>
        </div>

        <h4 className="ml-6 mt-4" >Date Of Birth</h4>
        <div className="flex max-w-full">
          <InputBox className=" w-20 " border="border rounded mx-4" placeholder="Day" ></InputBox>
          <InputBox className=" w-20 " border="border rounded mx-4" placeholder="Month" ></InputBox>
          <InputBox className=" w-20 " border="border rounded mx-4" placeholder="Year" ></InputBox>
        </div>

        <h4 className="ml-6 mt-4" >Education</h4>
        <div className="flex max-w-full">
          <InputBox className=" w-64 " border="border rounded mx-4" placeholder="Education Details" ></InputBox>
        </div>
        
      </div>

      <div className="bg-white rounded m-3 p-5"> 
        <h3 className="font-semibold w-full pr-12 ">CONTACT DETAILS</h3>
        

        <h4 className="ml-6 mt-4" >Phone Number</h4>
        <div className="flex max-w-full">
          <InputBox className=" w-64 " border="border rounded mx-4" placeholder="Contact Details" ></InputBox>
        </div>
        <h4 className="ml-6 mt-4" >Mail ID</h4>
        <div className="flex max-w-full">
          <InputBox className=" w-64 " border="border rounded mx-4" placeholder="email adress" ></InputBox>
        </div>
        <h4 className="ml-6 mt-4" >Permanent Address</h4>
        <div className="flex max-w-full">
          <InputBox className=" w-64 " border="border rounded mx-4" placeholder="adress" ></InputBox>
        </div>
        
      </div>
      
    </div>
  );
};

AccountSettingsPage.defaultProps = {
}

export default  memo(AccountSettingsPage);