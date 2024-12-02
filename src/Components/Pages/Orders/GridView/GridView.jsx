import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Sort, Edit, Toolbar, Filter, Aggregate, Resize, CommandColumn } from '@syncfusion/ej2-react-grids';

const GridView = ({ dataSource, images }) => {

    // Function to get the image URL based on the ProductImage field value
    const getImageUrl = (productImage) => {
        const image = images.find(img => img.id === parseInt(productImage.replace('product', '')));
        return image ? image.image : ''; // Return the URL if found, otherwise empty string
    };

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
                    <ColumnDirective
                        key={index}
                        {...item}
                        template={(props) => {
                            if (item.headerText === "Image") {
                                return <img src={getImageUrl(props.ProductImage)} alt="Product" style={{ width: '100%', height: 'auto' }} />;
                            }
                            return props[item.field];
                        }}
                    />
                ))}
            </ColumnsDirective>
            <Inject services={[Page, Sort, Edit, Toolbar, Filter, Aggregate, Resize, CommandColumn]} />
        </GridComponent>
    );
}

export default GridView;
