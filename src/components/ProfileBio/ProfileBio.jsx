import { Image, Grid, Segment } from "semantic-ui-react";
import './ProfileBio.css';


function ProfileBio({ user }) {

    return (
  
        <Grid textAlign="right" columns={2}>
            <Grid.Row className="username">
                <Grid.Column>
                    <Image
                        src={`${user.photoUrl
                                ? user.photoUrl
                                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                            } `}
                        avatar
                        size="tiny"
                    />
                </Grid.Column>
                <Grid.Column textAlign="left" style={{ maxWidth: 600 }} >
                    <Segment vertical>
                        <h1>{user.username}</h1>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
 
    );
}

export default ProfileBio;
