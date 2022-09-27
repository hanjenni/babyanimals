import React from 'react';
import Header from '../../components/Header/Header';
import PostGallery from '../../components/PostGallery/PostGallery';
import AddPost from '../../components/AddPost/AddPost';
import * as postsAPI from "../../utils/postApi";

import { Grid } from 'semantic-ui-react';



export default function Feed () {
    //const [posts, setPosts] = useState([]);

    async function handleAddPost(post){

        try{
            const response = await postsAPI.create(post);
            console.log(response);

        }catch(err){
            console.log(err.message);
        }
    }


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
                <Grid.Column style={{ maxWidth: 450 }}>
                     <PostGallery />
                </Grid.Column>
            </Grid.Row>          

        </Grid>

        
    )
}