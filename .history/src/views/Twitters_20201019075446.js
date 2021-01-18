import React from 'react';
import {connect} from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
 import Card from 'components/molecules/Card/Card';



// eslint-disable-next-line react/prop-types
const Twitters = ({twitters}) => (
  <GridTemplate pageType="twitters">
 {twitters.map(({ title, content, twitterName, created, id }) => (
      <Card
        id={id}
        cardType="twitters"
        title={title}
        content={content}
        twitterName={twitterName}
        created={created}
        key={id}
      />
    ))}
  </GridTemplate>
);
const mapSatateToProps = state => {
  const {twitters} = state;
  return {twitters};
}


export default connect(mapSatateToProps)(Twitters);


// {twitters.map((item) => (
//   <Card
//     cardType="twitters"
//     title={item.title}
//     content={item.content}
//     twitterName={item.twitterName}
//     created={item.created}
//     key={item.title}
//   />
// ))}