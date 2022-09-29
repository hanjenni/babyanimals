import React, { useState, useEffect, useCallback } from 'react'
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import PostGallery from '../../components/PostGallery/PostGallery'
import Header from '../../components/Header/Header';
import userService from "../../utils/userService";
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';



export default function Profile({loggedUser, handleLogout}) {
    console.log(loggedUser, '<--profile function')
    const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    const [error, setError] = useState('');

    const { username } = useParams();
    console.log(username, '<-username')


    useEffect(() => {
        async function getProfile() {
            try {
                const response = await userService.getProfile(username);
                console.log(response)
                setProfileUser(response.data.user);
                setPosts(response.data.posts);
            } catch (err) {
                console.log(err.message)
                setError('profile does not exist');
            }
        }

        getProfile()

    }, [username])

    if (error) {
        return (
            <>
                <Header />
                <ErrorMessage error={error} />
            </>
        );
    }

    return (
        <Grid>
      <Grid.Row>
        <Grid.Column>
		<Header handleLogout={handleLogout} loggedUser={loggedUser}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={profileUser} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 500 }}>
          <PostGallery
            posts={posts}
            numPhotosCol={1}
            isProfile={true}
            loggedUser={loggedUser}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    );
}

