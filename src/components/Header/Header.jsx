import React from 'react'
import { Header, Icon, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';

export default function PageHeader({ loggedUser, handleLogout }) {
  return (
    <>

      {/* <Header as='h3' floated='right'>
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
      <Header as="h3" floated="right">
      <Link to="/">
          Home Page
        </Link>
      </Header>
      <Header as="h3" floated="right">
      <Link to={`/${loggedUser?.username}`}>
          My Page
        </Link>
      </Header>

      <Image
        centered
        size='small'
        src='/animal.png' */}

      <div>
        <Segment clearing>
          <Header as='h3' floated='right'>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </Header>
          <Header as='h3' floated='right'>
            <Link to='/'>
              Home Page
            </Link>
          </Header>
          <Header as='h3' floated='right'>
            <Link to={`/${loggedUser?.username}`}>
              My Page
            </Link>
          </Header>
        </Segment>
      </div> 
        <Image
          centered
          size='small'
          src='/animal.png'
        />
      




      {/* /> */}

    </>
  )
}






