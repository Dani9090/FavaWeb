import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';



const Notes = ({notes}) => (
  <GridTemplate pageType="notes">
    {notes.map(({ title, content, created, id }) => (
      <Card id={id} cardType="notes" title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
);

export default Notes;
