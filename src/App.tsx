import React,{lazy, Suspense} from "react";
import { Route, Switch, withRouter, Redirect} from "react-router-dom"

const admin = lazy(() => import('./pages/admin'));

const App: React.FunctionComponent = () => {
  //const renderFor404Routes = () => (<Redirect to='/book'/>);
  return (
      <Suspense fallback={<div>Loading...</div>}>
          <div className="page">
              <Switch>
                  <Route exact path="/" component={()=> {return (<div>landing</div>)}}/>
                  <Route exact path="/admin" component={admin}/>
              </Switch>
          </div>
    </Suspense>

  );
};

export default withRouter(App);