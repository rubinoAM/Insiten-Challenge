import React, { Component } from 'react';
import '../styles/appheader.css';
import '../styles/form.css';

//Utilities
import Companies from '../utilities/companies';

class EditPage extends Component{
    constructor(){
        super()
    }

    componentWillUnmount(){
        window.scrollTo(0,0);
    }

    render(){
        //console.log(Companies);
        //console.log(window.location.pathname)
        const companyPathName = window.location.pathname.split('/');
        const companyId = companyPathName[companyPathName.length-1];

        let companyData = Companies[companyId];
        console.log(companyData);

        return(
            <div>
                <div className="app-header text-center text-md-left">
                    <span className="ml-0 ml-md-4">Edit Company</span>
                </div>
                <div className="form-body">
                    <form className="form-horizontal bg-primary mx-3 form-horizontal">
                        <div className="form-group mt-4 pt-3 pb-2 px-2">
                            <label className="control-label text-white" htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" value={companyData.name} required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="contact">Contact:</label>
                            <input type="text" className="form-control" id="contact" value={companyData.contact} required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="phone">Phone:</label>
                            <input type="text" className="form-control" id="phone" value={companyData.phone} required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="street">Street Address:</label>
                            <input type="text" className="form-control" id="street" value={companyData.address.street} required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="city">City:</label>
                            <input type="text" className="form-control" id="city" value={companyData.address.city} required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="state">State:</label>
                            <input type="text" className="form-control" id="state" value={companyData.address.state} required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="zipCode">Zip Code:</label>
                            <input type="text" className="form-control" id="zipCode" value={companyData.address.zip} required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="status">Status:</label>
                            <input type="text" className="form-control" id="status" value={companyData.status} required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <label className="control-label text-white" htmlFor="financialPerf">Financial Performance:</label>
                            <input type="text" className="form-control" id="financialPerf" value={companyData.financialPerf} required/>
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