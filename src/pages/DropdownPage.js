import Dropdown from "../components/Dropdown";
import { useState, useEffect } from "react";
function DroodownPage() {

    const [selection, setSelection] = useState(null);

    
    const handleSelect = (selectedOption) => {
        console.log('here');
        console.log(selectedOption);
        setSelection(selectedOption);
    };

    const options = [
        {
            label: 'Red',
            value: 'red'
        },
        {
            label: 'Green',
            value: 'green'
        },
        {
            label: 'Blue',
            value: 'blue'
        }
    ];

    return <Dropdown key={options.key} options={options} value={selection} onChange={handleSelect}/>;

}

export default DroodownPage;