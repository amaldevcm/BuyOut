
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import TopNav from './Components/TopNav';
import HomeComponent from './Components/HomeComponent';
import SigninComponent from "./Components/SignInComponent";
import MsgComponent from "./Components/MsgComponent";
import ListingComponent from "./Components/ListingComponent";
import ProfileComponent from "./Components/ProfileComponent";



function App() {

  return (
    <>
    <TopNav />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomeComponent /> } />
        <Route path='/messages' element={ <MsgComponent /> } />
        <Route path='/signin' element={ <SigninComponent /> } />
        <Route path='/listings' element={ <ListingComponent /> } />
        <Route path="/profile" element={ <ProfileComponent /> }></Route>
      </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
