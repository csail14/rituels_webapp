import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class NonAuth extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        
        return(
            <div className='Main'>
                
                <p className="title">Vous n'êtes pas authorisé à acceder à la page admin. Pour vous rendre sur votre compte veuillez ouvrir l'application.</p>
               
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

export default connect(mapStateToProps, mapDispatchToProps)(NonAuth);