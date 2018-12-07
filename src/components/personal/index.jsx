import React, {Component} from 'react';
import {Result, List, Modal, Button, WhiteSpace} from 'antd-mobile';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';

const alert = Modal.alert;
const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component {
  static propTypes ={
    user:PropTypes.object.isRequired,
    resetUserInfo:PropTypes.func.isRequired,
    resetUserList:PropTypes.func.isRequired
  }
  logout = () => {
    alert('退出登录', '确定退出吗?', [
      {text: '取消', onPress: () => {}},
      {text: '确认', onPress: () => {
        Cookies.remove('userid');
        //清除redux中的状态
        this.props.resetUserList();
        this.props.resetUserInfo();

        this.props.history.replace('/login');
      }}
    ])
  }

  render() {
    const {header,username,post,info,salary,company} = this.props.user;
    return (
      <div>
        <Result
          img={<img src={require(`../../assets/images/avatars/头像${+header+1}.png`)} alt="头像"/>}
          title={username}
        />
        <List renderHeader={() => '相关信息'} className="my-list">
          <Item
            multipleLine
            onClick={() => {
            }}>
            <Brief>职位：{post}</Brief>
            <Brief>简介：{info}</Brief>
            {salary !== 'undefined'? <Brief>薪资：{salary}</Brief>:null}
            {company  !== 'undefined'?<Brief>公司：{company}</Brief>:null}
          </Item>
        </List>
        <WhiteSpace/>
        <Button
          type="warning"
          onClick={this.logout}
        >
          退出登录
        </Button>
      </div>
    )
  }
}

export default Personal;