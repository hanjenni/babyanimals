import React from 'react'
import { Header, Icon, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Header.css';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';




export default function PageHeader({ loggedUser, handleLogout }) {
  return (
    <>
        <Segment clearing className='Header'>
          <Header as='h3' floated='right'>
            <Link to="/" onClick={handleLogout}>
              <h2>Logout</h2>
            </Link>
          </Header>
          <Header as='h3' floated='right'>
            <Link to='/'>
            <h2>Home</h2>
            </Link>
          </Header>
          <Header as='h3' floated='right'>
            <Link to={`/${loggedUser?.username}`}>
            <h2>My Page</h2>
            </Link>
          </Header>
          <Header as='h3' floated='left'>
            <Link to='/about'>
            <h2>About</h2>
            </Link>
          </Header>
        </Segment>
      <Image
        centered
        size='small'
        src='/animal.png'
       
      />
      
    </>
  )
}






