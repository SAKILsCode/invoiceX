import PresentingList from '../../shared/PresentingList';
import { columns, rows } from '../productConstant';

const Products = () => {
  const handleAddProduct = () => {
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
      title='PRODUCTS'
      breadcrumbObj={{
        parentLink: '/',
        parentTitle: 'Dashboard',
        childTitle: 'Products',
      }}
      addButtonTitle='Add Product'
      searchPlaceholder='Search by name'
      columnsArray={columns}
      rowsArray={rows}

      addButtonHandler={handleAddProduct}
      handleActionView={handleActionView}
      handleActionEdit={handleActionEdit}
      handleActionDelete={handleActionDelete}
    />
  );
};
export default Products;
