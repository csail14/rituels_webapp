import React from 'react';
import {Redirect} from 'react-router-dom';
import {config} from '../config';
import axios from 'axios';
import {connect} from 'react-redux';
import {loadUserInfo} from '../actions/user/userActions';
import {loadThemeInfo} from '../actions/theme/themeActions';
import {getAllTheme} from '../api/themeApi'


export default function(ChildComponent, withAuth = false) {
    
    class RequireAuth extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                redirect: false,
                redirectNoAdmin:false
            }
        }
        componentDidMount=() =>{
            console.log('ici')
            if(this.props.theme.allTheme.length==0){
                getAllTheme().then((res)=>{this.props.loadThemeInfo(res.result)})
            }
        }
        
        componentDidMount = async () => {
            const token = window.localStorage.getItem('4brntoken')
            if(token === null) {
                this.setState({redirect: true});
            } else {
                if(this.props.user.isLogged === false) {
                    axios.get(config.api_url+"/api/v1/checkToken", { headers: { "x-access-token": token }})
                    .then((response)=>{
                        console.log(response);
                        if(response.data.status !== 200) {
                                this.setState({redirect: true});
                        } else {
                            this.props.loadUserInfo(response.data.user);
                            if (response.data.user.role!=='admin'){
                                this.setState({redirectNoAdmin:true})
                            }
                        }
                    })
                }
                else if (this.props.user.infos.role!=='admin'){
                    this.setState({redirectNoAdmin:true})
                }
                               
            }
            
        }
        
        render() {
        if(this.state.redirect) {
                return <Redirect to="/login" />
            }
            if(this.state.redirectNoAdmin){
                return <Redirect to='/non-authorize'/>
            }
            return (<ChildComponent {...this.props} />)
        }
        
    }
    
    const mapDispatchToProps = {
        loadUserInfo,
    }
    
    const mapStateToProps = (store)=>{
        return {
            user: store.user,
            
        }
    }
    
    
    return connect(mapStateToProps, mapDispatchToProps)(RequireAuth);
}