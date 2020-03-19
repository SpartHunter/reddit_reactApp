import React, {useState} from 'react';
import Styled from 'styled-components';
import Header from './components/header/header.component';
import Logo from './images/reddit.png';
import Pubs from './components/advertising/pub.component';
import FilterBar from "./components/filterBar/filterBar.component";
import UserPost from './components/userPost/userPost.component'
import AddPost from './components/addPost/addPost.component'

class App extends React.Component {
    render() {

        return (
            <AppComponent className="App">
                <Header logo={Logo}/>
                <AddPost/>
                <Pubs/>
                <FilterBar/>
                <UserPost/>
                {/*<LogIn/>*/}
            </AppComponent>
        );
    }
}

const  AppComponent = Styled.div`
`;

export default App;
