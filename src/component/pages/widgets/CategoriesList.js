import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Loader from './Loader';
import NoticationSnackbar from './Snackbar';
import JokeDialogModal from './JokesModal';

function CategoriesList() {
    const [loading,setLoading] = useState(true);
    const [categories,setCategories] = useState([])
    const [err,setErr] = useState(null)


    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories')
        .then(function (response) {
            // handle success
            console.log(response.data);
            const resData = response.data
            setCategories(resData)
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            setErr("!An error occurred.")
        })
        .then(function () {
            // always executed
            setLoading(false)
        });
    }, [])

    return (
        <div className="">
            {loading &&
                <Loader/>
            }
            {err &&
                <NoticationSnackbar err={err} />
            }
            <div className="container">
                {categories !==null &&
                    <ul class="collection with-header" style={{width:"100%"}}>

                        <li class="collection-header "><h4>Categories</h4></li>
                        
                        <li class="collection-item " >
                            <div className="row">
                                {categories.map((item)=><CategoriesListtTab item={item}/> )}
                            </div>
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default CategoriesList


export function CategoriesListtTab(props) {
    const data = props.item
    return (
            <JokeDialogModal category={data} />
    )
}

