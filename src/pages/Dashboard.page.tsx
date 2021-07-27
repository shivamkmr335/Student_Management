import { useState } from 'react';
import { useEffect ,FC,memo} from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import InputBox from '../components/InputBox/InputBox';
import UserList from '../components/UserList/UserList';
import {useFormik} from "formik";
import { IoIosLogOut } from "react-icons/io";
import { HiSearch } from 'react-icons/hi';
import { logout } from '../api/auth';
import { fetchGroups } from '../api/group';

interface Props {
}

const Dashboard: FC<Props> = (props) => {

  const [groups, setGroups] = useState<any>([])
  
  useEffect(()=>{
    fetchGroups({status: "all-groups"})
    .then((group)=> setGroups(group));
  }, []);

  const {handleSubmit , getFieldProps , touched  , errors} = useFormik({
    initialValues: {
      searchKeyword: "",
    },
    onSubmit: (data)=> {
      console.log(data.searchKeyword);
      fetchGroups({status: "all-groups", query: data.searchKeyword })
      .then((group)=> setGroups(group));
    }
  })

  return (
    <div className="w-3/4">
      <div className="flex justify-between">
        <Link to="/recordings"><span className="text-blue-500 mr-32 p-4">Go To Recordings</span></Link>
        <Button onClick={()=>{
          logout();
          window.location.href = "/login";
          }} Icon={IoIosLogOut} >Logout
        </Button>
      </div>

      <form className="mt-8 space-y-6 flex justify-center ml-8 " onSubmit={handleSubmit} >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px inline-block mr-12">
            <InputBox
              id="searchKeyword"
              type="searchKeyword"
              placeholder="Search Here"
              {...getFieldProps("searchKeyword")}
              touched= {touched.searchKeyword}
              error= {errors.searchKeyword}
            ></InputBox>            
          </div>
          <Button className="text-2xl h-12" theme="secondary" look="solid" Icon={HiSearch}>Search</Button>
      </form>

      <ul className="ml-8 my-12 p-2 bg-gray-300 text-2xl w-full">
        {groups.map((group:any, key:number) => {
          return <UserList name={group.name} description={group.description} index={key} ></UserList>
        })}
      </ul>
    </div>
  );
};

Dashboard.defaultProps = {
}

export default  memo(Dashboard);