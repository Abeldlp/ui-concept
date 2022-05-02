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
  }),
  actions: {
    formatContact(contact: any) {
      return {
        name: contact.givenName + ' ' + contact.familyName,
        email: contact.email,
        jobTitle: contact.organization.jobTitle,
        organization: contact.organization.name,
      };
    },
    setContacts() {
      this.contacts.length > 0 ||
        Api.get('/api/contacts').then((res: AxiosResponse) => {
          res.data['hydra:member'].map(
            (contact: any) =>
              (this.formattedContacts = [
                ...this.formattedContacts,
                this.formatContact(contact),
              ])
          );
        });
    },
  },
});
