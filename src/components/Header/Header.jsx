import React from 'react'
import { Header, Icon, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import './Header.css';




export default function PageHeader({ loggedUser, handleLogout }) {
  return (
    <>
    <div className='Header'>
        <Segment clearing>
          <Header floated='right' color='red'>
            <Link to="/" onClick={handleLogout}>
              <h2>Logout</h2>
            </Link>
          </Header>
          <Header floated='right'>
            <Link to='/'>
            <h2>Home</h2>
            </Link>
          </Header>
          <Header floated='right'>
            <Link to={`/${loggedUser?.username}`}>
            <h2>My Page</h2>
            </Link>
          </Header>
          <Header floated='left'>
            <Link to='/about'>
            <h2>About</h2>
            </Link>
          </Header>
        </Segment>
      </div>
      <Image 
        centered
        size='small'
        src='/animal.png'
       
      />
      
    </>
  )
}






