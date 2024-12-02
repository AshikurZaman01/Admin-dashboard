import React from 'react';
import PageHeaders from "../../Utils/PageHeaders/PageHeaders"
import EmployeeGrid from "./EmployeeGrid"

const Employees = () => {

    // Employee Data (with unique employee entries)
    const employeData = [
        { "EmployeeID": 1, "Name": "Nancy Davolio", "Title": "Sales Representative", "HireDate": "01/02/2021", "Country": "USA", "ReportsTo": "Carson", "EmployeeImage": "avatar3" },
        { "EmployeeID": 2, "Name": "Nasimiyu Danai", "Title": "Marketing Head", "HireDate": "01/02/2021", "Country": "USA", "ReportsTo": "Carson", "EmployeeImage": "avatar3" },
        { "EmployeeID": 3, "Name": "Iulia Albu", "Title": "HR", "HireDate": "01/02/2021", "Country": "USA", "ReportsTo": "Carson", "EmployeeImage": "avatar4" },
        { "EmployeeID": 4, "Name": "Siegbert Gottfried", "Title": "Marketing Head", "HireDate": "01/02/2021", "Country": "USA", "ReportsTo": "Carson", "EmployeeImage": "avatar2" },
        { "EmployeeID": 5, "Name": "Omar Darobe", "Title": "HR", "HireDate": "01/02/2021", "Country": "USA", "ReportsTo": "Carson", "EmployeeImage": "avatar" },
        { "EmployeeID": 6, "Name": "Penjani Inyene", "Title": "Marketing Head", "HireDate": "01/02/2021", "Country": "USA", "ReportsTo": "Carson", "EmployeeImage": "avatar" },
        { "EmployeeID": 7, "Name": "Miron Vitold", "Title": "HR", "HireDate": "01/02/2021", "Country": "USA", "ReportsTo": "Carson", "EmployeeImage": "avatar2" },
    ];

    // Remove duplicates from employee data
    const uniqueEmployees = [...new Map(employeData.map(item => [item.EmployeeID, item])).values()];

    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">
            {/* Page Header */}
            <PageHeaders category={"Page"} title={"All Employees"} />

            {/* Employee Grid */}
            <EmployeeGrid dataSource={uniqueEmployees} />
        </div>
    )
}

export default Employees;
