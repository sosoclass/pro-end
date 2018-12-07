import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';

import PropTypes from 'prop-types';
import Cookies from 'js-cookie';
import {NavBar,Icon} from 'antd-mobile';

import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../../containers/dashen-info';
import Laoban from '../../containers/laoban';
import Dashen from '../../containers/dashen';
import Message from '../message';
import Footer from '../footer';
import Personal from '../../containers/personal';

import './index.less'

class Main extends Component {
  static propTypes = {
    user:PropTypes.object.isRequired,
    getUserInfo:PropTypes.func.isRequired
  }
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
    if(!this.props.user._id){
      this.props.getUserInfo();
      return <Icon className="loading" type = 'loading' size="lg"/>
    }

    const {pathname} = this.props.location;


    if(pathname === '/'){
      return <Redirect to={this.props.user.redirectTo}/>
    }

    const currNav = this.navList.find(item => item.path === pathname);
    return (
      <div>
        {currNav ? <NavBar className="nav-bar">{currNav.title}</NavBar> : null}
        <div className="main-content">
          <Route path='/laobaninfo' component={LaobanInfo}/>
          <Route path='/dasheninfo' component={DashenInfo}/>

          <Route path='/laoban' component={Laoban}/>
          <Route path='/dashen' component={Dashen}/>
          <Route path='/message' component={Message}/>
          <Route path='/personal' component={Personal}/>
          {currNav ? <Footer navList={this.navList} type={this.props.user.type}/> : null}
        </div>

      </div>
    )
  }
}

export default Main