import React from 'react';
import axios from 'axios';

const Contactus = props => {
    return (
        <>
            <div className='container'>
                <h2>Contact Us</h2>
                <div className='row'>
                    <div class="col-sm-12">
                        <label for="firstName" class="form-label">Name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" value=""/>
                    </div>
                    <div class="col-sm-12">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="" value="" required/>                 
                    </div>
                    <div class="col-sm-12">
                        <label for="comments" class="form-label">Comments</label>
                        <textarea class="form-control" id="comments"></textarea>
                    </div>
                </div>
                <button className='btn btn-primary mt-4'>Submit</button>
            </div>
        </>
    )
}

export default Contactus