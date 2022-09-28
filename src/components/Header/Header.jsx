import React from 'react'
import { Header, Icon, Image, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function PageHeader({handleLogout}) {
  return (
    <>

      <Header as="h2" floated="right">
        <Link to="/">
          <Icon name="home"></Icon>
        </Link>
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      </Header>

      <Image
        centered
        size='small'
        src='/animal.png'

      />
    </>
  )
}




