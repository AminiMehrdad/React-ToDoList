
import { useState } from 'react';

export default function TableRow(props) {
    const [inputValue, setInputValue] = useState(props.text); // Local state for controlled input

    function handleRemove() {
        props.handleDeleat(props.number); // Fixed typo: handleDelete
    }

    function handleChange(e) {
        setInputValue(e.target.value); // Update local state on every change (live update)
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            props.handleUpdate(inputValue, props.number); // Call update on Enter key press
        }
    }

    return (
        <tr>
            <td>{props.number}</td>
            <td>
                <input 
                    type="text" 
                    className="form-control" 
                    value={inputValue} 
                    onChange={handleChange} 
                    onKeyDown={handleKeyDown} // Detect Enter key
                />
            </td>
            <td>
                <button type="button" className="close" aria-label="Close" onClick={handleRemove}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </td>
        </tr>
    );
}
