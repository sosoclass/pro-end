import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';
import {NavBar} from 'antd-mobile';

import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Laoban from '../laoban';
import Message from '../message';
import Footer from '../footer';
import Personal from '../personal';


class Main extends Component {
  navList = [
    {path: '/laoban', title: '大神列表', icon: 'laoban', text: '大神'},
    {path: '/dashen', title: '老板列表', icon: 'dashen', text: '老板'},
    {path: '/message', title: '消息列表', icon: 'message', text: '消息'},
    {path: '/personal', title: '个人中心', icon: 'personal', text: '个人'},
  ]


  render() {
    const userid = Cookies.get('userid');
    if (!userid) {
      return <Redirect to='/login'/>
    }
    const {pathname} = this.props.location;
    const currNav = this.navList.find(item => item.path === pathname);
    console.log(currNav);
    return (
      <div>
        {currNav ? <NavBar>{currNav.title}</NavBar> : null}
        <Route path='/laobaninfo' component={LaobanInfo}/>
        <Route path='/dasheninfo' component={DashenInfo}/>

        <Route path='/laoban' component={Laoban}/>
        <Route path='/message' component={Message}/>
        <Route path='/personal' component={Personal}/>
        {currNav ? <Footer navList={this.navList}/> : null}
      </div>
    )
  }
}

export default Main