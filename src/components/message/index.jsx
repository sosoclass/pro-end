import React, {Component} from 'react';
import { List ,WhiteSpace} from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

class Message extends Component {
  render () {
    return (

        <List >
          <Item
            arrow="horizontal"
            thumb={require('../../assets/images/avatars/头像4.png')}
            multipleLine
            onClick={() => {}}
          >
            老板，加钟么？ <Brief>手牌儿拿看下</Brief>
          </Item>

          <Item
            arrow="horizontal"
            thumb={require('../../assets/images/avatars/头像5.png')}
            multipleLine
            onClick={() => {}}
          >
            老板，保健不？ <Brief>幸福啪啪啪</Brief>
          </Item>
        </List>

    )
  }
}

export default Message;