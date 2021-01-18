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

componentDidMount(){
  const pageTypes = ['twitters', 'articles', 'notes'];

  const {
    location:{pathname},
  } = this.props;

  const currentPage = pageTypes.filter(page => 
    pathname.includes(page));

console.log(currentPage);


}


render(){
  const { children} =this.props; 

  return(
  <div>
   
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
