import React from 'react';
import styled from 'styled-components';
import imgs from './imgs'

const Main = styled.div`
background-size: cover;
`
const page1post2 = () => {
    return (
        <Main style={{ backgroundImage: `url(${imgs[0]})` }}/>
    )
}

export default page1post2;