import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button'

const Styled

const NewItemBar = () => (
    <div>
        <Input placeholder="title" />
        <Input as="textarea" placeholder="title" />
        <Button>Add</Button>
    </div>
)
export default NewItemBar;