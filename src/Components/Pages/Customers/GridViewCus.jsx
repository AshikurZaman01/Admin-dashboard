import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Edit, Toolbar, Filter, Resize, CommandColumn, ExcelExport, PdfExport } from '@syncfusion/ej2-react-grids';

const GridViewCus = ({ dataSource }) => {
    const customersGrid = [
        { type: 'checkbox', width: '50' },
        {
            headerText: 'Name',
            width: '150',
            textAlign: 'Center'
        },
        {
            field: 'CustomerName',
            headerText: 'Customer Name',
            width: '150',
            textAlign: 'Center'
        },
        {
            field: 'ProjectName',
            headerText: 'Project Name',
            width: '150',
            textAlign: 'Center'
        },
        {
            field: 'Status',
            headerText: 'Status',
            width: '130',
            textAlign: 'Center',
            template: (props) => {
                return <span style={{ backgroundColor: props.StatusBg, padding: '5px', borderRadius: '5px' }}>{props.Status}</span>;
            }
        },
        {
            field: 'Weeks',
            headerText: 'Weeks',
            width: '100',
            textAlign: 'Center'
        },
        {
            field: 'Budget',
            headerText: 'Budget',
            width: '100',
            textAlign: 'Center'
        },
        {
            field: 'Location',
            headerText: 'Location',
            width: '150',
            textAlign: 'Center'
        },
        {
            field: 'CustomerID',
            headerText: 'Customer ID',
            width: '120',
            textAlign: 'Center',
            isPrimaryKey: true,
        },
        {
            field: 'CustomerImage',
            headerText: 'Image',
            width: '120',
            textAlign: 'Center',
            template: (props) => {
                // Ensure you have a valid image path for each customer
                return <img src={`/path/to/images/${props.CustomerImage}.jpg`} alt="Customer" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />;
            }
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
                {customersGrid.map((item, index) => (
                    <ColumnDirective key={index} {...item} />
                ))}
            </ColumnsDirective>
            <Inject services={[Page, Sort, Edit, Toolbar, Filter, Resize, CommandColumn, ExcelExport, PdfExport]} />
        </GridComponent>
    );
}

export default GridViewCus;
