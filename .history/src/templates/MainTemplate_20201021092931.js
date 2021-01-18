import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

class MainTemplate extends Component{
state = {
  pageType: 'notes',
}  



render()
= ({ children, ...props }) => {


  return(
  <div>
    {console.log(props)}
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
  )
};
}
MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default withRouter(MainTemplate);//  higher order component
