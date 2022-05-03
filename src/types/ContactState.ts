import type { Contact, Column } from '@/entities';

export interface ContactState {
  contactColumns: Column[];
  formattedContacts: Contact[];
  selectedContacts: Contact[];
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
