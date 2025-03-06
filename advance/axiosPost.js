import axios from "axios";
import React, { useState } from "react";

function Axiospost() {
    const data = { fname: "", lastname: "" };
    const [userdata, setuserdata] = useState(data);

    const handledata = (e) => {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        axios.post("https://fake-json-api.mock.beeceptor.com/users", userdata)
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <>
            <label>First Name:</label>
            <input type="text" name="fname" value={userdata.fname} onChange={handledata} /><br />
            <label>Last Name:</label>
            <input type="text" name="lastname" value={userdata.lastname} onChange={handledata} /><br />
            <button onClick={handlesubmit}>Submit</button>
        </>
    );
}

export default Axiospost;
