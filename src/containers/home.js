import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import video1 from "../assets/video1.mp4";
import ReactPlayer from 'react-player';
import {loadThemeInfo} from '../actions/theme/themeActions';
import {getAllTheme} from '../api/themeApi'



class Home extends React.Component{
    constructor(props){
        super(props)
        
    }
    componentDidMount=() =>{
        if(this.props.theme.allTheme.length==0){
            getAllTheme().then((res)=>{this.props.loadThemeInfo(res.result)})
        }
    }

    render() {
        
        return(
            <div className='main'>
              {/* <p className="title">Bienvenue sur le site de l'application 4b</p> */}
              <div className='player-wrapper'>
                  <div className='GoButton'>
                  <Link to="/presentation" className='Go'>
                    Let's go !
                </Link>
                  </div>
                
                {/* <ReactPlayer
                className='react-player'
                url={video1}
                controls={true}
                playing={true}
                width='80%'
                height='50%'
                />  */}
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);