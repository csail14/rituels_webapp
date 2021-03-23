import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'; 
import video1 from "../assets/video1.mp4";
import ReactPlayer from 'react-player'



class Condition extends React.Component{
    constructor(props){
        super(props)
        
    }

    render() {
        
        return(
            <div className='main'>
              <p className='title'>Conditions Générales D'utilisation</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Condition);