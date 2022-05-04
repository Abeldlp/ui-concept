export const contactFilterSets = [
  {
    label: 'Status',
    key: 'accounts.subscribedStatus',
    values: [
      { label: 'Subscribed', value: 'Subscribed' },
      { label: 'Unsubscribed', value: 'Unsubscribed' },
    ],
  },
  {
    label: 'Bounce Status',
    key: 'accounts.latestEmailBounceStatus',
    values: [
      { label: 'Hard', value: 'HARD' },
      { label: 'Soft', value: 'SOFT' },
    ],
  },
  {
    label: 'Language',
    key: 'visibility',
    values: [
      { label: 'Dutch', value: '/api/v1/account/2/nl' },
      { label: 'English', value: '/api/v1/account/2/en' },
      { label: 'French', value: '/api/v1/account/2/fr' },
    ],
  },
];
