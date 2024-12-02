import PageHeaders from "../../Utils/PageHeaders/PageHeaders"
import GridViewCus from "./GridViewCus"

const Customers = () => {

    const customerData = [
        {
            "CustomerID": 1001,
            "CustomerName": "Nirav Joshi",
            "CustomerEmail": "nirav@gmail.com",
            "CustomerImage": "avatar2",
            "ProjectName": "Hosting Press HTML",
            "Status": "Active",
            "StatusBg": "#8BE78B",
            "Weeks": "40",
            "Budget": "$2.4k",
            "Location": "India"
        },
        {
            "CustomerID": 1002,
            "CustomerName": "Sunil Joshi",
            "CustomerEmail": "sunil@gmail.com",
            "ProjectName": "Elite Admin",
            "Status": "Active",
            "CustomerImage": "avatar3",
            "StatusBg": "#8BE78B",
            "Weeks": "11",
            "Budget": "$3.9k",
            "Location": "India"
        },
        {
            "CustomerID": 1003,
            "CustomerName": "Andrew McDownland",
            "CustomerEmail": "andrew@gmail.com",
            "ProjectName": "Real Homes WP Theme",
            "Status": "Pending",
            "CustomerImage": "avatar4",
            "StatusBg": "#FEC90F",
            "Weeks": "19",
            "Budget": "$24.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1004,
            "CustomerName": "Christopher Jamil",
            "CustomerEmail": "jamil@gmail.com",
            "ProjectName": "MedicalPro WP Theme",
            "Status": "Completed",
            "CustomerImage": "avatar",
            "StatusBg": "#8BE78B",
            "Weeks": "34",
            "Budget": "$16.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1005,
            "CustomerName": "Michael",
            "CustomerEmail": "michael@gmail.com",
            "ProjectName": "Weekly WP Theme",
            "Status": "Cancel",
            "CustomerImage": "avatar2",
            "StatusBg": "red",
            "Weeks": "34",
            "Budget": "$16.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1006,
            "CustomerName": "Nirav Joshi",
            "CustomerEmail": "nirav@gmail.com",
            "CustomerImage": "avatar2",
            "ProjectName": "Hosting Press HTML",
            "Status": "Active",
            "StatusBg": "#8BE78B",
            "Weeks": "40",
            "Budget": "$2.4k",
            "Location": "India"
        },
        {
            "CustomerID": 1007,
            "CustomerName": "Sunil Joshi",
            "CustomerEmail": "sunil@gmail.com",
            "ProjectName": "Elite Admin",
            "Status": "Active",
            "CustomerImage": "avatar3",
            "StatusBg": "#8BE78B",
            "Weeks": "11",
            "Budget": "$3.9k",
            "Location": "India"
        },
        {
            "CustomerID": 1008,
            "CustomerName": "Andrew McDownland",
            "CustomerEmail": "andrew@gmail.com",
            "ProjectName": "Real Homes WP Theme",
            "Status": "Pending",
            "CustomerImage": "avatar4",
            "StatusBg": "#FEC90F",
            "Weeks": "19",
            "Budget": "$24.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1009,
            "CustomerName": "Christopher Jamil",
            "CustomerEmail": "jamil@gmail.com",
            "ProjectName": "MedicalPro WP Theme",
            "Status": "Completed",
            "CustomerImage": "avatar",
            "StatusBg": "#8BE78B",
            "Weeks": "34",
            "Budget": "$16.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1010,
            "CustomerName": "Michael",
            "CustomerEmail": "michael@gmail.com",
            "ProjectName": "Weekly WP Theme",
            "Status": "Cancel",
            "CustomerImage": "avatar2",
            "StatusBg": "red",
            "Weeks": "34",
            "Budget": "$16.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1011,
            "CustomerName": "Nirav Joshi",
            "CustomerEmail": "nirav@gmail.com",
            "CustomerImage": "avatar2",
            "ProjectName": "Hosting Press HTML",
            "Status": "Active",
            "StatusBg": "#8BE78B",
            "Weeks": "40",
            "Budget": "$2.4k",
            "Location": "India"
        },
        {
            "CustomerID": 1012,
            "CustomerName": "Sunil Joshi",
            "CustomerEmail": "sunil@gmail.com",
            "ProjectName": "Elite Admin",
            "Status": "Active",
            "CustomerImage": "avatar3",
            "StatusBg": "#8BE78B",
            "Weeks": "11",
            "Budget": "$3.9k",
            "Location": "India"
        },
        {
            "CustomerID": 1013,
            "CustomerName": "Andrew McDownland",
            "CustomerEmail": "andrew@gmail.com",
            "ProjectName": "Real Homes WP Theme",
            "Status": "Pending",
            "CustomerImage": "avatar4",
            "StatusBg": "#FEC90F",
            "Weeks": "19",
            "Budget": "$24.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1014,
            "CustomerName": "Christopher Jamil",
            "CustomerEmail": "jamil@gmail.com",
            "ProjectName": "MedicalPro WP Theme",
            "Status": "Completed",
            "CustomerImage": "avatar",
            "StatusBg": "#8BE78B",
            "Weeks": "34",
            "Budget": "$16.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1015,
            "CustomerName": "Michael",
            "CustomerEmail": "michael@gmail.com",
            "ProjectName": "Weekly WP Theme",
            "Status": "Cancel",
            "CustomerImage": "avatar2",
            "StatusBg": "red",
            "Weeks": "34",
            "Budget": "$16.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1016,
            "CustomerName": "Nirav Joshi",
            "CustomerEmail": "nirav@gmail.com",
            "CustomerImage": "avatar2",
            "ProjectName": "Hosting Press HTML",
            "Status": "Active",
            "StatusBg": "#8BE78B",
            "Weeks": "40",
            "Budget": "$2.4k",
            "Location": "India"
        },
        {
            "CustomerID": 1017,
            "CustomerName": "Sunil Joshi",
            "CustomerEmail": "sunil@gmail.com",
            "ProjectName": "Elite Admin",
            "Status": "Active",
            "CustomerImage": "avatar3",
            "StatusBg": "#8BE78B",
            "Weeks": "11",
            "Budget": "$3.9k",
            "Location": "India"
        },
        {
            "CustomerID": 1018,
            "CustomerName": "Andrew McDownland",
            "CustomerEmail": "andrew@gmail.com",
            "ProjectName": "Real Homes WP Theme",
            "Status": "Pending",
            "CustomerImage": "avatar4",
            "StatusBg": "#FEC90F",
            "Weeks": "19",
            "Budget": "$24.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1019,
            "CustomerName": "Christopher Jamil",
            "CustomerEmail": "jamil@gmail.com",
            "ProjectName": "MedicalPro WP Theme",
            "Status": "Completed",
            "CustomerImage": "avatar",
            "StatusBg": "#8BE78B",
            "Weeks": "34",
            "Budget": "$16.5k",
            "Location": "USA"
        },
        {
            "CustomerID": 1020,
            "CustomerName": "Michael",
            "CustomerEmail": "michael@gmail.com",
            "ProjectName": "Weekly WP Theme",
            "Status": "Cancel",
            "CustomerImage": "avatar2",
            "StatusBg": "red",
            "Weeks": "34",
            "Budget": "$16.5k",
            "Location": "USA"
        }
    ]


    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">
            {/* Page Header */}
            <PageHeaders category={"Page"} title={"All Customers"} />

            {/* Grid View */}
            <GridViewCus dataSource={customerData} />
        </div>
    )
}

export default Customers