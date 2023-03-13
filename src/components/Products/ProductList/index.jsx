import PresentingList from '../../shared/PresentingList';
import { columns, rows } from '../productConstant';

const ProductHome = () => {
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
        parentLink: '/dashboard/invoice',
        parentTitle: 'invoice',
        childTitle: 'invoice',
      }}
      addButtonTitle='Add Invoice'
      searchPlaceholder='Search by name'
      columnsArray={columns}
      rowsArray={rows}

      addButtonHandler={handleAddInvoice}
      handleActionView={handleActionView}
      handleActionEdit={handleActionEdit}
      handleActionDelete={handleActionDelete}
    />
  );
};
export default ProductHome;
