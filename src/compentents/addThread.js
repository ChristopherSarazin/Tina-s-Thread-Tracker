import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";



const AddThread = () =>{

    const history = useHistory();

    let [formInfo, setFormInfo] = useState({
        title: "",
        colorName: "",
        colorCode: "",
        amountOwned: 0
    })

    let [validationErrors, setValadationError] = useState({})

    const changeHandler = (e)=>{
        console.log(e.target.name, e.target.value)
        setFormInfo({ 
            ...formInfo,
            [e.target.name]:e.target.value
            })
    }



    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("submitted with this info-->", formInfo)
        axios.post("http://localhost:8000/api/threads", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                if(res.data.err){
                    setValadationError(res.data.err.errors)
                } else {
                history.push("/allThreads")};
            })
            .catch(err=>console.log("error-->", err))
    }

    return (
        <div>
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="">Title:</label>
                <input onChange = {changeHandler} type="text" name="title" id="" className="form-control" />
                <p className="text-danger">{validationErrors.title? validationErrors.title.message:""}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Color Name:</label>
                <input onChange = {changeHandler} type="text" name="colorName" id="" className="form-control" />
                <p className="text-danger">{validationErrors.colorName? validationErrors.colorName.message:""}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Color Code:</label>
                <input onChange = {changeHandler} type="text" name="colorCode" id="" className="form-control" />
                <p className="text-danger">{validationErrors.colorCode? validationErrors.colorCode.message:""}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Amount Owned:</label>
                <input onChange = {changeHandler} type="number" name="amountOwned" id="" className="form-control" />
            </div>
            <input className= "btn btn-primary" type="submit" value="Add Thread" />
        </form>
        </div>
    )

}

export default AddThread;