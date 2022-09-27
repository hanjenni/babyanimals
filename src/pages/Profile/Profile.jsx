import React, { useState, useEffect } from 'react'
import ProfileBio from '../../components/ProfileBio/ProfileBio'
import ProfilePostDisplay from '../../components/ProfilePostDisplay/ProfilePostDisplay'
import Header from '../../components/Header/Header';
import userService from "../../utils/userService";
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'




export default function Profile() {
    const { username } = useParams(); 
    useEffect(() => {
        async function getProfile() {
            try{
                const response = await userService.getProfile(username);
                console.log(response)
            } catch (err) {
                console.log(err.message)
            }
        }

        getProfile()

    }, [username])

    return (
        <Grid textAlign='center' columns={4}>
            <Grid.Row>
                <Grid.Column>
                    <Header />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProfileBio />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProfilePostDisplay />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

