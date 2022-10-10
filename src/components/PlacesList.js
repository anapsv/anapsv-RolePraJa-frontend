import React, { useState } from 'react';
import styled from 'styled-components';
import PlaceDetails from './PlaceDetails';

export default function PlacesList() {

    const [type, setType] = useState('bar');

    const places = [
        { name: 'Baladinha' },
        { name: 'Barzinho legal' },
        { name: 'Baladinha' },
        { name: 'Barzinho legal' },
        { name: 'Baladinha' },
        { name: 'Barzinho legal' },
        { name: 'Baladinha' },
        { name: 'Barzinho legal' },
        { name: 'Baladinha' },
        { name: 'Barzinho legal' },
        { name: 'Baladinha' },
        { name: 'Barzinho legal' },
    ]

    return (
        <>
            <Container>
                <PlacesForm>
                    <PlacesSelect value={ type } onChange={ (e) => setType(e.target.value) }>
                        <option value={ 'bar' } >Bares</option>
                        <option value={ 'night_club' } >Baladas</option>
                    </PlacesSelect>
                </PlacesForm>
                { places?.map((place, i) => (
                    <List item key={ i }>
                        <PlaceDetails place={ place } />
                    </List>
                )) }
            </Container>
        </>
    );
}

const Container = styled.div`
    width: 35%;
    height: 75%;
    position: absolute;
    top: 4%;
    left: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`

const PlacesForm = styled.form`
    width: 100%;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PlacesSelect = styled.select`
    font-size: 18px;
    width: 90%;
    height: 28px;
`
const List = styled.div`
    width: 35%;
    height: 70%;
`