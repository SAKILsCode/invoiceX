import { NavigateNext } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const InvoiceBreadcrumbs = ({ parentLink, parent, child }) => {
  return (
    <>
      {parent && (
        <div>
          <Breadcrumbs
            separator={<NavigateNext fontSize='small' />}
            aria-label='breadcrumb'
          >
            <Link
              underline='hover'
              color='inherit'
              href={parentLink ? parentLink : '#'}
            >
              {parent}
            </Link>

            <Typography color='text.primary'>{child}</Typography>
          </Breadcrumbs>
        </div>
      )}
    </>
  );
};

export default InvoiceBreadcrumbs;
