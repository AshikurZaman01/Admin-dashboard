import PageHeaders from "../../Utils/PageHeaders/PageHeaders"
import GridView from "./GridView/GridView";


const Orders = () => {

    const images = [
        { id: 1, image: "https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/data/product1.jpg?raw=true" },
        { id: 2, image: "https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/data/product2.jpg?raw=true" },
        { id: 3, image: "https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/data/product3.jpg?raw=true" },
        { id: 4, image: "https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/data/product4.jpg?raw=true" },
        { id: 5, image: "https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/data/product5.jpg?raw=true" },
        { id: 6, image: "https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/data/product6.jpg?raw=true" },
        { id: 7, image: "https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/data/product7.jpg?raw=true" },
        { id: 8, image: "https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/data/product8.jpg?raw=true" },
        { id: 9, image: "https://github.com/adrianhajdin/project_syncfusion_dashboard/blob/main/src/data/product9.jpg?raw=true" },
    ]

    const ordersData = [
        {
            "OrderID": 10248,
            "CustomerName": "Vinet",
            "TotalAmount": 32.38,
            "OrderItems": "Fresh Tomato",
            "Location": "USA",
            "Status": "pending",
            "StatusBg": "#FB9678",
            "ProductImage": "product6"
        },
        {
            "OrderID": 345653,
            "CustomerName": "Carson Darrin",
            "TotalAmount": 56.34,
            "OrderItems": "Butter Scotch",
            "Location": "Delhi",
            "Status": "complete",
            "StatusBg": "#8BE78B",
            "ProductImage": "product5"
        },
        {
            "OrderID": 390457,
            "CustomerName": "Fran Perez",
            "TotalAmount": 93.31,
            "OrderItems": "Candy Gucci",
            "Location": "New York",
            "Status": "active",
            "StatusBg": "#03C9D7",
            "ProductImage": "product7"
        },
        {
            "OrderID": 893486,
            "CustomerName": "Anika Viseer",
            "TotalAmount": 93.31,
            "OrderItems": "Night Lamp",
            "Location": "Germany",
            "Status": "canceled",
            "StatusBg": "#FF5C8E",
            "ProductImage": "product4"
        },
        {
            "OrderID": 748975,
            "CustomerName": "Miron Vitold",
            "TotalAmount": 23.99,
            "OrderItems": "Healthcare Erbology",
            "Location": "Spain",
            "Status": "rejected",
            "StatusBg": "red",
            "ProductImage": "product1"
        },
        {
            "OrderID": 94757,
            "CustomerName": "Omar Darobe",
            "TotalAmount": 95.99,
            "OrderItems": "Makeup Lancome Rouge",
            "Location": "USA",
            "Status": "canceled",
            "StatusBg": "#FF5C8E",
            "ProductImage": "product2"
        },
        {
            "OrderID": 944895,
            "CustomerName": "Lulia albu",
            "TotalAmount": 17.99,
            "OrderItems": "Skincare",
            "Location": "USA",
            "Status": "active",
            "StatusBg": "#03C9D7",
            "ProductImage": "product3"
        },
        {
            "OrderID": 845954,
            "CustomerName": "Penjani",
            "TotalAmount": 59.99,
            "OrderItems": "Headphone",
            "Location": "USA",
            "Status": "complete",
            "StatusBg": "#8BE78B",
            "ProductImage": "product4"
        },
        {
            "OrderID": 845954,
            "CustomerName": "Jie Yan",
            "TotalAmount": 87.99,
            "OrderItems": "Shoes",
            "Location": "USA",
            "Status": "pending",
            "StatusBg": "#FB9678",
            "ProductImage": "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg"
        },
        {
            "OrderID": 874534,
            "CustomerName": "Danai",
            "TotalAmount": 122.99,
            "OrderItems": "Watch",
            "Location": "USA",
            "Status": "canceled",
            "StatusBg": "#FF5C8E",
            "ProductImage": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
        },
        {
            "OrderID": 38489,
            "CustomerName": "Miron",
            "TotalAmount": 87.99,
            "OrderItems": "Ice Cream",
            "Location": "USA",
            "Status": "active",
            "StatusBg": "#03C9D7",
            "ProductImage": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg"
        },
        {
            "OrderID": 24546,
            "CustomerName": "Frank",
            "TotalAmount": 84.99,
            "OrderItems": "Pan Cake",
            "Location": "Delhi",
            "Status": "complete",
            "StatusBg": "#8BE78B",
            "ProductImage": "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        },
        {
            "OrderID": 874534,
            "CustomerName": "Danai",
            "TotalAmount": 122.99,
            "OrderItems": "Watch",
            "Location": "USA",
            "Status": "canceled",
            "StatusBg": "#FF5C8E",
            "ProductImage": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*"
        }
    ]



    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">
            {/* Page Header */}
            <PageHeaders category={"Orders"} title={"All Orders"} />

            {/* Grid View */}
            <GridView dataSource={ordersData} images={images} />
        </div>
    )
}

export default Orders