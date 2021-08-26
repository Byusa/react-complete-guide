import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-Us', {month: 'long'});
    const year = props.date.toLocaleString('en-Us', {year: '2-digit'});
    const day = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date_month"> {month}</div>
            <div className="expense-date_year">{year}</div>
            <div className="expense-date_day">{day}</div>
        </div>
    )
}
export default ExpenseDate;
