export const columns = [
  {key: 'client', label: 'CLIENT NAME'},
  {key: 'date', label: 'PAYMENT DATE'},
  {key: 'paymentType', label: 'PAYMENT TYPE'},
  {key: 'amount', label: 'AMOUNT'},
  {key: 'status', label: 'STATUS'},
  {key: 'action', label: 'ACTION'},
]

export const rows = [
  {
    id: 1,
    client: 'Client A',
    date: '11-11-1111',
    paymentType: 'Cash',
    amount: 1200,
    status: {text: 'Paid', type: 'chip'},
    action: { text: '...', type: 'button' },
  },
  {
    id: 2,
    client: 'Client B',
    date: '11-11-1111',
    paymentType: 'Credit card',
    amount: 12000,
    status: {text: 'Failed', type: 'chip'},
    action: { text: '...', type: 'button' },
  },
  {
    id: 3,
    client: 'Client C',
    date: '11-11-1111',
    paymentType: 'Bank transfer',
    amount: 12000,
    status: {text: 'Pending', type: 'chip'},
    action: { text: '...', type: 'button' },
  },
  {
    id: 4,
    client: 'Client D',
    date: '11-11-1111',
    paymentType: 'Cash',
    amount: 12000,
    status: {text: 'Paid', type: 'chip'},
    action: { text: '...', type: 'button' },
  },
] 
  