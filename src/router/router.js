import React from 'react'
import { HashRouter, Route,Switch,Redirect } from 'react-router-dom';
import Home from '@pages/home/Home' 
import Login from '@pages/login/index'
import Page1 from '@pages/page1/index' 
import Page2 from '@pages/page2/index' 
import Page3 from '@pages/page3/index' 
import List from '@pages/list/index' 
import TodoList from '@pages/Todolist' 
export default () => (
  <HashRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Home>
          <Route path="/Page1" exact component={Page1} />
          <Route path="/Page2" exact component={Page2} />
          <Route path="/Page3" exact component={Page3} />
          <Route path="/TodoList" exact component={TodoList} />
          <Route path="/List" exact component={List} />
          <Redirect to="/Page1"></Redirect>
          {/* redirect重定向 默认展示项 -- 放在底部 */}
        </Home>
      </Switch>
  </HashRouter>
)
