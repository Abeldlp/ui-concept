import type { Contact, Column } from '@/entities';

export interface ContactState {
  columns: Column[];
  rows: Contact[];
  selectedRows: Contact[];
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
  filterSets: any[];
  selectedFilters: any;
}
