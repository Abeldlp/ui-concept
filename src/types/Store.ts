import type { DefineStoreOptions, Store } from 'pinia';

export interface StoreInterface
  extends Store<string, StoreState, StoreGetters, StoreActions> {}

interface StoreState {
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
}

interface StoreGetters {}

interface StoreActions {
  formatRow: (apiData: any) => any;
  getSorterKey: (key: string) => string;
  handleTableChange: (props: any) => void;
  setRows: () => void;
}
