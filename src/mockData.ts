interface Column {
  name: string;
  label: string;
  field: string | ((row: any) => any);
  required?: boolean;
  align?: 'left' | 'right' | 'center';
  sortable?: boolean;
  sort?: (a: any, b: any, rowA: any, rowB: any) => number;
  sortOrder?: 'ad' | 'da';
  format?: (val: any, row: any) => any;
  style?: string | ((row: any) => string);
  classes?: string | ((row: any) => string);
  headerStyle?: string;
  headerClasses?: string;
}

const columns: Column[] = [
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    required: true,
    align: 'left',
    sortable: true,
    sortOrder: 'ad',
  },
  {
    name: 'email',
    required: true,
    label: 'Email',
    align: 'left',
    field: 'email',
    sortable: true,
  },
  {
    name: 'priority',
    required: true,
    label: 'Priority',
    align: 'left',
    field: 'priority',
    sortable: true,
  },
  {
    name: 'assigned_to',
    required: true,
    label: 'Assigned to',
    align: 'left',
    field: 'assigned_to',
    sortable: true,
  },
  {
    name: 'status',
    required: true,
    label: 'Status',
    align: 'left',
    field: 'status',
    sortable: true,
  },
  {
    name: 'due_date',
    required: true,
    label: 'Due date',
    align: 'left',
    field: 'due_date',
    sortable: true,
  },
];

const rows = [
  {
    name: 'Abel DLP',
    email: 'a.delapaz@presspage.com',
    priority: 'High',
    assigned_to: 'Roger Smith',
    status: 'done',
    follow_up: true,
    due_date: '-',
  },
  {
    name: 'Aggelos Balatsoukas',
    email: 'a.balatsoukas@presspage.com',
    priority: 'High',
    assigned_to: 'Leticia Rupert',
    status: 'todo',
    follow_up: false,
    due_date: '31/04/2022',
  },
  {
    name: 'Fakhreddine Bedoui',
    email: 'f.bedoui@presspage.com',
    priority: 'Medium',
    assigned_to: 'Ramni Lupent',
    status: 'done',
    follow_up: true,
    due_date: '-',
  },
  {
    name: 'Daan Schoone',
    email: 'd.schoone@presspage.com',
    assigned_to: 'Roger Smith',
    priority: 'Low',
    status: 'todo',
    follow_up: false,
    due_date: '28/04/2022',
  },
  {
    name: 'Hugo Verhoef',
    email: 'v.breugel@presspage.com',
    assigned_to: 'Paul Grevier',
    priority: 'Low',
    status: 'todo',
    follow_up: false,
    due_date: '05/05/2022',
  },
  {
    name: 'Vincent Breugel',
    email: 'v.breugel@presspage.com',
    assigned_to: 'John Rome',
    priority: 'High',
    status: 'todo',
    follow_up: true,
    due_date: '03/05/2022',
  },
  {
    name: 'Jimmy Beekink',
    email: 'j.beekink@presspage.com',
    assigned_to: 'Justin Main',
    priority: 'Medium',
    status: 'done',
    follow_up: false,
    due_date: '-',
  },
];

export type { Column };
export { columns, rows };
