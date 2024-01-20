import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Display(){
    // useState and usage
    const [data, setData]=useState([]);
    const [select, setSelect]=useState(null);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err));
    },[])
// React LifeCyle Events 
// why to use hooks
// useEffect and it's differnt behaviour 
// what is callback function
    

   const viewData=(rowData)=>{
       setSelect(rowData);
   }
    return(
        <>
       <div className="mt-3">
            <table className="table">
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                    <th>View Your Data</th>
                </tr>
                <tbody>
                    {
                    // What is map and its usage 
                    // other array methods 
                    // what is the first parameter and what is the second parameter 
                    data.map((user,index) => {
                        return <tr key={index}>
                            <td>{user.userId}</td>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                            <td>{user.body}</td>
                            <td><button onClick={()=>viewData(user)}>view</button></td>
                        </tr>
                    })
                }
                </tbody>
            </table>
    </div> 
    {select && (
        <div>
            <table>
                <tr>
                <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
                <tr>
                    <td>{select.userId}</td>
                    <td>{select.id}</td>
                    <td>{select.title}</td>
                    <td>{select.body}</td>
                </tr>
            </table>
        </div>
    )
}
        </>
    )
}
export default Display;