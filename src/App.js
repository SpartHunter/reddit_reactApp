import React, {useState} from 'react';
import Header from './components/header/header.component';
import Logo from './images/reddit.png';
import Pubs from './components/advertising/pub.component';
import FilterBar from "./components/filterBar/filterBar.component";
import UserPost from './components/userPost/userPost.component'

function App() {

    return (
        <div className="App">
            <Header logo={Logo}/>
            <Pubs />
            <FilterBar/>
            <UserPost/>
            {/*<LogIn/>*/}
        </div>
    );
}

export default App;
