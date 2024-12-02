import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import PageHeaders from '../../Utils/PageHeaders/PageHeaders';
import { useState } from 'react';

const Calender = () => {

    const scheduleData = [
        {
            "Id": 1,
            "Subject": "Explosion of Betelgeuse Star",
            "Location": "Space Center USA",
            "StartTime": "2021-01-10T04:00:00.000Z",
            "EndTime": "2021-01-10T05:30:00.000Z",
            "CategoryColor": "#1aaa55"
        },
        {
            "Id": 2,
            "Subject": "Thule Air Crash Report",
            "Location": "Newyork City",
            "StartTime": "2021-01-11T06:30:00.000Z",
            "EndTime": "2021-01-11T08:30:00.000Z",
            "CategoryColor": "#357cd2"
        },
        {
            "Id": 3,
            "Subject": "Blue Moon Eclipse",
            "Location": "Space Center USA",
            "StartTime": "2021-01-12T04:00:00.000Z",
            "EndTime": "2021-01-12T05:30:00.000Z",
            "CategoryColor": "#7fa900"
        },
        {
            "Id": 4,
            "Subject": "Meteor Showers in 2021",
            "Location": "Space Center USA",
            "StartTime": "2021-01-13T07:30:00.000Z",
            "EndTime": "2021-01-13T09:00:00.000Z",
            "CategoryColor": "#ea7a57"
        },
        {
            "Id": 5,
            "Subject": "Milky Way as Melting pot",
            "Location": "Space Center USA",
            "StartTime": "2021-01-14T06:30:00.000Z",
            "EndTime": "2021-01-14T08:30:00.000Z",
            "CategoryColor": "#00bdae"
        },
        {
            "Id": 6,
            "Subject": "Mysteries of Bermuda Triangle",
            "Location": "Bermuda",
            "StartTime": "2021-01-14T04:00:00.000Z",
            "EndTime": "2021-01-14T05:30:00.000Z",
            "CategoryColor": "#f57f17"
        },
        {
            "Id": 7,
            "Subject": "Glaciers and Snowflakes",
            "Location": "Himalayas",
            "StartTime": "2021-01-15T05:30:00.000Z",
            "EndTime": "2021-01-15T07:00:00.000Z",
            "CategoryColor": "#1aaa55"
        },
        {
            "Id": 8,
            "Subject": "Life on Mars",
            "Location": "Space Center USA",
            "StartTime": "2021-01-16T03:30:00.000Z",
            "EndTime": "2021-01-16T04:30:00.000Z",
            "CategoryColor": "#357cd2"
        },
        {
            "Id": 9,
            "Subject": "Alien Civilization",
            "Location": "Space Center USA",
            "StartTime": "2021-01-18T05:30:00.000Z",
            "EndTime": "2021-01-18T07:30:00.000Z",
            "CategoryColor": "#7fa900"
        },
        {
            "Id": 10,
            "Subject": "Wildlife Galleries",
            "Location": "Africa",
            "StartTime": "2021-01-20T05:30:00.000Z",
            "EndTime": "2021-01-20T07:30:00.000Z",
            "CategoryColor": "#ea7a57"
        },
        {
            "Id": 11,
            "Subject": "Best Photography 2021",
            "Location": "London",
            "StartTime": "2021-01-21T04:00:00.000Z",
            "EndTime": "2021-01-21T05:30:00.000Z",
            "CategoryColor": "#00bdae"
        },
        {
            "Id": 12,
            "Subject": "Smarter Puppies",
            "Location": "Sweden",
            "StartTime": "2021-01-08T04:30:00.000Z",
            "EndTime": "2021-01-08T06:00:00.000Z",
            "CategoryColor": "#f57f17"
        },
        {
            "Id": 13,
            "Subject": "Myths of Andromeda Galaxy",
            "Location": "Space Center USA",
            "StartTime": "2021-01-06T05:00:00.000Z",
            "EndTime": "2021-01-06T07:00:00.000Z",
            "CategoryColor": "#1aaa55"
        },
        {
            "Id": 14,
            "Subject": "Aliens vs Humans",
            "Location": "Research Center of USA",
            "StartTime": "2021-01-05T04:30:00.000Z",
            "EndTime": "2021-01-05T06:00:00.000Z",
            "CategoryColor": "#357cd2"
        },
        {
            "Id": 15,
            "Subject": "Facts of Humming Birds",
            "Location": "California",
            "StartTime": "2021-01-19T04:00:00.000Z",
            "EndTime": "2021-01-19T05:30:00.000Z",
            "CategoryColor": "#7fa900"
        },
        {
            "Id": 16,
            "Subject": "Sky Gazers",
            "Location": "Alaska",
            "StartTime": "2021-01-22T05:30:00.000Z",
            "EndTime": "2021-01-22T07:30:00.000Z",
            "CategoryColor": "#ea7a57"
        },
        {
            "Id": 17,
            "Subject": "The Cycle of Seasons",
            "Location": "Research Center of USA",
            "StartTime": "2021-01-11T00:00:00.000Z",
            "EndTime": "2021-01-11T02:00:00.000Z",
            "CategoryColor": "#00bdae"
        },
        {
            "Id": 18,
            "Subject": "Space Galaxies and Planets",
            "Location": "Space Center USA",
            "StartTime": "2021-01-11T11:30:00.000Z",
            "EndTime": "2021-01-11T13:00:00.000Z",
            "CategoryColor": "#f57f17"
        },
        {
            "Id": 19,
            "Subject": "Lifecycle of Bumblebee",
            "Location": "San Fransisco",
            "StartTime": "2021-01-14T00:30:00.000Z",
            "EndTime": "2021-01-14T02:00:00.000Z",
            "CategoryColor": "#7fa900"
        },
        {
            "Id": 20,
            "Subject": "Alien Civilization",
            "Location": "Space Center USA",
            "StartTime": "2021-01-14T10:30:00.000Z",
            "EndTime": "2021-01-14T12:30:00.000Z",
            "CategoryColor": "#ea7a57"
        },
        {
            "Id": 21,
            "Subject": "Alien Civilization",
            "Location": "Space Center USA",
            "StartTime": "2021-01-10T08:30:00.000Z",
            "EndTime": "2021-01-10T10:30:00.000Z",
            "CategoryColor": "#ea7a57"
        },
        {
            "Id": 22,
            "Subject": "The Cycle of Seasons",
            "Location": "Research Center of USA",
            "StartTime": "2021-01-12T09:00:00.000Z",
            "EndTime": "2021-01-12T10:30:00.000Z",
            "CategoryColor": "#00bdae"
        },
        {
            "Id": 23,
            "Subject": "Sky Gazers",
            "Location": "Greenland",
            "StartTime": "2021-01-15T09:00:00.000Z",
            "EndTime": "2021-01-15T10:30:00.000Z",
            "CategoryColor": "#ea7a57"
        },
        {
            "Id": 24,
            "Subject": "Facts of Humming Birds",
            "Location": "California",
            "StartTime": "2021-01-16T07:00:00.000Z",
            "EndTime": "2021-01-16T09:00:00.000Z",
            "CategoryColor": "#7fa900"
        }
    ]

    const [selectedDate, setSelectedDate] = useState(new Date(2021, 0, 10));

    const changeDate = (args) => {
        setSelectedDate(args.value);
    };

    const onDragStart = (arg) => {
        arg.navigation.enable = true;
    };

    return (
        <div className="m-2 md:m-10 p-2 md:p-5 md:py-10 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-3xl">

            <PageHeaders category={"App"} title={"Calender"} />

            {/* Date Picker to change selected date */}
            <DatePickerComponent value={selectedDate} change={changeDate} />

            {/* Calendar */}
            <div className="w-full max-w-screen-xl mx-auto mt-8">
                <ScheduleComponent
                    width="100%"
                    height="650px"
                    selectedDate={selectedDate}
                    eventSettings={{ dataSource: scheduleData }}
                    dragStart={onDragStart}
                >
                    <ViewsDirective>
                        <ViewDirective option="Day" />
                        <ViewDirective option="Week" />
                        <ViewDirective option="WorkWeek" />
                        <ViewDirective option="Month" />
                        <ViewDirective option="Agenda" />
                    </ViewsDirective>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
                </ScheduleComponent>
            </div>
        </div>
    )
}

export default Calender