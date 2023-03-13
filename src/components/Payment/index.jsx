import PresentingList from '../shared/PresentingList';
import { columns, rows } from './paymentConstants';

//TODO: filter in table

const Payment = () => {
  const handleAddPayment = () => {
    //TODO: popup add item component (Modal)
  };

  const handleActionView = () => {
    //TODO
  };

  const handleActionEdit = () => {
    //TODO
  };

  const handleActionDelete = () => {
    //TODO
  };

  return (
    <PresentingList
      title='PAYMENTS'
      breadcrumbObj={{
        parentLink: '/dashboard/payment',
        parentTitle: 'payment',
        childTitle: 'payment',
      }}
      addButtonTitle='Add Payment'
      searchPlaceholder='Search by name'
      columnsArray={columns}
      rowsArray={rows}
      addButtonHandler={handleAddPayment}
      handleActionView={handleActionView}
      handleActionEdit={handleActionEdit}
      handleActionDelete={handleActionDelete}
    />
  );
};
export default Payment;
