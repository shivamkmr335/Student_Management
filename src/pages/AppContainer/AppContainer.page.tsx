import {FC,memo} from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import AccountSettingsPage from './AccountSettings.page';
import DashboardPage from './Dashboard.page';
import GroupsPage from './Groups.page';
import LecturePage from './Lecture.page';
import RecordingsPage from './Recordings.page';

interface Props {
}

const AppContainer: FC<Props> = (props) => {

  return (
    <>
    <Header/>
    <div className="flex flex-row">
      <SideBar></SideBar>
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
        <Route path="/lecture/:lectureNumber">
          <LecturePage></LecturePage>
        </Route>
      </Switch>
    </div>
    </>
  );
};

AppContainer.defaultProps = {
}

export default  memo(AppContainer);