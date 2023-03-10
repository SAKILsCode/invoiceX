import PresentingList from '../shared/PresentingList/';
import { columns, rows } from './clientConstant';

const ClientPage = () => {
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
      title='CLIENTS'
      breadcrumbObj={{
        parentLink: '/dashboard/client',
        parentTitle: 'client',
        childTitle: 'client',
      }}
      addButtonTitle='Add New'
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
export default ClientPage;
