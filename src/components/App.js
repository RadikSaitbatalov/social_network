import React from 'react';
import '../App.css';
import Header from "./Header/Header";
import Navbar from './Navbar/Navbar';
import Dialogs from './Dialog/Dialogs';
import Profile from './Profile/Profile';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';

// const router = createBrowserRouter([
//   { path: "*", Component: Root },
// ]);
// export default App() {
//   return <RouterProvider router={router} />;
// }


const App = (props) => {

  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
              <Route path="/dialogs/*" element={ <Dialogs state={props.state.dialogsPage} /> }/>
              <Route path="/profile/*" element={ <Profile state={props.state.profilePage} /> } />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
        )
  }

  // <BrowserRouter>
  //   <div className='app-wrapper'>
  //     <Header/>
  //     <Navbar/>
  //     <div className= 'app-wrapper-content'>
  //       Azazmat
  //       <Routes>
  //         <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
  //         {/*<Route path='/*' render={ () => <div> Azamat </div> } />*/}
  //
  //         <Route path='/profile' render={ () => <Profile state={props.state.profilePage} /> } />
  //       </Routes>
  //     </div>
  //   </div>
  // </BrowserRouter>


export default App;
