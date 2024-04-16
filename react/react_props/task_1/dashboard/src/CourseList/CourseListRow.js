import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow(props) {

    const { isHeader=false, textFirstCell, textSecondCell=null } = props;

    return (
        <tr>
            {isHeader ? (
                textSecondCell === null ? (
                <th colSpan={2}>{textFirstCell}</th>
                ) : (
                <>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </>
                )
            ) : (
                <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
                </>
            )}
        </tr>
    );
}


CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default CourseListRow;