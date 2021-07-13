import React, { Component } from 'react'
import CategoriesList from './widgets/CategoriesList'
import SearchBar from './widgets/SearchBar'
import NoticationSnackbar from './widgets/Snackbar'
// import {

// } from './css/home.style'


export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:true
        }
    }

    render() {
        return (
            <div>
                <br/>
                <SearchBar/>
                <br/>
                <br/>
                <CategoriesList/>
                <NoticationSnackbar/>
            </div>
        )
    }
}
