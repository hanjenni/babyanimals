import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import PostGallery from '../../components/PostGallery/PostGallery';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import AddPost from '../../components/AddPost/AddPost';

import * as postsAPI from "../../utils/postApi";

import { Grid } from 'semantic-ui-react';



export default function Feed() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");

    async function handleAddPost(post) {
        // post, is coming from the addPostForm component, when we call this function onSubmit props.handleAddPost(formData)
        try {
          const response = await postsAPI.create(post); // waiting for the json to be return from the server and parsed by us!
    
          // data is the response from the api, the result of the .then if(res.ok) return res.json() in the create postAPI utils function
          console.log(response);
          setPosts([response.data, ...posts]); /// ...posts would keep all the posts in the previous states array
        } catch (err) {
          // this is the error from the throw block, in the postsAPI.create function
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
        //Getting posts, C(R)UD
    
        getPosts();
      }, []); // This is useEffect runs once when the Feed component
      // loads
    
      
  


    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <Header />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <AddPost handleAddPost={handleAddPost} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 700 }}>
                    <PostGallery 
                        posts={posts}
                        numsPhotosCol={1}
                        isProfile={false}
                     />
                </Grid.Column>
            </Grid.Row>
        </Grid>


    )
}