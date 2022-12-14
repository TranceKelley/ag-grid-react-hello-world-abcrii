function getData() {
  const rowData = [
    {
      RONumber: '6478214',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Kiaan French',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '320',
      PayType: 'C',
      TotalDue: '489.98',
      VIN: '2G1LKAZS78CX0W1RW',
      Year: '2017',
      Make: 'Chevrolet',
      Model: 'Tahoe',
      AppointmentID: '9187569192',
      AppointmentTime: '4:00 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Joe Smith',
      TechStatus: 'Complete',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478215',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Gus Charlton',
      Advisor: 'Susan Barber',
      PromisedTime: '12/05 - 05:30',
      HangTag: '321',
      PayType: 'C',
      TotalDue: '51.88',
      VIN: '2C3B94MJPG4WTDXGR',
      Year: '2018',
      Make: 'Chevrolet',
      Model: 'Tahoe',
      AppointmentID: '9187569193',
      AppointmentTime: '11:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Joe Smith',
      TechStatus: 'Complete',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478216',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Yosef Henderson',
      Advisor: 'King Villanueva',
      PromisedTime: '12/05 - 05:30',
      HangTag: '322',
      PayType: 'C',
      TotalDue: '384.32',
      VIN: '7SAHUKME2C2SWLNT7',
      Year: '2019',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569194',
      AppointmentTime: '3:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Maria Sanchez',
      TechStatus: 'Complete',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Completed',
      TransportationType: 'Rental',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478217',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Aarron Bannister',
      Advisor: 'Susan Barber',
      PromisedTime: '12/05 - 05:30',
      HangTag: '323',
      PayType: 'W',
      TotalDue: '0',
      VIN: '1FA9H1NB4RMXYR8FK',
      Year: '2020',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569195',
      AppointmentTime: '1:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Jeff Booker',
      TechStatus: 'Complete',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Warranty',
    },
    {
      RONumber: '6478218',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Janelle Kirkpatrick',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '324',
      PayType: 'C',
      TotalDue: '190.52',
      VIN: '2FCNWR5NXNG4G65Y0',
      Year: '2021',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569196',
      AppointmentTime: '5:10 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Joe Smith',
      TechStatus: 'Complete',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478219',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Nelson Weber',
      Advisor: 'Latisha Wyatt',
      PromisedTime: '12/05 - 05:30',
      HangTag: '325',
      PayType: 'W',
      TotalDue: '0',
      VIN: '1M339JACPDBZ0L7C3',
      Year: '2022',
      Make: 'Chevrolet',
      Model: 'Impala',
      AppointmentID: '9187569197',
      AppointmentTime: '5:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Martin Hernandez',
      TechStatus: 'Complete',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Completed',
      TransportationType: 'Rideshare',
      'Payment Status': 'Warranty',
    },
    {
      RONumber: '6478220',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Shah Strickland',
      Advisor: 'Latisha Wyatt',
      PromisedTime: '12/05 - 05:30',
      HangTag: '326',
      PayType: 'C',
      TotalDue: '538.62',
      VIN: '3MZ4VN5U7S86K3H8H',
      Year: '2023',
      Make: 'Chevrolet',
      Model: 'Impala',
      AppointmentID: '9187569198',
      AppointmentTime: '12:00 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Maria Sanchez',
      TechStatus: 'Complete',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478221',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Ikra Rich',
      Advisor: 'Eliza George',
      PromisedTime: '12/05 - 05:30',
      HangTag: '327',
      PayType: 'C',
      TotalDue: '59.89',
      VIN: '94DAGC4XK70VBKU7P',
      Year: '2017',
      Make: 'Chevrolet',
      Model: 'Volt',
      AppointmentID: '9187569199',
      AppointmentTime: '12:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Jeff Booker',
      TechStatus: 'Complete',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Completed',
      TransportationType: 'Rental',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478222',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Darcy Livingston',
      Advisor: 'Eliza George',
      PromisedTime: '12/05 - 05:30',
      HangTag: '328',
      PayType: 'C',
      TotalDue: '65.02',
      VIN: 'ZCGG4807Z88SVLK5W',
      Year: '2018',
      Make: 'Chevrolet',
      Model: 'Volt',
      AppointmentID: '9187569200',
      AppointmentTime: '8:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Joe Smith',
      TechStatus: 'Complete',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478223',
      ROStatus: 'Pre Invoice',
      CustomerName: 'Jardel Wiley',
      Advisor: 'King Villanueva',
      PromisedTime: '12/05 - 05:30',
      HangTag: '329',
      PayType: 'C',
      TotalDue: '78.8',
      VIN: 'JHFPHPE0362KC0X5E',
      Year: '2019',
      Make: 'Chevrolet',
      Model: 'Corvett',
      AppointmentID: '9187569201',
      AppointmentTime: '10:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Martin Hernandez',
      TechStatus: 'Complete',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478224',
      ROStatus: 'Cashier',
      CustomerName: 'Suzanna Norris',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '330',
      PayType: 'C',
      TotalDue: '48.97',
      VIN: '2G2APETCVKMTJH78T',
      Year: '2020',
      Make: 'Chevrolet',
      Model: 'Corvett',
      AppointmentID: '9187569202',
      AppointmentTime: '10:00 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Maria Sanchez',
      TechStatus: 'Complete',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478225',
      ROStatus: 'Cashier',
      CustomerName: 'Arooj Case',
      Advisor: 'Latisha Wyatt',
      PromisedTime: '12/05 - 05:30',
      HangTag: '331',
      PayType: 'C',
      TotalDue: '51.88',
      VIN: '1VWVL6V2D8H2YAHHU',
      Year: '2021',
      Make: 'Chevrolet',
      Model: 'Blazer',
      AppointmentID: '9187569203',
      AppointmentTime: '2:00 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Jeff Booker',
      TechStatus: 'Complete',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478226',
      ROStatus: 'Cashier',
      CustomerName: 'Ruth Eaton',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '332',
      PayType: 'C',
      TotalDue: '34.15',
      VIN: 'JHC2X4D8G7FBZL0LZ',
      Year: '2022',
      Make: 'Chevrolet',
      Model: 'Tahoe',
      AppointmentID: '9187569204',
      AppointmentTime: '12:00 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Jeff Booker',
      TechStatus: 'Complete',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Completed',
      TransportationType: 'Rideshare',
      'Payment Status': 'Pending',
    },
    {
      RONumber: '6478227',
      ROStatus: 'Cashier',
      CustomerName: 'Kara Gould',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '333',
      PayType: 'C',
      TotalDue: '79.94',
      VIN: 'ZJM69LCW41PLW1DYS',
      Year: '2023',
      Make: 'Chevrolet',
      Model: 'Tahoe',
      AppointmentID: '9187569205',
      AppointmentTime: '11:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Martin Hernandez',
      TechStatus: 'Complete',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Completed',
      TransportationType: 'Rideshare',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478228',
      ROStatus: 'Cashier',
      CustomerName: 'Bethanie Richardson',
      Advisor: 'Susan Barber',
      PromisedTime: '12/05 - 05:30',
      HangTag: '334',
      PayType: 'C',
      TotalDue: '56.07',
      VIN: '1J4BU81BB4WVCX8ZP',
      Year: '2017',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569206',
      AppointmentTime: '8:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Maria Sanchez',
      TechStatus: 'Complete',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Completed',
      TransportationType: 'Rental',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478229',
      ROStatus: 'Cashier',
      CustomerName: 'Milena Findlay',
      Advisor: 'Eliza George',
      PromisedTime: '12/05 - 05:30',
      HangTag: '335',
      PayType: 'C',
      TotalDue: '49.09',
      VIN: 'JHMBFWA6AWKVYD6HR',
      Year: '2018',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569207',
      AppointmentTime: '1:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Jeff Booker',
      TechStatus: 'Complete',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Completed',
      TransportationType: 'Shuttle',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478230',
      ROStatus: 'Cashier',
      CustomerName: 'Ashleigh Harding',
      Advisor: 'Taha Rodrigues',
      PromisedTime: '12/05 - 05:30',
      HangTag: '336',
      PayType: 'C',
      TotalDue: '83.96',
      VIN: '3P34EHCZC46AV9Z18',
      Year: '2019',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569208',
      AppointmentTime: '12:00 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Joe Smith',
      TechStatus: 'Complete',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478231',
      ROStatus: 'Cashier',
      CustomerName: 'Leigha Plant',
      Advisor: 'Taha Rodrigues',
      PromisedTime: '12/05 - 05:30',
      HangTag: '337',
      PayType: 'C',
      TotalDue: '96.28',
      VIN: '5NPGEAWE362GD0HNB',
      Year: '2020',
      Make: 'Chevrolet',
      Model: 'Impala',
      AppointmentID: '9187569209',
      AppointmentTime: '5:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Martin Hernandez',
      TechStatus: 'Complete',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478232',
      ROStatus: 'Cashier',
      CustomerName: 'Livia Munro',
      Advisor: 'King Villanueva',
      PromisedTime: '12/05 - 05:30',
      HangTag: '338',
      PayType: 'C',
      TotalDue: '87.28',
      VIN: '4UZTJF7BH9FPK62DY',
      Year: '2021',
      Make: 'Chevrolet',
      Model: 'Impala',
      AppointmentID: '9187569210',
      AppointmentTime: '8:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Maria Sanchez',
      TechStatus: 'Complete',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478233',
      ROStatus: 'Cashier',
      CustomerName: 'Bobbie Hewitt',
      Advisor: 'Taha Rodrigues',
      PromisedTime: '12/05 - 05:30',
      HangTag: '339',
      PayType: 'C',
      TotalDue: '36.73',
      VIN: '2CNEW4B7X8UE9LWUP',
      Year: '2022',
      Make: 'Chevrolet',
      Model: 'Volt',
      AppointmentID: '9187569211',
      AppointmentTime: '12:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Jeff Booker',
      TechStatus: 'Complete',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478234',
      ROStatus: 'Cashier',
      CustomerName: 'Rhona Bray',
      Advisor: 'Taha Rodrigues',
      PromisedTime: '12/05 - 05:30',
      HangTag: '340',
      PayType: 'C',
      TotalDue: '69.32',
      VIN: '795JTHVMGDPK1WGW4',
      Year: '2023',
      Make: 'Chevrolet',
      Model: 'Volt',
      AppointmentID: '9187569212',
      AppointmentTime: '4:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Joe Smith',
      TechStatus: 'Complete',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478235',
      ROStatus: 'Cashier',
      CustomerName: 'Varun Gordon',
      Advisor: 'Latisha Wyatt',
      PromisedTime: '12/05 - 05:30',
      HangTag: '341',
      PayType: 'C',
      TotalDue: '55.38',
      VIN: '93H85TV1MDA5KYMTF',
      Year: '2017',
      Make: 'Chevrolet',
      Model: 'Corvett',
      AppointmentID: '9187569213',
      AppointmentTime: '4:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Martin Hernandez',
      TechStatus: 'Complete',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478236',
      ROStatus: 'Cashier',
      CustomerName: 'Kathleen Jacobson',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '342',
      PayType: 'C',
      TotalDue: '98.56',
      VIN: '1GTK6C290PKMAEWE4',
      Year: '2018',
      Make: 'Chevrolet',
      Model: 'Corvett',
      AppointmentID: '9187569214',
      AppointmentTime: '12:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Maria Sanchez',
      TechStatus: 'Complete',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478237',
      ROStatus: 'Cashier',
      CustomerName: 'Lisa-Marie Burgess',
      Advisor: 'Susan Barber',
      PromisedTime: '12/05 - 05:30',
      HangTag: '343',
      PayType: 'C',
      TotalDue: '71.89',
      VIN: '2FTBYFZ1F1A6ZTHTA',
      Year: '2019',
      Make: 'Chevrolet',
      Model: 'Blazer',
      AppointmentID: '9187569215',
      AppointmentTime: '5:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Completed',
      Tech: 'Maria Sanchez',
      TechStatus: 'Complete',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Completed',
      TransportationType: 'Waiter',
      'Payment Status': 'Paid',
    },
    {
      RONumber: '6478238',
      ROStatus: 'In Process',
      CustomerName: 'Eman Peterson',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '344',
      PayType: 'C',
      TotalDue: '67.86',
      VIN: 'WBAL8PYD28KPVLCU6',
      Year: '2020',
      Make: 'Chevrolet',
      Model: 'Tahoe',
      AppointmentID: '9187569216',
      AppointmentTime: '8:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Joe Smith',
      TechStatus: 'Workiing',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Completed',
      TransportationType: 'Rideshare',
    },
    {
      RONumber: '6478239',
      ROStatus: 'In Process',
      CustomerName: 'Vivek Martin',
      Advisor: 'Eliza George',
      PromisedTime: '12/05 - 05:30',
      HangTag: '345',
      PayType: 'C',
      TotalDue: '67.81',
      VIN: '6U9CTYEKMVSDYLZAZ',
      Year: '2021',
      Make: 'Chevrolet',
      Model: 'Tahoe',
      AppointmentID: '9187569217',
      AppointmentTime: '12:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Martin Hernandez',
      TechStatus: 'Workiing',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Completed',
      TransportationType: 'Rideshare',
    },
    {
      RONumber: '6478240',
      ROStatus: 'In Process',
      CustomerName: 'Nahla Wilks',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '346',
      PayType: 'W',
      TotalDue: '0',
      VIN: 'ZD4HSTKAG6R77ASEV',
      Year: '2022',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569218',
      AppointmentTime: '1:14 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Maria Sanchez',
      TechStatus: 'Workiing',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Completed',
      TransportationType: 'Rideshare',
    },
    {
      RONumber: '6478241',
      ROStatus: 'In Process',
      CustomerName: 'Luella Goodman',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '347',
      PayType: 'C',
      TotalDue: '301.21',
      VIN: '1XKWY8GWCGGXNGY49',
      Year: '2023',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569219',
      AppointmentTime: '10:00 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Jeff Booker',
      TechStatus: 'Workiing',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Working',
      TransportationType: 'Rideshare',
    },
    {
      RONumber: '6478242',
      ROStatus: 'In Process',
      CustomerName: 'Prince Beltran',
      Advisor: 'Eliza George',
      PromisedTime: '12/05 - 05:30',
      HangTag: '348',
      PayType: 'C',
      TotalDue: '577.93',
      VIN: 'ZLA6H1BL33XRGB40D',
      Year: '2017',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569220',
      AppointmentTime: '12:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Joe Smith',
      TechStatus: 'Workiing',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Working',
      TransportationType: 'Rideshare',
    },
    {
      RONumber: '6478243',
      ROStatus: 'In Process',
      CustomerName: 'Maison Driscoll',
      Advisor: 'King Villanueva',
      PromisedTime: '12/05 - 05:30',
      HangTag: '349',
      PayType: 'C',
      TotalDue: '246.57',
      VIN: 'JF6GCNXW6L1FFKUKL',
      Year: '2018',
      Make: 'Chevrolet',
      Model: 'Impala',
      AppointmentID: '9187569221',
      AppointmentTime: '3:00 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Joe Smith',
      TechStatus: 'Workiing',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Working',
      TransportationType: 'Waiter',
    },
    {
      RONumber: '6478244',
      ROStatus: 'In Process',
      CustomerName: 'Subhan Golden',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '350',
      PayType: 'C',
      TotalDue: '258.05',
      VIN: '1M2R5LNT76U3RSKT9',
      Year: '2019',
      Make: 'Chevrolet',
      Model: 'Impala',
      AppointmentID: '9187569222',
      AppointmentTime: '10:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Maria Sanchez',
      TechStatus: 'Workiing',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Working',
      TransportationType: 'Waiter',
    },
    {
      RONumber: '6478245',
      ROStatus: 'In Process',
      CustomerName: 'Marcus North',
      Advisor: 'Latisha Wyatt',
      PromisedTime: '12/05 - 05:30',
      HangTag: '351',
      PayType: 'W',
      TotalDue: '41.38',
      VIN: 'YV1RW40CE6797R3BK',
      Year: '2020',
      Make: 'Chevrolet',
      Model: 'Volt',
      AppointmentID: '9187569223',
      AppointmentTime: '1:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Jeff Booker',
      TechStatus: 'Workiing',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Working',
      TransportationType: 'Waiter',
    },
    {
      RONumber: '6478246',
      ROStatus: 'In Process',
      CustomerName: 'Lewis Dillon',
      Advisor: 'Latisha Wyatt',
      PromisedTime: '12/05 - 05:30',
      HangTag: '352',
      PayType: 'C',
      TotalDue: '78.73',
      VIN: '8AG2FTNV7DXT5VCJ9',
      Year: '2021',
      Make: 'Chevrolet',
      Model: 'Volt',
      AppointmentID: '9187569224',
      AppointmentTime: '3:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Joe Smith',
      TechStatus: 'Workiing',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Working',
      TransportationType: 'Waiter',
    },
    {
      RONumber: '6478247',
      ROStatus: 'In Process',
      CustomerName: 'Keane Fisher',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '353',
      PayType: 'C',
      TotalDue: '69.59',
      VIN: '1G4S537NVS6DYNZ11',
      Year: '2022',
      Make: 'Chevrolet',
      Model: 'Corvett',
      AppointmentID: '9187569225',
      AppointmentTime: '12:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Martin Hernandez',
      TechStatus: 'Workiing',
      PartsPerson: 'Katherine Obrien',
      PartsStatus: 'Viewed',
      TransportationType: 'Loaner',
    },
    {
      RONumber: '6478248',
      ROStatus: 'In Process',
      CustomerName: 'Mehdi Cox',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '354',
      PayType: 'C',
      TotalDue: '70.64',
      VIN: '4V21MZ3G1GS27R5KD',
      Year: '2023',
      Make: 'Chevrolet',
      Model: 'Corvett',
      AppointmentID: '9187569226',
      AppointmentTime: '1:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Maria Sanchez',
      TechStatus: 'Workiing',
      PartsPerson: 'Alex Flores',
      PartsStatus: 'Viewed',
      TransportationType: 'Loaner',
    },
    {
      RONumber: '6478249',
      ROStatus: 'In Process',
      CustomerName: 'Casper Mcfarlane',
      Advisor: 'Eliza George',
      PromisedTime: '12/05 - 05:30',
      HangTag: '355',
      PayType: 'C',
      TotalDue: '70.02',
      VIN: '2WK9GRMRBNFZZKSUY',
      Year: '2017',
      Make: 'Chevrolet',
      Model: 'Blazer',
      AppointmentID: '9187569227',
      AppointmentTime: '2:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'In Progress',
      Tech: 'Jeff Booker',
      TechStatus: 'Workiing',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Viewed',
      TransportationType: 'Loaner',
    },
    {
      RONumber: '6478250',
      ROStatus: 'Not Dispatched',
      CustomerName: 'Camron Bryant',
      Advisor: 'King Villanueva',
      PromisedTime: '12/05 - 05:30',
      HangTag: '356',
      PayType: 'W',
      TotalDue: '0',
      VIN: 'KN3NB0C8L4KVH8K9J',
      Year: '2018',
      Make: 'Chevrolet',
      Model: 'Tahoe',
      AppointmentID: '9187569228',
      AppointmentTime: '9:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Checked In',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Viewed',
      TransportationType: 'Loaner',
    },
    {
      RONumber: '6478251',
      ROStatus: 'Not Dispatched',
      CustomerName: 'Yousef Romero',
      Advisor: 'Latisha Wyatt',
      PromisedTime: '12/05 - 05:30',
      HangTag: '357',
      PayType: 'C',
      TotalDue: '82.91',
      VIN: 'ZD3MZ5GYPJM2MH8E3',
      Year: '2019',
      Make: 'Chevrolet',
      Model: 'Tahoe',
      AppointmentID: '9187569229',
      AppointmentTime: '11:30 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Checked In',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Viewed',
      TransportationType: 'Waiter',
    },
    {
      RONumber: '6478252',
      ROStatus: 'Not Dispatched',
      CustomerName: 'Matthew Greenaway',
      Advisor: 'King Villanueva',
      PromisedTime: '12/05 - 05:30',
      HangTag: '358',
      PayType: 'C',
      TotalDue: '83.96',
      VIN: 'KNMWWUCXTC42S81MW',
      Year: '2020',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569230',
      AppointmentTime: '1:00 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Checked In',
      PartsPerson: 'Brandon Hayes',
      PartsStatus: 'Viewed',
      TransportationType: 'Waiter',
    },
    {
      RONumber: '6478253',
      ROStatus: 'Not Dispatched',
      CustomerName: 'Mylah Sharpe',
      Advisor: 'Eric Sanders',
      PromisedTime: '12/05 - 05:30',
      HangTag: '359',
      PayType: 'C',
      TotalDue: '87.09',
      VIN: '2BPV9YVZSHBWWME15',
      Year: '2021',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569231',
      AppointmentTime: '8:00 AM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Checked In',
      PartsPerson: 'Katherine Obrien',
      TransportationType: 'Waiter',
    },
    {
      RONumber: '6478254',
      ROStatus: 'Not Dispatched',
      CustomerName: 'Kaira Gentry',
      Advisor: 'Taha Rodrigues',
      PromisedTime: '12/05 - 05:30',
      HangTag: '360',
      PayType: 'W',
      TotalDue: '0',
      VIN: '2WL3V5CZBRW19SJAE',
      Year: '2022',
      Make: 'Chevrolet',
      Model: 'Bolt',
      AppointmentID: '9187569232',
      AppointmentTime: '4:30 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Checked In',
      PartsPerson: 'Alex Flores',
      TransportationType: 'Waiter',
    },
    {
      RONumber: '6478255',
      ROStatus: 'Not Dispatched',
      CustomerName: 'Xena Higgins',
      Advisor: 'Susan Barber',
      PromisedTime: '12/05 - 05:30',
      HangTag: '361',
      PayType: 'C',
      TotalDue: '62.73',
      VIN: 'JHE6TY1XGY6JDKCNU',
      Year: '2023',
      Make: 'Chevrolet',
      Model: 'Impala',
      AppointmentID: '9187569233',
      AppointmentTime: '2:00 PM',
      AppointmentDate: '5-Dec',
      ApppointmentStatus: 'Checked In',
      PartsPerson: 'Alex Flores',
      TransportationType: 'Waiter',
    },
  ];
  return rowData;
}
