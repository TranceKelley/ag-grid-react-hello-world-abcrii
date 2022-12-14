import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
//import "@ag-grid-community/core";
//import "@ag-grid-community/react";
import './style.css';
//import  '@ag-grid-enterprise/row-grouping';
//import '@ag-grid-community/client-side-row-model';
//import { getData } from './data';

const App = () => {
    const gridRef = useRef();
    const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
    const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
    const [rowData] = useState([
    
        {
            "RONumber": "6478214",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Kiaan French",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "320",
            "PayType": "C",
            "TotalDue": "489.98",
            "ShortVIN": "...X0W1RW",
            "VIN": "2G1LKAZS78CX0W1RW",
            "Year": "2017",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569192",
            "AppointmentTime": "4:00 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Joe Smith",
            "TechStatus": "Complete",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478215",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Gus Charlton",
            "Advisor": "Susan Barber",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "321",
            "PayType": "C",
            "TotalDue": "51.88",
            "ShortVIN": "...WTDXGR",
            "VIN": "2C3B94MJPG4WTDXGR",
            "Year": "2018",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569193",
            "AppointmentTime": "11:30 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Joe Smith",
            "TechStatus": "Complete",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478216",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Yosef Henderson",
            "Advisor": "King Villanueva",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "322",
            "PayType": "C",
            "TotalDue": "384.32",
            "ShortVIN": "...SWLNT7",
            "VIN": "7SAHUKME2C2SWLNT7",
            "Year": "2019",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569194",
            "AppointmentTime": "3:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Maria Sanchez",
            "TechStatus": "Complete",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Rental",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478217",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Aarron Bannister",
            "Advisor": "Susan Barber",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "323",
            "PayType": "W",
            "TotalDue": "0",
            "ShortVIN": "...XYR8FK",
            "VIN": "1FA9H1NB4RMXYR8FK",
            "Year": "2020",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569195",
            "AppointmentTime": "1:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Jeff Booker",
            "TechStatus": "Complete",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Warranty"
        },
        {
            "RONumber": "6478218",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Janelle Kirkpatrick",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "324",
            "PayType": "C",
            "TotalDue": "190.52",
            "ShortVIN": "...4G65Y0",
            "VIN": "2FCNWR5NXNG4G65Y0",
            "Year": "2021",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569196",
            "AppointmentTime": "5:10 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Joe Smith",
            "TechStatus": "Complete",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478219",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Nelson Weber",
            "Advisor": "Latisha Wyatt",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "325",
            "PayType": "W",
            "TotalDue": "0",
            "ShortVIN": "...Z0L7C3",
            "VIN": "1M339JACPDBZ0L7C3",
            "Year": "2022",
            "Make": "Chevrolet",
            "Model": "Impala",
            "AppointmentID": "9187569197",
            "AppointmentTime": "5:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Martin Hernandez",
            "TechStatus": "Complete",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Rideshare",
            "Payment Status": "Warranty"
        },
        {
            "RONumber": "6478220",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Shah Strickland",
            "Advisor": "Latisha Wyatt",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "326",
            "PayType": "C",
            "TotalDue": "538.62",
            "ShortVIN": "...6K3H8H",
            "VIN": "3MZ4VN5U7S86K3H8H",
            "Year": "2023",
            "Make": "Chevrolet",
            "Model": "Impala",
            "AppointmentID": "9187569198",
            "AppointmentTime": "12:00 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Maria Sanchez",
            "TechStatus": "Complete",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478221",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Ikra Rich",
            "Advisor": "Eliza George",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "327",
            "PayType": "C",
            "TotalDue": "59.89",
            "ShortVIN": "...VBKU7P",
            "VIN": "94DAGC4XK70VBKU7P",
            "Year": "2017",
            "Make": "Chevrolet",
            "Model": "Volt",
            "AppointmentID": "9187569199",
            "AppointmentTime": "12:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Jeff Booker",
            "TechStatus": "Complete",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Rental",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478222",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Darcy Livingston",
            "Advisor": "Eliza George",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "328",
            "PayType": "C",
            "TotalDue": "65.02",
            "ShortVIN": "...SVLK5W",
            "VIN": "ZCGG4807Z88SVLK5W",
            "Year": "2018",
            "Make": "Chevrolet",
            "Model": "Volt",
            "AppointmentID": "9187569200",
            "AppointmentTime": "8:30 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Joe Smith",
            "TechStatus": "Complete",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478223",
            "ROStatus": "Pre Invoice",
            "CustomerName": "Jardel Wiley",
            "Advisor": "King Villanueva",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "329",
            "PayType": "C",
            "TotalDue": "78.8",
            "ShortVIN": "...KC0X5E",
            "VIN": "JHFPHPE0362KC0X5E",
            "Year": "2019",
            "Make": "Chevrolet",
            "Model": "Corvett",
            "AppointmentID": "9187569201",
            "AppointmentTime": "10:56 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Martin Hernandez",
            "TechStatus": "Complete",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478224",
            "ROStatus": "Cashier",
            "CustomerName": "Suzanna Norris",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "330",
            "PayType": "C",
            "TotalDue": "48.97",
            "ShortVIN": "...TJH78T",
            "VIN": "2G2APETCVKMTJH78T",
            "Year": "2020",
            "Make": "Chevrolet",
            "Model": "Corvett",
            "AppointmentID": "9187569202",
            "AppointmentTime": "10:00 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Maria Sanchez",
            "TechStatus": "Complete",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478225",
            "ROStatus": "Cashier",
            "CustomerName": "Arooj Case",
            "Advisor": "Latisha Wyatt",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "331",
            "PayType": "C",
            "TotalDue": "51.88",
            "ShortVIN": "...2YAHHU",
            "VIN": "1VWVL6V2D8H2YAHHU",
            "Year": "2021",
            "Make": "Chevrolet",
            "Model": "Blazer",
            "AppointmentID": "9187569203",
            "AppointmentTime": "2:00 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Jeff Booker",
            "TechStatus": "Complete",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478226",
            "ROStatus": "Cashier",
            "CustomerName": "Ruth Eaton",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "332",
            "PayType": "C",
            "TotalDue": "34.15",
            "ShortVIN": "...BZL0LZ",
            "VIN": "JHC2X4D8G7FBZL0LZ",
            "Year": "2022",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569204",
            "AppointmentTime": "12:00 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Jeff Booker",
            "TechStatus": "Complete",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Rideshare",
            "Payment Status": "Pending"
        },
        {
            "RONumber": "6478227",
            "ROStatus": "Cashier",
            "CustomerName": "Kara Gould",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "333",
            "PayType": "C",
            "TotalDue": "79.94",
            "ShortVIN": "...LW1DYS",
            "VIN": "ZJM69LCW41PLW1DYS",
            "Year": "2023",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569205",
            "AppointmentTime": "11:30 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Martin Hernandez",
            "TechStatus": "Complete",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Rideshare",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478228",
            "ROStatus": "Cashier",
            "CustomerName": "Bethanie Richardson",
            "Advisor": "Susan Barber",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "334",
            "PayType": "C",
            "TotalDue": "56.07",
            "ShortVIN": "...VCX8ZP",
            "VIN": "1J4BU81BB4WVCX8ZP",
            "Year": "2017",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569206",
            "AppointmentTime": "8:30 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Maria Sanchez",
            "TechStatus": "Complete",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Rental",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478229",
            "ROStatus": "Cashier",
            "CustomerName": "Milena Findlay",
            "Advisor": "Eliza George",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "335",
            "PayType": "C",
            "TotalDue": "49.09",
            "ShortVIN": "...VYD6HR",
            "VIN": "JHMBFWA6AWKVYD6HR",
            "Year": "2018",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569207",
            "AppointmentTime": "1:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Jeff Booker",
            "TechStatus": "Complete",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Shuttle",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478230",
            "ROStatus": "Cashier",
            "CustomerName": "Ashleigh Harding",
            "Advisor": "Taha Rodrigues",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "336",
            "PayType": "C",
            "TotalDue": "83.96",
            "ShortVIN": "...AV9Z18",
            "VIN": "3P34EHCZC46AV9Z18",
            "Year": "2019",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569208",
            "AppointmentTime": "12:00 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Joe Smith",
            "TechStatus": "Complete",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478231",
            "ROStatus": "Cashier",
            "CustomerName": "Leigha Plant",
            "Advisor": "Taha Rodrigues",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "337",
            "PayType": "C",
            "TotalDue": "96.28",
            "ShortVIN": "...GD0HNB",
            "VIN": "5NPGEAWE362GD0HNB",
            "Year": "2020",
            "Make": "Chevrolet",
            "Model": "Impala",
            "AppointmentID": "9187569209",
            "AppointmentTime": "5:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Martin Hernandez",
            "TechStatus": "Complete",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478232",
            "ROStatus": "Cashier",
            "CustomerName": "Livia Munro",
            "Advisor": "King Villanueva",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "338",
            "PayType": "C",
            "TotalDue": "87.28",
            "ShortVIN": "...PK62DY",
            "VIN": "4UZTJF7BH9FPK62DY",
            "Year": "2021",
            "Make": "Chevrolet",
            "Model": "Impala",
            "AppointmentID": "9187569210",
            "AppointmentTime": "8:30 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Maria Sanchez",
            "TechStatus": "Complete",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478233",
            "ROStatus": "Cashier",
            "CustomerName": "Bobbie Hewitt",
            "Advisor": "Taha Rodrigues",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "339",
            "PayType": "C",
            "TotalDue": "36.73",
            "ShortVIN": "...E9LWUP",
            "VIN": "2CNEW4B7X8UE9LWUP",
            "Year": "2022",
            "Make": "Chevrolet",
            "Model": "Volt",
            "AppointmentID": "9187569211",
            "AppointmentTime": "12:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Jeff Booker",
            "TechStatus": "Complete",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478234",
            "ROStatus": "Cashier",
            "CustomerName": "Rhona Bray",
            "Advisor": "Taha Rodrigues",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "340",
            "PayType": "C",
            "TotalDue": "69.32",
            "ShortVIN": "...K1WGW4",
            "VIN": "795JTHVMGDPK1WGW4",
            "Year": "2023",
            "Make": "Chevrolet",
            "Model": "Volt",
            "AppointmentID": "9187569212",
            "AppointmentTime": "4:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Joe Smith",
            "TechStatus": "Complete",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478235",
            "ROStatus": "Cashier",
            "CustomerName": "Varun Gordon",
            "Advisor": "Latisha Wyatt",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "341",
            "PayType": "C",
            "TotalDue": "55.38",
            "ShortVIN": "...5KYMTF",
            "VIN": "93H85TV1MDA5KYMTF",
            "Year": "2017",
            "Make": "Chevrolet",
            "Model": "Corvett",
            "AppointmentID": "9187569213",
            "AppointmentTime": "4:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Martin Hernandez",
            "TechStatus": "Complete",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478236",
            "ROStatus": "Cashier",
            "CustomerName": "Kathleen Jacobson",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "342",
            "PayType": "C",
            "TotalDue": "98.56",
            "ShortVIN": "...MAEWE4",
            "VIN": "1GTK6C290PKMAEWE4",
            "Year": "2018",
            "Make": "Chevrolet",
            "Model": "Corvett",
            "AppointmentID": "9187569214",
            "AppointmentTime": "12:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Maria Sanchez",
            "TechStatus": "Complete",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478237",
            "ROStatus": "Cashier",
            "CustomerName": "Lisa-Marie Burgess",
            "Advisor": "Susan Barber",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "343",
            "PayType": "C",
            "TotalDue": "71.89",
            "ShortVIN": "...6ZTHTA",
            "VIN": "2FTBYFZ1F1A6ZTHTA",
            "Year": "2019",
            "Make": "Chevrolet",
            "Model": "Blazer",
            "AppointmentID": "9187569215",
            "AppointmentTime": "5:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Maria Sanchez",
            "TechStatus": "Complete",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478238",
            "ROStatus": "In Process",
            "CustomerName": "Eman Peterson",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "344",
            "PayType": "C",
            "TotalDue": "67.86",
            "ShortVIN": "...PVLCU6",
            "VIN": "WBAL8PYD28KPVLCU6",
            "Year": "2020",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569216",
            "AppointmentTime": "8:30 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Joe Smith",
            "TechStatus": "Workiing",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Rideshare"
        },
        {
            "RONumber": "6478239",
            "ROStatus": "In Process",
            "CustomerName": "Vivek Martin",
            "Advisor": "Eliza George",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "345",
            "PayType": "C",
            "TotalDue": "67.81",
            "ShortVIN": "...DYLZAZ",
            "VIN": "6U9CTYEKMVSDYLZAZ",
            "Year": "2021",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569217",
            "AppointmentTime": "12:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Martin Hernandez",
            "TechStatus": "Workiing",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Rideshare"
        },
        {
            "RONumber": "6478240",
            "ROStatus": "In Process",
            "CustomerName": "Nahla Wilks",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "346",
            "PayType": "W",
            "TotalDue": "0",
            "ShortVIN": "...77ASEV",
            "VIN": "ZD4HSTKAG6R77ASEV",
            "Year": "2022",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569218",
            "AppointmentTime": "1:14 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Maria Sanchez",
            "TechStatus": "Workiing",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Rideshare"
        },
        {
            "RONumber": "6478241",
            "ROStatus": "In Process",
            "CustomerName": "Luella Goodman",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "347",
            "PayType": "C",
            "TotalDue": "301.21",
            "ShortVIN": "...XNGY49",
            "VIN": "1XKWY8GWCGGXNGY49",
            "Year": "2023",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569219",
            "AppointmentTime": "10:00 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Jeff Booker",
            "TechStatus": "Workiing",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Working",
            "TransportationType": "Rideshare"
        },
        {
            "RONumber": "6478242",
            "ROStatus": "In Process",
            "CustomerName": "Prince Beltran",
            "Advisor": "Eliza George",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "348",
            "PayType": "C",
            "TotalDue": "577.93",
            "ShortVIN": "...RGB40D",
            "VIN": "ZLA6H1BL33XRGB40D",
            "Year": "2017",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569220",
            "AppointmentTime": "12:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Joe Smith",
            "TechStatus": "Workiing",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Working",
            "TransportationType": "Rideshare"
        },
        {
            "RONumber": "6478243",
            "ROStatus": "In Process",
            "CustomerName": "Maison Driscoll",
            "Advisor": "King Villanueva",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "349",
            "PayType": "C",
            "TotalDue": "246.57",
            "ShortVIN": "...FFKUKL",
            "VIN": "JF6GCNXW6L1FFKUKL",
            "Year": "2018",
            "Make": "Chevrolet",
            "Model": "Impala",
            "AppointmentID": "9187569221",
            "AppointmentTime": "3:00 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Joe Smith",
            "TechStatus": "Workiing",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Working",
            "TransportationType": "Waiter"
        },
        {
            "RONumber": "6478244",
            "ROStatus": "In Process",
            "CustomerName": "Subhan Golden",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "350",
            "PayType": "C",
            "TotalDue": "258.05",
            "ShortVIN": "...3RSKT9",
            "VIN": "1M2R5LNT76U3RSKT9",
            "Year": "2019",
            "Make": "Chevrolet",
            "Model": "Impala",
            "AppointmentID": "9187569222",
            "AppointmentTime": "10:30 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Maria Sanchez",
            "TechStatus": "Workiing",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Working",
            "TransportationType": "Waiter"
        },
        {
            "RONumber": "6478245",
            "ROStatus": "In Process",
            "CustomerName": "Marcus North",
            "Advisor": "Latisha Wyatt",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "351",
            "PayType": "W",
            "TotalDue": "41.38",
            "ShortVIN": "...97R3BK",
            "VIN": "YV1RW40CE6797R3BK",
            "Year": "2020",
            "Make": "Chevrolet",
            "Model": "Volt",
            "AppointmentID": "9187569223",
            "AppointmentTime": "1:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Jeff Booker",
            "TechStatus": "Workiing",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Working",
            "TransportationType": "Waiter"
        },
        {
            "RONumber": "6478246",
            "ROStatus": "In Process",
            "CustomerName": "Lewis Dillon",
            "Advisor": "Latisha Wyatt",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "352",
            "PayType": "C",
            "TotalDue": "78.73",
            "ShortVIN": "...T5VCJ9",
            "VIN": "8AG2FTNV7DXT5VCJ9",
            "Year": "2021",
            "Make": "Chevrolet",
            "Model": "Volt",
            "AppointmentID": "9187569224",
            "AppointmentTime": "3:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Joe Smith",
            "TechStatus": "Workiing",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Working",
            "TransportationType": "Waiter"
        },
        {
            "RONumber": "6478247",
            "ROStatus": "In Process",
            "CustomerName": "Keane Fisher",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "353",
            "PayType": "C",
            "TotalDue": "69.59",
            "ShortVIN": "...DYNZ11",
            "VIN": "1G4S537NVS6DYNZ11",
            "Year": "2022",
            "Make": "Chevrolet",
            "Model": "Corvett",
            "AppointmentID": "9187569225",
            "AppointmentTime": "12:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Martin Hernandez",
            "TechStatus": "Workiing",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Viewed",
            "TransportationType": "Loaner"
        },
        {
            "RONumber": "6478248",
            "ROStatus": "In Process",
            "CustomerName": "Mehdi Cox",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "354",
            "PayType": "C",
            "TotalDue": "70.64",
            "ShortVIN": "...27R5KD",
            "VIN": "4V21MZ3G1GS27R5KD",
            "Year": "2023",
            "Make": "Chevrolet",
            "Model": "Corvett",
            "AppointmentID": "9187569226",
            "AppointmentTime": "1:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Maria Sanchez",
            "TechStatus": "Workiing",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Viewed",
            "TransportationType": "Loaner"
        },
        {
            "RONumber": "6478249",
            "ROStatus": "In Process",
            "CustomerName": "Casper Mcfarlane",
            "Advisor": "Eliza George",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "355",
            "PayType": "C",
            "TotalDue": "70.02",
            "ShortVIN": "...ZZKSUY",
            "VIN": "2WK9GRMRBNFZZKSUY",
            "Year": "2017",
            "Make": "Chevrolet",
            "Model": "Blazer",
            "AppointmentID": "9187569227",
            "AppointmentTime": "2:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "In Progress",
            "Tech": "Jeff Booker",
            "TechStatus": "Workiing",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Viewed",
            "TransportationType": "Loaner"
        },
        {
            "RONumber": "6478250",
            "ROStatus": "Not Dispatched",
            "CustomerName": "Camron Bryant",
            "Advisor": "King Villanueva",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "356",
            "PayType": "W",
            "TotalDue": "0",
            "ShortVIN": "...VH8K9J",
            "VIN": "KN3NB0C8L4KVH8K9J",
            "Year": "2018",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569228",
            "AppointmentTime": "9:30 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Checked In",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Viewed",
            "TransportationType": "Loaner"
        },
        {
            "RONumber": "6478251",
            "ROStatus": "Not Dispatched",
            "CustomerName": "Yousef Romero",
            "Advisor": "Latisha Wyatt",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "357",
            "PayType": "C",
            "TotalDue": "82.91",
            "ShortVIN": "...2MH8E3",
            "VIN": "ZD3MZ5GYPJM2MH8E3",
            "Year": "2019",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569229",
            "AppointmentTime": "11:30 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Checked In",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Viewed",
            "TransportationType": "Waiter"
        },
        {
            "RONumber": "6478252",
            "ROStatus": "Not Dispatched",
            "CustomerName": "Matthew Greenaway",
            "Advisor": "King Villanueva",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "358",
            "PayType": "C",
            "TotalDue": "83.96",
            "ShortVIN": "...2S81MW",
            "VIN": "KNMWWUCXTC42S81MW",
            "Year": "2020",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569230",
            "AppointmentTime": "1:00 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Checked In",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Viewed",
            "TransportationType": "Waiter"
        },
        {
            "RONumber": "6478253",
            "ROStatus": "Not Dispatched",
            "CustomerName": "Mylah Sharpe",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "359",
            "PayType": "C",
            "TotalDue": "87.09",
            "ShortVIN": "...WWME15",
            "VIN": "2BPV9YVZSHBWWME15",
            "Year": "2021",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569231",
            "AppointmentTime": "8:00 AM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Checked In",
            "PartsPerson": "Katherine Obrien",
            "TransportationType": "Waiter"
        },
        {
            "RONumber": "6478254",
            "ROStatus": "Not Dispatched",
            "CustomerName": "Kaira Gentry",
            "Advisor": "Taha Rodrigues",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "360",
            "PayType": "W",
            "TotalDue": "0",
            "ShortVIN": "...19SJAE",
            "VIN": "2WL3V5CZBRW19SJAE",
            "Year": "2022",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569232",
            "AppointmentTime": "4:30 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Checked In",
            "PartsPerson": "Alex Flores",
            "TransportationType": "Waiter"
        },
        {
            "RONumber": "6478255",
            "ROStatus": "Not Dispatched",
            "CustomerName": "Xena Higgins",
            "Advisor": "Susan Barber",
            "PromisedTime": "12/05 - 05:30",
            "HangTag": "361",
            "PayType": "C",
            "TotalDue": "62.73",
            "ShortVIN": "...JDKCNU",
            "VIN": "JHE6TY1XGY6JDKCNU",
            "Year": "2023",
            "Make": "Chevrolet",
            "Model": "Impala",
            "AppointmentID": "9187569233",
            "AppointmentTime": "2:00 PM",
            "AppointmentDate": "5-Dec",
            "ApppointmentStatus": "Checked In",
            "PartsPerson": "Alex Flores",
            "TransportationType": "Waiter"
        },
        {
            "RONumber": "6478256",
            "ROStatus": "Closed",
            "CustomerName": "Kim Campos",
            "Advisor": "Eliza George",
            "PromisedTime": "12/05 - 05:31",
            "HangTag": "362",
            "PayType": "C",
            "TotalDue": "301.21",
            "ShortVIN": "...328303",
            "VIN": "1GNKRGED4BJ328304",
            "Year": "2023",
            "Make": "Chevrolet",
            "Model": "Volt",
            "AppointmentID": "9187569233",
            "AppointmentTime": "9:30 AM",
            "AppointmentDate": "6-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Jeff Booker",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478257",
            "ROStatus": "Closed",
            "CustomerName": "Ashanti Wynn",
            "Advisor": "King Villanueva",
            "PromisedTime": "12/05 - 05:32",
            "HangTag": "363",
            "PayType": "C",
            "TotalDue": "577.93",
            "ShortVIN": "...2Y8311",
            "VIN": "1F0PYCYB8FP2Y8312",
            "Year": "2017",
            "Make": "Chevrolet",
            "Model": "Corvett",
            "AppointmentID": "9187569233",
            "AppointmentTime": "9:00 AM",
            "AppointmentDate": "7-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Joe Smith",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478258",
            "ROStatus": "Closed",
            "CustomerName": "Luisa Quintana",
            "Advisor": "Latisha Wyatt",
            "PromisedTime": "12/05 - 05:33",
            "HangTag": "364",
            "PayType": "C",
            "TotalDue": "246.57",
            "ShortVIN": "...143747",
            "VIN": "WDDSJ4GB6EN143748",
            "Year": "2018",
            "Make": "Chevrolet",
            "Model": "Corvett",
            "AppointmentID": "9187569233",
            "AppointmentTime": "9:00 AM",
            "AppointmentDate": "8-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Joe Smith",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478259",
            "ROStatus": "Closed",
            "CustomerName": "Mylo Enriquez",
            "Advisor": "King Villanueva",
            "PromisedTime": "12/05 - 05:34",
            "HangTag": "365",
            "PayType": "W",
            "TotalDue": "258.05",
            "ShortVIN": "...360627",
            "VIN": "1GCVKPEHXEZ360628",
            "Year": "2019",
            "Make": "Chevrolet",
            "Model": "Blazer",
            "AppointmentID": "9187569233",
            "AppointmentTime": "7:30 AM",
            "AppointmentDate": "9-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Maria Sanchez",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478260",
            "ROStatus": "Closed",
            "CustomerName": "Massimo Dudley",
            "Advisor": "Eric Sanders",
            "PromisedTime": "12/05 - 05:35",
            "HangTag": "366",
            "PayType": "C",
            "TotalDue": "41.38",
            "ShortVIN": "...228591",
            "VIN": "1G2FW2180HN228592",
            "Year": "2020",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569233",
            "AppointmentTime": "7:30 AM",
            "AppointmentDate": "10-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Jeff Booker",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478261",
            "ROStatus": "Closed",
            "CustomerName": "Aubree Russo",
            "Advisor": "Taha Rodrigues",
            "PromisedTime": "12/05 - 05:36",
            "HangTag": "367",
            "PayType": "C",
            "TotalDue": "78.73",
            "ShortVIN": "...051392",
            "VIN": "SCBBR93W18C051393",
            "Year": "2021",
            "Make": "Chevrolet",
            "Model": "Tahoe",
            "AppointmentID": "9187569233",
            "AppointmentTime": "8:00 AM",
            "AppointmentDate": "11-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Joe Smith",
            "PartsPerson": "Brandon Hayes",
            "PartsStatus": "Completed",
            "TransportationType": "Rideshare",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478262",
            "ROStatus": "Closed",
            "CustomerName": "Samia Smith",
            "Advisor": "Susan Barber",
            "PromisedTime": "12/05 - 05:37",
            "HangTag": "368",
            "PayType": "C",
            "TotalDue": "69.59",
            "ShortVIN": "...511000",
            "VIN": "2HGFG3B55FH511001",
            "Year": "2022",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569233",
            "AppointmentTime": "7:30 AM",
            "AppointmentDate": "12-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Martin Hernandez",
            "PartsPerson": "Katherine Obrien",
            "PartsStatus": "Completed",
            "TransportationType": "Rideshare",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478263",
            "ROStatus": "Closed",
            "CustomerName": "Cassian Salt",
            "Advisor": "Eliza George",
            "PromisedTime": "12/05 - 05:38",
            "HangTag": "369",
            "PayType": "C",
            "TotalDue": "70.64",
            "ShortVIN": "...B24272",
            "VIN": "1FDKF37G4VEB24273",
            "Year": "2023",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569233",
            "AppointmentTime": "8:00 AM",
            "AppointmentDate": "13-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Maria Sanchez",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Waiter",
            "Payment Status": "Paid"
        },
        {
            "RONumber": "6478264",
            "ROStatus": "Closed",
            "CustomerName": "Lily Edge",
            "Advisor": "King Villanueva",
            "PromisedTime": "12/05 - 05:39",
            "HangTag": "370",
            "PayType": "W",
            "TotalDue": "49.09",
            "ShortVIN": "...018915",
            "VIN": "JHMBA4131JC018916",
            "Year": "2019",
            "Make": "Chevrolet",
            "Model": "Bolt",
            "AppointmentID": "9187569233",
            "AppointmentTime": "8:30 AM",
            "AppointmentDate": "14-Dec",
            "ApppointmentStatus": "Completed",
            "Tech": "Jeff Booker",
            "PartsPerson": "Alex Flores",
            "PartsStatus": "Completed",
            "TransportationType": "Rideshare",
            "Payment Status": "Paid"
        },
    ]);

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            minWidth: 100,
            filter: false,
            resizable: true,
            sortable: true,
            enableValue: false,
            enableRowGroup: false,
            enablePivot: false,
            
        };
    }, []);
/*     const statusBar = useMemo(() => {
        return {
            statusPanels: [
            { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
            { statusPanel: 'agTotalRowCountComponent', align: 'center' },
            { statusPanel: 'agFilteredRowCountComponent' },
            { statusPanel: 'agSelectedRowCountComponent' },
            { statusPanel: 'agAggregationComponent' },
            ],
        };
    }, []); */

    function MyRenderer(params) {
        return (
            <span className="my-renderer">
                ...
                {params.value}
            </span>
        );
    }

    function CustomStatsToolPanel(params) {
        return (
            <div className="my-stats">
                <h3>My day</h3>
                <h1>12 Open ROs</h1>
                <p> <span onClick={restoreFromHardCodedND}>6</span> Not Dispatched</p>
                <p> <span>5</span> In Process</p>
                <p> <span>5</span> Pre Invoice</p>
                <p> <span>5</span> Cashier</p>
                <h1>5 Closed ROs</h1>
                <p> Customer Pay Total <b>$1,289.00</b></p>
                <h1>2 Warranty ROs to be closed</h1>
                <p> Comission Pay Total <b>$793.00</b></p>
                <p> <button
                        onClick={restoreFromHardCodedW}
                        title="show all RO that have not been dispatched"
                    >
                        See All Warranty ROs
                    </button>
                </p>

                {params.value}
            </div>
        );
    }

    const onFilterTextBoxChanged = useCallback(() => {
        gridRef.current.api.setQuickFilter(
        document.getElementById('filter-text-box').value
        );
    }, []);

    const ragCellClassRules = {
        'badge-red': params => params.value === 'Pre invoice',
        'badge-green': params => params.value === 'Cashier',
        'badge-grey': params => params.value === 'In Progress',
    };
    const ragRenderer = (params) => {
        return <span class="rag-element">{params.value}</span>;
    }


    const createROColDefs = () => {
        return [
        { field: 'RONumber', 
            cellStyle: { color: '#2B6BDD' },
            headerName: 'RO',
            pinned: 'left',
            maxWidth: 100,
            minWidth: 100, 
            lockPinned: true,
            filter: 'agTextColumnFilter',
            menuTabs: ['filterMenuTab']
        },
        { field: 'ROStatus', 
            headerName: 'Status', 
            filter: 'agSetColumnFilter',
            menuTabs: ['filterMenuTab'],
            valueParser: 'ROStatus',
            cellClassRules: ragCellClassRules,
            cellRenderer: ragRenderer,
        },
        { field: 'CustomerName', 
            headerName: 'Customer', 
            filter: 'agTextColumnFilter',
            menuTabs: ['filterMenuTab'] 
        },
        { field: 'Advisor', 
            filter: 'agSetColumnFilter', 
            menuTabs: ['filterMenuTab']
        },
        { field: 'PromisedTime', 
            headerName: 'Promised',
            maxWidth: 130, 
            minWidth: 130,
            suppressMenu: true, 
        },
        { field: 'Vehicle',
            valueGetter: p => {
                return p.data.Year + ' ' + p.data.Make + ' ' + p.data.Model ;
            },
        filter: 'agTextColumnFilter',
        menuTabs: ['filterMenuTab'] 
        },
        { field: 'ShortVIN',
        headerName: 'VIN', 
        tooltipField: 'VIN',
        maxWidth: 100, 
        minWidth: 100,
        filter: 'agTextColumnFilter',
        menuTabs: ['filterMenuTab'] 
        },
        { field: 'Model', 
            hide:true 
        },
        { field: 'HangTag', 
            headerName: 'Tag',
            resizable: false,
            maxWidth: 80, 
            filter: 'agTextColumnFilter',
            menuTabs: ['filterMenuTab'] 
        },
        { field: 'PayType', 
            headerName: 'Pay',
            resizable: false, 
            maxWidth: 60, 
            cellStyle: { 
                align: 'center' 
            }, 
            filter: 'agSetColumnFilter',
            menuTabs: ['filterMenuTab']
        },    
        { field: 'TotalDue',
            cellStyle: { 
                textAlign:'right', 
                maxWidth: 83,
                minWidth: 53,
            },
            filter: false,
            suppressMenu: true,
            sortable: false,
            resizable: false,
        },
        { field: 'Tech', hide:true },
        { field: 'TechStatus', hide:true },
        { field: 'PartsPerson', hide:true },
        { field: 'PartsStatus', hide:true },
        { field: 'TransportationType', hide:true },
        { field: 'AppointmentID', hide:true },
        { field: 'AppointmentTime', hide:true },
        { field: 'AppointmentDate', hide:true },
        { field: 'ApppointmentStatus', hide:true },
        { field: 'Payment Status', hide:true },
        { field: 'Actions', 
            headerName: '', 
            maxWidth: 52,
            minWidth: 52, 
            pinned: 'right',
            lockPinned: true,
            cellRenderer: MyRenderer,
            cellStyle: { 
                textAlign:'center', 
                color: '#2B6BDD', 
                fontSize: '20px',
                cellPadding: '0'},
            filter: false,
            suppressMenu: true,
            sortable: false,
            lockVisible: true
        }
    ];};

    const AppointmentsView = () => {
        return [
            { field: 'CustomerName', hide:false,
                cellStyle: { color: '#2B6BDD' },
                
                maxWidth: 200,
                minWidth: 200, 
                lockPinned: true,
                filter: 'agTextColumnFilter',
                menuTabs: ['filterMenuTab']
            },
            { field: 'AppointmentTime',
        //rowGroup: true, hide: true 
        },
            { field: 'AppointmentDate', hide:false },
            { field: 'TransportationType', hide:false },
            { field: 'ApppointmentStatus', hide:false },
            { field: 'Actions', 
                headerName: '', 
                maxWidth: 52,
                minWidth: 52, 
                pinned: 'right',
                lockPinned: true,
                cellRenderer: MyRenderer,
                cellStyle: { 
                    textAlign:'center', 
                    color: '#2B6BDD', 
                    fontSize: '20px',
                    cellPadding: '0'},
                filter: false,
                suppressMenu: true,
                sortable: false,
                lockVisible: true
            }
        ];
    };

    const createCashierColDefs= () => {
        return [
            { field: 'RONumber', 
                hide:false,
                cellStyle: { color: '#2B6BDD' },
                pinned: 'left',
                maxWidth: 100,
                minWidth: 100, 
                lockPinned: true,
                filter: 'agTextColumnFilter',
                menuTabs: ['filterMenuTab']
            },
            { field: 'AppointmentTime', hide:false  },
            { field: 'AppointmentDate', hide:false },
            { field: 'TransportationType', hide:false },
            { field: 'ApppointmentStatus', hide:false },
            { field: 'Payment Status', hide:false },
            { field: 'TotalDue',
                cellStyle: { 
                    textAlign:'right', 
                    maxWidth: 83,
                    minWidth: 53,
                },
                filter: false,
                suppressMenu: true,
                sortable: false,
                resizable: false,
            },
            {   field: 'Actions', 
                headerName: '', 
                maxWidth: 52,
                minWidth: 52, 
                pinned: 'right',
                lockPinned: true,
                cellRenderer: MyRenderer,
                cellStyle: { 
                    textAlign:'center', 
                    color: '#2B6BDD', 
                    fontSize: '20px',
                    cellPadding: '0'},
                filter: false,
                suppressMenu: true,
                sortable: false,
                lockVisible: true
            }
        ];
    };

    const sideBar = {
        toolPanels: [
        {   id: 'customStats',
            labelDefault: 'May Day',
            labelKey: 'customStats',
            iconKey: 'chart',
            toolPanel: CustomStatsToolPanel,
            minWidth: 180,
            maxWidth: 400,
            width: 250
        },
        {   id: 'columns',
            labelDefault: 'Columns',
            labelKey: 'columns',
            iconKey: 'columns',
            toolPanel: 'agColumnsToolPanel',
            toolPanelParams: {
                //suppressRowGroups: true,
                suppressValues: true,
                suppressPivots: true,
                suppressPivotMode: true,
                suppressColumnFilter: true,
                suppressColumnSelectAll: true,
                suppressColumnExpandAll: true,
            },
            minWidth: 180,
            maxWidth: 400,
            width: 250
        },
        {
            id: 'filters',
            labelDefault: 'Filters',
            labelKey: 'filters',
            iconKey: 'filter',
            toolPanel: 'agFiltersToolPanel',
            minWidth: 180,
            maxWidth: 400,
            width: 250
        }],
        position: 'left',
        defaultToolPanel: 'customStats'
    },

    const gridOptions = {
        rowData: rowData,
    }

    const clearFilters = useCallback(() => {
        gridRef.current.api.setFilterModel(null);
    }, []);

    const saveFilterModel = useCallback(() => {
        savedFilterModel = gridRef.current.api.getFilterModel();
        var keys = Object.keys(savedFilterModel);
        var savedFilters = keys.length > 0 ? keys.join(', ') : '(none)';
        document.querySelector('#savedFilters').innerHTML = savedFilters;
    }, []);

    const restoreFilterModel = useCallback(() => {
        gridRef.current.api.setFilterModel(savedFilterModel);
    }, []);

    const restoreFromHardCodedND = useCallback(() => {
        var hardcodedFilter = {
        ROStatus: {
            type: 'set',
            values: ['Not Dispatched'],
        }
        };
        gridRef.current.api.setFilterModel(hardcodedFilter);
    }, []);

    const restoreFromHardCodedW = useCallback(() => {
        var hardcodedFilter = {
            PayType: {
            type: 'set',
            values: ['W'],
        }
        };
        gridRef.current.api.setFilterModel(hardcodedFilter);
    }, []);

    const restoreFromHardCodedMyROs = useCallback(() => {
        var hardcodedFilter = {
            Advisor: {
            type: 'set',
            values: ['Eric Sanders'],
        },
        PayType: {
            type: 'set',
            values: ['C'],
        }
        };
        gridRef.current.api.setFilterModel(hardcodedFilter);
    }, []);

    const onApptView = useCallback(() => {
        gridRef.current.api.setColumnDefs(AppointmentsView());
    }, []);

    const onROView = useCallback(() => {
        gridRef.current.api.setColumnDefs(createROColDefs());
    }, []);

    const onCashierView = useCallback(() => {
        gridRef.current.api.setColumnDefs(createCashierColDefs());
    }, []);
    
    const [columnDefs, setColumnDefs] = useState(createROColDefs());


    return (
        <div style={containerStyle}>
            <div className="example-wrapper">
                <div>
                    <div className="button-group">
                    
                        <button
                            onClick={restoreFromHardCodedND}
                            title="show all RO that have not been dispatched"
                        >
                            Not Dispatched
                        </button>
                        <button
                            onClick={restoreFromHardCodedMyROs}
                            title="show all RO that have not been dispatched"
                        >
                            My Customer Pay ROs
                        </button>
                        <button
                            onClick={onApptView }
                            title="Appointments"
                        >
                            Appointments
                        </button>
                        <button
                            onClick={onROView }
                            title="Repair Orders"
                        >
                            Repair Orders
                        </button>
                        <button
                            onClick={onCashierView }
                            title="Cashier"
                        >
                            Cashier
                        </button>
                        <button onClick={clearFilters}>Reset Filters</button>
                        <input
                            type="text"
                            id="filter-text-box"
                            placeholder="Search"
                            onInput={onFilterTextBoxChanged}
                        />
                    
                    </div>
                </div>
            
                <div className="ag-theme-alpine" style={{ height: 800 }}>
                <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                enableRangeSelection={true}
                rowSelection={'multiple'}
                //statusBar={statusBar}
                sideBar={sideBar}
                groupDisplayType={'groupRows'}
                >
                </AgGridReact>
                </div>
            </div>
        </div>
    );
};

render(<App />, document.getElementById('root'));

