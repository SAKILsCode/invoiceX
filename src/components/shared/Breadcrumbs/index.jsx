import { NavigateNext } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const InvoiceBreadcrumbs = ({ parentLink, parentTitle, childTitle }) => {
  return (
    <>
      {parentTitle && (
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
              {parentTitle}
            </Link>

            <Typography color='text.primary'>{childTitle}</Typography>
          </Breadcrumbs>
        </div>
      )}
    </>
  );
};

export default InvoiceBreadcrumbs;
