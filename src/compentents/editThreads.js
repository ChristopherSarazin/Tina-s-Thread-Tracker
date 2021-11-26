import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";



const EditThread = () => {

    const { id } = useParams();
    const history = useHistory();

    let [formInfo, setFormInfo] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/threads/${id}`)
            .then(res => {
                console.log("response-->", res)
                setFormInfo(res.data.results)
            })
            .catch(err => console.log("error ", err))
    }, [])

    let [validationErrors, setValadationError] = useState({})

    const changeHandler = (e) => {
        console.log(e.target.name, e.target.value)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }



    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submitted with this info-->", formInfo)
        axios.put(`http://localhost:8000/api/threads/${id}`, formInfo)
            .then(res => {
                console.log("response after submitting post request-->", res)
                if (res.data.err) {
                    setValadationError(res.data.err.errors)
                } else {
                    history.push("/allThreads")
                };
            })
            .catch(err => console.log("error-->", err))
    }

    return (
        <div>
            <Link to={`/allThreads`}>Home</Link>
            <form onSubmit={submitHandler}>
                {/* <div className="form-group">
                    <label htmlFor="">Title:</label>
                    <input onChange={changeHandler} type="text" name="title" id="" className="form-control" value={formInfo.title} />
                    <p className="text-danger">{validationErrors.title ? validationErrors.title.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Color Name:</label>
                    <input onChange={changeHandler} type="text" name="colorName" id="" className="form-control" value={formInfo.colorName} />
                    <p className="text-danger">{validationErrors.colorName ? validationErrors.colorName.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Color Code:</label>
                    <input onChange={changeHandler} type="text" name="colorCode" id="" className="form-control" value={formInfo.colorCode} />
                    <p className="text-danger">{validationErrors.colorCode ? validationErrors.colorCode.message : ""}</p>
                </div> */}
                <div className="form-group">
                    <label htmlFor="">Amount Owned:</label>
                    <input onChange={changeHandler} type="number" name="amountOwned" id="" className="form-control" value={formInfo.amountOwned} />
                </div>
                <input className="btn btn-primary" type="submit" value="Edit Thread" />
            </form>
        </div>
    )

}

export default EditThread;