import React,{Component} from "react";
import {connect} from 'react-redux'; 
import {Link} from 'react-router-dom';
import Payments from './Payments';


function mapStateToProps({auth}){
    return {auth};
}


class Header extends Component{ 
    renderContent(){
        switch(this.props.auth){
            case null: 
                return;
            case false: 
                return <li><a href="/auth/google">Login with Google</a></li>;
            default: 
                return [ 
                    <li key="1"><Payments/></li>,
                    <li key="2" style={{ margin: '0 10px' }}>
                        credits: {this.props.auth.credits} 
                    </li>,
                    <li key="3"><a href="/api/logout">Log out</a></li>
                ];
        }
    }

    render(){
        console.log("Auth status:", this.props.auth);
        
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={this.props.auth? "/surveys" : "/"} 
                        className="left brand-logo">
                            Emaily
                    </Link>
                    <ul className="right">
                        <Link to="/auth/google">login</Link>
                    </ul>
                    <ul className="right">
                        <li>login test</li>
                    </ul>
                </div>
            </nav>
        );
    }
}


export default connect(mapStateToProps)(Header);
