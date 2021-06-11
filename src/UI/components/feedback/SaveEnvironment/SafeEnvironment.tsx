import React from 'react';
import { SafeEnvironmetContainer } from './SafeEnvironmente.style';
import { Container } from '@material-ui/core';

const SafeEnvironment = () =>{
    return (
        <SafeEnvironmetContainer>
            <Container>
                Ambiente Seguro
            </Container>        
        </SafeEnvironmetContainer>
    );
}

export default SafeEnvironment;