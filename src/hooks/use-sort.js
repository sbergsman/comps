import { useState } from "react";

function useSort(data, config) {

    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const setSortLabel = (label) => {
        if (sortOrder === null || sortBy !== label) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    };

    // ------------------------------------------------------
    // - only sort if sortOrder and sortBy are not null
    // - make a copy of the data prop
    // - find the correct sortValue function
    // ------------------------------------------------------

    let sortedData = data;
    if (sortBy && sortOrder){
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a,b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return {
        sortOrder,
        sortBy,
        sortedData,
        setSortLabel
    };

}

export default useSort;