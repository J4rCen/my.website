import React from "react";
import "./Certificates.scss";
import TableContents from "../../Components/TableContents";
import SlideList from "../../Components/SlideList";
import certificate from "./certificate";


const Certificates = () => {
    return( 
        <div className="div_certificates block">
            <TableContents link="certificates" content="Certificates"/>
            <div className="certificates_table block">
                <SlideList data={certificate}/>
            </div>
        </div>
    )
}

export default Certificates