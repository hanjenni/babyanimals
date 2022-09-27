import React from 'react';
import PostCard from '../PostCard/PostCard';
import { Card } from 'semantic-ui-react'


export default function PostGallery({posts}){
    return (
        <Card.Group itemsPerRow={3} stackable>
            {posts.map((post) => {
                return <PostCard post={post} key={post._id} />;
            })}
        </Card.Group>
    )
}