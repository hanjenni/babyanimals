import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import PostGallery from '../../components/PostGallery/PostGallery';
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import AddPost from '../../components/AddPost/AddPost';

import * as postsAPI from "../../utils/postApi";
import * as likesAPI from '../../utils/likesApi';

import { Grid } from 'semantic-ui-react';



export default function Feed() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");


    // async function removePost(postId){
    //     try{
    //         const response = await postsAPI.delete(postId);
    //         console.log(response, '<-remove Post');
    //     }catch(err){
    //         console.log(err, 'err from removePost')
    //     }
    // }

    async function addLike(postId){
        try{
            const response = await likesAPI.create(postId);

        }catch(err){
            console.log(err, 'err from server')
        }

    }

    async function removeLike(likeId) {
        try {
            const response = await likesAPI.removeLike(likeId);
            console.log(response, '<-remove likes');
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
        <Grid textAlign='center' columns={3}>
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
                <Grid.Column >
                    <PostGallery 
                        posts={posts}
                        numsPhotosCol={4}
                        isProfile={false}
                        addLike={addLike}
                        removeLike={removeLike}
                        // removePost={removePost}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    );
}