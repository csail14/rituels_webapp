import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import video1 from "../assets/video1.mp4";
import ReactPlayer from 'react-player'


class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        
        return(
            <div className='Main'>
              <p className="title">Bienvenue sur le site de l'application 4b</p>
              <div className='player-wrapper'>
                <ReactPlayer
                className='react-player'
                url={video1}
                controls={true}
                playing={true}
                width='80%'
                height='50%'
                />
            </div>
            </div>
        )
    }


}

const mapDispatchToProps = {
    
}

const mapStateToProps = (store)=>{
    return {
        user: store.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);