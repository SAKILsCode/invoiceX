import PresentingList from '../../shared/PresentingList';
import { expenseColumns, expenseRows } from '../reportConstant';

const ExpenseReport = () => {
  return (
    <PresentingList
      title='EXPENSES REPORT'
      breadcrumbObj={{
        parentLink: '/',
        parentTitle: 'Dashboard',
        childTitle: 'Expense Report',
      }}
      searchPlaceholder='Search by expense'
      columnsArray={expenseColumns}
      rowsArray={expenseRows}
    />
  );
};
export default ExpenseReport;
