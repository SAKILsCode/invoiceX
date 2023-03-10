export const columns = [
  { key: 'client', label: 'CLIENT NAME' },
  { key: 'email', label: 'EMAIL' },
  { key: 'mobile', label: 'MOBILE' },
  { key: 'regDate', label: 'REGISTERED ON' },
  { key: 'status', label: 'STATUS' },
  { key: 'action', label: 'ACTION' },
];

export const rows = [
  {
    id: 1,
    client: 'Client A',
    email: 'a@gmail.com',
    mobile: '334-344-455',
    regDate: '11-11-1111',
    status: { text: 'Active', type: 'chip' },
    action: { text: '...', type: 'button' },
  },
  {
    id: 2,
    client: 'Client B',
    email: 'a@gmail.com',
    mobile: '334-344-455',
    regDate: '11-11-1111',
    status: { text: 'Disabled', type: 'chip' },
    action: { text: '...', type: 'button' },
  },
  {
    id: 3,
    client: 'Client C',
    email: 'a@gmail.com',
    mobile: '334-344-455',
    regDate: '11-11-1111',
    status: { text: 'Active', type: 'chip' },
    action: { text: '...', type: 'button' },
  },
];
