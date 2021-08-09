
import {FC,memo,Fragment} from 'react';
import { HiOutlineChevronRight, HiOutlineHome,HiOutlineChip, HiOutlineCube, HiOutlineLightningBolt ,HiOutlineStop, HiOutlineTerminal
 ,HiOutlineTable, HiOutlineDatabase, HiOutlineClipboard ,HiOutlineUserGroup, HiOutlineDocument ,HiOutlineLockClosed,
 HiOutlineArrowsExpand, HiOutlineMap,HiOutlineChartPie,HiOutlineTrendingUp,HiOutlineDocumentReport} from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';

interface Props {
  visible?:boolean;
  onClose: (visible:false) => void;
}

const Sidebar: FC<Props> = (props) => {
  return (
    <>
    <Transition.Root show={props.visible}>
          
          <Transition.Child 
          enter="transition-transform duration-700"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition-transform duration-500"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
          >
            <div className="flex h-full  bg-gray-100 w-52 relative">
              <div >
                  <Link to="/dashboard"><button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineHome className="inline-block mr-2 w-5 h-5 text-gray-600"/> Dashboard <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button></Link>
                  <Link to="/editAccount"><button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineChip className="inline-block mr-2 w-5 h-5 text-gray-600"/>Edit Account  </button></Link>
                  <Link to="/groups"><button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineCube className="inline-block mr-2 w-5 h-5 text-gray-600"/>Groups <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button></Link>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineLightningBolt className="inline-block mr-2 w-5 h-5 text-gray-600"/>Elements <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineStop className="inline-block mr-2 w-5 h-5 text-gray-600"/>Font Icons</button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineTerminal className="inline-block mr-2 w-5 h-5 text-gray-600"/>Widgets</button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineTable className="inline-block mr-2 w-5 h-5 text-gray-600"/>Tables</button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineDatabase className="inline-block mr-2 w-5 h-5 text-gray-600"/>DataTables <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineClipboard className="inline-block mr-2 w-5 h-5 text-gray-600"/>Forms <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineUserGroup className="inline-block mr-2 w-5 h-5 text-gray-600"/>Users <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineDocument className="inline-block mr-2 w-5 h-5 text-gray-600"/>Pages <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineLockClosed className="inline-block mr-2 w-5 h-5 text-gray-600"/>Authentication <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineArrowsExpand className="inline-block mr-2 w-5 h-5 text-gray-600"/>Drag and Drop</button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineMap className="inline-block mr-2 w-5 h-5 text-gray-600"/>Maps</button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineChartPie className="inline-block mr-2 w-5 h-5 text-gray-600"/>Charts</button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineTrendingUp className="inline-block mr-2 w-5 h-5 text-gray-600"/>Starter Kit  <HiOutlineChevronRight className="inline-block float-right mt-1 text-gray-500"/></button>
                  <button className="block py-2 text-sm font-semibold px-2 border-0 mx-2 my-3 border-box rounded-md w-48 text-left hover:bg-gray-300 "><HiOutlineDocumentReport className="inline-block mr-2 w-5 h-5 text-gray-600"/>Documentation</button>
              </div>
            </div>


          </Transition.Child>
    </Transition.Root>
    
    </>
  );
};

Sidebar.defaultProps = {
  visible: false,
}

export default  memo(Sidebar);