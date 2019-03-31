import React, { Component } from 'react';
import '../styles/appheader.css';
import '../styles/form.css';

class EditPage extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <div className="app-header text-center text-md-left">
                    <span className="ml-0 ml-md-4">Edit Company</span>
                </div>
                <div className="form-body">
                    <form className="form-horizontal bg-primary mx-3 form-horizontal">
                        <div className="form-group mt-4 pt-3 pb-2 px-2">
                            <label className="control-label text-white" htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter the company's name here." required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="contact">Contact:</label>
                            <input type="text" className="form-control" id="contact" placeholder="Enter the company's contact here." required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="phone">Phone:</label>
                            <input type="text" className="form-control" id="phone" placeholder="Enter the company contact's phone number here." required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="street">Street Address:</label>
                            <input type="text" className="form-control" id="street" placeholder="Enter the company's street address here." required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="city">City:</label>
                            <input type="text" className="form-control" id="city" placeholder="Enter the company's city here." required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="state">State:</label>
                            <input type="text" className="form-control" id="state" placeholder="Enter the company's state here." required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="zipCode">Zip Code:</label>
                            <input type="text" className="form-control" id="zipCode" placeholder="Enter the company's zip code here." required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="status">Status:</label>
                            <input type="text" className="form-control" id="status" placeholder="Enter the company's status here." required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="financialPerf">Financial Performance:</label>
                            <input type="text" className="form-control" id="financialPerf" placeholder="Enter the company's financial performance here." required/>
                        </div>
                        <hr/>
                        <div className="text-center pb-3">
                            <button type="submit" className="btn btn-dark">Edit</button>
                            <button className="btn btn-danger ml-2">Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditPage;