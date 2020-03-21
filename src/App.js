import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Styled from 'styled-components';
import Header from './components/header/header.component';
import Logo from './images/reddit.png';
import Pubs from './components/advertising/pub.component';
import FilterBar from "./components/filterBar/filterBar.component";
import UserPost from './components/userPost/userPost.component';
import AddPost from './components/addPost/addPost.component';
import LogIn from  './components/login/login.component'

function App() {
    const [openAddPost, setOpenAddPost] = useState("none");

    let changeOpenPost = () => {
        console.log("changed calling");
        if(openAddPost === "none"){
            setOpenAddPost("block");
        }else{
            setOpenAddPost("none");
        }
    };

    return (
        <AppComponent className="App">
            <BrowserRouter>
                <Route exact path="/">
                    <Header newPost={openAddPost} funcOpenPost={changeOpenPost} logo={Logo}/>
                    <AddPost newPost={openAddPost} funcOpenPost={changeOpenPost}/>
                    <Pubs/>
                    <FilterBar/>
                    <UserPost/>
                </Route>

                <Route exact path="/login">
                    <LogIn/>
                </Route>
            </BrowserRouter>
        </AppComponent>
    );
}

const  AppComponent = Styled.div`
`;

export default App;
