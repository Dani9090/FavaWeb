import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button'

const StyledWrapper=styled.div`
z-index: 9999;
position: fixed;
right: 0;
top:0;
height: 100vh;
width: 680px;
bag
`

const NewItemBar = () => (
    <div>
        <Input placeholder="title" />
        <Input as="textarea" placeholder="title" />
        <Button>Add</Button>
    </div>
)
export default NewItemBar;