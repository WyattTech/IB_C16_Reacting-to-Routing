
import React from 'react';
import {useState, useEffect} from 'react'; //Another hook
import { Link , useParams } from 'react-router-dom';


const FilmsDetails = () => {

  const { detailsId }= useParams();
  const [details, setDetails] = useState();

  
 useEffect(()=>{
    fetch(`https://ghibliapi.herokuapp.com/films/${detailsId}`)
    .then(res => res.json())
    .then(data =>setDetails(data))
     .catch(e => console.log(e.message))

 }, [detailsId]);


  return (
   <div className="col-md-6">
       <div className="card shadow rounded">
           <div className="card-body">
               <h4 className="card-title">
               { details.description}
               </h4>
           </div>
       </div>
   </div>
  )
}

export default FilmsDetails;