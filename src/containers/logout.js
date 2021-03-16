import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {logoutUser} from '../actions/user/userActions';


const Logout = (props)=> {
	const [redirect, setRedirect] = useState(false)

    useEffect(()=>{
        removeData();
		props.logoutUser();
		setRedirect(true)
    }, [])

	const removeData = async () => {
		try {
		  await window.localStorage.removeItem('4brntoken')
		} catch (e) {
		  console.log(e)
		}
	  }


    return (
		<div className='Main'>
			{redirect && <Redirect to="/admin" />}
		</div>
    )

}

const mapDispatchToProps = {
    logoutUser
}

const mapStateToProps = (store)=>{
    return {
        user: store.user
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(Logout);