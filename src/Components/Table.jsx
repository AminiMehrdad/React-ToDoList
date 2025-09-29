import { Component } from "react";
import TableRow from "./TableRow";

export default function Table(props) {
    
    if (props.list.length === 0) {
            return
    }
    const rows = props.list.map((text, index) => {       
        return (
            <table>
                <tr>
                    <th>N</th>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
                < TableRow 
                number= {index+1}
                text = {text.massage}
                />
            </table>
        )

    })

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {rows}
        </div>

    )

}