import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './login';
import PhotosUploader from '../component/uploadVideo'
import {addCycle} from '../api/videoApi'
import { isDOMComponentElement } from 'react-dom/test-utils';
import {loadThemeInfo} from '../actions/theme/themeActions';
import {getAllTheme} from '../api/themeApi'

const url = "https://api.cloudinary.com/v1_1/demo/image/upload";
const form = document.querySelector("form");

class Admin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            duration:"20",
            category:"cat1",
            age_min:"",
            age_max:"",
            lang:"FR",
            type:"normal",
            step:11,
            video:[null,null,null,null,null,null,null,null,null,null,null],
            error: null
        }
    }
    componentDidMount=() =>{
        if(this.props.theme.allTheme.length==0){
            getAllTheme().then((res)=>{this.props.loadThemeInfo(res.result)})
        }
    }
    componentDidUpdate = ()=>{
        if(this.state.video.length!=this.state.step){

        let arr =[]
        
             for (let i=0;i<this.state.step;i++){
             arr.push(null)
             }
             this.setState({video:arr})
        }
    }
    onSubmitForm = (e)=>{
        e.preventDefault();
        let data = {
            name: this.state.name,
            duration: this.state.duration,
            theme_id:this.state.category,
            age_min:this.state.age_min,
            age_max:this.state.age_max,
            lang:this.state.lang,
            type:this.state.type,
            video:JSON.stringify(this.state.video)
        }
        
        if (this.state.video.indexOf(null)==-1){
            addCycle(data).then(
                (res)=>{
                    console.log(res)
                    if(res.status==200){
                        this.setState({error:'Enregistrement reussi avec succes'})
                    }
                    else{
                        this.setState({error:"Une erreur s'est produite."})
                    }
                }
              )
        }
       
    }
    
    changeVideoID=(index, id)=>{
        let array = this.state.video;
        array[index]=id
        this.setState({video:array})
    }

    render() {
        console.log('state',this.state)
        
        return(
            
            <div className='Main'>
                
                {this.state.error !== null && <p style={{color: "red"}}>{this.state.error}</p>}
                <form 
                    className="b-form-admin"
                    onSubmit={(e)=>{
                        this.onSubmitForm(e)
                    }}
                >
                    {this.props.user.infos &&<p className="title">Bienvenue {this.props.user.infos.firstName} sur votre portail admin</p>}
                    <p className="presentation">Ajouter un nouveau cycle :</p>
                    <input 
                        type="text"
                        placeholder="Nom du cycle"
                        onChange={(e)=>{
                            this.setState({name:e.currentTarget.value})
                        }}
                    />
                    <div className="select">
                        <p className="presentation" >Catégorie : </p>
                    <select value={this.state.category} onChange={(e)=>{
                        this.setState({category:e.currentTarget.value,step:this.props.theme.allTheme.filter(item=>item.id==e.currentTarget.value)[0].step})}
                        }>
                        {this.props.theme.allTheme.map((item)=>{
                            return(<option value={item.id}>{item.name}</option>)
                        })}                        
                    </select>
                   
                        <p className="presentation" >Langue : </p>
                    <select value={this.state.lang} onChange={(e)=>this.setState({lang:e.currentTarget.value})}>
                        <option value="FR">FR</option>
                        <option value="EN">EN</option>
                        <option value="ES">ES</option>
                    </select>
                    

                    
                        <p className="presentation" >Durée : </p>
                    <select value={this.state.duration} onChange={(e)=>this.setState({duration:e.currentTarget.value})}>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                    </select>
                    </div>
                    
                    <input 
                    className='age'
                        type="text"
                        placeholder="Age min"
                        onChange={(e)=>{
                            this.setState({age_min:e.currentTarget.value})
                        }}
                    /> <input
                    className='age'
                    type="text"
                    placeholder="Age max"
                    onChange={(e)=>{
                        this.setState({age_max:e.currentTarget.value})
                    }}
                    
                />
                    <table className="table">
                        <thead>
                            <tr>
                                <th colspan="2">Video du cycle {this.state.name}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.video.map((video,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>Video {index+1}</td>
                                        <td><PhotosUploader name={this.state.name} index={index} changeVideoID={this.changeVideoID}/></td>
                                    </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>

                    
                    <input type="submit" value="Enregistrer" name="Enregistrer" />
                    
                
                </form>
               
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);