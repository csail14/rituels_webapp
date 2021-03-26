import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import video1 from "../assets/video1.mp4";
import ReactPlayer from 'react-player';
import {loadThemeInfo} from '../actions/theme/themeActions';
import {getAllTheme} from '../api/themeApi'



class Forgot extends React.Component{
    constructor(props){
        super(props)
        
    }
   

    render() {
        
        return(
            <div className='main'>
                <p className='title'>Modification de votre mot de passe</p>
                <p className='text'>Bienvenu sur l'application 4b</p>
                <p className='text'>Pour valider votre mail, cliquez <Link>ici</Link></p>
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