import { useState } from 'react';
import {FC,memo} from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import AccountSettingsPage from './AccountSettings.page';
import DashboardPage from './Dashboard.page';
import GroupCardPage from './GroupCard.page';
import GroupsPage from './Groups.page';
import LecturePage from './Lecture.page';
import RecordingsPage from './Recordings.page';

interface Props {
}

const AppContainer: FC<Props> = (props) => {

  const [isSideBarOpen , setSideBarOpen] = useState(true);

  return (
    <div className="bg-gray-400">
    
    <Header/>
    <button className=" h-6 relative -top-9 " onClick={()=> {setSideBarOpen(!isSideBarOpen)}}><HiOutlineMenu className="h-6 w-6 ml-8 text-gray-600"></HiOutlineMenu></button>
    <div className="flex flex-row relative -top-9">
    
      <SideBar visible={isSideBarOpen} onClose={setSideBarOpen}></SideBar>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/recordings">
          <RecordingsPage ></RecordingsPage>
        </Route>
        <Route path="/editAccount">
          <AccountSettingsPage></AccountSettingsPage>
        </Route>
        <Route path="/groups">
          <GroupsPage></GroupsPage>
        </Route>
        <Route path="/groupsSelected">
          <GroupCardPage></GroupCardPage>
        </Route>
        <Route path="/lecture/:lectureNumber">
          <LecturePage></LecturePage>
        </Route>
      </Switch>
    </div>
    </div>
  );
};

AppContainer.defaultProps = {
}

export default  memo(AppContainer);