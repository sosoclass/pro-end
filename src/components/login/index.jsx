import React, {Component} from 'react';
import {
  NavBar,
  WingBlank,
  List,
  InputItem,
  WhiteSpace,
  Button} from 'antd-mobile';
import Logo from '../logo/logo'

class Register extends Component {
  state={
    username:'',
    password:'',

  };
  handelChange=(type,value)=>{
    this.setState({
      [type]:value
    })
  };
  goMain=()=>{
    // const { laoban, username, password, rePassword} = this.state;
    // console.log(laoban, username, password, rePassword)
    this.props.history.replace('/')
  };
  goRegister=()=>{
    this.props.history.replace('/register')
  };

  render () {
    return (
      <div>
        <NavBar >硅谷直聘</NavBar>
        <WhiteSpace/>
        <img alt="img"/>
        <WhiteSpace/>
        <Logo/>
        <WhiteSpace/>
        <WingBlank>
          <List>
            <InputItem onChange={val=>this.handelChange('username',val)}>用户名：</InputItem>
            <InputItem onChange={val=>this.handelChange('password',val)}>密码：</InputItem>
          </List>
        </WingBlank>
        <WhiteSpace/>
        <WhiteSpace/>
        <Button type="primary" onClick = {this.goMain}>登录</Button>
        <Button onClick = {this.goRegister}>还没有账户</Button>

      </div>

    )
  }
}

export default Register;