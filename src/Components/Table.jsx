import { Component } from "react";
import TableRow from "./TableRow";

export default function Table(props) {

    if (props.list.length === 0) {
        return
    }
    const rows = props.list.map((text, index) => {        
        return (


            < TableRow
                key={text.id ?? index}
                number={index + 1}
                text={text.masage}
                handleDeleat={props.handleDeleat}
                handleUpdate = {props.handleUpdate}
            />
        )

    })

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table>
                <thead>
                    <tr>
                        <th>N</th>
                        <th>Task</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {rows}
                </tbody>

            </table>
        </div>

    )

}