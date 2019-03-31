import React from 'react';
import '../styles/footer.css';

function Footer(){
    const curDate = new Date();
    const curYear = curDate.getFullYear();

    return(
        <footer className="page-footer font-small navbar-dark bg-dark p-1 p-md-5">
            <div className="container-fluid text-center text-md-left">
                <div className="row">
                    <div className="col-md-8 mt-md-0 mt-3">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>
                            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
                        </p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-3"/>
                    <div className="col-md-2 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Company</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright py-3 ml-3 text-center text-md-left">© {curYear} Insisten</div>
        </footer>
    );
}

export default Footer;