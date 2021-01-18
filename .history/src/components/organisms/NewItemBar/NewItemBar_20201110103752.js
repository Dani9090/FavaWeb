import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button'
import Heading from 'components/atoms/Heading/Heading'
import withContext from 'hoc/withContext'
import {connect } from 'react-redux'
import { addItem as addItemAction } from 'actions';
import {Formik, Form, Fields, ErrorMessage} from 'formik';


const StyledWrapper=styled.div`
border-left: 10px solid ${({theme, activeColor}) => theme[activeColor]};
z-index: 9999;
position: fixed;
display: flex;
padding: 100px 90px;
flex-direction: column;
right: 0;
top:0;
height: 100vh;
width: 680px;
background-color: white;
box-shadow: -5px 0 15px rgba(0,0,0, 0.2);
transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%' )});
transition: transform 0.25s ease-in;
`

const StyledTextArea = styled(Input)`
margin: 30px 0 100px;
border-radius: 20px;
height: 30vh;
font-size: ${({ theme }) => theme.fontSize.m};
font-weight: ${({ theme }) => theme.regular};
`

const StyledInput = styled(Input)`
margin-top:25px;
`

const NewItemBar = ({pageContext, isVisible, addItem}) => (
    <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
      <Heading big>Create new {pageContext} </Heading>
      <Formik
        <StyledInput placeholder={pageContext === 'twitters' ? 'Account Name eg. hello_roman' : 'Title'} />
        {pageContext === 'articles' &&<StyledInput placeholder="link" />}
        <StyledTextArea as="textarea" placeholder="title" />
        <Button onClick={() => addItem(pageContext,{
          title:'hello',
          content:'text',
        })} activeColor={pageContext}>Add</Button>
    </StyledWrapper>
);

NewItemBar.propTypes = {
    pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
    isVisible:PropTypes.bool,
    addItem: PropTypes.func.isRequired,
  };
  NewItemBar.defaultProps = {
    pageContext: 'notes',
    isVisible: false,
  };

const mapDispachToProps = dispatch => ({
addItem: (itemType, itemContent) =>
dispatch(addItemAction(itemType, itemContent))
});


export default connect(null, mapDispachToProps)(withContext(NewItemBar));