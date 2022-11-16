import React, { useCallback, useMemo, useRef, useState } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const App = () => {
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
      "VIN": "2G1LKAZS78CX0W1RW",
      "Year": "2017",
      "Make": "Chevrolet",
      "Model": "Tahoe",
      "Vehicle": "2017 Chevrolet Tahoe"
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
      "VIN": "2C3B94MJPG4WTDXGR",
      "Year": "2018",
      "Make": "Chevrolet",
      "Model": "Tahoe",
      "Vehicle": "2018 Chevrolet Tahoe"
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
      "VIN": "7SAHUKME2C2SWLNT7",
      "Year": "2019",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2019 Chevrolet Bolt"
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
      "VIN": "1FA9H1NB4RMXYR8FK",
      "Year": "2020",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2020 Chevrolet Bolt"
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
      "VIN": "2FCNWR5NXNG4G65Y0",
      "Year": "2021",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2021 Chevrolet Bolt"
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
      "VIN": "1M339JACPDBZ0L7C3",
      "Year": "2022",
      "Make": "Chevrolet",
      "Model": "Impala",
      "Vehicle": "2022 Chevrolet Impala"
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
      "VIN": "3MZ4VN5U7S86K3H8H",
      "Year": "2023",
      "Make": "Chevrolet",
      "Model": "Impala",
      "Vehicle": "2023 Chevrolet Impala"
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
      "VIN": "94DAGC4XK70VBKU7P",
      "Year": "2017",
      "Make": "Chevrolet",
      "Model": "Volt",
      "Vehicle": "2017 Chevrolet Volt"
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
      "VIN": "ZCGG4807Z88SVLK5W",
      "Year": "2018",
      "Make": "Chevrolet",
      "Model": "Volt",
      "Vehicle": "2018 Chevrolet Volt"
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
      "VIN": "JHFPHPE0362KC0X5E",
      "Year": "2019",
      "Make": "Chevrolet",
      "Model": "Corvett",
      "Vehicle": "2019 Chevrolet Corvett"
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
      "VIN": "2G2APETCVKMTJH78T",
      "Year": "2020",
      "Make": "Chevrolet",
      "Model": "Corvett",
      "Vehicle": "2020 Chevrolet Corvett"
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
      "VIN": "1VWVL6V2D8H2YAHHU",
      "Year": "2021",
      "Make": "Chevrolet",
      "Model": "Blazer",
      "Vehicle": "2021 Chevrolet Blazer"
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
      "VIN": "JHC2X4D8G7FBZL0LZ",
      "Year": "2022",
      "Make": "Chevrolet",
      "Model": "Tahoe",
      "Vehicle": "2022 Chevrolet Tahoe"
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
      "VIN": "ZJM69LCW41PLW1DYS",
      "Year": "2023",
      "Make": "Chevrolet",
      "Model": "Tahoe",
      "Vehicle": "2023 Chevrolet Tahoe"
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
      "VIN": "1J4BU81BB4WVCX8ZP",
      "Year": "2017",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2017 Chevrolet Bolt"
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
      "VIN": "JHMBFWA6AWKVYD6HR",
      "Year": "2018",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2018 Chevrolet Bolt"
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
      "VIN": "3P34EHCZC46AV9Z18",
      "Year": "2019",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2019 Chevrolet Bolt"
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
      "VIN": "5NPGEAWE362GD0HNB",
      "Year": "2020",
      "Make": "Chevrolet",
      "Model": "Impala",
      "Vehicle": "2020 Chevrolet Impala"
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
      "VIN": "4UZTJF7BH9FPK62DY",
      "Year": "2021",
      "Make": "Chevrolet",
      "Model": "Impala",
      "Vehicle": "2021 Chevrolet Impala"
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
      "VIN": "2CNEW4B7X8UE9LWUP",
      "Year": "2022",
      "Make": "Chevrolet",
      "Model": "Volt",
      "Vehicle": "2022 Chevrolet Volt"
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
      "VIN": "795JTHVMGDPK1WGW4",
      "Year": "2023",
      "Make": "Chevrolet",
      "Model": "Volt",
      "Vehicle": "2023 Chevrolet Volt"
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
      "VIN": "93H85TV1MDA5KYMTF",
      "Year": "2017",
      "Make": "Chevrolet",
      "Model": "Corvett",
      "Vehicle": "2017 Chevrolet Corvett"
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
      "VIN": "1GTK6C290PKMAEWE4",
      "Year": "2018",
      "Make": "Chevrolet",
      "Model": "Corvett",
      "Vehicle": "2018 Chevrolet Corvett"
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
      "VIN": "2FTBYFZ1F1A6ZTHTA",
      "Year": "2019",
      "Make": "Chevrolet",
      "Model": "Blazer",
      "Vehicle": "2019 Chevrolet Blazer"
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
      "VIN": "WBAL8PYD28KPVLCU6",
      "Year": "2020",
      "Make": "Chevrolet",
      "Model": "Tahoe",
      "Vehicle": "2020 Chevrolet Tahoe"
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
      "VIN": "6U9CTYEKMVSDYLZAZ",
      "Year": "2021",
      "Make": "Chevrolet",
      "Model": "Tahoe",
      "Vehicle": "2021 Chevrolet Tahoe"
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
      "VIN": "ZD4HSTKAG6R77ASEV",
      "Year": "2022",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2022 Chevrolet Bolt"
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
      "VIN": "1XKWY8GWCGGXNGY49",
      "Year": "2023",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2023 Chevrolet Bolt"
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
      "VIN": "ZLA6H1BL33XRGB40D",
      "Year": "2017",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2017 Chevrolet Bolt"
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
      "VIN": "JF6GCNXW6L1FFKUKL",
      "Year": "2018",
      "Make": "Chevrolet",
      "Model": "Impala",
      "Vehicle": "2018 Chevrolet Impala"
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
      "VIN": "1M2R5LNT76U3RSKT9",
      "Year": "2019",
      "Make": "Chevrolet",
      "Model": "Impala",
      "Vehicle": "2019 Chevrolet Impala"
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
      "VIN": "YV1RW40CE6797R3BK",
      "Year": "2020",
      "Make": "Chevrolet",
      "Model": "Volt",
      "Vehicle": "2020 Chevrolet Volt"
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
      "VIN": "8AG2FTNV7DXT5VCJ9",
      "Year": "2021",
      "Make": "Chevrolet",
      "Model": "Volt",
      "Vehicle": "2021 Chevrolet Volt"
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
      "VIN": "1G4S537NVS6DYNZ11",
      "Year": "2022",
      "Make": "Chevrolet",
      "Model": "Corvett",
      "Vehicle": "2022 Chevrolet Corvett"
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
      "VIN": "4V21MZ3G1GS27R5KD",
      "Year": "2023",
      "Make": "Chevrolet",
      "Model": "Corvett",
      "Vehicle": "2023 Chevrolet Corvett"
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
      "VIN": "2WK9GRMRBNFZZKSUY",
      "Year": "2017",
      "Make": "Chevrolet",
      "Model": "Blazer",
      "Vehicle": "2017 Chevrolet Blazer"
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
      "VIN": "KN3NB0C8L4KVH8K9J",
      "Year": "2018",
      "Make": "Chevrolet",
      "Model": "Tahoe",
      "Vehicle": "2018 Chevrolet Tahoe"
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
      "VIN": "ZD3MZ5GYPJM2MH8E3",
      "Year": "2019",
      "Make": "Chevrolet",
      "Model": "Tahoe",
      "Vehicle": "2019 Chevrolet Tahoe"
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
      "VIN": "KNMWWUCXTC42S81MW",
      "Year": "2020",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2020 Chevrolet Bolt"
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
      "VIN": "2BPV9YVZSHBWWME15",
      "Year": "2021",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2021 Chevrolet Bolt"
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
      "VIN": "2WL3V5CZBRW19SJAE",
      "Year": "2022",
      "Make": "Chevrolet",
      "Model": "Bolt",
      "Vehicle": "2022 Chevrolet Bolt"
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
      "VIN": "JHE6TY1XGY6JDKCNU",
      "Year": "2023",
      "Make": "Chevrolet",
      "Model": "Impala",
      "Vehicle": "2023 Chevrolet Impala"
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
      const statusBar = useMemo(() => {
        return {
          statusPanels: [
            { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
            { statusPanel: 'agTotalRowCountComponent', align: 'center' },
            { statusPanel: 'agFilteredRowCountComponent' },
            { statusPanel: 'agSelectedRowCountComponent' },
            { statusPanel: 'agAggregationComponent' },
          ],
        };
      }, []);

function MyRenderer(params) {
    return (
        <span className="my-renderer ">
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
            <p> <span>5</span> Not Dispatched</p>
            <p> <span>5</span> In Process</p>
            <p> <span>5</span> Pre Invoice</p>
            <p> <span>5</span> Cashier</p>
            <h1>5 Closed ROs</h1>
            <p> Customer Pay Total <b>$1,289.00</b></p>
            <h1>2 Warranty ROs to be closed</h1>
            <p> Comission Pay Total <b>$793.00</b></p>
            <p> <span>See Warranty ROs</span></p>

            {params.value}
        </div>
    );
}

function onFilterTextBoxChanged() {
    gridOptions.api.setQuickFilter(
      document.getElementById('filter-text-box').value
    );
}
const gridRef = useRef();

const [columnDefs] = useState([
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
        menuTabs: ['filterMenuTab']
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
        suppressMenu: true, },
    { field: 'VIN', 
        maxWidth: 200, 
        minWidth: 200,
        filter: 'agTextColumnFilter',
        menuTabs: ['filterMenuTab'] 
    },
    { field: 'Vehicle',
        filter: 'agTextColumnFilter',
        menuTabs: ['filterMenuTab'] 
    },
    { field: 'Model', 
        hide:true },
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
        suppressMenu: true,
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
    { field: 'Technician', hide:true },
    { field: 'Tech Status', hide:true },
    { field: 'Parts Person', hide:true },
    { field: 'Parts Status', hide:true },
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
        sortable: false
    }
]);

const sideBar = {
    toolPanels: [
    {
        id: 'customStats',
        labelDefault: 'May Day',
        labelKey: 'customStats',
        iconKey: 'chart',
        toolPanel: CustomStatsToolPanel,
        minWidth: 180,
        maxWidth: 400,
        width: 250
    },
    {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
        toolPanelParams: {
            suppressRowGroups: true,
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
    }
],
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
                <button onClick={clearFilters}>Reset Filters</button>
                
                </div>
            </div>
        
            <div className="ag-theme-alpine" style={{ height: 1000 }}>
            <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            enableRangeSelection={true}
            rowSelection={'multiple'}
            statusBar={statusBar}
            sideBar={sideBar}
            >
            </AgGridReact>
            </div>
        </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));

