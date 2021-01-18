import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button'
import Heading from 'components/atoms/Heading/'
import withContext from 'hoc/withContext'

const StyledWrapper=styled.div`
border-left: 10px solid ${({theme, activeColor}) => theme[activeColor]};
z-index: 9999;
position: fixed;
display: flex;
flex-direction: column;
right: 0;
top:0;
height: 100vh;
width: 680px;
background-color: white;
`

const StyledTextArea = styled(Input)`
margin: 30px 0 100px;
border-radius: 20px;
height: 30vh;
`

const NewItemBar = ({pageContext}) => (
    <StyledWrapper activeColor={pageContext}>
        <Input placeholder="title" />
        <StyledTextArea as="textarea" placeholder="title" />
        <Button activeColor={pageContext}>Add</Button>
    </StyledWrapper>
);

NewItemBar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  };
  NewItemBar.defaultProps = {
    pageContext: 'notes',
  };
export default withContext(NewItemBar);