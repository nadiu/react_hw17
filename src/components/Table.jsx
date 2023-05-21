import React from "react";

const Table = ({data}) => {
    return (
        <table className="table">
            <tbody>
                <tr className="title">
                    <th className="top">First name</th>
                    <th className="top">Last name</th>
                    <th className="top">Phone</th>
                    <th className="top">Gender</th>
                </tr>
                {data.map((item) =>(
                <tr className="table_body">
                    <td className="main">{item.firstName}</td>
                    <td className="main">{item.lastName}</td>
                    <td className="main">{item.phone}</td>
                    <td className="main">{item.gender}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
export default Table;