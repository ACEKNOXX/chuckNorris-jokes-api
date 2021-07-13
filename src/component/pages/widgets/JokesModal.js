import React, {useCallback, useEffect,useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import NoticationSnackbar from './Snackbar';

export default function JokeDialogModal(props) {
    const category = props.category
    const [open, setOpen] = React.useState(false);
    const [err,setErr] = useState(null)
    const [categoryData,setCategroyData] = useState(null)
    const [count,setCount] = useState(0)


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
const fetchData =(category)=>{

    axios.get(`https://api.chucknorris.io/jokes/random?categoy=${category}`)
    .then(function (response) {
        // handle success
        // console.log(response.data.id)
        const res= response.data
        setCategroyData(res)
        console.log(categoryData)

    })
    .catch(function (error) {
        // handle error
        console.log(error);
        return <NoticationSnackbar err={error}/>
    })
    .then(function () {
        // always executed
    })
 
};


  useEffect(() => {
    
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(function (response) {
        // handle success
        // console.log(response.data.id)
        const res= response.data

        setCategroyData(res)
        console.log(categoryData)

    })
    .catch(function (error) {
        // handle error
        console.log(error);
        setErr("!An error occurred.")
    })
    .then(function () {
        // always executed
    })
  }, [])

 
  return (
    <div>
        {categoryData !== null &&
            <div className="col  center">
                <Button variant="outlined" color="primary"   onClick={()=>{
                    handleClickOpen();
                    if( count>0  ){
                        fetchData(category)
                    }
                    var k = count + 1
                    setCount(k)

                }}>
                    {category}
                </Button>
            </div>
            
        }    

        
        {categoryData !== null  &&
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                <img src={categoryData.icon_url} alt="icon_url" />
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <div className="row">
                       
                        <div className="col s12 ">
                            {categoryData.value} 
                        </div>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        }
        
    </div>
  );
}



