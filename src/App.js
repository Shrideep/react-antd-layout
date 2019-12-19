import React, { useState } from 'react';
import './App.css';
import { Layout, Avatar, Menu, Icon, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Cricketer, ODICareer, Batting, Bowling, TestCareer } from './Cricketer';
import CareerDetails from './CareerDetails';
import { configConsumerProps } from 'antd/lib/config-provider';
import { functionTypeAnnotation } from '@babel/types';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }
  const ViewProfileButton = ({name}) => {
    return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}> View Full Profile >> </Button>
  }

  const onClose = () => setVisible(false);
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: 'right' }} src='./dp.png' />
          <Title style={{ color: 'white' }} level={3}>SHRIDEEP</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
                <Cricketer name='Virat Kholi' team='IND' avatarSrc='./vk.jpg'>
                  <ODICareer matches='239' >
                    <Batting runs='11,520' score='183' />
                    <br></br>
                    <Bowling wickets='4' bowlingAvg='166.25' />
                  </ODICareer>
                  <TestCareer matches=' 79' >
                    <Batting runs='6,749' score='243' />
                  </TestCareer>
                  <ViewProfileButton name='Virat Kohli'/>
                </Cricketer>
                <Cricketer name='Jasprit Bumrah' team='IND' avatarSrc='./jb.jpg'>
                  <TestCareer matches='12' >
                    <Bowling wickets='62' bowlingAvg='20.63' />
                  </TestCareer>
                  <ViewProfileButton name='Jasprit Bumrah'/>
                </Cricketer>
              </div>
            </Content>
            <CareerDetails player={selectedPlayer} visible={visible} onClose={onClose} />
            <Footer style={{ textAlign: 'center' }}>Ant Design Layout example Created by Shrideep</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
