import React from 'react';
import TopBar from './TopBar';
import {Summary} from './Summary';
import Footer from './Footer';

function ContentWrapper({cartProps, products}){

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <Summary cartProps={cartProps} products={products} />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;