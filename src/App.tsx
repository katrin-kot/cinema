import './App.css';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* <Route exact path="/" component={MainPage}/>
        <Route path="/nowShowing" component={NewShowingPage}/>
        <Route path="/upcoming" component={UpcomingPage}/>
        <Route path="/about" component={AboutPage}/> */}
      </Switch>
    </Suspense>
  );
}

export default App;
