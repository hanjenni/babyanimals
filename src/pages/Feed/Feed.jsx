import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import PostGallery from '../../components/PostGallery/PostGallery';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import AddPost from '../../components/AddPost/AddPost';
import * as postsAPI from "../../utils/postApi";
import * as likesAPI from '../../utils/likesApi';
import { Grid } from 'semantic-ui-react';
import "./Feed.css";
import '../../components/Header/Header.css';




export default function Feed({loggedUser, handleLogout}) {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    console.log(loggedUser, '<-feed function')

    async function addLike(postId) {
        try {
          const response = await likesAPI.create(postId);
          getPosts();
        } catch (err) {
          setError("error adding like");
        }
      }

    async function removeLike(likeId) {
        try {
            const response = await likesAPI.removeLike(likeId);
            console.log(response, '<-remove likes');
            getPosts()
        }catch(err) {
            console.log(err)
        }
    }

    async function handleAddPost(post) {
        try {
            const response = await postsAPI.create(post); 
            console.log(response);
            setPosts([response.data, ...posts]); 
        } catch (err) {
            console.log(err.message);
            setError("Error creating post, please try again");
        }
    }

    async function getPosts() {
        try {
            const response = await postsAPI.getAll();
            console.log(response, " data");
            setPosts([...response.data]);
        } catch (err) {
            console.log(err.message, " this is the error");
        }
    }

    useEffect(() => {
        

        getPosts();
    }, []); 





    return (
    <body className='feedPage'>
      <Grid centered className='Feed'>
        <Grid.Row>
          <Grid.Column>
            <Header handleLogout={handleLogout} loggedUser={loggedUser} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            <AddPost handleAddPost={handleAddPost} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 600 }}>
            <PostGallery
              posts={posts}
              numPhotosCol={1}
              isProfile={false}
              addLike={addLike}
              removeLike={removeLike}
              loggedUser={loggedUser}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </body> 
    );
}