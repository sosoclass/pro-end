import React, {Component} from 'react';
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Radio,
  Button} from 'antd-mobile';
import Logo from '../logo/logo'
const Item = List.Item;

class Register extends Component {
  state={
    laoban:true,
    username:'',
    password:'',
    rePassword:''
  };
  handelChange=(type,value)=>{
    this.setState({
      [type]:value
    })
  };
  register=()=>{
    const { laoban, username, password, rePassword} = this.state;
    console.log(laoban, username, password, rePassword)
};
  goLogin=()=>{
    this.props.history.replace('/login')
  };

  render () {
    const laoban = this.state.laoban
    return (
      <div>
        <NavBar >硅谷直聘</NavBar>
        <WhiteSpace/>
        <img src="" alt=""/>
        <WhiteSpace/>
        <Logo/>
        <WhiteSpace/>
        <WingBlank>
        <List>
          <InputItem onChange={val=>this.handelChange('username',val)}>用户名：</InputItem>
          <InputItem onChange={val=>this.handelChange('password',val)}>密码：</InputItem>
          <InputItem onChange={val=>this.handelChange('rePassword',val)}>确认密码：</InputItem>
          <Item>
            用户类型：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Radio checked = {!laoban} onChange={this.handelChange.bind(null,'laoban',false)}>大神</Radio> &nbsp;&nbsp;&nbsp;
            <Radio checked = {laoban} onChange={this.handelChange.bind(null,'laoban',true)}>老板</Radio>
          </Item>
        </List>
        </WingBlank>
        <WhiteSpace/>
        <WhiteSpace/>
        <Button type="primary" onClick = {this.register}>注册</Button>
        <Button onClick = {this.goLogin}>已有账户</Button>

      </div>

    )
  }
}

export default Register;