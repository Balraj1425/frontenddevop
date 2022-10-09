import React, { useRef } from 'react';
import axios from 'axios';

const Contactus = props => {
    let nameInputRef = useRef();
    let emailInputRef = useRef();
    let commentInputRef = useRef();

    const handleSubmit = () => {
        let payload = {
            name: nameInputRef.current.value,
            email: emailInputRef.current.value,
            comment: commentInputRef.current.value
        }
        console.log({payload})
        axios.post("http://13.126.35.248:3001/data/addData", payload).then((res) => {
            console.log({res});
        });
    }
    return (
        <>
            <div className='container'>
                <h2>Contact Us</h2>
                <div className='row'>
                    <div className="col-sm-12">
                        <label htmlFor="firstName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" ref={nameInputRef}/>
                    </div>
                    <div className="col-sm-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="" ref={emailInputRef}/>                 
                    </div>
                    <div className="col-sm-12">
                        <label htmlFor="comments" className="form-label">Comments</label>
                        <textarea className="form-control" id="comments"  ref={commentInputRef}></textarea>
                    </div>
                </div>
                <button className='btn btn-primary mt-4' onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Contactus