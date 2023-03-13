import PresentingList from '../../shared/PresentingList';
import { cardsArray, columns, rows } from '../invoiceConstants';

const InvoiceHome = () => {
  const handleAddInvoice = () => {
    //TODO: popup add item component (Modal)
  }

  const handleActionView = () => {
    //TODO
  }

  const handleActionEdit = () => {
    //TODO
  }

  const handleActionDelete = () => {
    //TODO
  }

  return (
    <PresentingList
      title='INVOICE'
      breadcrumbObj={{
        parentLink: '/',
        parentTitle: 'Dashboard',
        childTitle: 'Invoice',
      }}
      addButtonTitle='Add Invoice'
      searchPlaceholder='Search by name'
      cardsArray={cardsArray}
      columnsArray={columns}
      rowsArray={rows}

      addButtonHandler={handleAddInvoice}
      handleActionView={handleActionView}
      handleActionEdit={handleActionEdit}
      handleActionDelete={handleActionDelete}
    />
  );
};
export default InvoiceHome;
