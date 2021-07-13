import React,{Component,useRef, useState} from 'react'
import axios from 'axios'
import NoticationSnackbar from './Snackbar'



export default function SearchBar() {
    const [loading,setLoading] = useState(false)
    const [searchData,setSearchData] = useState(null)
    const [query,setQuery] = useState('')

    const handleSearch = (q)=>{
        // this.setstate({loading:true})
        // const q=this.state.query
        axios.get(`https://api.chucknorris.io/jokes/search?query=${q}`)
        .then(function (response) {
            // handle success
            console.log(response.data)
            const res= response.data
            setSearchData(res)
    
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return <NoticationSnackbar err={error}/>
        })
        .then(function () {
            // always executed
        // this.state({loading:false})

        })
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col s1"></div>
                    <div className="col s10">
                        <input placeholder="Search categories"  type="text" className="validate" style={{
                            border:"4px solid #ccc",
                            padding:"0px 10px",
                            borderRadius:"5px"
                        }} 
                            value={query}
                            onChange={
                                event => setQuery(event.target.value) 
                            }
                            onKeyPress={event =>{
                            if(event.key === 'Enter'){
                                handleSearch(event.target.value)
                            }
                        }}
                        />
                    </div>
                    <div className="col s1"></div>
                </div>
                {searchData !== null &&
                    <div className="row">
                        <div className="col s1"></div>
                        <div className="col s10">

                            <ul className="collection" style={{border:"none"}}>
                                {searchData.result.map((item)=> <li className="grey lighten-4 collection-item">{item.value}</li> )}
                                {searchData.result.length <= 0 && 
                                    <li className=" grey lighten-4 collection-item center">Sorry we couldn't find any joke related </li>
                                }
                            </ul>
                        </div>
                        <div className="col s1"></div>
                    </div>
                }
                
            </div>
        </div>
    )
}
