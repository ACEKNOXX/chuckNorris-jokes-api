import React from 'react'

export default function Loader() {
    return (
        <div className="container ">
            <div className="row">
                <div className="col s12 m4 l4"></div>
                <div className="col s12 m4 l4 center">
                    <h5>Loading</h5>
                    <div class="progress" style={{
                        height:"10px",
                        borderRadius:"10px"
                    }}>
                        <div class="indeterminate"></div>
                    </div>
                </div>
                <div className="col s12 m4 l4"></div>
            </div>
           
        </div>
    )
}
