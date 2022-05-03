import { defineStore } from 'pinia';
import type { ContactState } from '@/types';
import { Api } from '@/api';
import type { HydraContact } from '@/entities';
import type { AxiosResponse } from 'axios';

export const useContactStore = defineStore('contacts', {
  state: (): ContactState => ({
    columns: [
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
        name: 'jobTitle',
        required: true,
        label: 'Job Title',
        align: 'left',
        field: 'jobTitle',
        sortable: true,
      },
      {
        name: 'organization',
        required: true,
        label: 'Organization',
        align: 'left',
        field: 'organization',
        sortable: true,
      },
    ],
    rows: [],
    selectedRows: [],
    loading: false,
    filterText: '',
    pagination: {
      sortBy: '',
      descending: false,
      page: 1,
      rowsPerPage: 5,
      rowsNumber: 0,
      hydraSorter: 'name',
    },
  }),
  actions: {
    formatRow(contact: HydraContact) {
      return {
        id: contact['@id'],
        name: contact.givenName + ' ' + contact.familyName,
        email: contact.email,
        jobTitle: contact.organization?.jobTitle || '',
        organization: contact.organization?.name || '',
      };
    },
    getSorterKey(key: string) {
      switch (key) {
        case 'name':
          return 'givenName';
        case 'email':
          return 'email';
        case 'jobTitle':
          return 'organization.jobTitle';
        case 'organization':
          return 'organization.name';
        default:
          return '';
      }
    },
    handleTableChange(props: any) {
      this.pagination.page = props.pagination.page;
      this.pagination.rowsPerPage = props.pagination.rowsPerPage;
      this.pagination.sortBy = props.pagination.sortBy;
      this.pagination.hydraSorter = this.getSorterKey(props.pagination.sortBy);
      this.pagination.descending = props.pagination.descending ? true : false;
      this.setRows();
    },
    setRows() {
      this.loading = true;
      const parameters = {
        page: this.pagination.page,
        itemsPerPage: this.pagination.rowsPerPage,
        ...(this.filterText && { omni_search: this.filterText }),
        [`order[${this.pagination.hydraSorter}]`]: this.pagination.descending
          ? 'desc'
          : 'asc',
      };
      Api.get('/api/contacts', parameters).then((res: AxiosResponse) => {
        this.pagination.rowsNumber = res.data['hydra:totalItems'];
        this.rows = [];
        res.data['hydra:member'].forEach((contact: HydraContact) => {
          this.rows.push(this.formatRow(contact));
        });
        this.loading = false;
      });
    },
  },
});
