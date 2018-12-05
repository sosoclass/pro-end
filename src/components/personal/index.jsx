import React, {Component} from 'react';
import {Result, List, Modal, Button, WhiteSpace} from 'antd-mobile';
import Cookies from 'js-cookie';
const alert = Modal.alert;
const Item = List.Item;
const Brief = Item.Brief;

class Personal extends Component {
  logout = () => {
    alert('退出登录', '确定退出吗?', [
      {
        text: '取消', onPress: () => {
      }
      },
      {
        text: '确认', onPress: () => {
        Cookies.remove('userid');
        this.props.history.replace('/login');
      }
      },
    ])
  };

  render() {
    return (
      <div>
        <Result
          img={<img src={require('../../assets/images/avatars/头像16.png')} alt="头像"/>}
          title="laoban001"
          message='Google'
        />
        <List renderHeader={() => '相关信息'} className="my-list">
          <Item
            multipleLine
            onClick={() => {
            }}>
            <Brief>职位：xxxx</Brief>
            <Brief>简介：xxxxx</Brief>
            <Brief>薪资：xxxxxxxxx</Brief>
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