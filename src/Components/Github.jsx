
import React from 'react'
import styled from 'styled-components';
import GithubCalendar from 'react-github-calendar'
const Github = () => {
    return (
        <MainContainer style={{ marginTop: "-20px" }}>
            <h1 style={{ color: "#01a479", textTransform: "uppercase" }}>Days I Worked</h1>
            <Container>
                <GithubCalendar username='mohitkss'year={new Date().getFullYear()} blockSize={15} blockMargin={5} fontSize={16} />
            </Container>
        </MainContainer>
    )
}

const Container = styled.div`
    margin:auto;
    width:80%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:50px;
    flex-direction:column;
    border: 10px solid #01a479;
    border-radius:50px 5px 50px 5px;
    padding:30px 0px 30px 0px;
`

const MainContainer = styled.div`
    @media (max-width: 50em){
        display:none;
    }
`

export default Github