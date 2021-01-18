import React, { Component } from 'react';
import PageContext from 'context';

const withConetxt = (Component) => {
    return function contextComponent(props){
        return(
            <PageContext.Consumer>
                {context =>(
                    <Component{..props}
                )}
            </PageContext.Consumer>
        )
    }
}