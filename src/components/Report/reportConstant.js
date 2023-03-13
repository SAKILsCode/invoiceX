export const saleColumns = [
  { key: 'invoiceId', label: 'INVOICE ID'},
  { key: 'date', label: 'DATE'},
  { key: 'category', label: 'CATEGORY'},
  { key: 'price', label: 'PRICE'},
  { key: 'discount', label: 'DISCOUNT'},
  { key: 'amount', label: 'AMOUNT'}
]

export const saleRows = [
  {
    id: 1,
    invoiceId: 'INV_1',
    date: '12-12-12',
    category: 'Fashion',
    price: 1200,
    discount: 10,
    amount: 1080
  },
  {
    id: 2,
    invoiceId: 'INV_2',
    date: '12-12-12',
    category: 'Furniture',
    price: 1200,
    discount: 10,
    amount: 1080
  },
  {
    id: 3,
    invoiceId: 'INV_3',
    date: '12-12-12',
    category: 'Grocery',
    price: 1200,
    discount: 10,
    amount: 1080
  },
  {
    id: 4,
    invoiceId: 'INV_4',
    date: '12-12-12',
    category: 'Accessories',
    price: 1200,
    discount: 10,
    amount: 1080
  },
] 
  


export const expenseColumns = [
  { key: 'client', label: 'INVOICE ID'},
  { key: 'date', label: 'DATE'},
  { key: 'amount', label: 'AMOUNT'},
  { key: 'status', label: 'STATUS'},
]

export const expenseRows = [
  {
    id: 1,
    client: 'client_A',
    date: '12-12-12',
    amount: 1080,
    status: {text: 'Approved', type: 'chip'}
  },
  {
    id: 2,
    client: 'client_B',
    date: '12-12-12',
    amount: 1080,
    status: {text: 'Pending', type: 'chip'}
  },
  {
    id: 3,
    client: 'client_C',
    date: '12-12-12',
    amount: 1080,
    status: {text: 'Approved', type: 'chip'}
  },
] 