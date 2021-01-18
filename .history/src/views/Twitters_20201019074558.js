import React from 'react';
import {connect} from 'react-redux';
import GridTemplate from 'templates/GridTemplate';
// import Card from 'components/molecules/Card/Card';



const Twitters = (props) => (
  <GridTemplate pageType="twitters">
    {console.log({props})
    }
   
  </GridTemplate>
);
const mapSatateToProps = state => {
  const {Twitters}
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