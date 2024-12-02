import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Edit, Toolbar, Filter, Aggregate, Resize, CommandColumn } from '@syncfusion/ej2-react-grids';

const GridView = ({ dataSource }) => {

    const ordersGrid = [
        {
            "headerText": "Image",
            "template": "gridOrderImage",
            "textAlign": "Center",
            "width": "120"
        },
        {
            "field": "OrderItems",
            "headerText": "Item",
            "width": "150",
            "editType": "dropdownedit",
            "textAlign": "Center"
        },
        {
            "field": "CustomerName",
            "headerText": "Customer Name",
            "width": "150",
            "textAlign": "Center"
        },
        {
            "field": "TotalAmount",
            "headerText": "Total Amount",
            "format": "C2",
            "textAlign": "Center",
            "editType": "numericedit",
            "width": "150"
        },
        {
            "headerText": "Status",
            "template": "gridOrderStatus",
            "field": "OrderItems",
            "textAlign": "Center",
            "width": "120"
        },
        {
            "field": "OrderID",
            "headerText": "Order ID",
            "width": "120",
            "textAlign": "Center"
        },
        {
            "field": "Location",
            "headerText": "Location",
            "width": "150",
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
                {ordersGrid.map((item, index) => (
                    <ColumnDirective key={index} {...item} />
                ))}
            </ColumnsDirective>
            <Inject services={[Page, Sort, Edit, Toolbar, Filter, Aggregate, Resize, CommandColumn]} />
        </GridComponent>
    );
}

export default GridView;
