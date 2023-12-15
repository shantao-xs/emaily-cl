
import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import { Component } from 'react'; 



import Header from './Header';
import Landing from './Landing';
import SurveyNew from './SurveyNew';
import Dashboard from './Dashboard';


import {connect} from 'react-redux'; 
import * as actions from '../actions'; 
class App extends Component{
    
    componentDidMount(){
        this.props.fetchUser(); 
    };



    render(){
        return(
            <div className='container'> 
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Landing} /> 
                        <Route exact path='/surveys' component={Dashboard} /> 
                        <Route path='/surveys/new' component={SurveyNew} /> 
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null,actions)(App); 





