import React, {Component} from 'react';
import {List} from 'antd-mobile';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types'

const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  static propTypes = {
    chatMessages: PropTypes.object.isRequired
  };
  goChat = id => {
    this.props.history.push(`/chat/${id}`);
  };

  render() {

    const userid = Cookies.get('userid');
    const {users, chatMsgs} = this.props.chatMessages;
    let users_id = {};
    chatMsgs.forEach(item => {
      const othersId = item.from === userid ? item.to : item.from;
      users_id[othersId] = users[othersId];
      users_id[othersId].id = othersId;


      const time = Date.parse(item.createTime);
      if (users_id[othersId].time) {
        //说明之前添加过数据，将现在的数据和之前的数据进行比较
        if (users_id[othersId].time < time) {
          users_id[othersId].time = time;
          users_id[othersId].message = item.message;
        }
      } else {
        users_id[othersId].time = time;
        users_id[othersId].message = item.message;
      }
    })
//将对象变成数组
    const chatList = Object.values(users_id);  // [{header, username, id}]

    return (
      <List className="my-list">
        {
          chatList.map((item, index) => (
            <Item
              key={index}
              thumb={require(`../../assets/images/avatars/头像${(item.header === 'undefined' ? 0 : + item.header) + 1}.png`)}
              multipleLine
              arrow="horizontal"
              onClick={this.goChat.bind(null, item.id)}
            >
              {item.message} <Brief>{item.username}</Brief>
            </Item>
          ))
        }
      </List>

    )
  }
}

export default Message;