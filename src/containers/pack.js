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
            <div className='main'>
              <div className='packDiv'>
                <div className='pack'>
                    <p className='title'>Pack Kids</p>
                    <p className='price'>3 € / mois</p>
                </div>
                <div className='pack'>
                    <p className='title'>Pack Family</p>
                    <p className='price'>5€ / mois</p>
                </div>
              </div>
            </div>
        )git init
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