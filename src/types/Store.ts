export interface Store {
  state: () => {
    columns: any[];
    rows: any[];
    selectedRows: any[];
    loading: boolean;
    filterText: string;
    pagination: {
      sortBy: string;
      descending: boolean;
      page: number;
      rowsPerPage: number;
      rowsNumber: number;
      hydraSorter: string;
    };
  };

  actions: {
    formatRow: (apiData: any) => any;
    getSorterKey: (key: string) => string;
    handleTableChange: (props: any) => void;
    setRows: () => void;
  };
}
