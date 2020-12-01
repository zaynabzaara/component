import React from 'react';
import FullName from './component/profile/FullName';
import ProfilePhoto from './component/profile/ProfilePhoto';
import Address from './component/profile/Address';
import './App.css';

function App() {
  return (
    <div>
    <div className="me">
      <div className ="FullName">
        <FullName/>
      </div>
      <div className ="Address">
        <Address/>
      </div>
      </div>
      <div className ="ProfilePhoto">
        <ProfilePhoto/>
      </div>
     
    </div>
  );
}

export default App;
