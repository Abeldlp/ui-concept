import { defineStore } from 'pinia';
import { Api } from '@/api';
import type { AxiosResponse } from 'axios';

import type { Column, Enquiry } from '@/entities';

interface State {
  enquiriesColums: Column[];
  enquiries: Enquiry[];
  selectedEnquiries: Enquiry[];
}

export const useEnquiriesStore = defineStore({
  id: 'enquiries',
  state: (): State => ({
    enquiriesColums: [
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
    ],
    enquiries: [],
    selectedEnquiries: [],
  }),
  getters: {
    enquiriesTodo: (state) => {
      return state.enquiries.filter(
        (enquiry: Enquiry) => enquiry.status === 'todo'
      );
    },
    enquiriesHigh: (state) => {
      return state.enquiries.filter(
        (enquiry: Enquiry) => enquiry.priority === 'High'
      );
    },
  },
  actions: {
    setEnquiries() {
      this.enquiries.length > 0 ||
        Api.get('/enquiries').then(
          (res: AxiosResponse) => (this.enquiries = res.data)
        );
    },
  },
});
