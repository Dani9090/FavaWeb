import React from 'react';
import {connect} from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';



const Twitters = () => (
  <GridTemplate pageType="twitters">
    {twitters.map((item) => (
      <Card
        cardType="twitters"
        title={item.title}
        content={item.content}
        twitterName={item.twitterName}
        created={item.created}
        key={item.title}
      />
    ))}
  </GridTemplate>
);
const mapSatateToProps = (twitter) => ({})
export default Twitters;
