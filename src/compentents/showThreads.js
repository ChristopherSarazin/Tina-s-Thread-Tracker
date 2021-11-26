import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const AllThreads = () => {

    const [allThreads, setAllThreads] = useState([]);

    const [deleterClicked, setDeleterClicked] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/threads")
            .then(res => {
                console.log("res is this-->", res)
                setAllThreads(res.data.results)
            })
            .catch(err => console.log("Error-->", err))
    }, [deleterClicked])


    const deleter = (e, threadId) => {
        axios.delete(`http://localhost:8000/api/threads/${threadId}`)
            .then(res => {
                console.log("what was deleted-->", threadId)
                setDeleterClicked(!deleterClicked)
            })
            .catch(err => console.log("error", err))
    }


    return (
        <div>
            <h3>All Threads</h3>
            <Link to={'/ownedThreads'} className="btn btn-info" >Owned</Link>
            {allThreads.map((threads, idx) => {
                // return <div key={idx} className="card">
                //     <div className="card-body">
                //         <h4 className="card-title">{threads.colorName} {threads.amountOwned}
                //             <Link to={`/editThreads/${threads._id}`}>Add To Collection</Link>
                //             {/* <button onClick={(e) => deleter(e, threads._id)} className="btn btn-success">delete</button> */}
                //             </h4>
                //     </div>
                // </div>
                return( <div className="container">
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Color Name</th>
                            <th scope="col">Amount Owned</th>
                            <th scope="col">Actions</th>
                            <th scope="col">Buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{threads.title}</th>
                            <td  style={{backgroundColor: threads.colorCode}} >{threads.colorName}</td>
                            <td>{threads.amountOwned}</td>
                            <td><Link to={`/editThreads/${threads._id}`} className="btn btn-info">Add To Collection</Link></td>
                            <td><a href='https://redrockthreads.com/floriani-thread/?gclid=CjwKCAjwzOqKBhAWEiwArQGwaKHKX3Gk6Jhx7a5v7LbRGDdVv_dvU9JXELxUeOIx56FlXFJAdGR_pxoC9eQQAvD_BwE' className="btn btn-success" >Buy Some Threads</a></td>
                        </tr>
                    </tbody>
                </table>
                </div>)
            })}
        </div>
    );
};

export default AllThreads;