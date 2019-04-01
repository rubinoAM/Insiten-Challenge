import React, { Component } from 'react';
import '../styles/appheader.css';
import '../styles/form.css';

//Utilities
import Companies from '../utilities/companies';

class EditPage extends Component{
    componentWillUnmount(){
        window.scrollTo(0,0);
    }

    submitEdits = (e)=>{
        e.preventDefault();
        const companyId = document.getElementById('id').value;
        const companyName = document.getElementById('name').value;
        const companyContact = document.getElementById('contact').value;
        const companyPhone = document.getElementById('phone').value;
        const companyStreet = document.getElementById('street').value;
        const companyCity = document.getElementById('city').value;
        const companyState = document.getElementById('state').value;
        const companyZip = document.getElementById('zipCode').value;
        const companyStatus = document.getElementById('status').value;
        const companyFinancialPerf = document.getElementById('financialPerf').value;

        const editedCompany = {
            id:companyId,
            name:companyName,
            contact:companyContact,
            phone:companyPhone,
            address:{
                street:companyStreet,
                city:companyCity,
                state:companyState,
                zip:companyZip
            },
            status:companyStatus,
            financialPerf:companyFinancialPerf,
        }

        Companies.splice(companyId,1,editedCompany);
        this.props.history.push('/');
    }

    render(){
        const companyPathName = window.location.pathname.split('/');
        const companyId = companyPathName[companyPathName.length-1];
        let companyData = Companies[companyId];

        return(
            <div>
                <div className="app-header text-center text-md-left">
                    <span className="ml-0 ml-md-4">Edit Company</span>
                </div>
                <div className="form-body">
                    <form className="form-horizontal bg-primary mx-3 form-horizontal" onSubmit={this.submitEdits}>
                        <input type="hidden" id="id" defaultValue={companyId}/>
                        <div className="form-group mt-4 pt-3 pb-2 px-2">
                            <label className="control-label text-white" htmlFor="name">Name:</label>
                            <input type="text" className="form-control" id="name" defaultValue={companyData.name} required/>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <div class="row">
                                <div class="col-sm-6">
                                    <label className="control-label text-white" htmlFor="contact">Contact:</label>
                                    <input type="text" className="form-control" id="contact" defaultValue={companyData.contact} required/>
                                </div>
                                <div class="col-sm-6 mt-3 mt-sm-0">
                                    <label className="control-label text-white" htmlFor="phone">Phone:</label>
                                    <input type="text" className="form-control" id="phone" defaultValue={companyData.phone} required/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <div class="row">
                                <div className="col-sm-6">
                                    <label className="control-label text-white" htmlFor="street">Street Address:</label>
                                    <input type="text" className="form-control" id="street" defaultValue={companyData.address.street} required/>
                                </div>
                                <div className="col-sm-6 mt-3 mt-sm-0">
                                    <label className="control-label text-white" htmlFor="city">City:</label>
                                    <input type="text" className="form-control" id="city" defaultValue={companyData.address.city} required/>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div className="col-sm-6">
                                    <label className="control-label text-white" htmlFor="state">State:</label>
                                    <input type="text" className="form-control" id="state" defaultValue={companyData.address.state} required/>
                                </div>
                                <div className="col-sm-6 mt-3 mt-sm-0">
                                    <label className="control-label text-white" htmlFor="zipCode">Zip Code:</label>
                                    <input type="text" className="form-control" id="zipCode" defaultValue={companyData.address.zip} required/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="form-group p-2">
                            <div class="row">
                                <div className="col-sm-6">
                                    <label className="control-label text-white" htmlFor="status">Status:</label>
                                    <input type="text" className="form-control" id="status" defaultValue={companyData.status} required/>
                                </div>
                                <div className="col-sm-6 mt-3 mt-sm-0">
                                    <label className="control-label text-white" htmlFor="financialPerf">Financial Performance:</label>
                                    <input type="text" className="form-control" id="financialPerf" defaultValue={companyData.financialPerf} required/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="text-center pb-3">
                            <button type="submit" className="btn btn-dark">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditPage;