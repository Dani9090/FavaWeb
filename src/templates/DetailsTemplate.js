import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    {children}
    <Link to="/">go back</Link>
  </UserPageTemplate>
);
DetailsTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
};
export default DetailsTemplate;
