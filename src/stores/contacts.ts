import { defineStore } from 'pinia';
import { Api } from '@/api';
import type { AxiosResponse } from 'axios';

export const useContactStore = defineStore({
  id: 'contacts',
  state: () => ({
    contactColumns: [
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
    contacts: [],
    formattedContacts: [],
    selectedContacts: [],
    loading: false,
    filterText: '',
    pagination: {
      sortBy: 'name',
      descending: false,
      page: 1,
      rowsPerPage: 5,
      rowsNumber: 0,
    },
  }),
  actions: {
    formatContact(contact: any) {
      return {
        id: contact['@id'],
        name: contact.givenName + ' ' + contact.familyName,
        email: contact.email,
        jobTitle: contact.organization?.jobTitle || '',
        organization: contact.organization?.name || '',
      };
    },
    setContacts() {
      this.loading = true;
      Api.get('/api/contacts', {
        page: this.pagination.page,
        itemsPerPage: this.pagination.rowsPerPage,
        omni_search: this.filterText,
      }).then((res: AxiosResponse) => {
        this.pagination.rowsNumber = res.data['hydra:totalItems'];
        this.formattedContacts = [];
        res.data['hydra:member'].forEach((contact: any) => {
          this.formattedContacts.push(this.formatContact(contact));
        });
        this.loading = false;
      });
    },
  },
});
