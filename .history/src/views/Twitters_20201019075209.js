import React from 'react';
import {connect} from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
 import Card from 'components/molecules/Card/Card';



const Twitters = ({twitters}) => (
  <GridTemplate pageType="twitters">
 {twitters.map(({titile, content, twitterName, created, id}) => (
   <Card
     cardType="twitters"
     title={item.title}
     content={item.content}
     twitterName={item.twitterName}
     created={item.created}
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