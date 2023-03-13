import PresentingList from '../../shared/PresentingList';
import { expenseColumns, expenseRows } from '../reportConstant';

const ExpenseReport = () => {
  return (
    <PresentingList
      title='EXPENSES REPORT'
      breadcrumbObj={{
        parentLink: '/dashboard/report/expense',
        parentTitle: 'report',
        childTitle: 'expense',
      }}
      searchPlaceholder='Search by expense'
      columnsArray={expenseColumns}
      rowsArray={expenseRows}
    />
  );
};
export default ExpenseReport;
