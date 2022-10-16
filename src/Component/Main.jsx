import React,{useState} from 'react'
import Header from './Header/Header'
import Maincontent from './Recommended/Maincontent'
import Sidebar from './Side/Sidebar';
import SearchContent from "./Searched/SearchContent"; 
import RunningVideo from './RunningVideo/RunningVideo';

export let context = React.createContext();

export default function Main() {

  let [inputValue, setInputValue] = useState();
  let [show, setShow] = useState(false);
  let [running, setRunning] = useState({});
  let [runSideVideos, setRunSideVideos] = useState([]);

  return (
    <>
      <context.Provider value={{inputValue, setInputValue, setShow, setRunning, setRunSideVideos}}>
        <Header />
        {show ? <RunningVideo running={running} sideVideo={{runSideVideos, setRunSideVideos}}/> :
        <div className='side_maincontent'>
          <div className='sidebar'>
            <Sidebar />
          </div>
          <div className='maincontent'>
            {inputValue===undefined ? <Maincontent /> : <SearchContent />}
            
          </div>         
        </div> }
      </context.Provider>
    </>
  )
}
