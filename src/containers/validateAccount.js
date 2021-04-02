import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import video1 from "../assets/video1.mp4";
import ReactPlayer from 'react-player';
import {loadThemeInfo} from '../actions/theme/themeActions';
import {getAllTheme} from '../api/themeApi'
import {validateUser} from '../api/userApi'



class Forgot extends React.Component{
    constructor(props){
        super(props)
        state={
            validate:false
        }
    }
   

    render() {
        return(
            <div className='main'>
                <p className='title'>Validation de votre compte</p>
                <p className='text'>Bienvenu sur l'application 4b</p>
                {!validate&&<p className='text'>Pour valider votre mail, cliquez 
                <button 
                onClick={()=>{
                    validateUser(this.props.match.params.key_id).then((res)=>{
                        if(res.status==200){
                            this.setState({validate:true})
                        }
                    })
                }}>ici</button></p>}
                {validate&&<p className='text'>Votre mail a bien été validé. Rendez vous sur l'application pour vous connecter.</p>}
            </div>
        )
    }


}

const mapDispatchToProps = {
    loadThemeInfo
}

const mapStateToProps = (store)=>{
    return {
        user: store.user,
        theme:store.theme
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Forgot);