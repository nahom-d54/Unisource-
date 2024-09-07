import React, { useState } from 'react';
import { Divider, Menu, MenuProps, MenuTheme } from 'antd';
import { AppstoreOutlined, CloudDownloadOutlined, DatabaseOutlined, HomeOutlined, LikeOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons';


type MenuItem = Required<MenuProps>['items']

const asideNames = {
    main: [ {
        icon: HomeOutlined,
        name: 'Discover'
    }, {
      icon: AppstoreOutlined, 
      name: 'Category'
    }, 
    {
      icon: DatabaseOutlined, 
      name: 'My Library'
    }, 
    {
      icon:CloudDownloadOutlined ,
      name:'Downloaded'
    }, 
    {
      icon: LikeOutlined,
      name:'Favorite'
    },
    {icon: SettingOutlined,name:'Settings'}, {icon:LogoutOutlined,name:'Logout'}],
    
}

const mainItems: MenuItem = asideNames.main.map(
  (item, index) => ({
    key: String(index + 1),
    label: item.name,
    icon: item.icon? React.createElement(item.icon): undefined,
  }),
);
// const settingItems = asideNames.settings.map(
//     (item, index) => ({
//         key: String(index+1),
//         label: item.name,
//         icon: React.createElement(item.icon)
//     })
// )


const LayoutFc: React.FC = () => {
  

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menuTheme] = useState<MenuTheme>('light')

  return (
    <>
      <div className="logo">
        <p><strong>Uni</strong>source</p>
      </div>
      <Menu theme={menuTheme} mode="inline" defaultSelectedKeys={['1']} items={mainItems} />
      <Divider/>
      
    </>
  );
};

export default LayoutFc;