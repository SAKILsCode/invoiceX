import PresentingList from '../../shared/PresentingList';
import { saleColumns, saleRows } from '../reportConstant';

const SaleReport = () => {
  return (
    <PresentingList
      title='SALES REPORT'
      breadcrumbObj={{
        parentLink: '/dashboard/report/sale',
        parentTitle: 'report',
        childTitle: 'sale',
      }}
      searchPlaceholder='Search by sale'
      columnsArray={saleColumns}
      rowsArray={saleRows}
    />
  );
};
export default SaleReport;
