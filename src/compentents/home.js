import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const Home = () =>{
    return (<>
    <h1>Tina's Thread Tracker</h1>
        <Link to={'/allThreads'} className="btn btn-info" >All Threads</Link>
        <br />
        <br />
        <br />
        <br />
        <Link to={'/ownedThreads'} className="btn btn-info" >Owned Threads</Link>
        <br />
        <br />
        <br />
        <br />
        <a href='https://redrockthreads.com/floriani-thread/?gclid=CjwKCAjwzOqKBhAWEiwArQGwaKHKX3Gk6Jhx7a5v7LbRGDdVv_dvU9JXELxUeOIx56FlXFJAdGR_pxoC9eQQAvD_BwE' className="btn btn-success" >Buy Some Threads</a>
        </>
    );
}
export default Home;