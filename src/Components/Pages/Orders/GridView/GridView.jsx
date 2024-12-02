import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Edit, Toolbar, Filter, Aggregate, Resize, CommandColumn } from '@syncfusion/ej2-react-grids';

const GridView = () => {

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
        <GridComponent>
            <ColumnsDirective>
                {ordersGrid.map((item, index) => (
                    <ColumnDirective key={index} {...item} />
                ))}
            </ColumnsDirective>
        </GridComponent>
    );
}

export default GridView;
