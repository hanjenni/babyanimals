import React from 'react';
import PostCard from '../PostCard/PostCard';
import { Card } from 'semantic-ui-react'


export default function PostGallery({ posts, numPhotosCol, isProfile, removeLike, addLike, loggedUser }) {
    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {posts.map((post) => {
            return (
                <PostCard
                    post={post}
                    key={post._id}
                    isProfile={isProfile}
                    removeLike={removeLike}
                    addLike={addLike}
                    loggedUser={loggedUser}
                />
            );
        })}
    </Card.Group>
    )
}


