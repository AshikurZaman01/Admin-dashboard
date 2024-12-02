import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Edit, Toolbar, Filter, Resize, CommandColumn, ExcelExport, PdfExport, Search } from '@syncfusion/ej2-react-grids';

const EmployeeGrid = ({ dataSource }) => {

    // Define grid columns
    const employeGrid = [
        {
            "headerText": "Employee",
            "width": "150",
            "template": (props) => (
                <div className="employee-profile">
                    <img src={`path_to_images/${props.EmployeeImage}.png`} alt={props.Name} className="rounded-full w-12 h-12" />
                </div>
            ),
            "textAlign": "Center"
        },
        {
            "field": "Name",
            "headerText": "Employee Name",
            "width": "200",
            "textAlign": "Center"
        },
        {
            "field": "Title",
            "headerText": "Designation",
            "width": "170",
            "textAlign": "Center"
        },
        {
            "field": "Country",
            "headerText": "Country",
            "width": "120",
            "textAlign": "Center"
        },
        {
            "field": "HireDate",
            "headerText": "Hire Date",
            "width": "135",
            "format": "yyyy-MM-dd", // Adjusted date format
            "textAlign": "Center"
        },
        {
            "field": "ReportsTo",
            "headerText": "Reports To",
            "width": "120",
            "textAlign": "Center"
        },
        {
            "field": "EmployeeID",
            "headerText": "Employee ID",
            "width": "125",
            "textAlign": "Center"
        }
    ];

    return (
        <GridComponent
            id='gridComp'
            dataSource={dataSource}
            allowPaging={true}
            allowSorting={true}
            pageSettings={{ pageSize: 5 }}
            rowHeight={60}
            toolbar={["Search", "PdfExport", "ExcelExport"]}
            filterSettings={{ type: 'Menu' }}
            style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
        >
            <ColumnsDirective>
                {employeGrid.map((item) => (
                    <ColumnDirective key={item.field} {...item} />
                ))}
            </ColumnsDirective>
            <Inject services={[Page, Search, Sort, Edit, Toolbar, Filter, Resize, CommandColumn, ExcelExport, PdfExport]} />
        </GridComponent>
    );
}

export default EmployeeGrid;
