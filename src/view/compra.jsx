import React, { Component } from "react";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";


class Home extends Component {

    showAlert = () => {
        Swal.fire({
            title: "Success",
            text: "Alert successful",
            icon: "success",
            confirmButtonText: "OK",
          });
    }

    render(){
        return(
            <div className="container d-flex justify-content-center">
               <button onClick={this.showAlert} className="btn btn-primary btn-lg">Show Alert</button>
            </div>
        )
    }
}

export default Home