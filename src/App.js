
// import React, { Component } from 'react';
// import Navbar from './Components/Navbar';
// import News from './Components/News';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import LoadingBar from "react-top-loading-bar";

// export default class App extends Component {
  
//   pageSize = 5;
//   state={
//     progress : 0,
//   };
//   setProgress = (progress) => {
//     this.setState({progress: progress});
//   }

//   render() {
//     return (


//       <>
//       <BrowserRouter>
//         <Navbar />           
        
//         <LoadingBar
//           color="#1f1ce6"
//           progress={this.state.progress}
//           height={4}
//           onLoaderFinished={() => this.setProgress(this.state.progress)}
//         /> 

//         <Routes>
//          <Route exact path="/" element={
//                                   <News
//                                     setProgress={this.setProgress}
//                                     key="general"
//                                     pageSize={6}
//                                     country="in"
//                                     category="politics"
//                                   />
//                                 }
//                               />
//           <Route exact path="/business" element={
//                                     <News
//                                       setProgress={this.setProgress}
//                                       key="business"
//                                       pageSize={5}
//                                       country="in"
//                                       category="business"
//                                     />
//                                   }
//                               />
//           <Route exact path="/entertainment" element={
//                                     <News
//                                       setProgress={this.setProgress}
//                                       key="entertainment"
//                                       pageSize={5}
//                                       country="in"
//                                       category="entertainment"
//                                     />
//                                   }
//                               />                              
//           <Route exact path="/health" element={
//                                     <News
//                                       setProgress={this.setProgress}
//                                       key="health"
//                                       pageSize={5}
//                                       country="in"
//                                       category="health"
//                                     />
//                                   }
//                               />                              
//           <Route exact path="/lifestyle" element={
//                                     <News
//                                       setProgress={this.setProgress}
//                                       key="lifestyle"
//                                       pageSize={5}
//                                       country="in"
//                                       category="lifestyle"
//                                     />
//                                   }
//                               />                              
//           <Route exact path="/sports" element={
//                                     <News
//                                       setProgress={this.setProgress}
//                                       key="sports"
//                                       pageSize={5}
//                                       country="in"
//                                       category="sports"
//                                     />
//                                   }
//                               />                              
//           <Route exact path="/technology" element={
//                                     <News
//                                       setProgress={this.setProgress}
//                                       key="technology"
//                                       pageSize={5}
//                                       country="in"
//                                       category="technology"
//                                     />
//                                   }
//                               />   
//           <Route exact path="/crime" element={
//                                     <News
//                                       setProgress={this.setProgress}
//                                       key="crime"
//                                       pageSize={5}
//                                       country="in"
//                                       category="crime"
//                                     />
//                                   }
//                               />   
//         </Routes>
//       </BrowserRouter>

//       </>
//     )
//   }
// }


import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <LoadingBar
          color="#1f1ce6"
          progress={progress}
          height={4}
          onLoaderFinished={() => setProgress(0)} // reset after loading
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={6}
                country="in"
                category="politics"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/lifestyle"
            element={
              <News
                setProgress={setProgress}
                key="lifestyle"
                pageSize={pageSize}
                country="in"
                category="lifestyle"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/crime"
            element={
              <News
                setProgress={setProgress}
                key="crime"
                pageSize={pageSize}
                country="in"
                category="crime"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
