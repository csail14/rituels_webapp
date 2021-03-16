import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



class Header extends React.Component{
    constructor(props){
        super(props)
    }
    

    render() {
        return(
            <header className='header'>
                <nav>
                    <div className='liste1'>
                        
                        <Link to="/home">Acceuil</Link>
                        <Link to="/admin">Admin</Link>

                        {this.props.user.isLogged &&<Link to="/Logout">Se deconnecter</Link> }
                    </div>
                </nav>
               
            </header>
        )
    }


}

const mapDispatchToProps = {
    
}

const mapStateToProps = (store)=>{
    return {
        user:store.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);