import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './PostCard.css';


function PostCard({ post, isProfile, addLike, removeLike, loggedUser }) {
    const liked = post?.likes.findIndex((like) => like?.username === loggedUser?.username);
    const likedColor = liked > -1 ? 'red' : 'grey';
    const clickHandler = liked > -1 ? () => removeLike(post.likes[liked]._id) : () => addLike(post._id)

    return (
        <Card key={post._id} color='brown'>
            {isProfile ? (
                ""
            ) : (
                <Card.Content textAlign="left">
                    <Card.Header>
                        <Link to={`/${post?.user?.username}`} className='CardHeader'>
                            <Image
                                size="large"
                                avatar
                                src={
                                    post?.user?.photoUrl
                                        ? post?.user?.photoUrl
                                        : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                                }
                            />
                            {post?.user?.username}
                        </Link>
                    </Card.Header>
                </Card.Content>
            )}

            <Image src={`${post?.photoUrl}`} wrapped ui={false} />
            <Card.Content className='CardFont'>
                <Card.Description className='CardFont' textAlign='center'>{post.caption}</Card.Description>
            </Card.Content>
            {isProfile ? (
                ""
            ) : (
            <Card.Content extra textAlign={"right"} >
                <Icon
                    name={"heart"}
                    size="large"
                    color={likedColor}
                    onClick={clickHandler}
                />

                {post.likes.length} Likes
            </Card.Content>
            )}
        </Card>
        
    );
}

export default PostCard;
