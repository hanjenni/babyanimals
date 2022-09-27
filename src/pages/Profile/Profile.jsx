import React, { useState, useEffect } from 'react'
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import PostGallery from '../../components/PostGallery/PostGallery'
import Header from '../../components/Header/Header';
import userService from "../../utils/userService";
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';




export default function Profile() {
    const [posts, setPosts] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    const [error, setError] = useState('');

    const { username } = useParams();
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
        <Grid textAlign='center' columns={3}>
            <Grid.Row>
                <Grid.Column>
                    <Header />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProfileBio user={profileUser} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column >
                    <PostGallery
                        posts={posts}
                        numPhotosCol={1}
                        isProfile={true}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

