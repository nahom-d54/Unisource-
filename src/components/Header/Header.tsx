import React from 'react'
import { Header } from 'antd/es/layout/layout'
import { Avatar, Badge, Input, Menu, Typography } from 'antd'
import { BellOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'

const { Text } = Typography;


export const HeaderFC: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff'}}>
        <Input placeholder='Search your favorite books' prefix={<SearchOutlined/>} style={{ maxWidth: '50%'}} />
        <Menu theme='light' mode={'horizontal'} style={{ display: 'flex', alignItems: 'center', gap: '1em'}}>
            <Badge count={5} color='red' size={'small'}>
                <Avatar icon={<BellOutlined/>} size={'small'}/>
            </Badge>
            <div>
                <Avatar icon={<UserOutlined/>} size={'small'} style={{ marginRight: '5px'}}/>
                <Text>Nahom</Text>
            </div>
        </Menu>
    </Header>
  )
}
