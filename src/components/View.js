import React, { useEffect, useState } from "react";
import axios from "axios";
import './View.css'

const Viewcomments = props => {
    const [data, setData] = useState();
    useEffect(()=>{
        axios.get("http://13.126.35.248:3001/data/view")
            .then((res) => {
              console.log({res});
              setData(res.data);
            })
            .catch((err) => {
              console.log("err", err);
            });
    },[])
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Comments</th> 
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((row)=>{
                        return(
                            <tr>
                                <td>{row.Name}</td>
                                <td>{row.Email}</td>
                                <td>{row.Comment}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Viewcomments